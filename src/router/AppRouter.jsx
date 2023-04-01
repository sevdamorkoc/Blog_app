import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Dashboard from "../pages/Dashboard"
import NavBar from "../components/NavBar"
const AppRouter = () => {
  return (
    <Router>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Dashboard />} />
        </Routes>
    </Router>
  )
}

export default AppRouter