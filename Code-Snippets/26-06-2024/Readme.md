# Control Flow Of Paytm

## Backend 

### 1. Initialize the Project
```sh
npm init -y
npm install express zod body-parser mongoose cors jsonwebtoken
```

### 2. Folder Structure
```
backend
│   index.js
├── db
│   └── connection.js
│   └── models.js
├── middleware
│   └── authMiddleware.js
├── router
│   └── user.js
│   └── account.js
└── config.js
```

### 3. Database Connection and Models (db/connection.js and db/models.js)
**db/connection.js**
```js
const mongoose = require('mongoose');

mongoose.connect('//url');

mongoose.connection.on('connected', () => {
    console.log('Database connected');
});

module.exports = mongoose;
```

**db/models.js**
```js
const mongoose = require('./connection');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstname: {
        type: String,
        trim: true,
        maxLength: 50
    },
    lastname: {
        type: String,
        trim: true,
        maxLength: 50
    }
});

const AccountSchema = new mongoose.Schema({
    amount: Number,
    userId: {
        ref: 'User',
        type: mongoose.Schema.Types.ObjectId
    }
});

const User = mongoose.model('User', UserSchema);
const Account = mongoose.model('Account', AccountSchema);

module.exports = { User, Account };
```

### 4. Middleware (middleware/authMiddleware.js)
```js
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

function authMiddleware(req, res, next) {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).send({ msg: 'Unauthorized' });
    }
    const token = authorization.split(' ')[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.status(401).send({ msg: 'Invalid token' });
    }
}

module.exports = authMiddleware;
```

### 5. User Routes (router/user.js)
```js
const { Router } = require('express');
const { User, Account } = require('../db/models');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');
const zod = require('zod');
const authMiddleware = require('../middleware/authMiddleware');

const router = Router();

const signupBody = zod.object({
    username: zod.string().email(),
    password: zod.string(),
    firstname: zod.string(),
    lastname: zod.string(),
});

const signinBody = zod.object({
    username: zod.string().email(),
    password: zod.string()
});

const updateBody = zod.object({
    username: zod.string().email().optional(),
    password: zod.string().optional(),
    firstname: zod.string().optional(),
    lastname: zod.string().optional(),
});

router.post('/signup', async (req, res) => {
    const { success } = signupBody.safeParse(req.body);
    if (!success) {
        return res.status(411).send({ msg: 'Please provide valid credentials' });
    }

    const { username, firstname, lastname, password } = req.body;
    const existingUser = await User.findOne({ username });
    if (existingUser) {
        return res.status(411).json({ msg: "Username already taken" });
    }

    const newUser = await User.create({ username, firstname, lastname, password });
    const userId = newUser._id;
    await Account.create({ userId, amount: 100 + Math.random() * 1000000 });
    const token = jwt.sign({ userId }, JWT_SECRET);

    res.status(200).send({ msg: 'User created successfully', newUser, token });
});

router.post('/signin', async (req, res) => {
    const { success } = signinBody.safeParse(req.body);
    if (!success) {
        return res.status(411).json({ msg: "Please provide valid credentials" });
    }

    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || user.password !== password) {
        return res.status(411).send({ msg: "Invalid username or password" });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET);
    res.status(200).send({ msg: 'User signed in successfully', token });
});

router.put('/update', authMiddleware, async (req, res) => {
    const { success } = updateBody.safeParse(req.body);
    if (!success) {
        return res.status(411).json({ msg: 'Provide valid inputs' });
    }

    const updatedUser = await User.updateOne({ _id: req.userId }, req.body);
    res.status(200).json({ msg: "User updated successfully", updatedUser });
});

router.get('/users/:firstname', async (req, res) => {
    const { firstname } = req.params;
    const users = await User.findOne({ firstname });
    res.status(200).json({ msg: "User found:", users });
});

router.get('/bulk', async (req, res) => {
    const filter = req.query.filter || "";
    const users = await User.find({
        $or: [
            { firstname: { "$regex": filter } },
            { lastname: { "$regex": filter } }
        ]
    });

    res.json({
        users: users.map(user => ({
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            _id: user._id
        }))
    });
});

module.exports = router;
```

### 6. Account Routes (router/account.js)
```js
const { Router } = require('express');
const { authMiddleware } = require('../middleware/authMiddleware');
const { User, Account } = require('../db/models');
const mongoose = require('mongoose');

const router = Router();

router.get('/', authMiddleware, async (req, res) => {
    try {
        const { userId } = req.body;
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ error: 'Invalid user ID' });
        }

        const account = await Account.findOne({ userId });
        if (!account) {
            return res.status(404).json({ error: 'Account not found' });
        }

        res.status(200).json({ msg: 'Balance is:', balance: account.amount });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

router.get('/balance', authMiddleware, async (req, res) => {
    try {
        const { userId } = req.body;
        const account = await Account.findOne({ userId });
        res.status(200).json({ msg: 'Balance is:', balance: account.amount });
    } catch (error) {
        console.log(error);
    }
});

router.post('/transfer', authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    const { amount, to } = req.body;
    const account = await Account.findOne({ userId: req.userId }).session(session);

    if (!account || account.amount < amount) {
        await session.abortTransaction();
        return res.status(400).json({ message: "Insufficient balance" });
    }

    const toAccount = await Account.findOne({ userId: to }).session(session);
    if (!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({ message: "Invalid account" });
    }

    await Account.updateOne({ userId: req.userId }, { $inc: { amount: -amount } }).session(session);
    await Account.updateOne({ userId: to }, { $inc: { amount: amount } }).session(session);

    await session.commitTransaction();
    res.json({ message: "Transfer successful" });
});

module.exports = router;
```

### 7. Main Server File (index.js)
```js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('./db/connection');
const userRouter = require('./router/user');
const accountRouter = require('./router/account');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/api/v1/user', userRouter);
app.use('/api/v1/amount', accountRouter);

app.listen(3000, () => {
    console.log('App is running on port 3000');
});
```

### 8. Configuration File (config.js)
```js
module.exports = {
    JWT_SECRET: 'your_jwt_secret'
};
```


## Frontend

# Control Flow


### Step 1: Initialize Vite Project

1. **Install Vite**:
   ```sh
   npm create vite@latest paytm-frontend --template react
   cd paytm-frontend
   npm install
   ```

### Step 2: Setup Tailwind CSS

1. **Install Tailwind CSS**:
   ```sh
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

2. **Configure `tailwind.config.js`**:
   ```js
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

3. **Add Tailwind to CSS**:
   In `src/index.css`, add the following:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

### Step 3: Create Component Folder and Files

1. **Create `src/components` directory**:
   ```sh
   mkdir src/components
   ```

2. **Create component files**:
   ```sh
   touch src/components/Signup.jsx
   touch src/components/Signin.jsx
   touch src/components/Dashboard.jsx
   touch src/components/Home.jsx
   ```

### Step 4: Setup Routing in `App.jsx`

1. **Update `src/App.jsx`**:
   ```jsx
   import React from 'react';
   import { BrowserRouter, Routes, Route } from "react-router-dom";
   import Signup from './components/Signup';
   import SignIn from './components/Signin';
   import Dashboard from './components/Dashboard';
   import Home from './components/Home';

   const App = () => {
     return (
       <div>
         <BrowserRouter>
           <Routes>
             <Route path='/' element={<Home />} />
             <Route path='/signup' element={<Signup />} />
             <Route path='/signin' element={<SignIn />} />
             <Route path='/dashboard' element={<Dashboard />} />
           </Routes>
         </BrowserRouter>
       </div>
     );
   };

   export default App;
   ```

### Step 5: Create Signup Component Logic

1. **Update `src/components/Signup.jsx`**:
   ```jsx
   import React, { useState } from 'react';
   import axios from 'axios';
   import { useNavigate } from 'react-router-dom';

   const Signup = () => {
     const navigate = useNavigate();
     const [formData, setFormData] = useState({
       firstname: '',
       lastname: '',
       username: '',
       password: ''
     });

     const handleChange = (e) => {
       const { name, value } = e.target;
       setFormData({
         ...formData,
         [name]: value
       });
     };

     const handleSubmit = (e) => {
       e.preventDefault();
       const { firstname, lastname, username, password } = formData;

       const requestData = {
         firstname,
         lastname,
         username,
         password
       };

       console.log('Submitting form data:', requestData);

       axios.post(
         'http://localhost:3000/api/v1/user/signup',
         requestData
       )
       .then((response) => {
         console.log('Signup successful:', response);
         localStorage.setItem('authtoken', response.data.token);
         setFormData({
           firstname: '',
           lastname: '',
           username: '',
           password: ''
         });
         navigate('/signin');
       })
       .catch((error) => {
         console.error('Signup error:', error);
       });
     };

     return (
       <div className="min-h-screen flex items-center justify-center bg-gray-100">
         <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
           <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
           <form onSubmit={handleSubmit}>
             <div className="mb-4">
               <label htmlFor="firstname" className="block text-gray-700 mb-2">First Name</label>
               <input
                 type="text"
                 id="firstname"
                 name="firstname"
                 value={formData.firstname}
                 onChange={handleChange}
                 className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                 required
               />
             </div>
             <div className="mb-4">
               <label htmlFor="lastname" className="block text-gray-700 mb-2">Last Name</label>
               <input
                 type="text"
                 id="lastname"
                 name="lastname"
                 value={formData.lastname}
                 onChange={handleChange}
                 className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                 required
               />
             </div>
             <div className="mb-4">
               <label htmlFor="username" className="block text-gray-700 mb-2">Username</label>
               <input
                 type="text"
                 id="username"
                 name="username"
                 value={formData.username}
                 onChange={handleChange}
                 className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                 required
               />
             </div>
             <div className="mb-4">
               <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
               <input
                 type="password"
                 id="password"
                 name="password"
                 value={formData.password}
                 onChange={handleChange}
                 className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                 required
               />
             </div>
             <button
               type="submit"
               className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors duration-300"
             >
               Sign Up
             </button>
           </form>
         </div>
       </div>
     );
   };

   export default Signup;
   ```

### Step 6: Create SignIn Component Logic

1. **Update `src/components/Signin.jsx`**:
   ```jsx
   import React, { useState } from 'react';
   import { useNavigate } from 'react-router-dom';
   import axios from 'axios';

   const SignIn = () => {
     const navigate = useNavigate();
     const [formData, setFormData] = useState({
       username: '',
       password: ''
     });

     const handleChange = (e) => {
       const { name, value } = e.target;
       setFormData({
         ...formData,
         [name]: value
       });
     };

     const handleSubmit = (e) => {
       e.preventDefault();
       const { username, password } = formData;

       const requestData = {
         username,
         password
       };

       const token = localStorage.getItem('authtoken');
       const headers = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${token}`
       };

       axios.post(
         'http://localhost:3000/api/v1/user/signin',
         requestData,
         { headers: headers }
       )
       .then((response) => {
         console.log('Signin successful:', response);
         localStorage.setItem('authtoken', response.data.token);
         setFormData({
           username: '',
           password: ''
         });
         navigate('/dashboard');
       })
       .catch((error) => {
         console.error('Signin error:', error);
       });
     };

     return (
       <div className="min-h-screen flex items-center justify-center bg-gray-100">
         <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
           <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
           <form onSubmit={handleSubmit}>
             <div className="mb-4">
               <label htmlFor="username" className="block text-gray-700 mb-2">Username</label>
               <input
                 type="text"
                 id="username"
                 name="username"
                 value={formData.username}
                 onChange={handleChange}
                 className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                 required
               />
             </div>
             <div className="mb-4">
               <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
               <input
                 type="password"
                 id="password"
                 name="password"
                 value={formData.password}
                 onChange={handleChange}
                 className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                 required
               />
             </div>
             <button
               type="submit"
               className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors duration-300"
             >
               Sign In
             </button>
           </form>
         </div>
       </div>
     );
   };

   export default SignIn;
   ```

### Step 7: Create Dashboard and User Component Logic

1. **Update `src/components/Dashboard.jsx`**:
   ```jsx
import React from 'react'
import { Users } from './Users'

const Dashboard = () => {
  return (
    <div className='p-4 m-2'>
   <Users/>
    </div>
  )
}

export default Dashboard

   ```
```jsx
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'
export const Users = () => {
    // Replace with backend call
    const[searchInput,setSearchInput]=useState('')
    const [users, setUsers] = useState([{
        firstname: "Harkirat",
        lastname: "Singh",
        _id: 1
    }]);
   const getdata= async function (){
        const response= await axios.get(   `http://localhost:3000/api/v1/user/bulk?filter=${searchInput}`);
        console.log(response.data.user);
        setUsers(response.data.user)
        }
 useEffect(()=>{
    getdata()
 },[])
    return <>
        <div className="font-bold mt-6 text-lg">
            Users
        </div>
        <div className="my-2">
            <input type="text" onInput={getdata} placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200" value={searchInput} onChange={(e)=>setSearchInput(e.target.value)}></input>
        </div>
        <div>
            {users.map((user,index) => <User user={user} key={index} />)}
        </div>
    </>
}

function User({user}) {
    return <div className="flex justify-between">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstname[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {user.firstname} {user.lastname}
                </div> 
            </div>
        </div>

        <div className="flex flex-col justify-center h-ful">
          <button className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-colors duration-300">Send Money</button>
        </div>
    </div>
}
```