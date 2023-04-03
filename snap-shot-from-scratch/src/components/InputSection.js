import React from "react";

const InputSection = ({handleText}) => {
    const handleChange = (e) => {
        e.preventDefault();
        handleText(e.target.value)
    }

    return (
        <form>
            <input type="text" onChange={handleChange} />
        </form>
    )
}

export default InputSection;