# Basic TODO in MERN
## Control-Flow of todo backend

This project is a simple Todo backend application built with Node.js, Express, Zod, and MongoDB. Below is the control flow for setting up and running the application.

## Setup Instructions

### 1. Initialize `package.json`

Initialize a new Node.js project:

```bash
npm init -y
```

### 2. Install Dependencies

Install the required dependencies:

```bash
npm install express body-parser mongoose mongodb zod
```

### 3. Create Folder Structure

Create the following folder structure:

```
.
├── db
│   └── index.js
├── routes
│   └── todoRoute.js
├── types.js
└── index.js
```

### 4. Database Connection

Create a `index.js` file inside the `db` folder to connect to the MongoDB database and define the schema:

```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/todoApp');

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed:Boolean
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = { Todo };
```

### 5. Zod Validation

Create a `types.js` file to define Zod validation schemas:

```javascript
const zod = require('zod');

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
});

const updateTodo = zod.object({
    id: zod.string()
});

module.exports = { createTodo, updateTodo };
```

### 6. Define Routes

Create a `todoRoute.js` file inside the `routes` folder to define the routes:

```javascript
const { Router } = require('express');
const { createTodo } = require('../types');
const { Todo } = require('../db');
const router = Router();

router.post('/todo', async (req, res) => {
    const todopayload = req.body;
    const parsepayload = createTodo.safeParse(todopayload);
    if (!parsepayload.success) {
        return res.status(402).json({
            msg: 'You sent the wrong inputs'
        });
    }
    const { title, description } = todopayload;
    const newTodo = await Todo.create({ title, description });
    res.status(200).json({
        msg: "Todo created successfully", newTodo
    });
});

router.get('/todo', async (req, res) => {
    const todos = await Todo.find({});
    res.status(200).json({
        msg: 'Todos fetched successfully', todos
    });
});

router.put('/todo/:todoId', async (req, res) => {
    const { todoId } = req.params;
    const { title, description } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(todoId, { title, description }, { new: true, runValidators: true });
    res.status(200).json({
        msg: 'Todo updated successfully', updatedTodo
    });
});

router.delete('/todo/:id', async (req, res) => {
    const { id } = req.params;
    const deletedTodo = await Todo.findByIdAndDelete(id);
    res.status(200).json({
        msg: "Todo deleted successfully", deletedTodo
    });
});

module.exports = router;
```

### 7. Main Application File

Create the main `index.js` file to set up the Express server:

```javascript
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const todoRouter = require('./routes/todoRoute');

app.use(bodyparser.json());
app.use('/', todoRouter);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('App is listening on port 3000');
});
```

### 8. Run the Application

Use `nodemon` to run the application:

```bash
nodemon index.js
```
## Todo frontend Control-flow:

This project is a simple Todo frontend application built with Vite, React, and Tailwind CSS. Below is the control flow for setting up and running the application.

## Setup Instructions

### 1. Initialize Vite Project

Initialize a new Vite project:

```bash
npm create vite@latest
```

Follow the prompts to set up your project. Select "React" as the framework.

### 2. Install Tailwind CSS

Install Tailwind CSS by following these steps:

1. Install Tailwind CSS via npm:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

2. Configure `tailwind.config.js`:

```javascript
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

3. Add Tailwind directives to `index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 3. Create Folder Structure

Create the following folder structure:

```
.
├── src
│   ├── components
│   │   ├── CreateTodo.jsx
│   │   └── Todo.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
```

### 4. Create `CreateTodo` Component

Create a `CreateTodo.jsx` file inside the `components` folder:

```javascript
import React, { useState } from 'react';
import Todo from './Todo';

const CreateTodo = () => {
   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');
   const [todos, setTodos] = useState([]);

   function handleSubmit() {
      const newTodo = {
         title,
         description,
      };
      setTodos([...todos, newTodo]);
      setTitle('');
      setDescription('');
   }

   return (
      <div className="p-4">
         <input
            className="border p-2 m-2"
            type="text"
            placeholder="Enter your title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
         />
         <input
            className="border p-2 m-2"
            type="text"
            placeholder="Enter your description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
         />
         <button className="bg-blue-500 text-white p-2 m-2" onClick={handleSubmit}>
            Add Todo
         </button>
         <Todo todos={todos} />
      </div>
   );
};

export default CreateTodo;
```

### 5. Create `Todo` Component

Create a `Todo.jsx` file inside the `components` folder:

```javascript
import React from 'react';

const Todo = ({ todos }) => {
   return (
      <div className="mt-4">
         {todos.map((todo, index) => (
            <div key={index} className="border p-2 m-2">
               <h3 className="font-bold">{todo.title}</h3>
               <p>{todo.description}</p>
            </div>
         ))}
      </div>
   );
};

export default Todo;
```

### 6. Integrate Components in `App.jsx`

Update the `App.jsx` file to import and use the `CreateTodo` component:

```javascript
import React from 'react';
import CreateTodo from './components/CreateTodo';

function App() {
   return (
      <div className="App">
         <h1 className="text-2xl font-bold p-4">Todo Application</h1>
         <CreateTodo />
      </div>
   );
}

export default App;
```

### 7. Run the Application

Use the following command to run the application:

```bash
npm run dev
```
 
After setting up and running your frontend application, the next step is to connect it to your backend to fetch and post data.

### 8. Fetch Data from Backend

To fetch data from the backend, update the `CreateTodo` component to include a `useEffect` hook that will make a GET request to the backend API and set the fetched todos in the state.

#### Updated `CreateTodo` Component

```javascript
import React, { useState, useEffect } from 'react';
import Todo from './Todo';

const CreateTodo = () => {
   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');
   const [todos, setTodos] = useState([]);

   useEffect(() => {
      fetch('http://localhost:3000/todo')
         .then(async (res) => {
            const ans = await res.json();
            console.log(ans.todos);
            setTodos(ans.todos);
         })
         .catch((err) => {
            console.error('Error fetching todos:', err);
         });
   }, []);

   function handleSubmit() {
      const newTodo = {
         title,
         description,
      };

      fetch('http://localhost:3000/todo', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(newTodo),
      })
         .then((response) => response.json())
         .then((todo) => {
            setTodos([...todos, todo]);
            setTitle('');
            setDescription('');
         })
         .catch((err) => {
            console.error('Error adding todo:', err);
         });
   }

   return (
      <div className="p-4">
         <input
            className="border p-2 m-2"
            type="text"
            placeholder="Enter your title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
         />
         <input
            className="border p-2 m-2"
            type="text"
            placeholder="Enter your description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
         />
         <button className="bg-blue-500 text-white p-2 m-2" onClick={handleSubmit}>
            Add Todo
         </button>
         <Todo todos={todos} />
      </div>
   );
};

export default CreateTodo;
```

### 9. Flow Explanation

1. **Fetching Data:**
   - When the `CreateTodo` component mounts, the `useEffect` hook makes a GET request to `http://localhost:3000/todo`.
   - The response is parsed as JSON, and the todos are set in the state using `setTodos(ans.todos)`.
   - These todos are then passed as props to the `Todo` component, which renders them on the frontend.

2. **Posting Data:**
   - When the user submits a new todo by clicking the "Add Todo" button, the `handleSubmit` function is triggered.
   - The `handleSubmit` function creates a `newTodo` object with the title and description from the state.
   - A POST request is made to `http://localhost:3000/todo` with the `newTodo` object in the request body.
   - On successful response, the newly added todo is appended to the existing todos in the state, and the input fields are cleared.
