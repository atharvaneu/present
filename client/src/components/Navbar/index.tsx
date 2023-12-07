'use client'

import React from 'react'
import './index.css'
// import { Button } from '@/shadcn/ui/button'
import { Button } from '@/shadcn/ui/button'

const index = () => {
  return (
    <>
      <div className="navbar-container">
        <div>
          <header>
            <h3>Present</h3>
          </header>
        </div>
        <div>
          <nav>
            <div>
              <ul className="nav-links">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="nav-buttons">
          <Button className="button-style">Sign Up</Button>
          <Button className="button-style">Sign In</Button>
        </div>
      </div>
    </>
  )
}

export default index
