import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Routes/Home'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Admin from './Routes/Admin'
import AddProduct from './Routes/AddProduct'

function App() {


  return (
    <div>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/admin" element={<Admin/>} />
            <Route path="/card/:id" element={""} />
            <Route path='/admin/AddProduct' element={<AddProduct/>}/>
          </Routes>
          <Footer/>
    </div>
  )
}

export default App
