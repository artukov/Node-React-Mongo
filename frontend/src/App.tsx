import { Route, Routes } from "react-router-dom"
import { Home } from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import { ToastContainer } from "react-toastify"
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from "./context/userContext"
import Navbar from "./components/shared/Navbar"

function App() {

  return (
    <UserProvider>
      <Navbar />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        closeOnClick
        pauseOnHover
        draggable
        style={{ fontSize: '0.875rem' }}
        toastStyle={{ fontSize: '0.875rem' }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </UserProvider>
    
  )
}

export default App
