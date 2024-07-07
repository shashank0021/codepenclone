import React from 'react'
import SplitPane from "react-split-pane"
import "../index.css"
import { FaChevronDown, FaCss3, FaHtml5, FaJs } from 'react-icons/fa6'
import { FcSettings } from 'react-icons/fc'
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useState ,useEffect} from "react"
import {Logo} from "../assets"
import { Link } from 'react-router-dom'
import { MdCheck, MdEdit } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { Userprofile } from '.'
import { doc, setDoc } from 'firebase/firestore'
import { AnimatePresence } from 'framer-motion'
import {Alert} from "../components"
import { db } from '../fierbase/firebase'



const newproject = () => {


  const [html, sethtml] = useState("")
  const [css, setcss] = useState("")
  const [js, setjs] = useState("")
  const [result, setresult] = useState("")
  const [title, settitle] = useState("")
  const [istitle, setistitle] = useState("")
  const [alert, setalert] = useState("")

  const user = useSelector(state => state.user?.user)


  useEffect(() => {
    updateOutput()

    }
  , [html,css,js])
  

  const updateOutput= ()=>{
    const combinedOutput = `
    <html>
    <head>
    <style>${css}</style>
    </head>
    <body>
    ${html}
    <script>${js}</script>
    </body>
    </html>`
    setresult(combinedOutput)
  }

  const saveproject= async()=>{
    const id = `${Date.now()}`
    const docu = {
      id : id,
      title : title,
      html :html,
      css : css,
      js: js,
      result : result,
      user : user
    }
    await setDoc(doc(db,"projects" ,id),docu).then((res)=>{
      setalert(true)
    })
    .catch((err) => console.log(err))


    setInterval(()=>{
      setalert(false)
    },2000);
  }




  return (
    <>
    <div className='w-screen h-screen flex flex-col items-start justify-start overflow-hidden'>
      <AnimatePresence>
        {alert && <Alert status={"Success"} alertmsg={"project Saved..."} />}
        
      </AnimatePresence>

      <header className='w-full flex items-center justify-between px-12 overflow-hidden'>
        <div className='flex items-center justify-center gap-6'>

          <Link to={"/home/projects"}>
          <img className='w-32 h-auto object-contain' src={Logo} alt="" />
          </Link>

          <div className='flex flex-col items-start jsutify-start'>


          <div className='flex  items-center justify-center gap-3'>


            {istitle ? (<input key={"tileInput"}  type='text' placeholder='your title' value={title} onChange={(e)=>{settitle(e.target.value)}} 
            className='px-3 py-2 rounded-md bg-transparent text-primaryText text-base outline-none border-none'/>) : (<p key={"titlelabel"} className='px-3 py-2 text-white text-lg'>{title}</p>) }



            {istitle ? (<> <div key={"mdcheck"} className='cursor-pointer' onClick={()=>setistitle(false)}>
              <MdCheck className='text-2xl text-emerald-500'/></div></>) : (<> <div key={"mdedit"}onClick={()=>setistitle(true)}><MdEdit className='text-2xl text-primaryText'/></div></>) }


          </div>
          <div className='flex items-center justify-center px-3 -mt-2 gap-2'>
            <p className='text-primaryText text-sm'>
              {user?.displayName ? user?.displayName : `${user.email.split("@")[0]}`}

            </p>
            <p className='text-[10px] bg-emerald-500 rounded-sm px-2 py-[1px] text-primary font-semibold' >+Follow</p>
          </div>
          </div>
         
        </div>
        {user && (<div className='flex items-center justify-center gap-4'>
            <button className='px-6 py-4 bg-primaryText cursor-pointer text-base text-primary font-semibold rounded-md' onClick={saveproject}>Save</button>
            <Userprofile/>
          </div>)}
      </header>


         <div>
          <SplitPane split="horizontal" minSize={100} maxSize={-100} defaultSize={"50%"}>

            <SplitPane split='vertical' minSize={500}>
              <div className='w-full h-full flex flex-col items-start justify-start'>
                <div className='w-full flex items-center justify-between border-t-greay-500'>
                <div className='bg-secondary px-4 py-2 border-t-4 flex items-center justify-center gap-3'>
                  <FaHtml5 className='text-xl text-red-500'/>
                  <p className='text-primaryText  font-semibold'>HTML</p>

                </div>
                
                <div className='cursor-pointer flex items-center justify-center gap-5 px-4'>
                  <FcSettings className='text-xl'/>
                  <FaChevronDown className='text-xl text-primaryText'/>
                </div>
                </div>
                <div className='w-full px-2'>
                <CodeMirror value= {html} height="600px" extensions={[javascript({ jsx: true })]} onChange={(value,viewUpdate)=>{sethtml(value)}} theme={"dark"}/>
                </div>
                
              </div>
              <SplitPane split='vertical' minSize={500}>
              <div className='w-full h-full flex flex-col items-start justify-start'>
                <div className='w-full flex items-center justify-between border-t-greay-500'>
                <div className='bg-secondary px-4 py-2 border-t-4 flex items-center justify-center gap-3'>
                  <FaCss3 className='text-xl text-blue-500'/>
                  <p className='text-primaryText  font-semibold'>CSS</p>

                </div>
                
                <div className='cursor-pointer flex items-center justify-center gap-5 px-4'>
                  <FcSettings className='text-xl'/>
                  <FaChevronDown className='text-xl text-primaryText'/>
                </div>
                </div>
                <div className='w-full px-2'>
                <CodeMirror value= {css} height="600px" extensions={[javascript({ jsx: true })]} onChange={(value,viewUpdate)=>{setcss(value)}} theme={"dark"}/>
                </div>
                
                
              </div>


              <div className='w-full h-full flex flex-col items-start justify-start'>
                <div className='w-full flex items-center justify-between border-t-greay-500'>
                <div className='bg-secondary px-4 py-2 border-t-4 flex items-center justify-center gap-3'>
                  <FaJs className='text-xl text-yellow-500'/>
                  <p className='text-primaryText  font-semibold'>JS</p>

                </div>
                
                <div className='cursor-pointer flex items-center justify-center gap-5 px-4'>
                  <FcSettings className='text-xl'/>
                  <FaChevronDown className='text-xl text-primaryText'/>
                </div>
                </div>
                <div className='w-full px-2'>
                <CodeMirror value= {js} height="600px" extensions={[javascript({ jsx: true })]} onChange={(value,viewUpdate)=>{setjs(value)}} theme={"dark"}/>
                </div>
                
                
              </div>

              </SplitPane>
            </SplitPane>

            <div className='bg-white' style={{overflow:"hidden", height: "100%"}}>
              <iframe title='result' srcDoc={result} style={{border:"none", width:"100%", height:"100%"}}/>
            </div>


          </SplitPane>
            
         </div>
         </div>
    </>
  )
}

export default newproject