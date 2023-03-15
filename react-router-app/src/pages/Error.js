import { useRouteError } from "react-router-dom";

export const Error = () => {
    const err = useRouteError();
    
        return (
            <div>
                <p>{ err.status }</p>
                <p>{ err.data }</p>
            </div>
        )
    
}