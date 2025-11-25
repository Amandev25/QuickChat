import { useContext, React } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import { Toaster } from "react-hot-toast"
import { AuthContext } from '../context/AuthContext'

const App = () => {
 
  const {authUser} = useContext(AuthContext) ; 

  return (
    <div className= "bg-[url('./src/assets/bgImage.svg')] bg-contain" >
      <Toaster/>
      <Routes>
        <Route path='/' element ={authUser ? <HomePage/> : <Navigate to="/login"/>} /> // agr user login : homepage else : login page 
        <Route path='/login' element ={!authUser ? <LoginPage/> : <Navigate to="/"/>}/> // user login nhi hai : login page else : home page 
        <Route path='/profile' element ={authUser ? <ProfilePage/> : <Navigate to= '/login'/>}/> // agr user login hai then profile page else login page 
      </Routes>
    </div>
  )
}

export default App
