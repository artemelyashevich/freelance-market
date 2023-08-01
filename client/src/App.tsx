import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Error from './pages/Error/Error'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import './style/style.scss'
import Category from './pages/Category/Category'
import Profile from './pages/Profile/Profile'
import About from './pages/About/About'
import Policy from './pages/Policy/Policy'

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/privacy-policy' element={<Policy/>} />
          <Route path='/category/:title' element={<Category />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App