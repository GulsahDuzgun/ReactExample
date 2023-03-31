import { v4 as uuid } from 'uuid'

export const addBlog = ({ title = "", description = "", dateAdded = 0 }) => {
    return {
        type: "Add_Blog",
        blog: {
            id: uuid(),
            title: title,
            description: description,
            dateAdded: dateAdded
        } 
    }
}

export const updateBlog = (id, updateObject) => {
    return {
        type:'Update_Blog',
        id,
        updateObject
    }
}

export const removeBlog = ( id ) => {
    return {
        type: "Remove_Blog",
        id: id
    }
}