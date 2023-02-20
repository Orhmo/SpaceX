import './index.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'

const App: React.FC = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Auth />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
