import React, { useState, useEffect } from 'react'

// import components
import Button from './Button'

// import static content
import Logo from '../images/bks-logo.png'

export default function Navbar({navRef, navHeight, setNavHeight, openModal}) {

  useEffect(() => {
    window.addEventListener('resize', () => {
      console.log('resizing...');
      console.log('height: ', navRef.current.clientHeight);
      setNavHeight(navRef.current.clientHeight)
    }, false)
  },[])

  return (
    <div ref={navRef} className="bg-white p-4 fixed w-full z-50 shadow-md">
        <div className="container px-4 flex flex-col md:flex-row gap-y-4 items-center align-center max-w-screen-xl mx-auto mb-2 md:mb-0">
            <a href="#" className="md:mr-auto md:w-40 w-20 relative md:mb-0 mb-4">
                <img src={Logo} alt="" className="w-full" />
            </a>
            <ul className="flex mx-4 place-content-center md:place-content-end w-full md:mb-0 mb-4">
                <li className="p-2 hover:cursor-pointer hover:bg-zinc-200 mr-6 hover:transition hover:duration-500 duration-500 border-b-2 border-zinc-200" ><a href="#ImgGallery">Die Küche</a></li>
                <li className="p-2 hover:cursor-pointer hover:bg-zinc-200 mr-6 hover:transition hover:duration-500 duration-500 border-b-2 border-zinc-200"><a href="#PricingTable">Preise</a></li>
            </ul>
            <Button
              clickEvent={openModal}>
              Kontaktiere Uns
            </Button>
        </div>

    </div>
  )
}
