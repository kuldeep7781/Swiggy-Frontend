import React, { useState } from "react";
// import { useEffect } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";
import Card from "./Card";

const TopResto = () => {

    const [slide, setSlide] = useState(0)

    const nextSlide = () =>{
        console.log(RestoChain.length)
        if( RestoChain.length-4 == slide)return false
        setSlide(slide+3)
    }

    const prevSlide = () =>{
        if(slide == 0) return false
        setSlide(slide-3)
    }



  // By Fecth API----->
  // const [data, setData] = useState([])
  // const fetchTopRestaurant = async ()=>{
  //     const response = await fetch("http://localhost:5000/top-restaurant-chains");
  //     const apidata = response.json;
  //     setdata(apidata)
  // };
  // useEffect(
  //     () => {
  //         fetchTopRestaurant();
  //     }
  // )

  const RestoChain = [
    {
      image: "images/2b4f62d606d1b2bfba9ba9e5386fabb7.jpeg",
      offer: "Items at ₹179",
      title: "Pizza Hut",
      rating: 4.2,
      minTime: 30,
      maxTime: 40,
      name: "Pizzas",
      place: "New Jodhpur",
    },
    {
      image: "images/75d0b3ebeb56fe2484c944e94cac7a8d.jpeg",
      offer: "₹50 OFF ABOVE ₹199",
      title: "Janta Sweet Home",
      rating: 4.5,
      minTime: 35,
      maxTime: 40,
      name: "Sweets",
      place: "Shastri Nagar",
    },
    {
      image: "images/cef5bf4cc31dc3c46a1e1b027c5627e4.jpeg",
      offer: "₹85 OFF ABOVE ₹149",
      title: "Parihaar Bhojnalay",
      rating: 4.3,
      minTime: 35,
      maxTime: 40,
      name: "North India",
      place: "Sardarpura",
    },
    {
      image: "images/eillc7d7hbrzcuussus5.jpeg",
      offer: "₹70 OFF ABOVE ₹149",
      title: "Kwality Walls Frozen",
      rating: 4.5,
      minTime: 25,
      maxTime: 25,
      name: "Ice Cream",
      place: "Chopsani Housing Board",
    },
    {
      image: "images/6e04be27387483a7c00444f8e8241108.jpeg",
      offer: "₹1-5 OFF ABOVE ₹179",
      title: "The Good Bowl",
      rating: 4.4,
      minTime: 30,
      maxTime: 35,
      name: "Biryani",
      place: "Shastri Nagar",
    },
    {
      image: "images/w7ndo1dkkk6kf4qfz2p1.jpeg",
      offer: "₹100 OFF ABOVE ₹499",
      title: "NIC Ice Creams",
      rating: 4.7,
      minTime: 25,
      maxTime: 30,
      name: "Desserts",
      place: "Sardarpura",
    },
    {
      image: "images/f1bc9ddf53de574cdc35ab2f717df234.jpeg",
      offer: "Items at ₹109",
      title: "Dosh Center",
      rating: 4.0,
      minTime: 35,
      maxTime: 40,
      name: "South Indian",
      place: "Chopsani Housing Board",
    },
    {
      image: "images/919cb3be0e7406f86f6741ebe7c30128.jpeg",
      offer: "₹125 OFF ABOVE ₹349",
      title: "Lunch Box - Meals and Thalis",
      rating: 4.3,
      minTime: 30,
      maxTime: 35,
      name: "Biryani",
      place: "Shastri Nagar",
    },
    {
      image: "images/535fc9f9c135f7982317bbb6a64a1ffc.jpeg",
      offer: "₹70 OFF ABOVE ₹249",
      title: "McDonald's",
      rating: 4.4,
      minTime: 30,
      maxTime: 35,
      name: "American",
      place: "Rawaton Ka Bass",
    },
    {
      image: "images/2a41aa363a8ae1e98a4cce95c2d0c589.jpeg",
      offer: "₹100 OFF ABOVE ₹449",
      title: "Kajal's Cake",
      rating: 4.5,
      minTime: 35,
      maxTime: 40,
      name: "Cake",
      place: "Chopsani Housing Board",
    },
  ];

  return (
    <>
      <div className="max-w-[75vw] mx-auto">
        <div className="flex my-3 items-center justify-between">
          <div className="md:text-[25px] text-[3.3vw] font-bold">
            Top restaurant chains in Indore
          </div>
          <div className="flex">
            <div className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 ">
              <IoMdArrowRoundBack onClick={prevSlide} style={{
                            color: slide == 0 ? "gray" : 'black',
                        }}/>
            </div>
            <div className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 ">
              <IoMdArrowRoundForward onClick={nextSlide} style={{
                            color: slide>10 ? "gray" : 'black',
                        }}/>
            </div>
          </div>
        </div>
        <div className="flex gap-5 overflow-hidden " >
        {RestoChain.map((data, index) => {
            return <Card {...data} slide={slide} key={index} />;
          })}
        </div>
      </div>
      <hr className='my-6 border-[1px] w-[75vw] mx-auto' />
    </>
  );
};

export default TopResto;
