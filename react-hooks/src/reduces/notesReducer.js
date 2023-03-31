const notesReducer = (state,action) => {//actipn type ve parametreleri tutan bir çeşit objedir

    switch(action.type ){

        case "POPULATE_NOTES":
            return action.noteList;

        case "ADD_NOTE":
            return [...state, {id:action.id, title: action.title, description:action.description}]

        case "REMOVE_NOTE":
            return state.filter(i=>i.id !== action.id)

        default:
            return state;
    }
}

export default notesReducer;