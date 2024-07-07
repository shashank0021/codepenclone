import React from 'react'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

function projects() {
  const pro = useSelector((state)=> state.project?.projects)

  return (
    <div className='w-full py-6 flex items-center justify-center gap-6 flex-wrap'>
      {pro && (pro.map((project,index)=>{
        return(
          <ProjectCard key={project.id} project={project} index={index}/>
        )
        
        
      
        
      }))}
    </div>
  )
}

const ProjectCard = ({project,index}) => {
  return (
    <motion.div key={index} className='w-full cursor-pointer md:w-[480px] h-[375px] bg-secondary rounded-md p-4 flex flex-col items-center justify-center gap-4'>
    <div className='w-full h-full'>
       <div className='bg-primary w-full rounded-md ' style={{overflow:"hidden", height: "100%"}}>
              <iframe title='result' srcDoc={project.result} style={{border:"none", width:"100%", height:"100%"}}/>
            </div>
            </div>

            <div className='flex items-center justify-start gap-3 w-full' >
            <div className='w-14 h-14 flex items-center justify-center rounded-xl overflow-hidden cursor-pointer bg-emerald-500'>
            {
          project?.user?.photoURL ? (<>
            <img src={ project?.user?.photoURL} alt=""  referrerPolicy='no-referrer' className='w-full h-full object-cover'/>
          </>) : (<p className='text-xl text-white font-semibold capitalize'>
            {project?.user?.email[0]}
          </p>)

        }
       

      </div>
      <div>
        <p className='text-white text-lg capitalize'>{project?.title}</p>
        <p className='text-primaryText text-sm capitalize'>{
          project?.user?.displayName ? project?.user?.displayName : `${project?.user.email.split("@")[0]}`} </p>
      </div>
      
         

            </div>

    </motion.div>
  )
}
  
export default projects