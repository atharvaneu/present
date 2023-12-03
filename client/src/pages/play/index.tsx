import { TPage } from '@/shared/types'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import DisplayPage from './components/DisplayPage'
import { useToast } from '@chakra-ui/react'
import ControlsBar from './components/ControlsBar'

export interface PlayPresentationProps {
  className?: string
}

export default function PlayPresentation({ className }: PlayPresentationProps) {
  const [pages, setPages] = useState<TPage[]>([])
  const [focusedPage, setFocusedPage] = useState<number>(0)
  const toast = useToast()

  const SERVER_DOMAIN = 'http://localhost:8080'

  async function fetchPresentation() {
    const res = await fetch(`${SERVER_DOMAIN}/fetch-presentation`)

    const data = await res.json()
    setPages((prev) => data)
  }

  function handleKeyPress(e: KeyboardEvent) {
    const { key } = e
    if (key === 'Enter' || key === 'n') {
      setFocusedPage((prev) => prev + 1)
    } else if (key === 'b') {
      setFocusedPage((prev) => Math.max(0, prev - 1))
    }
  }

  useEffect(() => {
    fetchPresentation()

    document.addEventListener('keypress', handleKeyPress)

    return () => {
      document.removeEventListener('keypress', handleKeyPress)
    }
  }, [])

  return (
    <div>
      Page {focusedPage + 1}
      <DisplayPage page={pages[focusedPage]} />
      <ControlsBar setFocusedPage={setFocusedPage} />
    </div>
  )
}
