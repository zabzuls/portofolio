import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Projects from './Components/projects.jsx'
import Navbar from './Components/navbar.jsx'
import Card from './Components/card.jsx'
import About from './Components/about.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
  },
  {
    path:'/Projects',
    element:<Projects/>,
  },
  {
    path:'/Navbar',
    element:<Navbar/>,
  },
  {
    path:'/Card',
    element:<Card/>,
  },
  {
    path:'/About',
    element:<About/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);
