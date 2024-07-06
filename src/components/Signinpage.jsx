import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa6'
import { motion } from 'framer-motion'

function Signinpage({label,placeHolder,ispass,setstatefunction, Icon,setGetEmailValidationStatus}) {

    const[value,setvalue]= useState("")
    const [showpass, setshowpass] = useState(false)
    const [isEmailvalid, setisEmailvalid] = useState(false)


function handletextchange(e)
{
    setvalue(e.target.value)
    setstatefunction(e.target.value)
    if(placeHolder === "Email"){
        const emailregex= /^[^s@]+@[^\s@]+\.[^\s@]+$/
        const status = emailregex.test(value)
        setisEmailvalid(status)
        setGetEmailValidationStatus(status)
    }
}

  return (
    <div className='flex flex-col items-start justify-start gap-1'>
        <label className='text-sm text-gray-300'>{label}</label>
        <div className= {`flex items-center justify-center gap-3 w-full md:w-96 rounded-md px-4 py-1 bg-gray-200 ${ !isEmailvalid && placeHolder === "Email" && value.length>0 && "border-2 border-red-500" }` }>
            <Icon className='text-text555 text-2xl'/>
            <input type={ispass && showpass ? "password" : "text"} placeholder={placeHolder}  className='flex-1 w-full h-full py-2 outline-none border-none bg-transparant text-tetx555 text-lg' value={value} onChange={handletextchange}/>
            
            {ispass && (<motion.div whileTap={{scale:0.9}} onClick={()=>{setshowpass(!showpass)}}className='cursor-pointer'>
                {showpass ? <FaEyeSlash className='text-text555 text-2xl'/> : <FaEye className='text-text555 text-2xl'/>}
            </motion.div>)}
        </div>
    </div>
  )
}

export default Signinpage