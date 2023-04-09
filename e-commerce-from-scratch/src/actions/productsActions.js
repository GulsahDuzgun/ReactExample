export const Load_actions = (payload) => {
    return {
        type:"Load_data",
        items: [...payload]
    }
}