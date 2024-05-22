import React from 'react'
import "../styles/section.css"
import { ArrowRight} from 'lucide-react';
import it_services from "../assets/it-services.jpg"


const Section = () => {
  return (
    <div className='dark-section'>

    <div className='dark-bg'>
        <div className='dark-content'>
        <h1>
        Build a flexible card  program for your  business needs
        </h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua  minim veniam, quis nostrud exercitation.
        </p>

        <button className='btn2'>Read documentation<ArrowRight className='dark-ar' /></button>

        </div>

        <div className='blue-img'>

            <img src={it_services} alt="" />

        </div>



    </div>
      
    </div>
  )
}

export default Section
