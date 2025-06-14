import "./css/App.css"
import Favorites from './pages/Favorites'
import Home from "./pages/HomePage"
import NavBar from "./components/NavBar"
import { MovieProvider } from "./contexts/MovieContext"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <MovieProvider>
      <div>
        <NavBar />
      </div>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App
