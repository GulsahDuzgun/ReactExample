import apiKey from '../api/config'
import axios from 'axios';
import { useState, React } from 'react';
import ShowResult from './ShowResult';
import { useParams } from 'react-router-dom';

 const FetchData = ( ) => {
    const [searchText, setSearchText] = useState("")
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(false)
    let {searchTerm} = useParams()

    const callData = (tempVal) => {
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tempVal}&per_page=24&format=json&nojsoncallback=1`)
        .then(res => {
            setImages( () => res.data.photos.photo)
            setLoading(true)
        }).catch((e)=> console.log(e))
    }

    if( searchTerm.trim() !== searchText) {
        setSearchText(searchTerm)
        if(typeof searchTerm === "string" ? searchTerm.trim() : "") {
            //console.log(val)
            callData(searchTerm)
        }else {
            setImages([])
            setLoading(true)
        }
    }

    return (
        <ShowResult images={images} loading={loading}/>
    )
}

export default FetchData;