import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const routes = createBrowserRouter ([
  { path:"/", element:(<div>Home</div>) },
  { path:"/Home", element:(<div>Home with /HOME</div>) },
  { path:"/About", element:(<div>About</div>) },
  { index:true, element:(<div>Index true</div>)}
])

function App() {
  return (
    <RouterProvider router = {routes} >
    </RouterProvider>
  );
}

export default App;
