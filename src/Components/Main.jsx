// eslint-disable-next-line no-unused-vars
import React from 'react'
import Card from './Card'


const Main = () => {
    const data = [
        {icon:false,text:"sit amet consectetur adipisicing elit. Quia facere corporis natus excepturi .",size:".03mb", download:true,color:"bg-green-600",lol:true},
        {icon:true,text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia facere corporis natus excepturi .",size:"Close", download:false, color: 'bg-blue-600',lol:false},
        {icon:false,text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.  .",size:".03mb", download:true,color:"bg-blue-600",lol:true},

    ];
  return (
    <main className=' p-5 absolute w-full h-screen top-0 left-0 z-5 flex flex-wrap gap-3'>
     {data.map((item,index) => (
        // eslint-disable-next-line react/jsx-key
        <Card data={item}/>
     ))}
    

      </main>

    )
}

{/* <p className=' bg-green-600'</p> */}
export default Main
