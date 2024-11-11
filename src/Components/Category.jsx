import React,{useState} from 'react';
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";
const Category = () => {
    
    const [slide, setSlide] = useState(0)

    const nextSlide = () =>{
        console.log(Categories.length)
        if( Categories.length-8 == slide)return false
        setSlide(slide+3)
    }

    const prevSlide = () =>{
        if(slide == 0) return false
        setSlide(slide-3)
    }

    const Categories = [
        {
            "image": "images/North_Indian_4.jpeg",
            "path": "north-indian"
        },
        {
            "image": "images/Pizza.jpeg",
            "path": "pizza"
        },
        {
            "image": "images/Noodles.jpeg",
            "path": "noodles"
        },
        {
            "image": "images/Pasta.jpeg",
            "path": "pasta"
        },
        {
            "image": "images/Paratha.jpeg",
            "path": "paratha"
        },
        {
            "image": "images/Biryani_2.jpeg",
            "path": "biryani"
        },
        {
            "image": "images/Burger.jpeg",
            "path": "burger"
        },
        {
            "image": "images/Cakes.jpeg",
            "path": "cakes"
        },
        {
            "image": "images/Chinese.jpeg",
            "path": "chinese"
        },
        {
            "image": "images/Chole_Bature.jpeg",
            "path": "chole-bature"
        },
        {
            "image": "images/Dosa.jpeg",
            "path": "dost"
        },
        {
            "image": "images/Gulab_Jamun.jpeg",
            "path": "gulab-jamun"
        },
        {
            "image": "images/Ice_Creams.jpeg",
            "path": "ice-creams"
        },
        {
            "image": "images/Idli.jpeg",
            "path": "idli"
        },
        {
            "image": "images/Khichdi.jpeg",
            "path": "khichdi"
        },
        {
            "image": "images/Poori.jpeg",
            "path": "poori"
        },
        {
            "image": "images/Pure_Veg.jpeg",
            "path": "pure-veg"
        },
        {
            "image": "images/Rolls.jpeg",
            "path": "rolls"
        },
        {
            "image": "images/Salad.jpeg",
            "path": "salad"
        },
        {
            "image": "images/South_Indian_4.jpeg",
            "path": "south-indian"
        }
    ]
    




  return (
    <>
        <div className="max-w-[75vw] mx-auto">
            <div className="flex my-3 items-center justify-between">
                <div className="md:text-[25px] text-[3.3vw] font-bold">
                    What's on your Mind.
                </div>
                <div className="flex">
                    <div className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 ">
                        <IoMdArrowRoundBack  onClick={prevSlide} style={{
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
            <div className="flex overflow-hidden">
                {Categories.map((cat,index)=>{
                    return (
                        <div 
                        style={{
                            transform:`translateX(-${slide*100}%)`,
                        }}
                         key={index} className='w-[140px] shrink-0 duration-500'>
                            <img src={cat.image} alt="" />
                        </div>
                    )
                })}
            </div>
        </div>

        <hr className='my-6 border-[1px] w-[75vw] mx-auto' />
    </>
  )
}

export default Category