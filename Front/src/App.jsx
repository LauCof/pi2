import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Routes/Home'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

function App() {


  return (
    <div>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/" element={""} />
            <Route path="/card/:id" element={""} />
            <Route path="/" element={""} />
          </Routes>
          <Footer/>
    </div>
  )
}

export default App
