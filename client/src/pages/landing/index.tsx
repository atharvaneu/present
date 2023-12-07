'use client'

import React from 'react'
import { Button } from '@/shadcn/ui/button'
import { useRouter } from 'next/router'
import { Stack } from '@chakra-ui/react'

export default function Landing() {
  const router = useRouter()

  return (
    <section className="text-white w-full h-screen flex flex-col bg-stone-900">
      <nav className=" w-full flex justify-between p-3 border-b-2 border-stone-200">
        <h2 className="my-auto font-heading">PRESENT</h2>
        <Stack spacing={4} direction="row" align="center" className="my-auto">
          {/* <ModeToggle /> */}
          <Button
            variant="link"
            onClick={() => router.push('/aboutus')}
            className="text-stone-200"
          >
            About us
          </Button>

          <Button
            variant="link"
            onClick={() => router.push('/contactus')}
            className="text-stone-200"
          >
            Contact us
          </Button>
          {/* <Button variant="link">Settings</Button> */}
        </Stack>
      </nav>
      HI
    </section>
  )
}
