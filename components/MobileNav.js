import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'
import { capitalize } from '@/lib/utils'
import link from 'next/link'

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)
  const router = useRouter()

  const p = router.asPath.split('/')[1]
  const path = capitalize(p)

  console.log(path, link.title)
  // console.log(path === link.title)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }

  return (
    <div className="sm:hidden">
      <button
        type="button"
        className="w-6 h-8 ml-1 mr-1 rounded"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="text-gray-900 dark:text-gray-100"
        >
          {navShow ? (
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          ) : (
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          )}
        </svg>
      </button>

      <div
        className={`fixed w-full h-full top-24 right-0 bg-gray-100 dark:bg-black opacity-95 z-10 transform ease-in-out duration-300 ${
          navShow ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          type="button"
          aria-label="toggle modal"
          className="fixed w-full h-full cursor-auto focus:outline-none"
          onClick={onToggleNav}
        ></button>
        <nav className="fixed h-full mt-8">
          {headerNavLinks.map((link) => (
            <div key={link.title} className="flex items-center px-12 py-4">
              <Link
                href={link.href}
                className={
                  path === link.title
                    ? 'text-lg font-semibold text-gray-900 dark:text-gray-100 mr-2'
                    : 'text-lg font-medium text-gray-600 dark:text-gray-500 mr-2'
                }
                onClick={onToggleNav}
              >
                {link.title}
              </Link>
              <div
                className={
                  path === link.title
                    ? 'font-semibold text-gray-900 dark:text-gray-100'
                    : 'font-medium text-gray-600 dark:text-gray-500'
                }
              >
                &rarr;
              </div>
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default MobileNav
