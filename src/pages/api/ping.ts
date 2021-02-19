// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      res.status(200).json({ status: 'Running' })
      break
    case 'POST':
      res.status(400).json({ status: 'Method Not Allowed' })
      break
    default:
      res.status(405).end()
      break
  }
}

export default handler


