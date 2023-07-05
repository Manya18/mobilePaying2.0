// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { operators } from './data/socials'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res
) {
  res.status(200).json(operators)
}
