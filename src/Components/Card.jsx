import React from "react";
import { IoStar } from "react-icons/io5";

const Card = (props) => {
  return (
    <div
      className="xl:w-[233px] w-[23vw] shrink-0 grow duration-500 shadow-md p-1"
      style={{
        transform: `translateX(-${props.slide * 100}%)`,
      }}>
      <div className="group md:h-[172px] h-[25vw] rounded-[15px] overflow-hidden relative">
      <img src={props.image} alt="" className="group-hover:scale-110 duration-200 object-cover w-full h-full" />
        <div className="image-overlay absolute w-full h-full top-0 flex items-end p-2 md:text-[15px] text-[2vw] font-bold text-white tracking-tighter">
          {props.offer}
        </div>
      </div>
      <div className="mt-2 text-xl font-bold md:text-[15px] text-[2.5vw]">{props.title}</div>
      <div className="flex items-center font-bold  ">
        <IoStar className="inline text-green-600" /> {props.rating}{" "}
       <span className="ml-4"> {props.minTime} - {props.maxTime} Mins </span>
      </div>
      <div className="flex flex-col font-semibold text-gray-700">
        {props.name}
        <br />
        {props.place}
      </div>
    </div>
  );
};

export default Card;
