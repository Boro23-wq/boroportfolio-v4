import Link from 'next/link'
import { kebabCase } from '@/lib/utils'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mt-0.5 transition duration-300 ease-in-out mr-2 bg-gray-100 p-1 rounded-sm text-xs font-medium text-gray-500 uppercase hover:text-gray-600 dark:hover:text-gray-400 dark:bg-gray-900">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
