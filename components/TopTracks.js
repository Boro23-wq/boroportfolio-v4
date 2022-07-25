import useSWR from 'swr'

import fetcher from '../lib/fetcher'
import Track from '../components/Track'
import { Spinner } from './Spinner'

export default function Tracks() {
  const { data } = useSWR('/api/top-tracks', fetcher)

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 shadow-md sm:p-6">
      <h5 className="mb-3 text-base font-semibold text-gray-900 dark:text-gray-50 lg:text-xl ">
        My Top Tracks
      </h5>
      <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
        The list of top {data?.tracks?.length === 0 ? <></> : data?.tracks?.length} tracks on my
        Spotify.
      </p>

      {!data && (
        <div className="flex mt-8 justify-center">
          <Spinner />
        </div>
      )}

      {data?.tracks?.length === 0 && (
        <p className="text-gray-400 dark:text-gray-500 mt-4 items-center">No tracks found</p>
      )}

      {data?.tracks?.map((track, index) => (
        <Track ranking={index + 1} key={track.songUrl} {...track} />
      ))}
    </div>
  )
}
