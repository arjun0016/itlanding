import React from 'react'
import '../styles/header.css'
import it_services from "../assets/it-services.jpg"
import { ArrowRight} from 'lucide-react';



const Header = () => {
  return (
    <>

    <div className='blue-bg'>

        <div className=' blue-content'>
            <h1>Empowering Abu Dhabi's <br/> Tech Evolution.</h1>
            <p>Providing customized IT solutions to boost your business  <br />
            performance and make operations more efficient.</p>

            <div className='blue-btn'>
            <button className='btn1'>Get your card <ArrowRight className='bl-clr' /></button>
            <button className='btn2'>Read documentation</button>
            </div>
            </div>

        <div className='blue-img'>

            <img src={it_services} alt="" />

        </div>

       

    </div>      


    </>
  )
}

export default Header
