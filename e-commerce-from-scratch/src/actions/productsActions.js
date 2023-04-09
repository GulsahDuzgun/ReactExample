export const Load_actions = () => {
    const items = fetch("http://localhost:8080/").then(res => res.json())
    return {
        type:"Load_data",
        items:items
    }
}