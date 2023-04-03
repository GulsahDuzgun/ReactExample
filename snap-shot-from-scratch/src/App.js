import axios from 'axios';
import './App.css';
import Introduction from './components/Introduction';
import { useState } from 'react';
import apiKey from './api/config'
import ShowData from './components/ShowData';

function App() {
    let [searchText, setSearchText] = useState()
    const [images, setImages] = useState([])
    let loading = true
    
    const callData = (tempVal) => {
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tempVal}&per_page=24&format=json&nojsoncallback=1`)
        .then(res => {
            setImages( () => res.data.photos.photo)
            loading = false
        }).catch((e)=> console.log(e))
    }

    const handleSetText = (val) => {
      setSearchText(searchText = val)
      callData(searchText)
    }

    return (
        <div className="App">
        <Introduction handleSearch={handleSetText} />
        <ShowData images={images} />
        </div>
    );
}

export default App;
