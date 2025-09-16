import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { Link, Links } from 'react-router-dom'
import Images from '../Images'
import Logo from '/src/assets/Logo.png'

const Footer = () => {
  return (
    <>
      <Container>
        <Flex className={`justify-between items-start pt-5`}>
          <div className="">
            <h1 className='text-[#262626] text-xl font-bold'>Menu</h1>
            <ul className='py-2.5'>
              <Link to={"/"}><li className='text-[#6D6D6D] font-medium text-[14px] py-2'>Home</li></Link>
              <Link to={"shop"}><li className='text-[#6D6D6D] font-medium text-[14px] py-2'>Shop</li></Link>
              <Link to={"service"}><li className='text-[#6D6D6D] font-medium text-[14px] py-2'>Service</li></Link>
              <Link to={"about"}><li className='text-[#6D6D6D] font-medium text-[14px] py-2'>About</li></Link>

            </ul>
          </div>
          <div className="">
            <h1 className='text-[#262626] text-xl font-bold'>Shop</h1>
            <ul className='py-2.5'>
              <Link to={"#"}><li className='text-[#6D6D6D] font-medium text-[14px] py-2'>Catagory 1</li></Link>
              <Link to={"#"}><li className='text-[#6D6D6D] font-medium text-[14px] py-2'>Catagory 2</li></Link>
              <Link to={"#"}><li className='text-[#6D6D6D] font-medium text-[14px] py-2'>Catagory 3</li></Link>
              <Link to={"#"}><li className='text-[#6D6D6D] font-medium text-[14px] py-2'>Catagory 4</li></Link>

            </ul>
          </div>
          <div className=""><div className="">
            <h1 className='text-[#262626] text-xl font-bold'>Help</h1>
            <ul className='py-2.5'>
              <Link to={"#"}><li className='text-[#6D6D6D] font-medium text-[14px] py-2'>Privacy policy</li></Link>
              <Link to={"#"}><li className='text-[#6D6D6D] font-medium text-[14px] py-2'>Terms & Conditions</li></Link>
              <Link to={"#"}><li className='text-[#6D6D6D] font-medium text-[14px] py-2'>Special E-shop</li></Link>
              <Link to={"#"}><li className='text-[#6D6D6D] font-medium text-[14px] py-2'>Secure Payments</li></Link>

            </ul>
          </div></div>
          <div className="">
            <h1 className='text-[#262626] text-[16px] font-bold'>(052) 611-5711</h1>
            <h1 className='text-[#262626] text-[16px] font-bold'>(052) company@domain.com</h1>
            <p className='text-[#6D6D6D] font-medium text-[14px] py-2'>575 Crescent Ave. Quakertown, PA 18951</p>
            <div className=""></div>
            <div className=""></div>
          </div>
          <div className=""><Link to={`/`}><Images imgSrc={Logo}/></Link></div>

        </Flex>
      </Container>
    </>
  )
}

export default Footer