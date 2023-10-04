import { useState } from 'react'

import './App.css'


import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation} from 'react-router-dom';
import Dashboard from './components/Dashboard'
import Layout from './components/Layout';

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
     <Router>   
          <Routes>
            <Route path="/dashboard" element={<Layout><Dashboard/></Layout>} />
          </Routes>
     </Router>
    </>
  )
}

export default App
