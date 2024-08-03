import React from "react";
import { Container } from "./style";

const Textarea = ({ name, placeholder, cols, rows, ...props }) => {
    return (
        <Container
            name={name} 
            id={name} 
            cols={cols} 
            rows={rows}
            placeholder={placeholder}
            {...props}
        />
    )
}

export default Textarea