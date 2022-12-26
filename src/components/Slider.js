import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import "keen-slider/keen-slider.min.css";

// import images
import SlideImg1 from '../images/SlideImg1.jpg';
import SlideImg2 from '../images/SlideImg2.jpg';
import SlideImg3 from '../images/SlideImg3.jpg';
import SlideImg4 from '../images/SlideImg4.jpg';
import SlideImg5 from '../images/SlideImg5.jpg';
import SlideImg6 from '../images/SlideImg6.jpg';
import SlideImg7 from '../images/SlideImg7.jpg';

export default function Slider() {
    const [sliderRef] = useKeenSlider({
        slides: {
          perView: 3,
          spacing: 15,
        },
        loop: true,
        // media queries
        breakpoints: {
            '(max-width: 720px)': {
              slides: {
                perView: 2,
                spacing: 10,
              }
            },
            },
      })

    const slides = [
        {
            id: 1,
            img: SlideImg1,
            text: 'Wunderschönes Design'
        },
        {
            id: 2,
            img: SlideImg2,
            text: 'Hochwertige Einrichtung'
        },
        {
            id: 3,
            img: SlideImg3,
            text: 'Großzügig & einladend'
        },
        {
            id: 4,
            img: SlideImg4,
            text: 'Vollständig ausgestattet'
        },
        {
            id: 5,
            img: SlideImg5,
            text: 'Optimiert für Foto & Video'
        },
        {
            id: 6,
            img: SlideImg6,
            text: 'Liebevolle Dekoration'
        },
        {
            id: 7,
            img: SlideImg7,
            text: 'Einzigartiger Retro-Look'
        },
    ]

  return (
    <div className="p-4">
        <h2 className="md:text-4xl text-2xl w-full my-8 text-neutral-800 font-bold">Eine Küche - Viele Gründe</h2>
        <div ref={sliderRef} className="keen-slider max-w-screen-lg mx-auto">
            {slides && slides.map(slide => (
                <div key={slide.id} className="keen-slider__slide number-slide1 bg-zinc-100 grid">
                    <img src={slide.img} className="h-full object-cover"/>
                    <p className="absolute bottom-2 left-2 p-2 lg:text-2xl text-lg text-white z-10 font-bold text-left">{slide.text}</p>
                    <div className=" absolute left-0 bottom-0 z-5 h-3/6 w-full bg-gradient-to-t from-neutral-900 opacity-50"></div>
                </div>
            ))}

        </div>
    </div>

  )
}
