import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";


const InputSection = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value);
        navigate(`search/:${searchTerm}`)
    } 

    return (
        <Form onSubmit={handleSubmit} className='search-form'  method="post" action={`search/:${searchTerm}`}>
            <input type="text" placeholder="Search.." name="searchText" onChange={handleSubmit}/>
            <button type='submit' className='search-button'>
                <svg height="32" width="32">
                    <path d="M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z" fill="#ffffff" fillRule="evenodd"/>
                </svg>
            </button>
        </Form>
    )
}

export default InputSection;