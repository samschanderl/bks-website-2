import React from 'react'

export default function Button({bg, text, hoverBg, hoverText, width, clickEvent, children}) {
  return (
    <>
        <button 
        className={`my-2 py-2 px-4 hover:transition hover:duration-500 duration-500 hover:cursor-pointer whitespace-nowrap bg-blue-500 hover:bg-blue-700 text-slate-100 ${width}`}
        onClick={clickEvent}>{children}</button>
    </>
    )
}
