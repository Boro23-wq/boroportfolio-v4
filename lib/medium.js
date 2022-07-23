const medium_username = process.env.NEXT_PUBLIC_MEDIUM_USERNAME

const MEDIUM_POSTS_ENDPOINT = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${medium_username}`

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
export const runMiddleware = (req, res, fn) => {
  // eslint-disable-next-line no-undef
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export const getMediumPosts = async () => {
  return fetch(MEDIUM_POSTS_ENDPOINT)
}
