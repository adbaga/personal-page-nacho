import React from 'react'

function PictureCard(props) {
    return (
        <div className="text-right mx-2">

            <img src={props.images}>
            
            </img>
            
        </div>
    )
}

export default PictureCard
