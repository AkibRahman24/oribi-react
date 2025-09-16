import React from 'react'

const Container = ({children}) => {
  return (
    <div className={`max-w-[1320px] m-auto`}>{children}</div>
  )
}

export default Container