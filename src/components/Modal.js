import React from 'react';

// import components
import { AiFillCloseCircle } from 'react-icons/ai';

export default function Modal({ closeModal, children }) {

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-zinc-600 bg-opacity-90 flex justify-center items-center z-50">
        <div className="Modal bg-white p-4 rounded-md relative lg:w-4/12 md:w-6/12 w-10/12 grid">
            <button className="place-self-end hover:cursor-pointer" onClick={closeModal}>
              <AiFillCloseCircle className="text-2xl  text-slate-500 "/>
            </button>
            { children}
        </div>
    </div>
  )
}
