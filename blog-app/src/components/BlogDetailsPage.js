import React from 'react'

const BlogDetailsPage = (props) => {
  return (
    <div>Details Page : {props.match.params.id}</div>
  )
}

export default BlogDetailsPage