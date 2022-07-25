import siteMetadata from '@/data/siteMetadata'
import { PageSeo } from '@/components/SEO'
import SpotifyPlayer from '@/components/SpotifyPlayer'
import TopTracks from '@/components/TopTracks'
import Image from 'next/image'
import MediumPosts from '@/components/AllMediumPosts'
import TopArtists from '@/components/TopArtists'
import Analytics from '@/components/metrics/Analytics'

export default function About() {
  return (
    <>
      <PageSeo
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <div className="divide-y-2 divide-gray-100 dark:divide-gray-900">
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            {/* <Avatar name={siteMetadata.author} src={siteMetadata.image} /> */}
            <Image
              className="rounded-full object-cover filter grayscale"
              src={siteMetadata.image}
              alt={siteMetadata.author}
              width={90}
              height={90}
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400 mb-4">
              Student, developer, and blogger.
            </div>

            <div className="flex justify-center sm:w-max mt-2">
              <SpotifyPlayer />
            </div>

            <div className="w-full m-0 mt-4">
              <Analytics />
            </div>

            <div className="w-full m-0 mt-4">
              <TopTracks />
            </div>

            <div className="w-full m-0 mt-8">
              <TopArtists />
            </div>
          </div>

          <div className="pl-0 sm:pl-8 pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            {/*  about-section */}
            <div className="mb-8">
              <div className="text-3xl md:text-5xl text-black tracking-tight dark:text-white font-bold">
                About
              </div>

              <div className="flex mb-2 px-2">
                <ul className="list-[square]">
                  <li>
                    I'm a Computer Science graduate. I build high performant web applications. I
                    have a design-centric approach, and love to devise high-impact user experiences.
                  </li>
                  <li>
                    Currently, I'm working with Next.js, Nest.js, and GraphQL predominantly. All my
                    projects are open-sourced. You may visit my Github profile to know more about my
                    recent activities.
                  </li>
                  <li>
                    Additionally, I like building experiences for the web. I build high-quality
                    websites with design aesthetics. If you want to check out some of my work, you
                    may visit my UI/UX portfolio @ boro-ui-ux.webflow.io.{' '}
                  </li>
                  <li>
                    I write technical blogs as well. My blogs are mostly around topics related to
                    full-stack development, features, updates, and APIs, at large. You will find a
                    lot of topics on front-end technologies like React and Next.
                  </li>
                </ul>
              </div>
            </div>

            <div className="m-0 sm:m-2">
              <div className="mb-6 text-3xl md:text-5xl text-black tracking-tight dark:text-white font-bold">
                Medium Stories
              </div>
              <MediumPosts />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
