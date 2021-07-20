import React from 'react'
import Typewriter from 'typewriter-effect';

function TypeWritter() {
    return (
        <div className="mt-8 text-3xl font-light text-true-gray-500 antialiased">

<Typewriter options={{autoStart: true, loop: true, strings:["Hello World!","Nacho...is a Nerd","Nacho...is afraid of seagulls","Nacho...is gay AF!"]}}
 
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
