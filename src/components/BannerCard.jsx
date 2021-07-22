import React, {useState} from 'react'
import JumboTronMain from "./JumboTronMain.jsx"
import Img1 from '../assets/img/personals/bounded.png'
import PictureCard from './PictureCard'

function BannerCard() {

    const [showText, setShowText] = useState(false);


    const mainTypeTexts = ["Hello World!","Nacho...is a Nerd","Nacho...is afraid of seagulls","Nacho...is gay AF!"];
    const headline = "Coffee + Donut Powered Thinking Machine"

    return (
        <div class="h-4/5 px-5 mt-10 pt-10 lg:px-10 grid lg:grid-flow-col bg-gray-200">

            <div className="row-span-8">

            <JumboTronMain texts={{twt:mainTypeTexts, headline:headline}}/>

            </div>

            <div className="row-span-4">

            <PictureCard class="text-right" images={Img1}></PictureCard>
            

            </div>

                    
        
            
        </div>
    )
}

export default BannerCard
