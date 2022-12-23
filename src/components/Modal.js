import React from 'react'

export default function Modal({ closeModal, children }) {

    function closeModal() {
        //
        console.log('closing modal...')
    }

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-zinc-600 bg-opacity-90 flex justify-center items-center">
        <div className="Modal bg-white p-4 rounded-md relative lg:w-4/12 md:w-6/12 w-10/12">
            <p className="absolute top-2 right-2 bg-slate-200 p-2 rounded-full hover:cursor-pointer" onClick={closeModal}>x</p>
            { children}
        </div>
    </div>
  )
}
