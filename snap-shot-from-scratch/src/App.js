import './App.css';
import Introduction from './components/Introduction';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Birds from './components/Bird';
import Beach from './components/Beach';
import Mountain from './components/Mountain';
import Food from './components/Food';
import FetchData from './components/FetchData'

const routes = createBrowserRouter([
    {path:"/", element:<Introduction />, children: [
        {path:"birds", element:<Birds/>},
        {path:"beach", element:<Beach/>},
        {path:"mountain", element:<Mountain/>},
        {path:"food", element:<Food/>},
        {path:`search/:searchTerm`, element:<FetchData/>}
    ]},
])

function App() {
    return (
        <RouterProvider router={routes}>
        </RouterProvider>
        // <div className="App container">
        //     <Introduction handleSearch={handleSetText} />
        //     <Categories handleSearch={handleSetText} />
        //     <div className='photo-container'>
        //         {
        //         loading && images.length === 0 ? 
        //             <NoImage/>
        //              :
        //             <ShowData images={images} />
        //         }
        //     </div>
        // </div>
    );
}

export default App;
