import './App.css';
import Profile from './PortfolioContainer/Home/Profile.js';
import Footer from './PortfolioContainer/Home/Footer/Footer.js'
import Home from './PortfolioContainer/Home/Home.js'
import Skills from './PortfolioContainer/Skills/Skills';
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Social from './PortfolioContainer/Social/Social';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import ProjectsPage from './PortfolioContainer/Projects/ProjectsPage';
import { createBrowserRouter, RouterProvider } from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/projects",
        element: <ProjectsPage />
        
      }
    ],
  }
  
]);

function App() {
  return (
   <div>
      
    <ChakraProvider > 
      
        <RouterProvider router={router} />
      
    </ChakraProvider>
  </div>
  )
}

export default App;