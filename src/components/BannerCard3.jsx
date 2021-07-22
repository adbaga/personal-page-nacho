import React from 'react'
import JumboTronMain from "./JumboTronMain.jsx"
import Img2 from '../assets/img/personals/doWhatIWant.png'
import PictureCard from './PictureCard'

function BannerCard3() {

    const headline = "What kind of music do you like?"
    const mainTypeTexts = ["Icelandic ballads","Techno", "Classics", "Heavy Metal", "French Rap"];
    const answer = "This is a hard question. But here are fews..."
    
    return (
        <div class="h-4/5 mt-10 lg:mt-40 lg:mx-10 grid lg:grid-flow-col">

    

            <div className="row-span-8 bg-gray-300 lg:bg-white p-5">

            <JumboTronMain texts={{twt:mainTypeTexts, headline:headline, ans:answer}}/>

            <a href="https://open.spotify.com/playlist/37i9dQZF1EpqG2anNHgvPY?si=PDk3aC4OR6qixjjGiN5ZFA&dl_branch=1&nd=1" className="block p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-500 transform hover:-translate-y-1 hover:scale-70">My mostplayed Spotify Playlist</a>

            </div>

           

                    
        
            
        </div>
    )
}

export default BannerCard3