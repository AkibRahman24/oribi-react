import React from 'react'
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

const PrevArrow = (props) => {
    const { onClick } = props;
  return (
   <div
      className={"text-3xl text-[#979797] absolute left-4 top-1/2 -translate-y-1/2 z-10"}
      
      onClick={onClick}
    ><FaRegArrowAltCircleLeft /></div>
  )
}

export default PrevArrow