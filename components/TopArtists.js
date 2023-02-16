import useSWR from 'swr'

import fetcher from '../lib/fetcher'
import Artist from './Artist'
import { Spinner } from './Spinner'

export default function TopArtists() {
  const { data } = useSWR('/api/top-artists', fetcher)

  return (
    <div className="p-4 bg-white dark:bg-black rounded-lg border dark:border-gray-700 shadow-md sm:p-6">
      <h5 className="mb-3 text-base font-semibold text-gray-900 dark:text-gray-50 lg:text-xl ">
        My Top Artists
      </h5>
      <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
        The list of top {data?.artists?.length === 0 ? <></> : data?.artists?.length} artists on my
        Spotify.
      </p>

      {!data && (
        <div className="flex mt-8 justify-center">
          <Spinner />
        </div>
      )}

      {data?.artists?.length === 0 && (
        <p className="text-gray-400 dark:text-gray-500 mt-4 items-center">No artists found</p>
      )}

      {data?.artists?.map((artist, index) => (
        <Artist ranking={index + 1} key={artist?.name} {...artist} className="last:border-b-0" />
      ))}
    </div>
  )
}
