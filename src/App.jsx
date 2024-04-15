import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Home/Home'
import { DataJs } from './Components/DataJs.jsx/DataJs'
import  Calculator from './Components/Calculator/Calculator'     
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/data" element={<DataJs />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
