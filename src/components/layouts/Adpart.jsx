import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import Adone from "/src/assets//ad_1.png";
import Adtwo from '/src/assets/ad_2.png'
import Adthree from '/src/assets/ad_3.png'
import { Link } from 'react-router-dom'

const Adpart = () => {
  return (
    <>
    <div className="bg-white py-[150px]">
        <Container>
            <Flex className={'justify-between items-start'}>
              <div className="w-[48%]"><Link to={'/'}><Images imgSrc={Adone} /></Link>
              </div>
              <div className="w-[48%] gap-y-2.5">
                <div className=""><Link to={'/'}><Images imgSrc={Adtwo} /></Link></div>
                <div className="mt-[34px] "><Link to={'/'}><Images imgSrc={Adthree} /></Link></div>
                
            
              </div>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default Adpart