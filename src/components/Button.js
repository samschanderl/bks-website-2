import React from 'react'

export default function Button({bg, text, hoverBg, hoverText, children}) {
  return (
    <>
        <button className={`m-2 py-2 px-4 hover:transition hover:duration-500 duration-500 hover:cursor-pointer whitespace-nowrap ${bg} ${text} hover:${hoverBg} hover:${hoverText}`}>{children}</button>
    </>
    )
}
