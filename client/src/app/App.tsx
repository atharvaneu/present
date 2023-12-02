import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Topbar from '@/components/Topbar/'
import { Workspace } from '@/components/Workspace/'
import { loadPages } from '@/redux/editor/editorSlice'
import { TPage } from '@/shared/types'

const { log } = console

export default function App() {
  const SERVER_DOMAIN = 'http://localhost:8080'

  const dispatch = useDispatch()

  async function fetchPresentation() {
    const res = await fetch(`${SERVER_DOMAIN}/fetch-presentation`)

    const data: TPage[] = await res.json()
    if (data?.length > 0) {
      log(data)
      dispatch(loadPages(data))
    }
  }

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // autosave
  //     // }, 120000)                 // 2 minutes
  //   }, 200)

  //   return () => clearInterval(interval)
  // }, [])

  useEffect(() => {
    fetchPresentation()
  }, [])

  return (
    <section className="min-h-screen">
      <Topbar />
      <Workspace />
    </section>
  )
}
