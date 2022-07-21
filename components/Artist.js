import millify from 'millify'

export default function Artist(artist) {
  const totalFollowers = artist?.totalFollowers
  const millifiedTotalFollowers = millify(Number(totalFollowers))

  return (
    <div className="mt-4 mb-4 bg-gray-50 dark:bg-gray-700 p-2 rounded-md border-solid border border-gray-100 dark:border-gray-500">
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
    </div>
  )
}
