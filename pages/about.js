import siteMetadata from '@/data/siteMetadata'
import { PageSeo } from '@/components/SEO'
import SpotifyPlayer from '@/components/SpotifyPlayer'
import TopTracks from '@/components/TopTracks'
import Image from 'next/image'

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
              className="rounded-full object-cover"
              src={siteMetadata.image}
              alt={siteMetadata.author}
              width={60}
              height={60}
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400 mb-4">
              Developer, Designer, and Blogger.
            </div>

            <div className="flex justify-center sm:w-max mt-2">
              <SpotifyPlayer />
            </div>

            {/* <div className="w-full m-0 mt-4">
              <Analytics />
            </div> */}

            {/* <div className="w-full m-0 mt-4">
              <TopTracks />
            </div> */}
          </div>

          <div className="pl-0 sm:pl-8 pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            {/*  about-section */}
            <div className="mb-8">
              <div className="text-3xl md:text-5xl text-black tracking-tight dark:text-white font-bold">
                About Me
              </div>

              <div className="flex mb-2">
                <div className="flex flex-col mt-4">
                  <div className="dark:bg-black dark:border-gray-700 rounded-md pt-4 mb-4">
                    I have graduated from the New Jersey Institute of Technology with a Master's
                    Degree in Computer Science. I am a self-motivated developer with over three
                    years of experience in full-stack web development, and I am eager to make a
                    positive impact. I have previously built and delivered highly performant,
                    design-centric web applications with excellent user experiences.
                  </div>
                  <div className="dark:bg-black dark:border-gray-700 rounded-md mb-4">
                    In a recent project, I performed various tasks including vision articulation,
                    stakeholder identification, and user persona construction. I also led the API
                    lifecycle development, focusing on code quality and API design. Additionally, I
                    developed engaging UX/UI and resolved performance issues, while building a
                    responsive SPA using Next.js, Typescript, and Tailwind CSS.
                  </div>

                  <div className="dark:bg-black dark:border-gray-700 rounded-md">
                    Furthermore, I have a passion for writing technical blogs primarily focused on
                    full-stack development, including topics such as features, updates, and APIs. My
                    blog posts often delve into front-end technologies like React and Next.js,
                    providing valuable insights and information.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
