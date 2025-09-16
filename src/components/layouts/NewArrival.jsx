import React, { useEffect, useState } from 'react'
import Products from '../Products'
import Container from '../Container'
import Flex from '../Flex'
import Pone from '/src/assets/p1.png'
import Ptwo from '/src/assets/p2.png'
import Pthree from '/src/assets/p3.png'
import Pfour from '/src/assets/p5.png'
import Pfive from '/src/assets/p4.png'
//=======================
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from '../NextArrow'
import PrevArrow from '../PrevArrow'
//=======================
import axios from 'axios'

const NewArrival = () => {
  let [allData, setAllData] = useState([]);
  useEffect(() => {
    async function alldatas() {
      let data = await axios.get("https://dummyjson.com/products");
      setAllData(data.data.products);
    }

    alldatas()
  }, [])



  //=====================
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <>

      <div className="">
        <Container>
          <h1 className='pb-16 text-4xl font-bold text-[#262626]'>New Arrival</h1>
          <div className="-mx-2">
            <Slider {...settings}>
              {allData.map((item) =>
                <div>
                  <Products PrdtImg={item.thumbnail} PrdTitle={item.title} PrdPrice={`$${item.price}`} bdgTxt={'New'} />
                </div>
              )}




            </Slider>
          </div>

        </Container>
      </div>
    </>

  )
}

export default NewArrival