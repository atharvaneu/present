'use client'

import { Button, Input, Stack, Tooltip, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'

import { addPage } from '@/redux/editor/editorSlice'

export default React.memo(function Topbar() {
  const SERVER_DOMAIN = 'http://localhost:8080'

  const toast = useToast()

  const [file, setFile] = useState<string>('File name.ppt')
  const { pages } = useSelector((state: any) => state.editor)
  const dispatch = useDispatch()

  async function sendPresentation() {
    if (pages?.length === 0) return
    const res = await fetch(`${SERVER_DOMAIN}/set-presentation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pages),
    })
  }

  function handleClick(operation: 'add' | 'delete' | 'save' | 'preview') {
    switch (operation) {
      case 'add':
        dispatch(addPage())
        toast({
          title: 'New slide added',
          status: 'info',
          position: 'bottom-right',
          isClosable: false,
        })
        break
      case 'delete':
        console.log('delete pressed')
        break
      case 'save':
        sendPresentation()
        toast({
          title: 'Presentation saved',
          status: 'success',
          position: 'bottom-right',
          isClosable: false,
        })
        break
      case 'preview':
        console.log('preview')
        break
    }
  }

  return (
    <nav className="flex justify-between p-6 bg-slate-200 border-b-2 border-slate-700">
      <div>
        <Input
          value={file}
          className="font-bold text-xl"
          onChange={(e) => setFile(() => e.target.value)}
          size={'sm'}
        />
      </div>
      <div className="flex gap-5">
        <Tooltip label="Add a new slide">
          <Button onClick={() => handleClick('add')}>new slide</Button>
        </Tooltip>
        <Tooltip label="Add a new slide">
          <Button onClick={() => handleClick('add')}>share</Button>
        </Tooltip>
        <Tooltip label="Save changes">
          <Button
            onClick={() => handleClick('save')}
            variant="solid"
            colorScheme="green"
          >
            save
          </Button>
        </Tooltip>
        <Tooltip label="Preview slideshow">
          <a href="http://localhost:3000/play" target="_blank">
            <Button
              onClick={() => handleClick('preview')}
              variant="solid"
              colorScheme="messenger"
            >
              preview
            </Button>
          </a>
        </Tooltip>
      </div>
      <div>
        <Stack spacing={4} direction="row" align="center">
          <Button colorScheme="purple" size="xs">
            Settings
          </Button>
          <Button colorScheme="purple" size="xs">
            Logout
          </Button>
        </Stack>
      </div>
    </nav>
  )
})
