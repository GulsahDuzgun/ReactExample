import { useParams } from "react-router-dom"

export const UserDetails = () => {
const { userId, role } = useParams()
return (
    <div>
        <p>{userId}</p>
        <p>{role}</p>
    </div>
)
}