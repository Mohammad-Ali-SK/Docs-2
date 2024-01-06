// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { MdOutlineFileDownloadDone } from "react-icons/md";

import { motion } from "framer-motion"

const Card = ({data, refrence}) => {
  return (
    <motion.div drag dragConstraints={refrence}>
      <div className='m-4 p-3 w-[185px] h-[230px] bg-zinc-900 text-white rounded-[18px] relative overflow-hidden relative'>
        <div className='hover:cursor-pointer'>
          <FaRegFileAlt/>
        </div>
        <p className='m-3 text-[15px] font-[350] opacity-[.7] leading-none'>{data.text}</p>
        <div className='mt-[50px] flex justify-between items-center'>
          <p className='font-semibold'>{data.size}</p>
          <div className='bg-gray-400 w-5 text-black h-5 rounded-[50%] flex justify-center items-center'>
            {data.download ? <MdOutlineFileDownload/> : <MdOutlineFileDownloadDone/>}
          </div>
        </div>
   
        <div className={`${data.downicolor ? 'bg-blue-500' : 'bg-green-500'} w-full absolute left-0 bottom-0 ${data.downloadColor ? 'text-black' : 'text-white'} text-center font-semibold h-10 items-center flex justify-center hover:cursor-pointer`}>
          {data.com ? "Download" : "Complete"}
        </div>
      </div>
    </motion.div>
  )
}

export default Card
