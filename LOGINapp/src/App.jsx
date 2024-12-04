import { useState } from 'react'
import './App.css'

import appFirebase from '../src/credenciales'
import {getAuth, onAuthStateChanged} from 'firebase/auth'


import Login from '../src/components/Login'
import Home from '../src/components/Home'
const auth = getAuth(appFirebase)

function App() {
  const [usuario,setUsuario] = useState(null)

  onAuthStateChanged(auth, (usuarioFirebase)=> {
    if(usuarioFirebase){
      setUsuario(usuarioFirebase)
    }else{
      setUsuario(null)
    }
  })


  return (
    
      <div>
      {usuario ? <Home correoUsuario = {usuario.email}/> : <Login/>}

      </div>

    
  )
}

export default App
