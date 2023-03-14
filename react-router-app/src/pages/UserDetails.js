import { useLoaderData } from "react-router-dom"
export const UserDetails = () => {
    const userDetails = useLoaderData()
    return (
        <div>
            <p>{userDetails.name}</p>
            <p>{userDetails.username}</p>
        </div>
)
}

export const UserDetailsLoader = async ({params}) => {
    const { userId } = params;
    const UserDetailsData = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    return UserDetailsData.json()
}