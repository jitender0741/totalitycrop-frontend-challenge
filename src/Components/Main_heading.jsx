import React from 'react'

function Main_heading(props) {
    return (
        <>
            <div className="inner-heading d-flex">
                <h2>{props.title}</h2>
                <a href="">{props.links}</a>
            </div>
        </>
    )
}

export default Main_heading