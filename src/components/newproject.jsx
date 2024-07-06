import React from 'react'


const newproject = () => {
  return (
    <>
    <div className='w-screen h-screen flex flex-col items-start justify-start overflow-hidden'>
         <div className=''>
            <SplitPane split="horizontal" minSize={100} maxSize={-100} defaultSize={"50%"}></SplitPane>
         </div>
         </div>
    </>
  )
}

export default newproject