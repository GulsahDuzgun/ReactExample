import { Link, useLoaderData } from "react-router-dom";

export const userLoading = async () => {
    const user = await fetch('https://jsonplaceholder.typicode.com/users')
    return user.json();
}

export const UserList = () => {
    const data = useLoaderData();
    return (
        <div className="users">
            {
            data.map((item) => (
                <div className="card"  key={ item.id }>
                    <h3><i className="fa-solid fa-caret-right"></i>{ item.name}</h3>
                    <Link to={ item.id.toString() }>
                        <i className="fa-regular fa-square-caret-right"></i>
                    </Link>
                </div>
            ))
            }
        </div>
    )
}