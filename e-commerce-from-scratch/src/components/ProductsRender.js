import React, { useEffect, useState } from 'react'
import { LoadData, setLoading } from '../reducers/productsReducer';
import { connect, useDispatch } from 'react-redux';
import { FetchProducts } from '../apiHelper/fetchData';
import SizeSection from './SizeSection';
import {Header} from "../components/Header"
import { Outlet } from 'react-router-dom';
import FilterProduct from './FilterProduct';

const ProductsRender = () => {
   const [isFixSize, setFixSize] = useState(false)
 
    return (
        <div className='App'>
            <div className='sizeSection'>
                <SizeSection setFixSize={setFixSize} />
            </div>
            <div className='contains'>
                <Header  />
                {!isFixSize ?
                    <Outlet context={isFixSize} /> :
                    <FilterProduct/>    
                }
                
               
            </div>
        </div>   
    )
}
 export default ProductsRender;