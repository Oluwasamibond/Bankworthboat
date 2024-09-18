import React from 'react'
import Yacht from '../assets/berthon.jpg'
import Yacht1 from '../assets/Nicolle.jpg'
import Yacht2 from '../assets/Denison.jpg'
import Yacht3 from '../assets/bj-marine.jpg'
import Yacht4 from '../assets/cockwell.jpg'
import Yacht5 from '../assets/approved.jpg'
import Yacht6 from '../assets/princess.jpg'
import Yacht7 from '../assets/multihull.jpg'
import Yacht8 from '../assets/nautor-swan.jpg'
const Features = () => {
  return (
   <section name='features' className='bg-secondary'>
        <div className='container flex flex-col justify-center'>
            <div className='text-center'>
                <h1 className='text-3xl lg:text-3xl text-tertiary font-semibold inline border-b-4 border-primary'>Featured Yachts</h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 pt-8'>
                <div>
                     <img 
                     src={Yacht} alt="" />
                     <p className='text-tertiary'>2012 Discovery 55</p>
                     <h2 className='text-2xl text-tertiary'>$774,375</h2>
                     <p className='text-tertiary'>Berthon International | Lymington, GB</p>
                </div>
                <div>
                     <img src={Yacht1} alt="" />
                     <p className='text-tertiary'>2024 Axopar 37XC CROSS CABIN</p>
                     <h2 className='text-2xl text-tertiary'>$361,836</h2>
                     <p className='text-tertiary'>Axopar London Group | Swanwick, GB</p>
                </div>
                <div>
                     <img src={Yacht2} alt="" />
                     <p className='text-tertiary'>2024 Infiniti 60 Powercat GT</p>
                     <h2 className='text-2xl text-tertiary'>Request Price</h2>
                     <p className='text-tertiary'>Denison Yachting - Monaco | Southampton, GB</p>
                </div>
                <div>
                     <img src={Yacht3} alt="" />
                     <p className='text-tertiary'>2023 Beneteau Gran Turismo 41</p>
                     <h2 className='text-2xl text-tertiary'>$654,937</h2>
                     <p className='text-tertiary'>BJ Marine (Pwllheli) | Pwllheli, GB</p>
                </div>
                <div>
                     <img src={Yacht4} alt="" />
                     <p className='text-tertiary'>2019 Cockwells Duchy 35</p>
                     <h2 className='text-2xl text-tertiary'>$656,250</h2>
                     <p className='text-tertiary'>Cockwells Modern & Classic Boatbuilding Ltd | Falmouth, GB</p>
                </div>
                <div>
                     <img src={Yacht5} alt="" />
                     <p className='text-tertiary'>2024 Nimbus 305</p>
                     <h2 className='text-2xl text-tertiary'>Request price</h2>
                     <p className='text-tertiary'>Approved Boats | Inverkip, GB</p>
                </div>
                <div>
                     <img src={Yacht6} alt="" />
                     <p className='text-tertiary'>2022 Princess Yachts V55</p>
                     <h2 className='text-2xl text-tertiary'>Request Price</h2>
                     <p className='text-tertiary'>Boats.co.uk - Cala d'Or | Wallasea Island, GB</p>
                </div>
                <div>
                     <img src={Yacht7} alt="" />
                     <p className='text-tertiary'>2016 Dazcat 1495</p>
                     <h2 className='text-2xl text-tertiary'>Request Price</h2>
                     <p className='text-tertiary'>Multihull Centre Ltd | Capetown, ZA</p>
                </div>
                <div>
                     <img src={Yacht8} alt="" />
                     <p className='text-tertiary'>2022 Nautor Swan 58</p>
                     <h2 className='text-2xl text-tertiary'>$774,375</h2>
                     <p className='text-tertiary'>Nicolle Associates - Hamble Office| Hamble, GB</p>
                </div>
            </div>
        </div>
   </section>
  )
}

export default Features