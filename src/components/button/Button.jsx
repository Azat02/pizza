import React from 'react'
import css from "./Button.module.css";

function Button({title, variant, ...props }) {
  return (
    <button
        {...props} 
        className={`
        ${css.wrapper} 
        ${variant === 'secondary' ? css.secondary : "" } 
        ${variant === 'disabled' ? css.disabled : "" } 
        ${variant === 'enter' ? css.enter : "" }`}
        >
            {title}
    </button>
  )
}

export default Button