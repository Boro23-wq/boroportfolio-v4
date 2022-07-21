import { getTopArtists } from '../../lib/spotify'

export default async (_, res) => {
  const response = await getTopArtists()
  const { items } = await response.json()

  if (!items) {
    return res.status(404).json({ error: 'Data not found!' })
  }

  const artists = items?.slice(0, 5).map((artist) => ({
    name: artist.name,
    genres: artist.genres,
    totalFollowers: artist.followers.total,
    artistUrl: artist.uri,
    artistImage: artist.images[0],
  }))

  return res.status(200).json({ artists })
}
