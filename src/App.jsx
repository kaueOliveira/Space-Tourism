import Home from "./pages/Home/Home"
import Destination from "./pages/Destination/Destination";
import Crew from "./pages/Crew/Crew";
import Tecnology from "./pages/Tecnology/Tecnology"

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/destination" element={<Destination/>}/>
        <Route path="/crew" element={<Crew/>}/>
        <Route path="/technology" element={<Tecnology/>}/>
      </Routes>
    </Router>
  )
}

export default App
