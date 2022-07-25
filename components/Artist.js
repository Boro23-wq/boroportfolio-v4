import { truncate } from '@/lib/utils'
import millify from 'millify'

export default function Artist(artist) {
  const totalFollowers = artist?.totalFollowers
  const millifiedTotalFollowers = millify(Number(totalFollowers))
  return (
    <div className="flex flex-row items-baseline border-b border-gray-200 dark:border-gray-700 max-w-3xl w-full mt-8 last:border-none">
      <p className="text-sm font-bold text-gray-400 ">{artist?.ranking}</p>
      <div className="flex flex-col pl-3">
        <a
          className="font-medium text-gray-900 dark:text-gray-50 truncate w-60 sm:w-96 md:w-full"
          href={artist?.artistUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {truncate(artist?.name, 40)}
        </a>
        <p className="text-gray-500 mb-4 truncate w-60 sm:w-96 md:w-full" color="gray.500">
          {millifiedTotalFollowers} followers
        </p>
      </div>
    </div>
  )
}
