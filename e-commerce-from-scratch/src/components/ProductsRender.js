import React, { useState } from 'react'
import SizeSection from './SizeSection';
import {Header} from "../components/Header"
import { Outlet } from 'react-router-dom';
import FilterProduct from './FilterProduct';
import ToggleBtn from './ToggleBtn';

const ProductsRender = () => {
   const [isFixSize, setFixSize] = useState(false)
 
    return (
        <div className='App'>
            <div className='sizeSection'>
                <SizeSection setFixSize={setFixSize} />
            </div>
            <div className='contains'>
                <div className='navPart'>
                    <Header  />
                    <ToggleBtn/>
                </div>
                {!isFixSize ?
                    <Outlet context={isFixSize} /> :
                    <FilterProduct/>    
                }        
            </div>
        </div>   
    )
}

export default ProductsRender;