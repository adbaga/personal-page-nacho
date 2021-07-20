import React from 'react'
import TypeWritter from './TypeWritter'
import BottomArrow from './BottomArrow.jsx'

function JumboTron() {
    return (
        <div>

            <div class="lg:2/6 xl:w-2/4 mt-20 lg:mt-40 lg:ml-16 text-left mx-2">
            <div class="text-6xl font-semibold text-gray-900 leading-none">Nacho</div>
            <TypeWritter />
            {/* <div class="mt-6 text-xl font-light text-true-gray-500 antialiased">Simple </div> */}
            {/* <button class="mt-6 px-8 py-4 rounded-full font-normal tracking-wide bg-gradient-to-b from-blue-600 to-blue-700 text-white outline-none focus:outline-none hover:shadow-lg hover:from-blue-700 transition duration-200 ease-in-out">
              Download for Free
            </button> */}


          </div>
          <div class="mt-12 lg:mt-32 lg:ml-20 text-left">

          <BottomArrow />
           
          </div>

          

            
        </div>
    )
}

export default JumboTron
