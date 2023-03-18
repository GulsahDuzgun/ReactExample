import React from 'react'
import { Link }  from  'react-router-dom'
import BlogList from './BlogList'

const BlogListPage = () => {
  
  return (
    <div>
      <BlogList/>
      <Link to="blogs/1">Blog1</Link>
      <Link to="blogs/2">Blog2</Link>
    </div>
  )
}

export default BlogListPage