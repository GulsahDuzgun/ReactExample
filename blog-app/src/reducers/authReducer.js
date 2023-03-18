const authState = {
    userId: 1,
    userName: "GulsahDuzgun",
    email: "establish@gmail.com"
}

const authReducer = (state = authState, action) => {
   
    switch(action.type) {
        default:
            return state;
    }
}

export default authReducer;