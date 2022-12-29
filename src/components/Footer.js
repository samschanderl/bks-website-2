import React from 'react';


export default function Footer() {
  return (
    <div className="">
      <div className="container max-w-screen-xl mx-auto flex flex-wrap justify-center items-center px-4 py-8 pb-20">
        <h3 className="md:text-4xl text-2xl w-full my-8 text-neutral-800 font-bold">Wo du uns findest!</h3>
        <div className='sm:w-3/6 w-full h-full px-4'>
          <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2425.7479886057426!2d13.432570451427088!3d52.556083279722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84df3d828b9ad%3A0xf86eddfbcb5f9467!2sJacobsohnstra%C3%9Fe%2027%2C%2013086%20Berlin!5e0!3m2!1sen!2sde!4v1672316981597!5m2!1sen!2sde" 
          width="1600"
          style={{border: 0, height: '300px'}}
          title="location-on-google-maps"
          allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='sm:w-3/6 w-full px-4 text-left'>
          <h3 className="text-blue-500 text-2xl my-2">Adresse</h3>
          <p>Berlin Kitchen Studio</p>
          <p>Schanderl GbR</p>
          <p>Jacobsohnstr. 27</p>
          <p>13357 Berlin</p>
          <br />
          <h3 className="text-blue-500 text-2xl mb-2">Kontakt</h3>
          <p>info(at)berlinkitchenstudio.de</p>
          <p>+49 (0)30 5094 7593</p>
        </div>
      </div>

    </div>
  )
}
