import React,{useState} from 'react'
import {Logo} from "../assets"
import {Signinpage} from "../components"
import { FaEnvelope, FaGithub } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'
import { MdPassword } from 'react-icons/md'
import { motion } from 'framer-motion'
import { SignInGoogle,SignInGithub } from '../fierbase/SignInGoogle.js'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../fierbase/firebase'
import { Navigate } from 'react-router-dom'


function signup() {

  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [GetEmailValidationStatus, setGetEmailValidationStatus] = useState(false)
  const [islogin, setislogin] = useState(true)
 


  const newuser = async()=>{
    if(GetEmailValidationStatus){
      await createUserWithEmailAndPassword(auth,Email,Password).then((usercred)=>{if(usercred){
        console.log(usercred)
      }})
      .catch((err) => console.log(err))
    }
  }

  const login = async()=>{
    if(GetEmailValidationStatus){
      await signInWithEmailAndPassword(auth,Email,Password).then(usercred =>{
        if(usercred){
          Navigate("/home/projects")
        }
      })
      .catch((err)=>{
        console.log(err.message)
      })
    }
  }



  return (
    <div className='w-full py-6 '>
       <img src={Logo} alt='logo' className='object-contain w-32 opacity-50 h-auto'></img>

       <div className='w-full flex flex-col flex-1 items-center justify-center py-8 '>
        <p className='py-12 text-2xl text-primaryText'>Join with us! 😀</p>

        <div className='px-8 w-full md:w-auto py-4 rounded-xl bg-secondary shadow-md flex flex-col items-center gap-8'>


          <Signinpage label="Email" placeHolder="Email" ispass={false} key="Email" setstatefunction={setEmail} Icon={FaEnvelope} setGetEmailValidationStatus={setGetEmailValidationStatus}/>
          <Signinpage label="Password" placeHolder="Password" ispass={true} key="Password" setstatefunction={setPassword} Icon={MdPassword} />
          

         {
         islogin ?
          ( <motion.div onClick={login} whileTap={{scale:0.9}} className='flex items-center justify-center w-full py-3 rounded-xl hover:bg-emerald-400 cursor-pointer bg-emerald-500'>
            <p className='text-xl text-white '>Login</p>
          </motion.div>)
          :
          ( <motion.div onClick={newuser}whileTap={{scale:0.9}} className='flex items-center justify-center w-full py-3 rounded-xl hover:bg-emerald-400 cursor-pointer bg-emerald-500'>
            <p className='text-xl text-white '>Sign Up</p>
          </motion.div>)
          }
          {
            islogin ?
            (<p className='text-sm text-primaryText flex items-center justify-center gap-3'>Doesn't Have an account !{" "} <span className='text-emerald-500 cursor-pointer' onClick={()=>{setislogin(!islogin)}}>Create Here</span></p>)
            :
            (<p className='text-sm text-primaryText flex items-center justify-center gap-3'>Already Have an account !{" "} <span className='text-emerald-500 cursor-pointer' onClick={()=>{setislogin(!islogin)}}>Login Here</span></p>)
          }

          <div className='flex items-center justify-center gap-12'>
            <div className='h-[1px] bg-[rgba(256,256,256,0.2)] rounded-md w-24'></div>
            <p className='text-sm text-[rgba(256,256,256,0.2)] '>OR</p>
            <div className='h-[1px] bg-[rgba(256,256,256,0.2)] rounded-md w-24'></div>
          </div>
          


          <motion.div onClick={SignInGoogle} whileTap={{scale:0.9}} className='flex items-center justify-center gap-3 bg-[rgba(256,256,256,0.2)] backdrop-blur-md w-full py-3 rounded-xl hover:bg-[rgba(256,256,256,0.4)]'>
            <FcGoogle className='text-3xl'></FcGoogle>
            <p className='text-xl text-white'>Sign in with Google</p>

          </motion.div>




          <div className='flex items-center justify-center gap-12'>
            <div className='h-[1px] bg-[rgba(256,256,256,0.2)] rounded-md w-24'></div>
            <p className='text-sm text-[rgba(256,256,256,0.2)] '>OR</p>
            <div className='h-[1px] bg-[rgba(256,256,256,0.2)] rounded-md w-24'></div>
          </div>


          <motion.div onClick={SignInGithub} whileTap={{scale:0.9}} className='flex items-center justify-center gap-3 bg-[rgba(256,256,256,0.2)] backdrop-blur-md w-full py-3 rounded-xl hover:bg-[rgba(256,256,256,0.4)]'>
            <FaGithub className='text-3xl text-white' />
            <p className='text-xl text-white'>Sign in with GitHub</p>

          </motion.div>
          

        </div>
       </div>
    </div>
  )
}

export default signup