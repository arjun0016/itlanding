import React from 'react'
import "../styles/footer.css"
import its from "../assets/it-services.jpg"


const Footer = () => {
  return (
    <>
  <div className='footer-content'>
    
    <div className='footer-head'>

      <h3>What are you waiting for?</h3>
    <h1> Get the only custom super card </h1>

    


    <div className='footer-links'>
      <ul>
       <img width={15} height={15} src={its} alt="" />
      </ul>
      <ul>
        <h3>heading</h3>
        <li>Payments</li>
        <li>Budgeting and analytics</li>
        <li>Open banking</li>
        <li>Pockets</li>
      </ul>
      <ul>
        <h3>Company</h3>
        <li>Diversity / Inclusion</li>
        <li>Sustainability</li>
        <li>Code of conduct</li>
        <li>Financial statements</li>
      </ul>
      <ul>
        <h3>Lifestyle</h3>
        <li>Currency exchange</li>
        <li>Lounge & Smart delay</li>
        <li>Company</li>
        <li>Company</li>
      </ul>
      <ul>
        <h3>Company</h3>
        <li>Send us an email</li>
        <li>Facebook</li>
        <li>Twitter</li>
        <li>Instagram</li>
      </ul>

    </div>

    </div>


  </div>

      
    </>
  )
}

export default Footer
