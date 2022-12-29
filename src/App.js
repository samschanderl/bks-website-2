import './App.css';

// import components
import ContactForm from './components/ContactForm';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IconsGrid from './components/IconsGrid';
import Slider from './components/Slider';
import ImgGallery from './components/ImgGallery';
import PricingTable from './components/PricingTable';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { useRef, useState } from 'react';
import AboutUs from './components/AboutUs';

function App() {
  const [showModal, setShowModal ] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef();

  function openModal() {
    setShowModal(true);
  }

  function closeModal()  {
    setShowModal(false);
  }

  return (
        <div className="App bg-stone-100 w-screen h-screen text-zinc-900 relative scroll-smooth">
          <Navbar navRef={navRef} navHeight={navHeight} setNavHeight={setNavHeight} openModal={openModal}/>
          <Hero navHeight={navHeight} openModal={openModal}/>
          <IconsGrid />
          <ImgGallery />
          <AboutUs openModal={openModal}/>
          <Slider />
          <PricingTable openModal={openModal}/>
          <Footer />
          
          {showModal && (
              <Modal closeModal={closeModal}>
                <h2 className="text-xl mb-4">Schreiben Sie Uns!</h2>
                <p className="text-sm italic mb-4">Wann und wofür würden Sie gerne die Küche mieten?</p>
                <ContactForm closeModal={closeModal}/>
              </Modal>
          )}
        </div>
  );
}

export default App;
