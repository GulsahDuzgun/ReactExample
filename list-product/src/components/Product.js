import React from 'react'

const Product = (props) => {
  return (
    <>
        <tr>
            <th scope='row'className='text-center'>Vegetables</th>
        </tr>
        {
        props.vegetables.map( ( item, index ) => { 
            return (
            <tr className='d-flex justify-content-between' key={index} style={ item.stocked ? { color:'black'} : {color:"red", textDecoration:"underline"}}>
                <td>{item.name}</td>
                <td>{item.price}</td>
            </tr>
            )
            })
        }
        <tr>
            <th scope='row'className='text-center'>Fruits</th>
        </tr>
        {
            props.fruits.map((item, index) => {
                return (
                <tr className='d-flex justify-content-between' style={item.stocked ? {color:'black'}: {color:"red", textDecoration:"underline"}} key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                </tr>
                )
            })
        } 
    </>
  )
}

export default Product