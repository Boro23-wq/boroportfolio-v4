import siteMetadata from '@/data/siteMetadata'
import { useRouter } from 'next/router'
import headerNavLinks from '@/data/headerNavLinks'
import { Logo } from '@/data/Logo'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { useTheme } from 'next-themes'
import { capitalize } from '@/lib/utils'

const LayoutWrapper = ({ children }) => {
  const { theme } = useTheme()
  const router = useRouter()

  const p = router.asPath.split('/')[1]
  const path = capitalize(p)

  return (
    <SectionContainer>
      <div className="flex flex-col justify-between h-screen">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label="Boro Blog">
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <Logo
                    rectColor={theme === 'dark' ? '#fff' : '#000'}
                    pathColor={theme === 'dark' ? '#000' : '#fff'}
                  />
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className={
                    path === link.title
                      ? 'p-1 mx-2 font-semibold text-gray-900 sm:p-4 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md'
                      : 'p-1 mx-2 font-medium text-gray-400 sm:p-4 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md'
                  }
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <div className="ml-2 mr-3 sm:mr-0 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 px-1 py-1 rounded-md transition ease-in-out delay-50">
              <ThemeSwitch />
            </div>
            <div className="ml-2 mr-3 sm:mr-0 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 px-1 py-1 rounded-md transition ease-in-out delay-50">
              <MobileNav />
            </div>
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
