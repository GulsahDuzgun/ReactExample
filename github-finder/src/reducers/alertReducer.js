const alertReducer = (state, action) => {
    switch(action.type) {

        case "SHOW_ALERT":
            return action.error;
        case "REMOVE_ALERT":
            return null;
        default:
            return {state}
    }
}

export default alertReducer;