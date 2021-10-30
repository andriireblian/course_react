import React from "react";
import "./Input.scss"

export const Input = ({type, title, ...rest}) => {
    return <input type={type} placeholder={title} className="input" {...rest}/>
}

export default Input;