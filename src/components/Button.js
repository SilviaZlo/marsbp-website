import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/button.css'

export const Button = ({onClick, children}) => {
    return (
            <button                     className="button"
                onClick={onClick}
            >{children}
            </button>
    )
}

export default Button;