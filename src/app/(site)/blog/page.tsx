import Link from 'next/link';
import { Metadata } from 'next'
import FadeIn from '../../../components/shared/FadeIn';

export const metadata: Metadata = {
  title: 'Blog | Busy Little Pixels',
  description: 'Busy Little Blog - We are Fractional CTO experts. Headless web and app development, devops, project management, digital strategy, media and events',
}

const posts = [
    {
      id: 1,
      title: 'What is a Fractional CTO, and why do I need one?',
      href: '/blog/really-interesting-title',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
      imageUrl:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
      date: 'Aug 27, 2023',
      datetime: '2023-08-27',
      category: { title: 'Digital Strategy', href: '#' },
      author: {
        name: 'Paddy Ryan',
        role: 'Co-Founder',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
        id: 2,
        title: 'Developing for the future, with Next.JS, PayloadCMS and Tailwind',
        href: '/blog/really-interesting-title',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
        imageUrl:
          'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
        date: 'Aug 27, 2023',
        datetime: '2023-08-27',
        category: { title: 'Development', href: '#' },
        author: {
          name: 'Ronanio Fantastico',
          role: 'Co-Founder / CTO',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        id: 3,
        title: 'Building the perfect team to make your tech go!',
        href: '/blog/really-interesting-title',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
        imageUrl:
          'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
        date: 'Aug 20, 2023',
        datetime: '2023-08-20',
        category: { title: 'Business/Development', href: '#' },
        author: {
          name: 'Marieke Van Der Nietreale',
          role: 'Head of Brand',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      }
    // More posts...
  ]
  
  export default function Page() {
    return (
        <main className={'blog index'}>
            {/* <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
                <div className="relative mx-auto h-full max-w-prose text-lg" aria-hidden="true">
                    <svg
                    className="absolute bottom-5 left-full translate-x-28 transform mix-blend-darken"
                    width="350"
                    height="700"
                    fill="none"
                    viewBox="0 0 400 384"
                    >
                    <defs>
                        <pattern
                        id="d3eb07ae-5182-43e6-857d-35c643af9034"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                        >
                        <rect
                            x="0"
                            y="0"
                            width="6"
                            height="6"
                            className="text-gray-200"
                            fill="currentColor"
                        />
                        </pattern>
                    </defs>
                    <rect width="350" height="700" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
                    </svg>
                </div>
            </div> */}
            <div className="absolute inset-x-0 bottom-10 top-0 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]">
              <svg aria-hidden="true" className="absolute inset-0 h-full w-full">
                <defs>
                  <pattern id=":ra:" width="128" height="128" patternUnits="userSpaceOnUse" x="50%" y="100%">
                    <path d="M0 128V.5H128" fill="none" stroke="currentColor"></path>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#:ra:)"></rect>
              </svg>
            </div>
        <FadeIn>
            
            <div className="py-12 sm:py-32">
                
                <div className="container mx-auto w-full px-4 bg-white max-w-auto">
                <div className="mx-auto max-w-7xl">
                    <h1 className="composedHeading">BUSY<span style={{ "color" : "red"}}>LITTLE</span>BLOG</h1>
                    <div className="header__underline"></div>
                    <p className="mt-8 text-2xl leading-8 text-gray-600">
                    Esse ipsa, quasi soluta odio accusantium sint blanditiis inventore dicta illo quam!
                    </p>
                    <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
                    {posts.map((post) => (
                        <article key={post.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
                        <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                            <img
                            src={post.imageUrl}
                            alt=""
                            className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                            />
                            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                        </div>
                        <div>
                            <div className="flex items-center gap-x-4 text-xs">
                            <time dateTime={post.datetime} className="text-gray-500">
                                {post.date}
                            </time>
                            <a
                                href={post.category.href}
                                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                            >
                                {post.category.title}
                            </a>
                            </div>
                            <div className="group relative max-w-xl">
                            <h3 className="mt-3 text-2xl font-black leading-6 text-black group-hover:text-red-500 transition-all">
                                <Link href={post.href}>
                                <span className="absolute inset-0" />
                                {post.title}
                                </Link>
                            </h3>
                            <p className="mt-5 text-sm leading-6 text-gray-600">{post.description}</p>
                            </div>
                            <div className="mt-6 flex pt-6">
                            <div className="relative flex items-center gap-x-4">
                                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                <div className="text-sm leading-6">
                                <p className="font-semibold text-gray-900">
                                    <a href={post.author.href}>
                                    <span className="absolute inset-0" />
                                    {post.author.name}
                                    </a>
                                </p>
                                <p className="text-gray-600">{post.author.role}</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </article>
                    ))}
                    </div>
                </div>
                </div>
                
            </div>
        </FadeIn>
        </main>
    )
  }
  