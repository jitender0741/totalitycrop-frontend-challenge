import React from 'react'

function ViewBtn(props) {
    return (
        <>
            <div className="view_more_tag">
                <a href={props.nevigate}>{props.Link_title}</a>
            </div>
        </>
    )
}

export default ViewBtn