import store from 'store2'
import { AddIcon } from '@chakra-ui/icons'
import { Card, CardBody, CardFooter, CardHeader, Text } from '@chakra-ui/react'
import { Button } from '@/shadcn/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shadcn/ui/table'
import { FilePlusIcon } from '@radix-ui/react-icons'

import { useEffect, useState } from 'react'
import { AlertDialogBox } from '@/components/utils/AlertDialogue'
import { DialogBox } from '@/components/utils/Dialogue'

const SERVER_DOMAIN = process.env.SERVER_DOMAIN || 'http://localhost:3000'

export default function MyStuff() {
  const [newPresentationName, setNewPresentationName] = useState<string>('')
  const [presentations, setPresentations] = useState<any>([])

  const userID = store('user_id')

  async function populatePresentations() {
    const res = await fetch(`/api/presentation/user/${userID}`) // cache this in the future
    const data = await res.json()

    setPresentations(() => data?.body)
  }

  function handleEditClick(pid: string) {
    window.open(`/work/${pid}`)
  }

  function handlePreviewClick(pid: string) {
    window.open(`/play/${pid}`)
  }

  useEffect(() => {
    populatePresentations()
  }, [])

  const dateOpts: any = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }
  async function handleAddNewPresentation() {
    const res = await fetch(`${SERVER_DOMAIN}/api/presentation/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_uid: userID,
        name:
          newPresentationName?.length === 0
            ? `Untitled - ${new Intl.DateTimeFormat('en-US', dateOpts).format(
                new Date(),
              )}`
            : newPresentationName,
        pages: [],
      }),
    })
    const data = await res.json()

    populatePresentations()
  }

  async function handleRemove(pid: string) {
    const res = await fetch(`${SERVER_DOMAIN}/api/presentation/${pid}`, {
      method: 'DELETE',
    })

    populatePresentations()
  }

  return (
    <section className="w-full h-screen flex align-middle justify-center bg-stone-900">
      <Card className="my-20 w-2/4">
        <CardHeader className="flex justify-between">
          <Text>My presentations</Text>
          <DialogBox
            onAgree={handleAddNewPresentation}
            opts={{
              userId: store('user_id'),
              newPresentationName,
              setNewPresentationName,
            }}
          >
            <Button variant="ghost">
              <FilePlusIcon />
            </Button>
          </DialogBox>
        </CardHeader>
        <CardBody>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="">Name</TableHead>
                <TableHead className="text-right">No. of slides</TableHead>
                <TableHead className="text-center"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {presentations?.map((p: any) => {
                return (
                  <TableRow key={p?.name}>
                    <TableCell className="font-medium">{p?.name}</TableCell>
                    <TableCell className="text-right">
                      {p?.pages.length}
                    </TableCell>
                    <TableCell className="text-right flex justify-end gap-5">
                      <Button
                        className="hover:scale-105 transition duration-150"
                        onClick={() => handleEditClick(p?._id)}
                      >
                        Make changes
                      </Button>
                      <Button
                        className="hover:scale-105 transition duration-150"
                        variant="secondary"
                        onClick={() => handlePreviewClick(p?._id)}
                      >
                        Preview
                      </Button>
                      <AlertDialogBox
                        onAgree={handleRemove}
                        opts={{ id: p?._id }}
                      >
                        <Button
                          className="hover:scale-105 transition duration-150 text-red-700"
                          variant="link"
                        >
                          Remove
                        </Button>
                      </AlertDialogBox>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
    </section>
  )
}
