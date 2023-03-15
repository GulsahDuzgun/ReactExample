import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import { Contact, contactAction } from './pages/help/Contact'
import { Faq } from './pages/help/Faq'
import { About } from './pages/About'
import { UserDetails, UserDetailsLoader } from './pages/UserDetails'
import { MainLayout } from './layout/MainLayout'
import { HelpLayout } from './layout/HelpLayout'
import { UserList, userLoading } from './pages/UserList'
import { UsersLayout } from './layout/UsersLayout'
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
        { path:"Contact", element:<Contact/>, action: contactAction },
        { path:"Faq", element:<Faq/> }
      ]
    },
    {path: "/Users" ,element:<UsersLayout/>, children: [
      { index:true, element:<UserList/>, loader: userLoading },
      { path: ":userId", element:<UserDetails/>, loader: UserDetailsLoader }
    ]}
  ]}
])

function App() {
  return (
    <RouterProvider router = {routes} >
    </RouterProvider>
  );
}

export default App;
