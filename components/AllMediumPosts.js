import useSWR from 'swr'

import fetcher from '../lib/fetcher'
import { MediumPost } from './MediumPost'

export default function MediumPosts() {
  const { data } = useSWR('/api/medium-posts', fetcher)

  if (!data) {
    return null
  }

  return (
    <>
      {data.posts.map((post, index) => (
        <MediumPost key={index} {...post} />
      ))}
    </>
  )
}
