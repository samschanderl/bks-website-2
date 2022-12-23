import React, { useEffect, useState } from 'react';

// import images
import Img1 from '../images/Img1.jpg';
import Img2 from '../images/Img2.jpg';
import Img3 from '../images/Img3.jpg';
import Img4 from '../images/Img4.jpg';

export default function ImgGallery() {
    const Images = [
        {
            src: Img1,
            title: 'Großzügige Sitzecke',
            text: 'Tisch mit Platz für bis zu 12 Personen. Kaffee und Tee inklusive.'
        },
        {
            src: Img2,
            title: 'Gut ausgeleuchtet',
            text: 'Indirekte Lichtleisten im Hintergrund (dimmbar), Strahler auf die Wand, LED-Panel über der Kochinsel.'
        },
        {
            src: Img3,
            title: 'Matte Fließen, dezente Farben',
            text: 'Farblich genau abgestimmt. Die Fließen schimmern nicht - perfekt für zusätzliche Kameralichter.'
        },
        {
            src: Img4,
            title: 'Mit vollständiger Küchenausstattung',
            text: 'Alle Kochgeräte und Utensilien sind vorhanden, damit Sie nichts mehr mitbringen müssen.'
        }
    ]
    let [current, setCurrent] = useState(0);
    let largeImage = Images[current].src;

    function showImage(index) {
        setCurrent(index)
    }

  return (
    <div className="ImgGallery bg-white py-8">
        <h2 className="text-2xl mb-4 ">Image Gallery</h2>
        <div className="container max-w-screen-md mx-auto px-4">
            <div className="MainImg relative">
                <img className="transition duration-1000" src={largeImage}/>
                <div className="absolute bottom-0 left-0 bg-gradient-to-b from-transparent to-slate-700 w-full md:h-2/6 h-3/6"></div>
                <p className="absolute md:bottom-20 bottom-14 left-4 md:text-4xl text-lg font-bold text-white">{Images[current].title}</p>
                <p className="absolute bottom-4 left-4 md:text-lg text-xs font-bold text-white text-left">{Images[current].text}</p>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {Images && Images.map((img, index) => (
                    <img 
                        key={index}
                        src={img.src} 
                        className="my-2 hover:cursor-pointer" 
                        onClick={() => showImage(index)}/>
                ))}
            </div>
        </div>
    </div>
  )
}
