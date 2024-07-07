import React from 'react'
import { motion } from 'framer-motion'
import { slideupout } from '../fierbase/SignInGoogle'

const Alert = ({status,alertmsg}) => {
  return (
    <motion.div {...slideupout} className='fixed top-20 right-12 z-10'>
        {status === "Success" && (
            <div className='px-4 py-2 rounded-md bg-emerald-400 shadow-md'>
                <p className='text-lg text-primary'>{alertmsg}</p>
            </div>
        )}

        {status === "Warning" && (
            <div className='px-4 py-2 rounded-md bg-yellow-400 shadow-md'>
                <p className='text-lg text-primary'>{alertmsg}</p>
            </div>
        )}

        {status === "Danger" && (
            <div className='px-4 py-2 rounded-md bg-red-400 shadow-md'>
                <p className='text-lg text-primary'>{alertmsg}</p>
            </div>
        )}
    </motion.div>

    
  )
}

export default Alert