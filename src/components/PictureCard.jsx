import React from 'react'

function PictureCard(props) {
    return (
        <div className="lg:3/6 xl:w-2/4 mt-20 lg:mt-40 mx-10 lg:ml-16 text-right mx-2">

            <img src={props.images}>
            
            </img>
            
        </div>
    )
}

export default PictureCard
