import React from 'react'
import NoProduct from './NoProduct'
import ShowList from './ShowList'

const ListResult = (props) => {
  return (
    <>
        {props.filterList.length > 0 ?
            <ShowList filterList={ props.filterList }/>
            : 
            <tr className='alert alert-warning'>
                <NoProduct  />
            </tr>           
        }
    </>
  )
}

export default ListResult