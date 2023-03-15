import { useLoaderData, Link } from "react-router-dom"

export const UserDetails = () => {
    const user = useLoaderData()
    
    return (
        <div className="user-details">
            <h3>
                <i className="fa-solid fa-caret-right"></i> {user.name}
            </h3>
            <ul>
                <li>{ user.username }</li>
                <li>{ user.email }</li>
                <li>{ user.phone }</li>
                <li>{ user.company.name } / { user.address.city }</li>
            </ul>
            <Link to="/Users">Back To List</Link>
            
        </div>
    )
}

export const UserDetailsLoader = async ({params}) => {
    const { userId } = params;
    const UserDetailsData = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

    if( UserDetailsData.status === 404 ) {
        throw new Response( "Kullanıcı Bilgisi yok", { status: 404 })
    }
    return UserDetailsData.json()
}