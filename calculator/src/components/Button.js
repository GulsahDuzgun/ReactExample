import React from 'react';
import '../styles/Button.css'

function Button ({clickHandler, name, orange, wide}) {
  let classStyle = "component-button"
  
  if(orange) {
    classStyle += " orange";
  }

  if(wide) {
    classStyle += " wide"
  }

    return (
      <div className={classStyle} >
        <button onClick={()=>clickHandler(name)}>{name}</button>
      </div>
    );
}

export default Button;
