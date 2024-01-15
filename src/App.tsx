import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'

function App () {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  )
}

export default App
