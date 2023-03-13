import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { MainLayout } from './layout/MainLayout'

const routes = createBrowserRouter ([
  { 
    path: "/Layout", 
    element: <MainLayout/>, 
    children: [
    { path:"Home", element: <Home/>},
    { path:"About", element: <About/> },
    { index:true, element: <Home/> }
    ]
  }
])

function App() {
  return (
    <RouterProvider router = {routes} >
    </RouterProvider>
  );
}

export default App;
