import React from 'react'

// import components
import Button from './Button'

// import static content
import Logo from '../images/bks-logo.png'

export default function Navbar({openModal}) {
  return (
    <div className="bg-white p-4 md:fixed w-full z-50 shadow-md">
        <div className="container px-4 flex flex-col md:flex-row gap-y-4 items-center align-center max-w-screen-xl mx-auto mb-2 md:mb-0">
            <a className="md:mr-auto w-20 relative md:mb-0 mb-4">
                <img src={Logo} alt="" className="w-full" />
            </a>
            <ul className="flex mx-4 place-content-center md:place-content-end w-full md:mb-0 mb-4">
                <li className="p-2 hover:cursor-pointer hover:bg-zinc-200 mr-6 hover:transition hover:duration-500 duration-500 border-b-2 border-zinc-200" ><a>Die Küche</a></li>
                <li className="p-2 hover:cursor-pointer hover:bg-zinc-200 mr-6 hover:transition hover:duration-500 duration-500 border-b-2 border-zinc-200"><a>Preise</a></li>
                <li className="p-2 hover:cursor-pointer hover:bg-zinc-200 mr-6 hover:transition hover:duration-500 duration-500 border-b-2 border-zinc-200"><a>Kontakt</a></li>
            </ul>
            <Button 
              bg="bg-sky-700"
              text="text-slate-100"
              hoverBg="bg-sky-600"
              clickEvent={openModal}>
              Kontaktiere Uns
            </Button>
        </div>

    </div>
  )
}
