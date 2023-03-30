import React from 'react';

function Button ({clickHandler, name}) {
    return (
      <button onClick={()=>clickHandler(name)}>{name}</button>
    );
}

export default Button;
