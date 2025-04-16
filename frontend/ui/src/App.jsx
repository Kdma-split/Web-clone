import { Routes, Route } from "react-router-dom";
 // import LightDarkModeButton from "./components/LightDarkModeButton.jsx";
 // import HeroSection from './components/HeroSection.jsx'
 // import ProblemSection from './components/ProblemSection.jsx';
 // // import Footer from './components/Footer.jsx';
 // import TractionSection from './components/TractionSection.jsx';
 // import Testimonials from './components/Testimonials.jsx';
// import CtaSection from './components/CtaSection.jsx';
// import Solution from './components/Solution.jsx';
import MemoTagPage from "./pages/MemoTagPage.jsx";
// import LoginModal from './components/Login.jsx';
// import SignupModal from './components/Signup.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <MemoTagPage /> } />
      {/* <Route path="/solution" element={ <Solution /> } />
      <Route path="/join-community" element={ <CtaSection /> } /> */}
      {/* <Route path="/login" element={ <LoginModal /> } />
      <Route path="/register" element={ <SignupModal /> } /> */}
    </Routes>
  ) 
}

export default App;