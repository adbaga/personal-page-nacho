import React, {useState} from 'react'
import insta from "../assets/img/symbols/instagram.png"

function DropDown() {

    const [toggle, setToggle] = useState(false);

    function handleToggle() {
        setToggle(!toggle);
      }

    return (
        <div>


<div class="relative inline-block text-left">
  <div>
    <button type="button" class="font-semibold block p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-500 transform hover:-translate-y-1 hover:scale-70" id="menu-button" aria-expanded="true" aria-haspopup="true" onClick={handleToggle}>
      Contacts

      {/* <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg> */}
    </button>
  </div>

  <div class={`${toggle ? 'block' : 'hidden'} absolute origin-top-right  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div class="py-1" role="none">
      <a href="https://www.instagram.com/iqbal.with_q/" target="_blank" rel="noopener noreferrer" class="inline-block text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Instagram</a>
      <a href="https://www.linkedin.com/in/adbaga/" target="_blank" rel="noopener noreferrer" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">LinkedIn</a>
      <a href="https://github.com/adbaga" target="_blank" rel="noopener noreferrer" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">GitHub</a>
    </div>
  </div>
</div>
            
        </div>
    )
}

export default DropDown
