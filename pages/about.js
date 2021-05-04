import { Avatar } from '@chakra-ui/react'
import { ArrowRightIcon } from '@chakra-ui/icons'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'
import SpotifyPlayer from '@/components/SpotifyPlayer'

export default function About() {
  return (
    <>
      <PageSeo
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <div className="divide-y-2 divide-gray-100 dark:divide-gray-900">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-4xl font-black leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Hey there, I'm {siteMetadata.author.split(' ')[1]}.
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            {/* <Avatar name={siteMetadata.author} src={siteMetadata.image} /> */}
            <img
              src={siteMetadata.image}
              alt={siteMetadata.author}
              className="w-48 h-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400 mb-4">
              Student, developer, and blogger.
            </div>
            <SpotifyPlayer />
            <div className="text-gray-500 dark:text-gray-400"></div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
              <SocialIcon kind="github" href={siteMetadata.github} />
              {/* <SocialIcon kind="facebook" href={siteMetadata.facebook} /> */}
              {/* <SocialIcon kind="youtube" href={siteMetadata.youtube} /> */}
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
              {/* <SocialIcon kind="twitter" href={siteMetadata.twitter} /> */}
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <div className="mb-4">
              <div className="text-3xl tracking-tight font-black mb-3">About</div>
              <div className="flex mb-2">
                {/* <ArrowRightIcon w={2} h={2} mt={3} mr={4} /> */}‣ I'm a senior year
                undergraduate studying Computer Science. I work on building highly performant web
                applications. I'm predisposed towards design-centric approach, and at the same time
                learning to devise high-impact user experiences.
              </div>
              <div className="flex mb-2">
                {/* <ArrowRightIcon w={2} h={2} mt={3} mr={4} /> */}‣ Currently, I'm working with
                Typescript and Next.js predominantly. All my projects are open-sourced. You may
                visit my Github profile to know more about my recent activities.
              </div>
            </div>
            <div className="mb-4">
              <div className="text-2xl tracking-tight font-black mb-3">UI/UX</div>
              <div className="flex mb-2">
                {/* <ArrowRightIcon w={2} h={2} mt={3} mr={4} /> */} ‣ I like building experiences
                for the web. I build UI/UX concept designs and high-quality websites while looking
                to power the web with my design aesthetics. If you want to check out some of my
                work, you may visit my UI/UX portfolio @ boro-ui-ux.webflow.io.
              </div>
            </div>
            <div className="mb-4">
              <div className="text-2xl tracking-tight font-black mb-3">Technical Blogging</div>
              <div className="flex mb-2">
                {/* <ArrowRightIcon w={2} h={2} mt={3} mr={4} />  */}‣ I write technical blogs as
                well. My blog circumvents around topics related to full-stack technologies,
                features, updates, APIs, and development at large. You will find a lot of topics on
                front-end technologies like React and Next. If you are interested, do have a visit
                to the Blog section. Pretty sure you would find something readable.
              </div>
            </div>
            <pre className="font-semibold">
              &gt; Thanks for checking out.{' '}
              <span role="img" aria-label="waving-emoji">
                👋
              </span>
            </pre>
          </div>
        </div>
      </div>
    </>
  )
}
