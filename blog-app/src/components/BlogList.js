import React from "react";
import { connect } from "react-redux";
import BlogListItem from "./BlogListItem";

const BlogList = ( props ) => {
    return (
        <ul>
            {
                props.a.map((item) => {
                    return <BlogListItem {...item} key={item.id}/>
                })
            }
        </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        a: state.blogs
    }
}

export default connect(mapStateToProps)(BlogList)