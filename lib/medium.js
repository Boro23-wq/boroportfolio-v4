const username = `@sboro2899`
const integration_token = process.env.MEDIUM_INTEGRATION_TOKEN
const user_id = process.env.MEDIUM_USER_ID

const MEDIUM_POSTS_ENDPOINT = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${username}`
const MEDIUM_PUBLICATIONS_ENDPOINT = `https://api.medium.com/v1/users/${user_id}/publications`

export const getMediumPosts = async () => {
  return fetch(MEDIUM_POSTS_ENDPOINT)
}

export const getMediumPublications = async () => {
  return await fetch(MEDIUM_PUBLICATIONS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${integration_token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Accept-Charset': 'utf-8',
    },
  })
}
