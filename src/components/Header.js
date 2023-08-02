import React from "react"

export default function Header(props) {
    return (
        <div className="header" onClick={props.onClick}>
            <nav>
                <img src="https://indianmemetemplates.com/wp-content/uploads/fu-that-yao-ming.jpg"/>
                <h2>Meme Generator</h2>
                <p>React Course - Project 3</p>
            </nav>
        </div>
    )
}