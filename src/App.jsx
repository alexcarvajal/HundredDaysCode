import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Home/Home'
import { DataJs } from './Components/DataJs.jsx/DataJs'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/data" element={<DataJs />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
