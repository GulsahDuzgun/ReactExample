import React from "react";
import { Link }  from  'react-router-dom'


const BlogListItem = ( props ) => {
    return ( 
        <>
            <li> { props.title } { props.description } 
                <Link to={`/blogs/${props.id}`}>Detail</Link>
                <Link to={`/edit/${props.id}`}>Edit</Link>
            </li>
        </>
    )
}

export default BlogListItem;