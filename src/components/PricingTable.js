import React from 'react'

// import components
import Button from './Button'

// import 
import {BsCheck} from 'react-icons/bs'

export default function PricingTable( {openModal}) {
    const pricingInfo = [
        {   
            title: 'Halbtags',
            price: '350 €',
            time: '4 Stunden Mietzeit',
            feature1: 'vollausgestattete Küche',
            feature2: 'Einzigartiger Retro-Look',
            feature3: 'Für Video- und Fotoaufnahmen konzipiert',
            feature4: 'Hochwertiges Küchenequipment',
            feature5: 'Platz für bis zu 12 Personen',
            feature6: 'Kaffee & Tee inklusive'
        },
        {
            title: 'Ganztags',
            price: '650 €',
            time: '8+ Stunden Mietzeit',
            feature1: 'vollausgestattete Küche',
            feature2: 'Einzigartiger Retro-Look',
            feature3: 'Für Video- und Fotoaufnahmen konzipiert',
            feature4: 'Hochwertiges Küchenequipment',
            feature5: 'Platz für bis zu 12 Personen',
            feature6: 'Kaffee & Tee inklusive'
        }
    ]

  return (
    <div className="pricing-table my-6">
        <div className="container flex flex-col flex-wrap mx-auto md:flex-row p-4 justify-center max-w-screen-lg gap-4">
            <h2 className="md:text-4xl text-2xl w-full my-4">Unsere Preise</h2>
            {pricingInfo.map(item => (
                    <div className="pricing-card bg-white m-2 p-4 drop-shadow-xl md:w-5/12 flex-1" key={item.title}>
                        <h2 className="text-sky-700 text-2xl mb-4">{item.title}</h2>
                        <div className="bg-orange-400 h-0.5 w-5/12 mx-auto mb-4"></div>
                        <h3 className="text-xl bold mb-2">{item.price}</h3>
                        <ul className="text-left">
                            <li className="mb-2 p-2 flex items-center"><BsCheck className="mr-2 text-orange-500"/>{item.time}</li>
                            <li className="mb-2 p-2 flex items-center"><BsCheck className="mr-2 text-orange-500"/>{item.feature1}</li>
                            <li className="mb-2 p-2 flex items-center"><BsCheck className="mr-2 text-orange-500"/>{item.feature2}</li>
                            <li className="mb-2 p-2 flex items-center"><BsCheck className="mr-2 text-orange-500"/>{item.feature3}</li>
                            <li className="mb-2 p-2 flex items-center"><BsCheck className="mr-2 text-orange-500"/>{item.feature4}</li>
                            <li className="mb-2 p-2 flex items-center"><BsCheck className="mr-2 text-orange-500"/>{item.feature5}</li>
                            <li className="mb-2 p-2 flex items-center"><BsCheck className="mr-2 text-orange-500"/>{item.feature6}</li>
                        </ul>
                        <Button 
                            bg="bg-zinc-200"
                            hoverBg="bg-sky-700"
                            hoverText="text-slate-100"
                            onClick={openModal}
                        >Buche Jetzt</Button>
                    </div>
                ))}
        </div>
        

        
    </div>
  )
}
