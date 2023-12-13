// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { CiSaveDown1 } from "react-icons/ci";

const Card = ({data}) => {
  return (
    <div className=' w-60 h-72 rounded-[20px] bg-zinc-900 p-5 relative text-white overflow-hidden'>

        <span> <FaRegFileAlt/> </span>

        <p className=' mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid !</p>

        <div className=" absolute left-0 w-full p-3 pr-5 top-[60%] text-white font-thin flex items-center justify-between">
            <p>0.09mb</p>
            <span className=' text-2xl'> <CiSaveDown1/> </span>
        </div>


        <div className=" bottom-0 absolute w-full h-12 text-xl left-0 bg-green-600 flex justify-center items-center text-center"></div>


    </div>
    
    )
}

export default Card