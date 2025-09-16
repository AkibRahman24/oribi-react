import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import Logo from '/src/assets/Logo.png'
import { FaBarsStaggered } from "react-icons/fa6";
import { FaSearch ,FaUserAlt,FaCaretDown,FaShoppingCart  } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="py-8">
        <Container>
          <Flex className={`justify-between`}>

            <div className="w-[40%]">
              <Link to={"/"}> <Images imgSrc={Logo} /></Link>
            </div>
            <div className="w-[60%]">
              <ul className="flex items-center gap-x-6 text-xl font-medium text-[#767676]">
                <Link to={"/"}><li className='hover:text-[#262626] transition duration-300'>Home</li></Link>
                <Link to={"shop"}><li className='hover:text-[#262626] transition duration-300'>Shop</li></Link>
                <Link to={"service"}><li className='hover:text-[#262626] transition duration-300'>Service</li></Link>
                <Link to={"about"}><li className='hover:text-[#262626] transition duration-300'>About</li></Link>
              </ul>
            </div>
           
          </Flex>
        </Container>
      </div>
      <div className="bg-[#F5F5F3] py-6">
        <Container>
          <Flex className={`justify-between`}>
            <div className="items-center flex"><FaBarsStaggered /><h1>Shop by Category</h1></div>
            <div className="relative"><input type="text" placeholder='Search Your Product' className='py-4 px-5 w-[600px] bg-white outline-none'/><FaSearch className='absolute right-2 top-1/2 -translate-y-1/2' /></div>
            <div className="flex gap-x-4">
              <div className="flex items-center "><FaUserAlt /><FaCaretDown /></div>
              <FaShoppingCart />
            </div>
          </Flex>
        </Container>
      </div>
    </>
  )
}

export default Header