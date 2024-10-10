import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Home from './pages/Home'
import Register from './pages/Register'
import Sponsors from './pages/Sponsors'
import Team from './pages/Team'
import Badminton from './pages/gamesDescription/Badminton'
import Footsal from './pages/gamesDescription/Futsal'
import Carrom from './pages/gamesDescription/Carrom'
import Dodgeball from './pages/gamesDescription/Dodgeball'
import FootVolley from './pages/gamesDescription/FootVolley'
import Frisbee from './pages/gamesDescription/Frisbee'
import GullyCricket from './pages/gamesDescription/GullyCricket'
import SevenStones from './pages/gamesDescription/SevenStones'
import KhoKho from './pages/gamesDescription/KhoKho'
import Throwball from './pages/gamesDescription/Throwball'
import TugOfWar from './pages/gamesDescription/TugOfWar'
import ScrollToTop from './component/ScrollToTop'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Register />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/our-team" element={<Team />} />
          <Route path="/games/badminton" element={<Badminton />} />
          <Route path="/games/futsal" element={<Footsal />} />
          <Route path="/games/carrom" element={<Carrom />} />
          <Route path="/games/dodgeball" element={<Dodgeball />} />
          <Route path="/games/foot-volley" element={<FootVolley />} />
          <Route path="/games/frisbee" element={<Frisbee />} />
          <Route path="/games/gully-cricket" element={<GullyCricket />} />
          <Route path="/games/seven-stones" element={<SevenStones />} />
          <Route path="/games/kho-kho" element={<KhoKho />} />
          <Route path="/games/throwball" element={<Throwball />} />
          <Route path="/games/tug-of-war" element={<TugOfWar />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
