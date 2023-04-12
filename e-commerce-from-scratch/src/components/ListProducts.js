import React, { useEffect, useState } from 'react'
import Product from './Product'
import { useParams } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'

const ListProducts = (props) => {
    const {pageName} = useParams()
    let [store, setStore] = useState([])
    const [flag, setFlag] = useState(false)
    
    console.log("ListProducts")
    console.log( props.state )

    if(pageName == ":Favorites") 
        {setFlag(true)}

    
    useEffect(()=>{
        flag === true ? ()=>setStore(props.state.favoriteState.favoriItems) : ()=> setStore(props.state.buyProductState.buyList)
    },[flag]) 

    return (
        <div className='productsContainer'>
            { store.map(item => {return <Product key={item.id} product={item}/>} )}
        </div>      
      )
}

const matStateToProps = (state) => {
    return {
        state: {...state}
    }
}

export default connect(matStateToProps)(ListProducts)