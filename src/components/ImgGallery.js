import React, { useEffect, useRef, useState } from 'react';

// import images
import Img1 from '../images/Img1.jpg';
import Img2 from '../images/Img2.jpg';
import Img3 from '../images/Img3.jpg';
import Img4 from '../images/Img4.jpg';
import Img5 from '../images/Img5.jpg';
import Img6 from '../images/Img6.jpg';

export default function ImgGallery() {
    const imgRef = useRef();

    const Images = [
        {
            src: Img5,
            title: 'Perfekt für Video & Foto',
            text: 'Lange Kochinsel, 2 Induktions-Herde (vorne und hinten), Befestigungs-Stange für Aufnahmen von oben.'
        },
        {
            src: Img2,
            title: 'Gut ausgeleuchtet',
            text: 'Indirekte Lichtleisten im Hintergrund (dimmbar), Strahler auf die Wand, LED-Panel über der Kochinsel.'
        },
        {
            src: Img1,
            title: 'Großzügige Sitzecke',
            text: 'Tisch mit Platz für bis zu 12 Personen, direkt neben dem Kochbereich. Kaffee und Tee inklusive.'
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
        },
        {
            src: Img6,
            title: 'Einheitliches Retro-Design',
            text: 'Die Küchenelemente, Geräte und Accessories sind sowohl farblich als auch stilistisch aufeinander abgestimmt.'
        }
    ]
    let [current, setCurrent] = useState(0);
    let largeImage = Images[current].src;

    function showImage(index) {
        setCurrent(index);
        removeFilter();
        addFilter(index);
    };

    function addFilter(index) {
       // e.target.classList.add('isActive');
       imgRef.current.children[index].classList.add('isActive');


    };

    function removeFilter() {
        let children = imgRef.current.children
        // remove isActive class from each image
        for (let child of children) {
            child.classList.remove('isActive');
        }
    }

    useEffect(() => {
        addFilter(0);
    }, [])

  return (
    <div id="ImgGallery" className="ImgGallery bg-white py-4 my-2 mb-4 scroll-mt-20">
        <h2 className="md:text-4xl text-2xl w-full my-8 text-neutral-800 font-bold">Die Küche</h2>
        <div className="container max-w-screen-md mx-auto px-4">
            <div className="MainImg relative">
                <img className="transition duration-1000" src={largeImage} alt=""/>
                <div className="absolute bottom-0 left-0 bg-gradient-to-b from-transparent to-neutral-700 w-full md:h-2/6 h-3/6 opacity-80"></div>
                <p className="absolute md:bottom-20 bottom-14 left-4 md:text-4xl text-lg font-bold text-white">{Images[current].title}</p>
                <p className="absolute bottom-4 left-4 md:text-lg text-xs font-bold text-white text-left">{Images[current].text}</p>
            </div>
            <div ref={imgRef} className="grid md:grid-cols-6 grid-cols-3 md:gap-2 md:my-2 gap-1 my-1">
                {Images && Images.map((img, index) => (
                    <img 
                        key={index}
                        src={img.src} 
                        alt={img.title}
                        className="hover:cursor-pointer" 
                        onClick={(e) => {showImage(index)}}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}
