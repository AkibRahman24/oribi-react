import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../Container'
import { PiNumberTwoBold } from "react-icons/pi";
import Images from '../Images';
import baner from "/src/assets/Banner.png";

const Banner = () => {
  return (
    <>
    <div className="">
    <Link to={'#'}>
    {/* <div className="bg-[url(src/assets/Banner.png)] py-[280px] bg-no-repeat bg-center bg-cover" ></div> */}
    <Images imgSrc={baner} ClassName={`bg-no-repeat bg-center bg-cover`}/>
    </Link></div>
   
    </>
  )
}

export default Banner