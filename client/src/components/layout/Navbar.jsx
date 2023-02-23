import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
        <header>
            <div className="contact">
                <h2 className='text-white font-bold text-lg'>Connect</h2>
            </div>
            <div className='logo'>
                <Link to={"/"}>
                <h2 className='text-white font-bold text-lg'>Cognitive AI</h2>
                </Link>
            </div>
        </header>
    </nav>
  )
}
