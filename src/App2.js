import React from 'react'

export default function App2() {
   
    const [count, setCount] = React.useState(0)

   function inc() {
    setCount(count => count + 1) // count++ is invalid in React
   }
   function dec() {
    setCount(count => count-1)
   }


    return (
        <div className='container' stle='justify-content: centre;'>
            <button className="dec" onClick={dec}>-</button>
            <h2>{count}</h2>
            <button className="inc"onClick={inc}>+</button>
        </div>

    )
}