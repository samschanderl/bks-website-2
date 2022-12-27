import React from 'react';

// import icons
import {BsCheck} from 'react-icons/bs'

export default function AboutUs() {
  return (
    <div className="bg-gradient-to-br from-neutral-200 to-neutral-100 py-4">
        <div className="container max-w-screen-xl grid md:grid-cols-2 mx-auto gap-3 py-4 px-2">
            <div className="bg-white p-2 mx-2">
                Image Here
            </div>
            <div className="p-2 mx-2 bg-white text-left p-4">
                <p>Wir sind das Berlin Kitchen Studio - eine vollständig ausgestattete Mietküche im Herzen Berlins.</p>
                <br />
                <p>Als Gründer einer Online-Kochschule ist uns schnell bewusst geworden, wie schwierig es ist, eine Küche zu finden, die in Videos einfach toll aussieht.</p>
                <br />
                <p>So ist diese Küche enstanden! Sie kombiniert die folgenden Elemente:</p>
                <br />
                <ul>
                    <li className="mb-2 italic flex"><BsCheck className="text-4xl mr-2"/>Einzigartiges Retrodesign mit liebevollen Dekoelementen - ganz anders als die typische deutsche Küche.</li>
                    <li className="mb-2 italic flex"><BsCheck className="text-4xl mr-2"/>Eine hochwertige und vollständige Kücheneinrichtung - was Sie auch brauchen, wir haben es da.</li>
                    <li className="mb-2 italic flex"><BsCheck className="text-2xl mr-2"/>Gute Ausleuchtung mit dimmbaren Lampen, damit Sie eine optimale Belichtung haben.</li>
                    <li className="mb-2 italic flex"><BsCheck className="text-2xl mr-2"/>Matte Fließen, damit das Licht nicht reflektiert wird.</li>
                    <li className="mb-2 italic flex"><BsCheck className="text-2xl mr-2"/>Auf Anfrage können zusätzlich auch Kameralampen gebucht werden</li>
                </ul>
                <br />
                <p>Sie brauchen auch Unterstützung mit der Erstellung Ihrer Videos und Fotos?</p>
                <br />
                <p>Sie brauchen auch Unterstützung mit der Erstellung Ihrer Videos und Fotos?</p>
                <br />
                <p>Sie suchen noch nach Köch*Innen für Ihr nächste Event?</p>
                <br />
                <p>Sprechen Sie uns an!</p>
            </div>
        </div>
    </div>
  )
}
