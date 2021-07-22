import React from 'react'
import Typewriter from 'typewriter-effect';

function TypeWritter(props) {

    let texts = props.texts;
    return (
        <div className="mt-8 text-3xl font-light text-true-gray-500 antialiased">

<Typewriter options={{autoStart: true, loop: true, strings:texts}}
 
/>
            
        </div>
    )
}

export default TypeWritter



// <Typewriter options={{autoStart: true, loop: true, strings:"Yosss"}}
//   onInit={(typewriter) => {
//     typewriter.typeString('Hello World!')
//       .callFunction(() => {
//       })
//       .pauseFor(1000)
//       .deleteAll()
//       .typeString("Nacho...is a Nerd")
//       .pauseFor(2000)
//       .deleteAll()
//       .typeString("Nacho...is afraid of seagulls")
//       .pauseFor(2000)
//       .deleteAll()
//       .typeString("Nacho...is gay AF!")
//       .pauseFor(5000)
//       .deleteAll()
//       .start();
//   }}
// />
