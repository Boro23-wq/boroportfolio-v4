const username = `@sboro2899`
// const integration_token = process.env.MEDIUM_INTEGRATION_TOKEN
// const user_id = process.env.MEDIUM_USER_ID
const integration_token = '22c1944e4a4eeb8f006462ab310f4f49b9019a02a4a39dc0ce9229bb9a5e7b08c'
const user_id = '14789ec9a3d45f048e04999c4be956688d89276d946e2d71372ca7bafd3f830f2'

const MEDIUM_POSTS_ENDPOINT = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${username}`
const MEDIUM_PUBLICATIONS_ENDPOINT = `https://api.medium.com/v1/users/14789ec9a3d45f048e04999c4be956688d89276d946e2d71372ca7bafd3f830f2/publications`

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
