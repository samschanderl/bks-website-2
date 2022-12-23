import './App.css';

// import components
import ContactForm from './components/ContactForm';
import Navbar from './components/Navbar';
import ImgGallery from './components/ImgGallery';
import PricingTable from './components/PricingTable';
import Modal from './components/Modal';
import { useState } from 'react';

function App() {
  const [showModal, setShowModal ] = useState(false)

  function openModal() {
    // open Modal
    // setShowModal(true);
    console.log('opening modal...')
  }

  function closeModal()  {
    // close Modal
    setShowModal(false);
    console.log('closing modal...')
  }

  return (
        <div className="App bg-stone-100 w-screen h-screen text-zinc-900 relative">
          <Navbar openModal={openModal}/>
          <ImgGallery />
          <PricingTable openModal={openModal}/>
          {showModal && (
              <Modal closeModal={closeModal}>
                <p>Get In Touch</p>
                <ContactForm />
              </Modal>
          )}

          <p>Test</p>
        </div>
  );


}

export default App;
