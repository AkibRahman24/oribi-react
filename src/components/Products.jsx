import React from 'react'
import Images from './Images'
import Badge from './Badge'
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { LuRefreshCw } from "react-icons/lu";
import { useDispatch } from 'react-redux';
import { addtocart } from '../slices/addToCartSlice';

const Products = ({ PrdtImg, PrdTitle, PrdPrice, bdgTxt }) => {
let dispatch = useDispatch()

let handleAddToCart = ()=> {
  dispatch(addtocart({
    PrdTitle:PrdTitle,
    PrdPrice:PrdPrice,
    PrdtImg:PrdtImg,
    quantity: 1
  }))
  
}

  return (
    <>
      <div className="relative group px-5 ">
        <Images imgSrc={PrdtImg} />
        <Badge Bdgtxt={bdgTxt} className={`absolute top-5 left-5 `} />
        <div className=" bg-white py-3  opacity-0 group-hover:opacity-90 absolute left-0 bottom-0 w-full px-2">
          <div className="flex items-center justify-end "><h1 className='font-medium '>Add to Wish List</h1><FaHeart /></div>
          <div className="flex items-center justify-end mt-2"><h1>Compare</h1><LuRefreshCw /></div>
          <div className="flex items-center justify-end mt-2" onClick={handleAddToCart}><h1>Add to Cart</h1><FaShoppingCart /></div>
        </div>


      </div>
      <div className="flex justify-between bg-white pt-3 px-5">
        <h1 className='text-xl text-black'>{PrdTitle}</h1>
        <h1 className='text-xl font-light text-[#767676]'>{PrdPrice}</h1>
      </div>
    </>
  )
}

export default Products