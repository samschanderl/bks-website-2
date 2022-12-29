import React from 'react';

import { BsFillCameraReelsFill } from 'react-icons/bs';
import {HiUserGroup} from 'react-icons/hi';
import {ImSpoonKnife} from 'react-icons/im';

export default function IconsGrid() {
  return (
    <div className="bg-gradient-to-br from-neutral-200 to-neutral-100 py-16 px-5 w-full">
        <div className="container max-w-screen-lg grid md:grid-cols-3 grid-cols-1 gap-2 justify-center items-center mx-auto">
            <div className="bg-white py-4 px-6 md:mx-2 md:my-2 my-4 mx-6 shadow-lg h-full grid">
                <BsFillCameraReelsFill className='mx-auto text-blue-500 text-3xl mb-2'/>
                <h3 className="font-bold text-xl mb-2">Filme Produkt- und Kochvideos</h3>
                <p>Zeige deine Marke und Produkte von der besten Seite - im perfekten Küchen-Setup!</p>
            </div>
            <div className="bg-white py-4 px-6 md:mx-2 md:my-2 my-4 mx-6 shadow-lg h-full grid">
                <HiUserGroup className="mx-auto text-blue-500 text-3xl mb-2"/>
                <h3 className="font-bold text-xl mb-2">Erstelle Social-Media-Content</h3>
                <p>Erreiche deine Zielgruppe mit Foto- und Video-Content auf Instagram, YouTube, TipTok & Co!</p>
            </div>
            <div className="bg-white py-4 px-6 md:mx-2 md:my-2 my-4 mx-6 shadow-lg h-full grid">
                <ImSpoonKnife className="mx-auto text-blue-500 text-3xl mb-2"/>
                <h3 className="font-bold text-xl mb-2">Gib Workshops & Kochevents</h3>
                <p>Erschaffe einzigartige Momente für dein Team, deine Schüler oder deine Community</p>
            </div>
        </div>
    </div>
  )
}
