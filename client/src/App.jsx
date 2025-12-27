import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Collections from './pages/Collections'
const App = () => {
  return (
    <main className="overflow-hidden text-tertiary">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='collections' element={<Collections/>}/>
      </Routes>
    </main>
  )
}

export default App
