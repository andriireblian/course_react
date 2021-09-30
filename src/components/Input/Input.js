import React from "react";
import "./Input.scss"

export const Input = ({type, title}) => {
    return <input type={type} placeholder={title} className="input"/>
}

export default Input;