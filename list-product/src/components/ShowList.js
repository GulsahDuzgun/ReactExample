import React from 'react'

const ShowList = (props) => {
  return (
    <>
        { props.filterList.map((item, index) => {
            return(
              <tr className='d-flex justify-content-between' key={ index } style={ item.stocked ? { color:'black' } : { color:"red", textDecoration:"underline" }}>
                <td>{ item.name }</td>
                <td>{ item.price }</td>
              </tr>
            )
          })
        }
    </>
  )
}

export default ShowList