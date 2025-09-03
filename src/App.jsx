import Home from "./pages/Home/Home"
import Destination from "./pages/Destination/Destination";

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/destination" element={<Destination/>}/>
      </Routes>
    </Router>
  )
}

export default App
