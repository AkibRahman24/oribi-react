import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../Container'
import { PiNumberTwoBold } from "react-icons/pi";

const Banner = () => {
  return (
    <>
    <div className="">
    <Link to={'#'}>
    <div className="bg-[url(src/assets/Banner.png)] py-[280px] bg-no-repeat bg-center bg-cover" ></div>
    </Link></div>
   
    </>
  )
}

export default Banner