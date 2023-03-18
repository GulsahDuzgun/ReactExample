import React from "react";

const BlogListItem = ( props ) => {
    return ( 
        <>
            <li> { props.title } { props.description } </li>
        </>
    )
}

export default BlogListItem;