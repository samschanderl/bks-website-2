import './App.css';

// import components
import ContactForm from './components/ContactForm';
import Navbar from './components/Navbar';
import ImgGallery from './components/ImgGallery';
import PricingTable from './components/PricingTable';
import Modal from './components/Modal';
import { useEffect, useState } from 'react';

function App() {
  const [showModal, setShowModal ] = useState(false)

  function openModal() {
    // open Modal
    setShowModal(true);
    console.log('opening modal...')
  }

  function closeModal()  {
    // close Modal
    setShowModal(false);
    console.log('closing modal...')
  }

  useEffect(() => {
    console.log(showModal)
  }, [])

  return (
        <div className="App bg-stone-100 w-screen h-screen text-zinc-900 relative">
          <Navbar openModal={openModal}/>
          <ImgGallery />
          <PricingTable openModal={openModal}/>
          
          {showModal && (
              <Modal closeModal={closeModal}>
                <h2 className="text-xl mb-4">Schreiben Sie Uns!</h2>
                <p className="text-sm italic mb-4">Würden Sie gerne unsere Küche mieten?</p>
                <ContactForm closeModal={closeModal}/>
              </Modal>
          )}

          <p>Test</p>
        </div>
  );


}

export default App;
