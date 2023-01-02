import { Route, Routes } from "react-router-dom"
import ProtectedRoutes from "../components/ProtectedRoutes"
import { HomePage } from "../pages/home"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"


export const RoutesComponent = () => {

    return(
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>} />
            {/* <Route element={<ProtectedRoutes/>}> */}
            <Route path="/homepage" element={<HomePage/>}/>
            {/* </Route> */}
        </Routes>
        
    )
}