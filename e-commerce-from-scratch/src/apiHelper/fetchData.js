import { useDispatch } from "react-redux";
import { Loading } from "../reducers/productsReducer";
import { useState } from "react";

export async function FetchProducts (){ 
    const request = await fetch("http://localhost:8080/")
    const data = await request.json()
    const products = await data.products;
    return products;
}
 
