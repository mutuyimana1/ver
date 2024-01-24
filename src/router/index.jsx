import react from "react"
import {BrowserRouter as Router, Routes,Route } from "react-router-dom"
import HomePage from "../pages/homePage"
const Index=()=>{
    return(
        <Router>
        <Routes>
            <Route path="/home" element={<HomePage/>}/>
        </Routes>
        </Router>
    )
}
export default Index