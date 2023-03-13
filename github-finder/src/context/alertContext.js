import React, { useContext,useReducer } from 'react'
import { UsersContext } from './usersContext'
import alertReducer from '../reducers/alertReducer'

export const AlertContext = React.createContext()

export const AlertContextProvider = (props) => {
    const {userDelete} = useContext(UsersContext)
    const [error, dispatch] = useReducer(alertReducer,null)

    const displayAlert = (msg, color) => {
      dispatch({
        type: "SHOW_ALERT",
        error:{msg, color}
      })
      setTimeout(()=>{
        dispatch({
            type: "REMOVE_ALERT",
        })
        userDelete()
      },1000)
  
    }
    return (
        <AlertContext.Provider value={{error,displayAlert}}>
             {props.children}
        </AlertContext.Provider>
    )
}
export default AlertContextProvider;
