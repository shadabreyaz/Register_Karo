import React from 'react'

export default function Button({label,isYellow,onclick,classes}) {
  return (
    <button onClick={onclick} className={`${isYellow ?`py-2 px-4 border-2 bg-Yellow rounded-md text-white font-bold border-none hover:bg-black hover:scale-110 transition-all duration-300 ${classes}`
    :`py-2 px-4 bg-Blue border-2 rounded-md text-white font-bold border-none hover:bg-neutral-700 hover:scale-110 transition-all duration-300 ${classes}`}`}>
      {label}
    </button>

  )
}