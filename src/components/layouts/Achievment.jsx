import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { PiNumberTwoBold } from "react-icons/pi";

const Achievment = () => {
  return (
    <>
    <div className="bg-[#FFFFFF] py-2.5 border-b-2 border-[#F0F0F0]">
        <Container>
           <Flex className={'justify-between '}>
              <div className="flex items-center text-xl"><PiNumberTwoBold /> <h1 className='text-[16px] font-medium text-[#767676]'>Two years warranty</h1></div>
              <div className="flex items-center text-xl"><PiNumberTwoBold /> <h1 className='text-[16px] font-medium text-[#767676]'>Two years warranty</h1></div>
              <div className="flex items-center text-xl"><PiNumberTwoBold /> <h1 className='text-[16px] font-medium text-[#767676]'>Two years warranty</h1></div>
            
           </Flex>
        </Container>
    </div>
    </>
  )
}

export default Achievment