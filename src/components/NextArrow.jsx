import React from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const NextArrow = (props) => {
    const { onClick } = props;
  return (
    <div
      className={"text-3xl text-[#979797] absolute right-4 top-1/2 -translate-y-1/2"}
      
      onClick={onClick}
    ><FaRegArrowAltCircleRight /></div>
  )
}

export default NextArrow