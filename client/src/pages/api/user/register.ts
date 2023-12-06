import dbConnect from '@/server/lib/dbConnect'
import User from '@/server/models/User'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {
    query: { id },
    method,
    body,
  } = req

  await dbConnect()

  switch (method) {
    case 'POST':
      const { firstname, lastname, email, password } = body

      const dbData = new User({
        firstname,
        lastname,
        email,
        password,
      })

      try {
        await dbData.save()
        res.status(200).json({ success: true })
      } catch (e) {
        res.status(400).json({ success: false })
      }

      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
