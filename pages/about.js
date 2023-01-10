import siteMetadata from '@/data/siteMetadata'
import { PageSeo } from '@/components/SEO'
import SpotifyPlayer from '@/components/SpotifyPlayer'
import TopTracks from '@/components/TopTracks'
import Image from 'next/image'
import Link from 'next/link'
import MediumPosts from '@/components/AllMediumPosts'
import TopArtists from '@/components/TopArtists'

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
              Developer, Tech Advocate and Blogger.
            </div>

            <div className="flex justify-center sm:w-max mt-2">
              <SpotifyPlayer />
            </div>

            {/* <div className="w-full m-0 mt-4">
              <Analytics />
            </div> */}

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
                About Me
              </div>

              <div className="flex mb-2 px-2">
                <div className="flex flex-col mt-4">
                  <div className="dark:bg-gray-800 border-2 dark:border-gray-700 rounded-md p-4 mb-3">
                    ⦿ Graduated from New Jersey Institute of Technology with a Master's Degree in
                    Computer Science, I am a self-motivated developer with 3+ years of experience
                    eager to make a positive impact. I have previously built and delivered highly
                    performant, design-centric web applications with excellent user experience.
                  </div>
                  <div className="dark:bg-gray-800 border-2 dark:border-gray-700 rounded-md p-4 mb-3">
                    ⦿ Recently I have worked on a Care co-ordination and case management project
                    where I led a team of 10+ members. My primary contribution was leading the API
                    lifecycle development, building API services, and developing engaging UI/UX in
                    an Agile environment.
                  </div>
                  <div className="dark:bg-gray-800 border-2 dark:border-gray-700 rounded-md p-4">
                    ⦿ Additionally, I write technical blogs. My blogs are mostly around topics
                    related to full-stack development, features, updates, and APIs, at large. You
                    will find a lot of topics on front-end technologies like React and Next.
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full m-0 mt-8">
              <MediumPosts />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
