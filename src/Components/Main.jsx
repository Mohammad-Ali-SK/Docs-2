// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react'
import Card from './Card'

const Main = () => {
  const ref = useRef(null);
  const data = [
    {icon : true, text: "Lorem ipsum dolor sit amet consectetur adipisicing.",size:"0.7mb",download:true,downicolor:true, com:true, downloadColor:true},
    {icon : true, text: "Sorem ipsum dolor sit amet consectetur Suffer.",size:".9mb",download:false,downicolor:false,com:false,downloadColor:false},
    {icon : true, text: "Rorem ipsum dolor sit amet  adipisicing in the sky on the body.",size:".23mb",download:false,downicolor:false,com:false,downloadColor:false},
  ]

  return (
    <div ref={ref} className='w-full h-full m-6 top-0 left-0 fixed z-[3] flex gap-5 flex-wrap'>
      {data.map((item, index) => (
        <Card key={index} data={item} refrence={ref} />
      ))}
    </div>
  )
}

export default Main
