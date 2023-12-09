import { Route, Routes } from 'react-router-dom'
// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// Screens
import Home from './screens/Home'
import About from './screens/About'
import AddReview from './screens/AddReview'
import Catering from './screens/Catering'
import Contact from './screens/Contact'
import Gallery from './screens/Gallery'
import Menu from './screens/Menu'
import Reviews from './screens/Reviews'
import Schedule from './screens/Schedule'
import './index.css'

function App() {


  return (
    <div className="App h-[100%] bg-gradient-to-br from-green-700 to-yellow-400 relative bg-cover min-w-fit min-h-screen min-w-full">
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/addReview" element={<AddReview />} />
        <Route path="/catering" element={<Catering />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="schedule" element={<Schedule />} />
      </Routes>
    </main>
    <Footer />
  </div>
  )
}

export default App
