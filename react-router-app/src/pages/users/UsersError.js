import { useRouteError } from "react-router-dom"

export const UsersError = () => {
    const userError = useRouteError();
    
    return (
        <div>
            <p>{userError.data}</p>
            <p>{userError.status}</p>
        </div>
    )
}