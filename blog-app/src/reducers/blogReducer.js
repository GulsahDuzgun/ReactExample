const blogState = []

const blogReducer = (state = blogState, action) => {
   
    switch(action.type) {

        case 'Add_Blog':
             return [
                ...state, action.blog
            ]

        case 'Remove_Blog':
            return state.filter( ( {id} ) => {
                return id !== action.id    
            })

        case 'Update_Blog':
           return state.map((item) => {
                if( item.id === action.id ) {
                    return {
                        ...item, ...action.updateObject
                    }
                }
                else {
                    return item;
                }
            })

        default:
            return state;

    }
}

export default blogReducer;