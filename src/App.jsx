import React, { useEffect , useState } from 'react'
import { Home, Newproject, Spinner } from './components'
import { Navigate, Route, Routes, useNavigate} from 'react-router-dom'
import { auth, db } from './fierbase/firebase'
import { doc, setDoc } from 'firebase/firestore'
import { useDispatch } from 'react-redux'
import { SET_USER } from './context/actions/useraction'


function App() {
  const navigate = useNavigate()
  const [isloading, setisloading] = useState(true)
  const dispatch = useDispatch()


   useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((userCred)=>{
      if(userCred){
        console.log(userCred?.providerData[0])
        setDoc(doc(db,"users",userCred?.uid) , userCred?.providerData[0]).
        then(()=>{
          dispatch(SET_USER(userCred?.providerData[0]))
          navigate("/home/projects", {replace : true})
        })
      }
      else{
        navigate("/home/auth",{replace: true})
      }
      setInterval(() => {
        setisloading(false)
        
      }, 2000);
    })

    return ()=> unsubscribe()
   },[])




 
  return (
    <>
    {isloading ? 
    (<div className='w-screen h-screen flex items-center justify-center overflow-hidden'>
      <Spinner/>
    </div>) 
    : 
    (<div className='w-screen h-screen flex items-start justify-start overflow-hidden'>
      <Routes>
        <Route path="/home/*" element={<Home/>}></Route>
        <Route path="/newproject" element={<Newproject/>}></Route>

        <Route path="*" element={<Navigate to={"/Home"}/>}></Route>
      </Routes>
    </div>)
    }
    
    </>
  
  )
}

export default App