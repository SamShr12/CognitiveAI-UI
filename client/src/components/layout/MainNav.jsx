import React from 'react'
import { Link } from 'react-router-dom'

export default function MainNav() {
  return (
    <nav>
        <header>
            <div>
                <h1>CAI</h1>
            </div>
            <div className='flex gap-10'>
                <Link>Enrolled</Link>
                <Link>Categories</Link>
                <Link>Sam</Link>
            </div>
        </header>
    </nav>
  )
}
