import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { HttpCat } from "./pages/HttpCat/HttpCat"
import { Login } from "./pages/Login/Login"
import { Main } from "./pages/Main/Main"
import { RandomDog } from "./pages/RandomDog/RandomDog"

function App() {

  return (
    <div >
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Main />} />
          <Route path="/httpcat" element={<HttpCat />} />
          <Route path="/random-dog" element={<RandomDog />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
