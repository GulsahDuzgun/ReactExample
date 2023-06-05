import { useEffect } from 'react'
import Product from './Product'
import { connect } from 'react-redux'

const FavoriteProducts = (props) => {
    useEffect(() => {
       
    },[])

  return (
    <div className='productsContainer'>
        {
            props.state.favoriteState.favoriItems.map( (item) => {
                return <Product key={item.id} product={item} favoriteFlag={true}/>
            }) 
        }
    </div>  
  )
}

const mapStateToProps = (state) => {
    return {
        state :{
            ...state
        }
    }
}

export default connect(mapStateToProps)(FavoriteProducts)

