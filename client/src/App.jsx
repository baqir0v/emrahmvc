import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar"
import Home from "./components/home"
import Login from "./components/Login"
import SignUp from "./components/signup"

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path={"/"} element={<Home/>} />
      <Route path={"/login"} element={<Login/>} />
      <Route path={"/signup"} element={<SignUp/>} />
    </Routes>
    </>
  )
}

export default App