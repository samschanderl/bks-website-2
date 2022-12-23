import React from 'react';

// import components
import { AiFillCloseCircle } from 'react-icons/ai';

export default function Modal({ closeModal, children }) {

    function closeModal() {
        //
        console.log('closing modal...')
    }

    // className="absolute top-2 right-2 p-2 rounded-full hover:cursor-pointer"

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-zinc-600 bg-opacity-90 flex justify-center items-center">
        <div className="Modal bg-white p-4 rounded-md relative lg:w-4/12 md:w-6/12 w-10/12 grid">
            <AiFillCloseCircle className="text-2xl place-self-end text-slate-500 hover:cursor-pointer"  onClick={closeModal} />
            { children}
        </div>
    </div>
  )
}
