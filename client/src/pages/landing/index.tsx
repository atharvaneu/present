'use client'

import React from 'react'
import './index.css'
import { Button } from '@/shadcn/ui/button'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Bgimage from '../../images/backg-image.jpg'
import Link from 'next/link'
// import './index.css'

export default function Landing() {
  const headerFont = { fontFamily: 'Montserrat' }
  const paraFont = { fontFamily: 'Merriweather' }
  // const router = useRouter()
  // const SERVER_DOMAIN =
  //   process.env.NEXT_PUBLIC_API_URL || `http://localhost:3000`
  // async function handleRegister() {
  //   // router.push('/register')
  //   console.log('register')
  // }
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
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="nav-buttons">
          {/* <Button className="button-style" onClick={handleRegister}> */}
          <button className="button-style">
            <Link href="/register">Sign Up</Link>
          </button>
          <Button className="button-style">
            <Link href="/login">Sign In</Link>
          </Button>
        </div>
      </div>
      <section>
        <p className="header-info" style={headerFont}>
          Present: Unleash Your Ideas, Craft Your Story, <br />
          Captivate Your Audience.
        </p>
        <div className="container style-container">
          <div className="row info-container">
            <div className="col-md-6">
              <div className="left-side">
                <p style={paraFont}>
                  Step into the world of Present, your gateway to effortless
                  elegance in presentations. Tailored for professionals,
                  business users, creative professionals, and remote teams,
                  Present offers a user-friendly experience reminiscent of
                  Google Slides, coupled with an exciting brand atmosphere that
                  brings joy to your creative process.
                </p>
                <p style={paraFont}>
                  Craft presentations effortlessly with our intuitive tools,
                  collaborate seamlessly with remote teams, and present with
                  style. Our platform is not just about conveying information;
                  it's about making a statement with every slide. Immerse
                  yourself in a brand that radiates happiness and excitement,
                  and let your presentations reflect that same effortless
                  elegance.
                </p>
                <div className="info-buttons">
                  <Button className="btn-style">Get Started</Button>
                  <Button className="btn-style">Learn More</Button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right-side">
                <Image src={Bgimage} alt="bgimage" className="image-styling" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
