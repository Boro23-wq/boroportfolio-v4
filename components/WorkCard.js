import React from 'react'
import { useTheme } from 'next-themes'
import { WorkIcon } from './Icons'

export const WorkCard = () => {
  const { theme } = useTheme()

  return (
    <div className="p-4 w-full max-w-xl bg-white rounded-lg border-2 sm:p-6 dark:bg-gray-900 dark:border-gray-800">
      <div className="flex items-center mb-4">
        <WorkIcon
          w={28}
          h={28}
          fill={theme === 'dark' ? 'rgba(255,255,255, 0.4)' : 'rgba(0,0,0,0.3)'}
        />
        <h5 className="ml-2 text-xl font-bold leading-none text-gray-900 dark:text-white">Work</h5>
      </div>
      <div className="flow-root">
        <ul>
          <li>
            <div className="flex items-center justify-between space-x-4 space-y-2 mt-2">
              <div className="flex space-x-4 space-y-2">
                <div className="flex-shrink-0 mt-2">
                  <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-gray-400 ring-0 ring-gray-500 border dark:border border-gray-200 bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:ring-0">
                    <img className="w-8 h-8 rounded-full" src="images/wave.png" alt="Wave" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Wave Systems
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    UI/UX Developer
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="inline-flex items-center text-xs font-light text-gray-400 dark:text-gray-500">
                  May 2022 - Aug 2022
                </div>
              </div>
            </div>
          </li>

          <li className="py-3 sm:py-4">
            <div className="flex items-center justify-between space-x-4 space-y-2">
              <div className="flex space-x-4 space-y-2">
                <div className="flex-shrink-0 mt-2">
                  <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-gray-400 ring-0 ring-gray-500 border dark:border border-gray-200 bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:ring-0">
                    <img className="w-8 h-8 rounded-full" src="images/slotly.png" alt="Slotly" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Slotly
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    Fullstack Developer
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="inline-flex items-center text-xs font-light text-gray-400 dark:text-gray-500">
                  May 2021 - Aug 2021
                </div>
              </div>
            </div>
          </li>

          <li className="">
            <div className="flex items-center justify-between space-x-4 space-y-2">
              <div className="flex space-x-4 space-y-2">
                <div className="flex-shrink-0 mt-2">
                  <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-gray-400 ring-0 ring-gray-500 border dark:border border-gray-200 bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:ring-0">
                    <img className="w-8 h-8 rounded-full" src="images/blackx.png" alt="BlackX" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    BlackX
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    Frontend Developer
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="inline-flex items-center text-xs font-light text-gray-400 dark:text-gray-500">
                  Aug 2020 - May 2021
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
