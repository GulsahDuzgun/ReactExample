import React from 'react'
import { Link }  from  'react-router-dom'

const BlogListPage = () => {
  
  return (
    <div>
      <p>BlogListPage</p>
      <Link to="blogs/1">Blog1</Link>
      <Link to="blogs/2">Blog2</Link>
    </div>
  )
}

export default BlogListPage