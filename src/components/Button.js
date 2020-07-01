import React from 'react'

const Button = (props)=>{
    return (
        <button className='click-button' onClick={()=>console.log('cliquei')}>
            {props.value}
        </button>
    )
}

export default Button