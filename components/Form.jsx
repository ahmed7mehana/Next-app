import React, { useState } from 'react'
import {db}from '../firebaseConfig'
import 'firebase/firestore';
import {  addDoc,collection } from 'firebase/firestore'


function Form({handleForm}) {
    const[Image ,setImage]=useState()
    const[title ,settitle]=useState()
    const[description ,setdescription]=useState()
    const[link ,setlink]=useState()
   
   
   
    const handle=(e)=>{
      e.preventDefault()

      setImage("")
      settitle("")
      setdescription("")
      setlink("")
       addDoc(userCollectionRef,{
           img:Image,
           title:title,
           description:description,
           link:link,
          
       })
    }
   
   const userCollectionRef=collection(db,"Courses")

   
  return (
    <div className='fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded z-[10000] bg-red-500 w-[260px] sm:w-[500px] p-3'>
    <button className=' bg-black text-white rounded-full p-2 w-full sm:w-fit' onClick={handleForm}>X</button>
    <form className='flex flex-col  items-center'>

    <label className='text-[20px] '>Image</label>
    <input type='text'  value={Image} onChange={(e)=>{setImage(e.target.value)}} className='w-[80%] rounded-[30px] p-3 text-right text-sm' placeholder='ادخل لينك الصوره '/>
  
    <label className='text-[20px] '>title</label>
    <input type='text'   value={title} onChange={(e)=>{settitle(e.target.value)}}   className='w-[80%] rounded-[30px] p-3 text-right text-sm' placeholder=" العنوان "  /> 
  
    <label className='text-[20px] '>description</label>
    <input type='text'  value={description}  onChange={(e)=>{setdescription(e.target.value)}}  className='w-[80%] rounded-[30px] p-3 text-right text-sm' placeholder=" الوصف "   />
  
    <label className='text-[20px] '>link</label>
    <input type='text'  value={link}  onChange={(e)=>{setlink(e.target.value)}}  className='w-[80%] rounded-[30px] p-3 text-right text-sm' placeholder=" لينك الموقع "   />
  
  

    <button onClick={handle} className='mt-[60px] bg-[#f78da7] p-3 rounded text-[#eee] px-10 font-bold hover:scale-[1.06] duration-500'>Add</button>
    </form>
    </div>
  )
}

export default Form