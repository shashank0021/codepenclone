import React, { useState } from 'react'
import {HiChevronDoubleLeft , HiChevronDoubleRight} from "react-icons/hi2"
import {MdHome} from "react-icons/md"
import {FaSearchengin} from "react-icons/fa6"
import { Link, Routes, Route } from 'react-router-dom'
import {motion} from "framer-motion"
import {Logo} from "../assets"
import {Projects , Signup, Userprofile} from "../components"
import { useSelector } from 'react-redux'

function Home() {
    const [menu,setmenu] = useState(false)//for sliding menu
    const user = useSelector(state => state.user?.user)

  return (
    <>
    <div className= {`w-2 ${menu ? "w-2" : "flex-[.2] xl:flex-[.2]"} min-h-screen max-h-screen relative bg-secondary px-3 py-6 flex flex-col items-center justify-start gap-4 transition=all duration-200 ease-in-out`} >
        
        <motion.div whileTap={{scale:0.9}} className='w-8 h-8 bg-secondary rounded-tr-lg rounded-br-lg absolute -right-6 flex items-center justify-center cursor-pointer' onClick={()=>{setmenu(!menu)}}>
            {menu ?
            <HiChevronDoubleRight className='text-white text-xl'/>:
            <HiChevronDoubleLeft className='text-white text-xl'/>
            }
        </motion.div>

        <div className='overflow-hidden w-full flex flex-col gap-4'>
            <Link to={"/home"}>
                <img src={Logo} alt='logo' className='object-contain w-72 h-auto'></img>
            </Link>

            <Link to={"/newproject"}>
            <div className='px-6 py-3 flex items-center justify-center rounded-xl border border-gray-400 cursor-pointor group hover:border-gray-200'>\
                <p className='text-gray-400 group-hover:text-gray-200 capitalize'>Start Coding</p>
            </div>
            </Link>
            {user && (
                <Link to={"/home/projects"} className='flex items-center justify-center gap-6'>
                    <MdHome className='text-primaryText text-xl'/>
                    <p className='text-lg text-primaryText'>Home</p>
                </Link>
            )}

        </div>


    </div>


    <div className='flex-1 min-h-screen max-h-screen overflow-y-scroll h-full flex flex-col item-start justify-start px-4 md:px-12 py-4 md:py-12 '>

        <div className='w-full flex item-center justify-between gap-3 '>
            <div className='bg-secondary w-full px-2 py-2 rounded-md flex item-center justify-center gap-3'>
                <FaSearchengin className='text-2xl text-primaryText'/>
                <input className='flex-1 px-4 py-2 text-xl bg-transparent outline-none border-none text-primaryText palceholder:text-gray-600' placeholder='Search here...'/>
            </div>
            {!user && (
                <motion.div whileTap={{scale: 0.9}} className='flex items-center jsutify-center gap-3'>
                    <Link to={"/home/auth"} className='bg-emerald-500 px-6 py-2 text-white rounded-md text-sm cursor-pointer hover:bg-emerald-700'>
                    SignUp

                    </Link>
                </motion.div>
            )}

            {
                user && 
                <Userprofile/>
            }
        </div>
        <div className='w-full'>
            <Routes>
                <Route path="/*" element={<Projects />}/>
                <Route path="/auth" element={<Signup />}/>
            </Routes>
        </div>
    </div>

    </>
  )
}

export default Home