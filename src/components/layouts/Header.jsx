import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import Logo from '/src/assets/Logo.png'
import { FaBarsStaggered } from "react-icons/fa6";
import { FaSearch, FaUserAlt, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { useSelector } from 'react-redux'


const Header = () => {
  let [showCart, setShowCart] = useState(false);
  let data = useSelector((state) => state.addtocart.value);
  const subtotal = data.reduce((total, item) => {
    // Ensure prices and quantities are treated as numbers
    const price = parseFloat(item.PrdPrice.replace('$', ''));
    const quantity = parseInt(item.quantity);
    return total + (price * quantity);
  }, 0);
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
            <div className="relative"><input type="text" placeholder='Search Your Product' className='py-4 px-5 w-[600px] bg-white outline-none' /><FaSearch className='absolute right-2 top-1/2 -translate-y-1/2' /></div>
            <div className="flex gap-x-4">
              <div className="flex items-center relative"><FaUserAlt /><FaCaretDown /></div>
              <FaShoppingCart className='cursor-pointer' onClick={() => setShowCart(!showCart)} />
            </div>
          </Flex>
          {showCart &&
            <div className="h-screen w-1/2 bg-[#F5F5F3] absolute right-0 top-[92px] ">
              <MdOutlineCancel className='text-2xl cursor-pointer' onClick={() => setShowCart(!showCart)} />
              <ul className='pb-2 flex text-3xl border-b-2 text-center rounded-xl'>
                <li className='w-1/4'>Title</li>
                <li className='w-1/4'>Product Image</li>
                <li className='w-1/4'>Product price</li>
                <li className='w-1/4'>Product Quantity</li>
              </ul>
              {/* <ul className='pt-3 flex text-xl text-center'>
                      {data.map(item=>(
                       <>
                        <li className='w-1/4'>{item.PrdTitle}</li>
                        <li className='w-1/4 items-center'><img className='mx-auto w-15' src={item.PrdtImg} /></li>
                        <li className='w-1/4'>{item.PrdPrice}</li>
                        <li className='w-1/4'>{item.quantity}</li>
                       </>
                        ))
                      }
                    </ul> */}
              <ul>
                {data.map(item => {
                  console.log(item)
                  return (
                    <li className='pt-3 flex text-xl text-center'>
                      <span className='w-1/4'>{item.PrdTitle}</span>
                      <span className='w-1/4 items-center'><img className='mx-auto w-15' src={item.PrdtImg} /></span>
                      <span className='w-1/4'>{item.PrdPrice}</span>
                      <span className='w-1/4'>{item.quantity}</span>
                    </li>

                  )
                })
                }
                <li className="subtotal-section bg-[#262626] p-5 justify-between text-2xl text-center text-white rounded-2xl">
                  <span className='p-9'>Subtotal:</span>
                  <span className='p-9'>${subtotal.toFixed(2)}</span>
                </li>
              </ul>

            </div>}
        </Container>
      </div>
    </>
  )
}

export default Header