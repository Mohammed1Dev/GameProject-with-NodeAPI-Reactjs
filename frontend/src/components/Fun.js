import React from 'react'

const Fun = (props) =>{

    let arr =['vvv','ccc'];
    return (
        <div>
            <h1>hello Func{props.name}</h1>
            <h2>hello Func{props.children}</h2>
            <div>{arr.map(el =>
            <h1>{el}</h1>
            )}</div>
        </div>
    )
}



export default Fun
