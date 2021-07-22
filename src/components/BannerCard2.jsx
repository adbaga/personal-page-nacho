import React from 'react'
import JumboTronMain from "./JumboTronMain.jsx"
import Img2 from '../assets/img/personals/doWhatIWant.png'
import PictureCard from './PictureCard'

function BannerCard2() {

    const mainTypeTexts = ["Programming","Sex...yes...sex", "Wine...moderately...dry red wine", "Eurovision trivias digging", "Mathematics"];
    const headline = "I enjoy spending my time doing what I love"
    return (
        <div class="h-4/5 mt-10 lg:mt-40 lg:mx-10 grid lg:grid-flow-col">

       
                <div className="row-span-4 img2">

                <PictureCard class="text-right" images={Img2}></PictureCard>

                </div>

            <div className="row-span-8 bg-gray-300 lg:bg-white p-5">

            <JumboTronMain texts={{twt:mainTypeTexts, headline:headline}}/>

            </div>

           

                    
        
            
        </div>
    )
}

export default BannerCard2