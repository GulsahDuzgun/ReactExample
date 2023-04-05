import React from 'react'
import ShowData from './ShowData';
import NoImage from './NoImage'

const ShowResult = ({images, loading}) => {
  return (
    <div className='photo-container'>
      {loading && images.length === 0 ? 
          <NoImage/>
          :
          <ShowData images={images} />
      }
        </div>
  )
}

export default ShowResult;