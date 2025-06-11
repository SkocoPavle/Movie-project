import './App.css'
import Favourites from './pages/Favourites'
import Home from "./pages/HomePage"
import NavBar from "./components/NavBar"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favourites' element={<Favourites />} /> 
        </Routes>
      </main>
    </div>
  )
}

export default App
