import { truncate } from '@/lib/utils'

export default function Track(track) {
  return (
    <div className="flex flex-row items-baseline border-b border-gray-200 dark:border-gray-700  max-w-3xl w-full mt-8">
      <p className="text-sm font-bold text-gray-400 ">{track.ranking}</p>
      <div className="flex flex-col pl-3">
        <a
          className="font-medium text-gray-900 dark:text-gray-50 truncate w-60 sm:w-96 md:w-full"
          href={track.songUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {truncate(track.title, 40)}
        </a>
        <p className="text-gray-500 mb-4 truncate w-60 sm:w-96 md:w-full" color="gray.500">
          {truncate(track.artist, 40)}
        </p>
      </div>
    </div>
  )
}
