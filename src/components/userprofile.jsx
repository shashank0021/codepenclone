import React,{useState} from 'react'
import { FaChevronDown } from 'react-icons/fa6'
import {useSelector} from "react-redux"
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Menus,signout,slideupout } from '../fierbase/SignInGoogle'

const userprofile = () => {
  const user = useSelector(state => state.user?.user)

  const [ismenu, setismenu] = useState(false)


  return (
    <div className='flex items-center justify-center gap-4 relative'>
      <div className='w-14 h-14 flex items-center justify-center rounded-xl overflow-hidden cursor-pointer bg-emerald-500'>
        {
          user?.photoURL ? (<>
            <img src={ user?.photoURL} alt={user?.displayName}  referrerPolicy='no-referrer' className='w-full h-full object-cover'/>
          </>) : (<p className='text-xl text-white font-semibold capitalize'>
            {user?.email[0]}
          </p>)

        }

      </div>

      <motion.div  whileTap={{scale : 0.9}} className='p-4 rounded-md items-center justify-center bg-secondary cursor-pointer' onClick={()=>{setismenu(!ismenu)}}>
        <FaChevronDown className='text-primaryText '/>
      </motion.div>

     <AnimatePresence>
      {ismenu && ( <motion.div {...slideupout} className='bg-secondary absolute top-20 right-0 px-4 py-3 rounded-xl sahdow-md z-10 flex flex-col items-start justify-start gap-4 min-w-[225px]'> 
        {
          Menus &&  
          Menus.map((menu)=>{
            return(
            <Link to={menu.url} key={menu.id} className="text-primaryText text-lg hover:bg[rgba(256,256,256,0.0.5)] px-2 py-1 w-full rounded-md"> 
              {menu.name} 
            </Link>
            )
          })
        }
        <motion.p whileTap={{scale: 0.9}} onClick={signout} className="text-primaryText text-lg hover:bg[rgba(256,256,256,0.0.5)] px-2 py-1 w-full rounded-md">Sign Out</motion.p>

      </motion.div>)}
     </AnimatePresence>

    </div>
  )
}

export default userprofile