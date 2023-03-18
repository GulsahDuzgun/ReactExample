import React from "react";
import { connect } from "react-redux";

const BlogList = ( props ) => {
    return (
        <div>
            { props.blogs[0].title }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs
    }
}

export default connect(mapStateToProps)(BlogList)