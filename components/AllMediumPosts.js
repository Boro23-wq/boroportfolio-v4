import useSWR from 'swr'

import fetcher from '../lib/fetcher'
import { MediumPost } from './MediumPost'

export default function MediumPosts() {
  const { data } = useSWR('/api/medium-posts', fetcher)

  if (!data) {
    return null
  }

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 shadow-md sm:p-6">
      <h5 className="mb-3 text-base font-semibold text-gray-900 dark:text-gray-50 lg:text-xl ">
        My Medium Stories
      </h5>
      <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
        The list of recent 5 medium stories.
      </p>

      {data?.posts?.map((post, index) => (
        <MediumPost key={index} {...post} {...index} />
      ))}
    </div>
  )
}
