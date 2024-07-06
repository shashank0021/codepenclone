import { GithubAuthProvider,GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import { auth } from './firebase'
import { v4 as uuidv4} from "uuid"


const googleprovider = new GoogleAuthProvider()
const githubprovider = new GithubAuthProvider()



export  const SignInGoogle = async() => {

    await signInWithRedirect(auth,googleprovider).then(userCred =>{
        window.location.reload()
        
    })

}

export  const SignInGithub = async() => {

    await signInWithRedirect(auth,githubprovider).then(userCred =>{
        window.location.reload()
    })

}


export const Menus =[
    {id: uuidv4(), name:"projects", url:"/home/projects"},
    {id: uuidv4(), name:"Collections", url:"/home/collection"},
    {id: uuidv4(), name:"profile", url:"/home/profile"},

]


export const signout = async()=>{
    await auth.signOut().then(()=>{
        window-location.reload()
    })
}


export const slideupout = {
    initial : {opacity: 0, y:50},
    animate : {opacity : 1 ,y:1},
    exit :  {opacity : 0 , y:50}
}