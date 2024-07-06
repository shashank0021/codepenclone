import {getApp,getApps,initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCKKwv_S6IDXfUDh36gL9EWcx3RWOzhlrA",
  authDomain: "mod-5-project-df901.firebaseapp.com",
  projectId: "mod-5-project-df901",
  storageBucket: "mod-5-project-df901.appspot.com",
  messagingSenderId: "951517267272",
  appId: "1:951517267272:web:14079c33ad5699fc1f9f7d"
};
  

  const app= getApps.length >0 ? getApp() : initializeApp(firebaseConfig)
  const auth =getAuth(app)
  const db=getFirestore(app)

  export { app ,auth , db}