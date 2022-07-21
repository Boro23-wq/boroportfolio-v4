import { truncate } from '@/lib/utils'
import millify from 'millify'

export default function Artist(artist) {
  const totalFollowers = artist?.totalFollowers
  const millifiedTotalFollowers = millify(Number(totalFollowers))

  return (
    <>
      <div className="flex flex-row items-baseline border-b border-gray-200 dark:border-gray-700  max-w-3xl w-full mt-8">
        <p className="text-sm font-bold text-gray-400 ">{artist.ranking}</p>
        <div className="flex flex-col pl-3">
          <a
            className="font-medium text-gray-900 dark:text-gray-50 truncate w-60 sm:w-96 md:w-full"
            href={artist.artistUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {truncate(artist.name, 40)}
          </a>
          <p className="text-gray-500 mb-4 truncate w-60 sm:w-96 md:w-full" color="gray.500">
            {millifiedTotalFollowers} followers
          </p>
        </div>
      </div>
    </>
  )
}

{
  /* <div className="mt-4 mb-4 bg-gray-50 dark:bg-gray-700 p-2 rounded-md border-solid border border-gray-100 dark:border-gray-500">
        <a
          href={artist?.artistUrl}
          className="flex items-center p-3 mb-2 text-base font-bold text-gray-900 bg-gray-100 dark:bg-gray-600 rounded-lg hover:bg-gray-100 group hover:shadow transition-shadow"
        >
          <img
            className="rounded-full"
            height={25}
            width={25}
            src={artist?.artistImage.url}
            alt={artist?.artistUrl}
          />
          <span className="flex-1 ml-3 whitespace-nowrap dark:text-gray-50 ">{artist?.name}</span>
          <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 dark:text-gray-100 bg-gray-200 dark:bg-gray-800 rounded">
            {`${millifiedTotalFollowers} fllr`}
          </span>
        </a>
        {artist?.genres.slice(0, 2).map((genre) => (
          <>
            <span
              key={artist.artistUrl}
              className="bg-indigo-50 dark:bg-gray-800 text-indigo-800 dark:text-gray-100 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
            >
              {genre}
            </span>
          </>
        ))}
      </div> */
}
