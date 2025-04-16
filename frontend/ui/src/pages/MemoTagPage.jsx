// MemoTagWebpage.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection.jsx';
import ProblemSection from '../components/ProblemSection.jsx';
import CtaSection from '../components/CtaSection.jsx';
import Solution from '../components/Solution.jsx';
import TractionSection from '../components/TractionSection.jsx';
import Testimonials from '../components/Testimonials.jsx';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import LoginModal from '../components/Login.jsx';
import SignupModal from '../components/Signup.jsx';
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

function MemoTagPage() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [err, setErr] = useState({ event: '', message: '' });
  const [success, setSuccess] = useState({ event: '', message: '' });
  const navigate = useNavigate();

  useEffect(() => {
    if (success?.message) {
      toast.success(success.message);
    }
  }, [success]);

  useEffect(() => {
    if (err?.message) {
      toast.error(err.message);
    }
  }, [err]);

  return (
    <div className="relative">
      <div className="relative z-10">
        <Navbar 
          setShowLoginModal={setShowLoginModal} 
          setShowSignupModal={setShowSignupModal}
        />

        {showLoginModal && (
          <LoginModal
            isOpen={true}
            onClose={() => { setShowLoginModal(false); navigate('/') }}
            setShowSignupModal={setShowSignupModal}
            setErr={setErr}
            setSuccess={setSuccess}
          />
        )}

        {showSignupModal && (
          <SignupModal
            isOpen={true}
            onClose={() => { setShowSignupModal(false); navigate('/') }}
            setShowLoginModal={setShowLoginModal}
            setErr={setErr}
            setSuccess={setSuccess}
          />
        )}
        
        <HeroSection />
        <ProblemSection />
        <Solution />
        <TractionSection />
        <Testimonials />
        
        <CtaSection  
          setErr={setErr}
          setSuccess={setSuccess}
        />
        
        <Footer /> 
        <Toaster richColors position="top-right" />
      </div>
    </div>
  );
}

export default MemoTagPage;





// Can I do it in a way that the animation is added to my ultimate folder so that it remains fixed in the background of each page ? I'm giving thet code of the ultimate main component where all the pages are being arranged and rendered. Make suitable changes to the "ProblemSection" component.