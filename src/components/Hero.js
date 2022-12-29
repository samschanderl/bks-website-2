import React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";

// import images
import ImgHero1 from '../images/min/ImgHero1-min.jpg';
import Button from './Button';

export default function Hero({navHeight, openModal}) {

  return (
    <header 
        className="relative w-screen h-screen flex justify-center items-center overflow-hidden"
        style={{paddingTop: (navHeight) + 'px'}}>
        <div className="TextBox z-20 text-white">
            <h1 className=" md:text-6xl text-4xl mb-6 font-bold">Berlin Kitchen Studio</h1>
            <p className="md:text-4xl text-2xl font-bold mb-6">
                Voll-Ausgestattete Mietküche im Herzen Berlins
            </p>
            <Button 
            bg="bg-blue-600"
            text="text-slate-100"
            hoverBg="bg-blue-300"
            clickEvent={openModal}
            >Schreiben Sie Uns</Button>
        </div>
        <div className="absolute w-full h-full bg-gradient-to-br from-slate-500 to-neutral-900 z-10 opacity-40"></div>
        {/* <img src={ImgHero1} alt="Mietküche in Berlin" className="absolute w-full h-full top-o left-0 z-0 object-cover"/> */}
        <LazyLoadImage 
        src={ImgHero1}
        width={920}
        className="absolute w-full h-full top-o left-0 z-0 object-cover"
        // width={600} height={400}
        alt="Image Alt"
        />
    </header>
  )
}
