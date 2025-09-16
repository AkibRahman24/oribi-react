import React from 'react'

const Images = ({imgSrc,imgAlt,ClassName}) => {
  return (
    <img className={ClassName} src={imgSrc} alt={imgAlt} />
  )
}

export default Images