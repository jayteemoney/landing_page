import React from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import GPT from '../../assets/GPT.svg'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={GPT} alt="GPT" />

        </div>

      </div>
      
    </div>
  )
}

export default Navbar
