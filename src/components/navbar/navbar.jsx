import React from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import GPT from '../../assets/GPT.svg'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={GPT} alt="GPT" />
        </div>
        <div className='gpt3__navbar-links_container'>
          <p><a href="#home"></a>Home</p>
          <p><a href="#wgpt3"></a>What is GPT?</p>
          <p><a href="#possibility"></a>Open AI</p>
          <p><a href="#features"></a>Case Studies</p>
          <p><a href="#blog"></a>Library</p>

        </div>

      </div>
      
    </div>
  )
}

export default Navbar
