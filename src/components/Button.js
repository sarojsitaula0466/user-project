import React from 'react'
import buttonStyle from './button.css'
const Button = (props) => {
    return (
        <button className='buttonStyle'>{props.msg}</button>
    )
}

export default Button
