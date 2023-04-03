import axios from 'axios';
import './App.css';
import Introduction from './components/Introduction';
import { useState } from 'react';
import apiKey from './api/config'
import ShowData from './components/ShowData';
import NoImage from './components/NoImage'

function App() {
    let [searchText, setSearchText] = useState()
    const [images, setImages] = useState([])
    let loading = true
    
    const callData = (tempVal) => {
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tempVal}&per_page=24&format=json&nojsoncallback=1`)
        .then(res => {
            setImages( () => res.data.photos.photo)
            loading = false
            console.log( res.data.photos.photo)
        }).catch((e)=> console.log(e))
    }

    const handleSetText = (val) => {
      setSearchText(searchText = val)
      if(searchText.trim()) {
        callData(searchText)
      }else {
        setImages([])
      }
    }

    return (
        <div className="App container">
            <Introduction handleSearch={handleSetText} />
            <div className='photo-container'>
                <ShowData images={images} />
            </div>
        </div>
    );
}

export default App;
