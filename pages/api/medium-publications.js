import NextCors from 'nextjs-cors'

import { getMediumPublications } from '@/lib/medium'

export default async (req, res) => {
  const response = await getMediumPublications()

  await NextCors(req, res, {
    methods: ['GET'],
    origin: '*',
    optionsSuccessStatus: 200,
  })

  console.log(response)
  // const { items } = await response.json()

  // console.log(items)

  // const publications = items.slice(0, 3).map((publication) => ({
  //   name: publication.name,
  //   description: publication.description,
  //   url: publication.url,
  //   imageUrl: publication.imageUrl,
  // }))

  // return res.status(200).json({ publications })
}
