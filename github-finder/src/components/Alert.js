import React from 'react'

const Alert = (props) => {
  return (
    props.error !== null &&(
        <div className="container">
            <div className={`alert alert-${props.error.color}`} role="alert">
                {props.error.message}
            </div>
        </div>
    )
  )
}

export default Alert