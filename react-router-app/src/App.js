import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import { Contact } from './pages/help/Contact'
import { Faq } from './pages/help/Faq'
import { About } from './pages/About'
import { UserDetails } from './pages/UserDetails'
import { MainLayout } from './layout/MainLayout'
import { HelpLayout } from './layout/HelpLayout'
import { UserList, userLoading } from './pages/UserList'
const routes = createBrowserRouter ([
  { 
    path: "/", 
    element: <MainLayout/>, 
    children: [
    { path:"Home", element: <Home/>},
    { path:"About", element: <About/> },
    { index:true, element: <Home/> },
    { path:"Faq", element:<Faq/> },
    { path:"Help", element:<HelpLayout/>,
      children: [
        { path:"Contact", element:<Contact/> },
        { path:"Faq", element:<Faq/> }
      ]
    },
  { path: "/Users", element:<UserList/>, loader: userLoading },
  { path: "/Users/:userId/:role", element:<UserDetails/> }
  ]}
])

function App() {
  return (
    <RouterProvider router = {routes} >
    </RouterProvider>
  );
}

export default App;
