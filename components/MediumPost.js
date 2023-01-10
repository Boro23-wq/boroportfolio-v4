import React from 'react'
import { useRouter } from 'next/router'
import { readableDateString } from '@/lib/utils'

export const MediumPost = (post, key) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(post.link)
  }

  return (
    <div className="flex border-b border-gray-200 dark:border-gray-700 max-w-3xl w-full mt-5 last:border-none">
      <div className="mb-4">
        <h4 className="my-0 font-medium text-lg text-gray-900 dark:text-white">{post.title}</h4>
        <p className="text-gray-500 mb-4 my-0 sm:w-96 md:w-full">
          Published - {readableDateString(post.pubDate)}
        </p>
        <button
          type="button"
          onClick={handleClick}
          className="flex items-center text-sm text-gray-800 dark:text-gray-200 border-2 dark:border-gray-600 py-2 px-4 rounded-md mt-6"
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
    </div>
  )
}
