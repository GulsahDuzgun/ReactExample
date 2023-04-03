import React from 'react'
import Image from './Image'

const ShowData = ({images}) => {
    let showArr = [];
    if(images.length > 0) {
        showArr = images.map((item) => {
            let farm = item.farm;
            let server = item.server;
            let id = item.id;
            let secret = item.secret;
            let title = item.title;
            let url = `http://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;

            return {id :id , title , url }
        })
    }

    return (
        <div>
            <ul>
                {showArr.map((image => <Image url={image.url} key={image.id} alt={image.title}/>))}
            </ul>
        </div>
    )
}

export default ShowData