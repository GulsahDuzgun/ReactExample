import React from 'react'
import BLogDetailItem from './BLogDetailItem'
import { connect } from 'react-redux'

const BlogDetailsPage = (props) => {
  //console.log(props)
  return (
    <BLogDetailItem {...props.blog} />
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