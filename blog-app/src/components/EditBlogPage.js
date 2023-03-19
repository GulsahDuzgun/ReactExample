import React from 'react'
import { connect } from 'react-redux'
import { updateBlog } from '../actions/blog'
import BlogForm from './BlogForm'

const EditBlogPage = ( props ) => {
  return (
    <div>
        <h3>EditBlogPage</h3>
        <BlogForm blog={props.blog} onSubmit={ (editBlogInfo) => {
                props.dispatch(updateBlog(props.blog.id, editBlogInfo))
                props.history.push('/blogs')
            }}
            />
    </div>
  )
}

const matchBlog = (state, props) => {
    return {
        blog: state.blogs.find((item) => {
            return item.id === props.match.params.id    
        })
    }
}
export default connect(matchBlog)(EditBlogPage)