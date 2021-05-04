import Image from 'next/image'
import Link from '@/components/Link'

import { SSIcon } from './ProjectLogo'

const Card = ({ title, description, imgSrc, href }) => (
  <div className="p-4 md:w-1/2 md" style={{ maxWidth: '544px' }}>
    <div className="h-full border-2 border-gray-200 border-opacity-60 dark:border-gray-700 rounded-md overflow-hidden">
      <div className="p-6">
        {/* {imgSrc === 'SSIcon' && <SSIcon />} */}
        {/* {href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={SSIcon}
              className="lg:h-48 md:h-36 object-cover object-center"
              width={50}
              height={50}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="lg:h-48 md:h-36 object-cover object-center"
            width={544}
            height={306}
          />
        )} */}
        <h2 className="text-2xl font-bold leading-8 tracking-tight mb-3">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose text-gray-500 max-w-none dark:text-gray-400 mb-4">{description}</p>
        {href && (
          <Link
            href={href}
            className="transition duration-300 ease-in-out text-base font-medium leading-6 bg-gray-100 p-2.5 rounded-md text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 dark:bg-gray-900"
            aria-label={`Link to ${title}`}
          >
            Visit the site &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
