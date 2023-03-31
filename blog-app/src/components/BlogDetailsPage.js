import React from 'react'
import BlogDetailItem from './BlogDetailItem'
import { connect } from 'react-redux'

const BlogDetailsPage = (props) => {
  //console.log(props)
  return (
    <BlogDetailItem { ...props.blog } />
  )
}

const mapStoretoProps = (state, props ) => {
  return {
    blog: state.blogs.find((blog) => {
      return blog.id === props.match.params.id
    })
  }
}

export default connect(mapStoretoProps)(BlogDetailsPage)