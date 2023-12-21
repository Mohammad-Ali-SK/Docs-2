// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { CiSaveDown1 } from "react-icons/ci";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion"

// eslint-disable-next-line react/prop-types
const Card = ({data}) => {
  return (
    <motion.div drag whileDrag={{scale:1.2}} className=' w-60 h-72 rounded-[20px] bg-zinc-900 p-5 relative text-white overflow-hidden'>

        <span> <FaRegFileAlt/> </span>

       
        <p className=' mt-3'>{data.text}</p>

        <div className=" absolute left-0 w-full p-3 pr-5 top-[60%] text-white font-thin flex items-center justify-between">
            <p>{data.size}</p>
            <span className=' text-2xl'>
                {data.icon ? <IoCloseCircleOutline/> : <CiSaveDown1/> }
            </span>
        </div>


        {data.lol ? <div className={` down bottom-0 absolute w-full h-12 text-xl left-0 ${data.color} flex justify-center items-center text-center`}>{data.download ? "Download" : "Done"}</div> : null}


    </motion.div>
    
    )
}

export default Card