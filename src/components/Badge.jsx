import React from 'react'

const Badge = ({Bdgtxt,className}) => {
  return (
    <>
    <div className={`py-2.5 px-3 bg-black text-white ${className}`}>{Bdgtxt}</div>
    </>
  )
}

export default Badge