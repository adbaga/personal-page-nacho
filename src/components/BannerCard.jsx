import React from 'react'
import JumboTronMain from "./JumboTronMain.jsx"
import Img1 from '../assets/img/symbols/instagram.png'
import PictureCard from './PictureCard'

function BannerCard() {
    return (
        <div class="h-4/5 px-5 mt-10 lg:mt-40 lg:mx-10 grid lg:grid-flow-col">

       

                    <JumboTronMain/>





                    <PictureCard  images={Img1}></PictureCard>





           

            


            
        </div>
    )
}

export default BannerCard
