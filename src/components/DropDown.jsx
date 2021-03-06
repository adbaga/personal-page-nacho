import React, {useState, useRef, useEffect} from 'react'
import insta from "../assets/img/symbols/instagram.png"

function DropDown() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const ref = useRef();

      useEffect(() => {

        const checkIfClickedOutside = e => {

    
          if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
    
            setIsMenuOpen(false)
    
          }
    
        }
    
        document.addEventListener("mousedown", checkIfClickedOutside)
    
        return () => {
          document.removeEventListener("mousedown", checkIfClickedOutside)
    
        }
    
      }, [isMenuOpen])
      

    return (
        <div>


<div class="relative inline-block text-left">
    <button type="button" className="font-semibold block p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-500 transform hover:-translate-y-1 hover:scale-70" id="menu-button" aria-expanded="true" aria-haspopup="true" onClick={() => setIsMenuOpen(!isMenuOpen)}>
      Contacts
    </button>

    {isMenuOpen && (

  <div ref={ref} class={`${isMenuOpen ? 'block' : 'hidden'} absolute origin-top-right  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div class="py-1" role="none">
      <a href="https://www.instagram.com/iqbal.with_q/" target="_blank" rel="noopener noreferrer" class="inline-block text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200 hover:text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0">Instagram</a>
      <a href="https://www.linkedin.com/in/adbaga/" target="_blank" rel="noopener noreferrer" class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200 hover:text-gray-700" role="menuitem" tabindex="-1" id="menu-item-1">LinkedIn</a>
      <a href="https://github.com/adbaga" target="_blank" rel="noopener noreferrer" class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200 hover:text-gray-700" role="menuitem" tabindex="-1" id="menu-item-2">GitHub</a>
      <a href="https://www.recon.com/view_profile.aspx?id=3068026" target="_blank" rel="noopener noreferrer" class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200 hover:text-gray-700" role="menuitem" tabindex="-1" id="menu-item-2">Recon</a> 
    </div>
  </div>
    )}
</div>


            
        </div>
    )
}

export default DropDown
