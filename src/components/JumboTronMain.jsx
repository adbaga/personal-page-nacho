import React from 'react'
import TypeWritter from './TypeWritter'
import BottomArrow from './BottomArrow.jsx'


function JumboTronMain(props) {

  let answerSubHeadline;

  if(props.texts.ans){
    answerSubHeadline = <div class="text-6xl font-medium text-gray-900 leading-none">{props.texts.ans}</div>
  }

  
    return (
        <div className="">

            <div class="text-left">
            <div class="text-6xl font-semibold text-gray-900 leading-none">{props.texts.headline}</div>
            {answerSubHeadline!=null ? <div class="text-3xl font-normal text-gray-900 leading-none">{props.texts.ans}</div> : null}
            <TypeWritter texts={props.texts.twt}/>
            {/* <button class="mt-6 px-8 py-4 rounded-full font-normal tracking-wide bg-gradient-to-b from-blue-600 to-blue-700 text-white outline-none focus:outline-none hover:shadow-lg hover:from-blue-700 transition duration-200 ease-in-out">
              Download for Free
            </button> */}


          </div>
          <div class="mt-12 lg:mt-32 lg:ml-20 text-left">

         

       
           
          </div>
          

         

          

            
        </div>
    )
}

export default JumboTronMain
