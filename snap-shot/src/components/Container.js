import React from 'react'
import axios from 'axios'
import { apiKey } from '../api/config.js'
import Gallery from './Gallery';
import Loader from './Loader';

class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            images: [],
            loading: true,
            searcText:props.searcText
        }
    }

    componentDidMount() {
       this.runSearch(this.props.searchTerm)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.searchTerm !== this.props.searchTerm) {
          this.runSearch(this.props.searchTerm);
        }
    }
    //fetch data
    runSearch = (query) => {
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => {
            this.setState({
                images: response.data.photos.photo,
                loading: false
            })
        })
        .catch( err => {
            console.log('Encountered an error with fetching and parsing data', err)
        })
    }

    render() {
        return (
            <div className='photo-container'>
                {
                    (this.state.loading)?
                    <Loader/>
                    :
                    <Gallery data={this.state.images}/>
                }
            </div>
        )
    }
}

export default Container
