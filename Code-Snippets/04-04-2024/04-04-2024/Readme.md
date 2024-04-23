# Workflow

# Basic Setup Instructions

Follow these steps to make this project from scratch:

### 1. Initialize npm

Run the following command to initialize npm:

```bash
npm init
```

Follow the prompts to initialize your `package.json` file.

### 2. Create Files and Folders

Create the following files and folders structure:

```
- index.html
- index.css
- src/
  - components/
  - App.js
```

### 3. Link Files

In your `index.html` file, link your CSS file and import React:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React App</title>
  <link rel="stylesheet" href="index.css">
</head>
<body>
  <div id="root"></div>
  <script src="src/App.js"></script>
</body>
</html>
```

### 4. Install Dependencies

Install the necessary dependencies using npm:

```bash
npm install react react-dom react-router-dom parcel-bundler
```

### 5. Configure Scripts

In your `package.json` file, add the following scripts:

```json
{
  "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html"
  }
}
```

# Running the Base Project

To start the development server, run:

```bash
npm start
```

To build the project for production, run:

```bash
npm run build
```
# Define App Structure

The `App.js` file contains the main structure of the React application. It imports necessary components and sets up routing using `react-router-dom`.

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer/>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
```


# Next Steps to Enhance our application

### 1. Design Card Component

Create a `Card` component to display information about restaurants or any other entities. The card should include details such as title, image, description, etc.

```jsx
// Card.js
import React, { useState } from 'react'


const Card = ({data}) => {

  return (
    <div className="card-grid">
      {data.map((data)=>(
        <div key={data.title} className='card'>
        <img className='card-img' src={data.image} alt="carditems" />
        <div className="card-items">
          <h1 className="card-name">
            {data.title}
          </h1>
          <p className="descr">{data.description}</p>
          <p className="author">{data.author}</p>
  
        </div>
        </div>
      ))}
    
    </div>
  )
}

export default Card


```

### 2. Design Header Component

Design a `Header` component for the top navigation of the application. It should include branding, navigation links, or any other relevant information.

```jsx
// Header.js
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <div className="logo">KhanSama's</div>
      <div className="nav-items">
        <Link className='nav-link' to="/">Home</Link> 
        <Link className='nav-link' to="/about">About</Link> 
        <Link className='nav-link' to="/contact">Contact</Link> 
        
       
      </div>
    </div>
  )
}

export default Header


```

### 3. Implement Search Functionality in Body Component

Integrate search functionality in the `Body` component to filter data based on user input. Update the `Body` component to include a search input field and a button for triggering the search.

```jsx
// Body.js

import React, { useEffect, useState } from 'react';
import Card from './Card';
import { dummyData } from '../config/constant';

const Body = () => {
  const [dummy, setDummy] = useState(dummyData);
  const [searchInput, setSearchInput] = useState('');

  function filterData(searchInput, dummy) {
    const filteredData = dummy.filter((restro) =>
      restro.title?.toLowerCase()?.includes(searchInput?.toLowerCase())
    );
    return filteredData;
  }

  const handleSearch = () => {
    const filteredData = filterData(searchInput, dummy);
    setDummy(filteredData);
  };

  useEffect(() => {
    // Fetch data or perform any other necessary actions
  }, []);

  return (
    <div>
      <div className="searchBar">
        <input
          className="search-input"
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          type="text"
          name=""
          id=""
        />
        <button className='search-button' onClick={handleSearch}>Search</button>
      </div>
      <div className="cards">
        <Card data={dummy} />
      </div>
    </div>
  );
};

export default Body;
```

### 4. Add Styling

Style the components using CSS or any preferred styling method to enhance the visual appearance of the application.

### 5. Integrate Data Fetching

Implement data fetching functionality in the `Body` component to fetch real data from the provided API endpoint. Update the `getData` function to fetch data from the endpoint and display it in the application.

```javascript
// Body.js

async function getData() {
  try {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = 'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=330424&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER';
    const response = await fetch(proxyUrl + apiUrl);
    const json = await response.json();
    console.log(json.data);
    // Update state or perform necessary operations with fetched data
  } catch (error) {
    console.error(error.message);
  }
}
```

# Further Enhancement

### 1. Update `getData` Function in `Body.js`

Modify the `getData` function to fetch data from the Swiggy API endpoint. Update the URL and handle the response accordingly.

```javascript
async function getData() {
  try {
    const apiUrl = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';
    const response = await fetch(apiUrl);
    const json = await response.json();
    // Extract necessary data from the JSON response and update state
     setRestro(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  } catch (error) {
    console.error(error.message);
  }
}
```

### 2. Update `Card` Component to Use Swiggy Image URLs

Modify the `Card` component to use Swiggy image URLs for displaying restaurant images.

```javascript
// Card.js
import React, { useState } from 'react'
import { IMG_CDN_URL } from '../config/constant'


const Card = ({cloudinaryImageId,name,areaName,cuisines}) => {

  return (
    <div className="card-grid">
     
        <div  className='card'>
        <img className='card-img' src={IMG_CDN_URL + cloudinaryImageId} alt="card-img" />
        <div className="card-items">
          <h3 className="card-name">
            {name }
          </h3>
          <p className="description">{cuisines}</p>
          <p className="author">{areaName}</p>
  
        </div>
        </div>
 
    
    </div>
  )
}

export default Card

```

### 3. Verify Search Functionality

Ensure that the search functionality in the `Body` component is working properly. Test it with the data fetched from the Swiggy API.

```javascript
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { RESTRO_URL } from "../config/constant"; // Assuming RESTRO_URL is imported from the correct location
import Shimmer from "./Shimmer";

const Body = () => {
  const [restro, setRestro] = useState([]); // State to hold restaurant data
  const [filterRestro, setFilterRestro] = useState([]); // State to hold filtered restaurant data
  const [searchInput, setSearchInput] = useState(""); // State to hold search input value

  // Function to filter restaurant data based on search input
  function filterData(searchInput, restro) {
    const filteredData = restro.filter((restaurant) => {
      return restaurant.info?.name.toLowerCase().includes(searchInput.toLowerCase());
    });
    return filteredData;
  }

  // Function to handle search button click
  const handleSearch = () => {
    const filteredData = filterData(searchInput, restro);
    setFilterRestro(filteredData); // Update filtered restaurant data
  };

  // Effect hook to fetch restaurant data when component mounts
  useEffect(() => {
    getData();
  }, []);

  // Function to fetch restaurant data from API
  async function getData() {
    try {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/"; // Proxy URL to bypass CORS
      const apiUrl = RESTRO_URL;
      const response = await fetch(proxyUrl + apiUrl);
      const json = await response.json();
      // Extract restaurant data from API response and set state
      setRestro(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilterRestro(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch (error) {
      console.error(error.message);
    }
  }

  return restro.length === 0 ? ( // Render shimmer component while data is being fetched
    <Shimmer />
  ) : (
    <div>
      {/* Search bar */}
      <div className="searchBar">
        <input
          className="search-input"
          onChange={(e) => {
            setSearchInput(e.target.value); // Update search input value
          }}
          value={searchInput}
          type="text"
          name=""
          id=""
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>{" "}
      </div>
      {/* Render restaurant cards */}
      <div className="cards">
        {filterRestro.map((restaurant, index) => { // Render filtered restaurant data
          return <Card key={index} {...restaurant.info} />;
        })}
      </div>
    </div>
  );
};

export default Body;

```
