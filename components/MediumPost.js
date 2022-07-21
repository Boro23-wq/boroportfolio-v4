import React from 'react'
import { useRouter } from 'next/router'
import { readableDateString } from '@/lib/utils'

export const MediumPost = (post) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(post.link)
  }

  return (
    <div className="p-6 mb-4 bg-white rounded-lg border border-gray-200 shadow-md overflow-auto dark:bg-gray-800 dark:border-gray-700">
      <h6 className="mb-2 no-underline text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {post.title}
      </h6>
      <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-3 py-1 rounded dark:bg-gray-700 dark:text-gray-300">
        {readableDateString(post.pubDate)}
      </span>

      {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.description}</p> */}

      <button
        type="button"
        onClick={handleClick}
        className="flex items-center text-white bg-gray-700 hover:bg-gray-600 py-2 px-4 rounded-md mt-6"
      >
        Read More
        <svg
          aria-hidden="true"
          className="ml-2 -mr-1 w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  )
}
