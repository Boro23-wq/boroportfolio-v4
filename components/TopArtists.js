import useSWR from 'swr'

import fetcher from '../lib/fetcher'
import Artist from './Artist'

export default function TopArtists() {
  const { data } = useSWR('/api/top-artists', fetcher)

  if (!data) {
    return null
  }

  return (
    <div className="p-4 max-w-sm bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 shadow-md sm:p-6">
      <h5 className="mb-3 text-base font-semibold text-gray-900 dark:text-gray-50 lg:text-xl ">
        My Top Artists
      </h5>
      <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
        The list of top {data.artists.length} rappers on my Spotify.
      </p>
      {data.artists.map((artist, index) => (
        <Artist key={index} {...artist} />
      ))}
    </div>
  )
}
