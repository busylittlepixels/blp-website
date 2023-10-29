
import fs from "fs"
import React from 'react'
import matter from 'gray-matter'
import path from 'path'
import Markdown from "markdown-to-jsx"
import Link from 'next/link'
import { MotionImage } from '../../../../components/layout/MotionImage';
import { RichText } from '../../../../components/layout/RichText';
import FadeIn from '../../../../components/shared/FadeIn';

// import Blog1 from '../../../../content/the-importance-of-a-modern-website-and-engaging-online-experience-for-businesses.mdx'


const getPostContent = (slug: string) => {
   
	// let folder = path.join(process.cwd(), '/src/content/');
    const file = path.join(process.cwd(), `/src/content/${slug}.mdx`);
    const content = fs.readFileSync(file, {
        encoding: 'utf-8',
    });
    const matterResult = matter(content)
    return matterResult
}

const PostPage = (props: any) => {
	const slug = props.params.slug
	const post = getPostContent(slug) 
   
	return (
    
        <main className={`blog`}>
        
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
                            width="4"
                            height="4"
                            className="text-gray-200"
                            fill="currentColor"
                            />
                        </pattern>
                        </defs>
                        <rect width="350" height="700" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
                    </svg>
                </div>
            </div> */}
        
            <div className="absolute inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]">
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
            <section className="px-6 max-sm:pt-10 md:py-20 bg-white pb-0 md:pb-0">
                <div className="grid grid-cols-1 justify-items-center homeAdjust">
                    <div className="max-full text-center leading-relaxed">
                        <h1 className="composedHeading">{post.data.title}</h1>
                    </div>
                    <div className="max-full text-center leading-relaxed mb-8">
                        <p className="font-semibold tracking-tighter mt-8 mb-8">By: <a href="#">{post.data.author}</a> | Category: <span className="relative z-10 rounded-full bg-red-600 px-3 py-1.5 font-medium text-white hover:bg-red-400 cursor-pointer">{post.data.category}</span> | Posted: {post.data.postdate}</p>
                        {/* <RichText className="article_text max-w-5xl mx-auto" content={post.excerpt} /> */}
                    </div>
                </div>
                <div className={'shiney-wrapper shine'}>
                    <MotionImage alt={`${post.data.title}`} src={post.data.featuredImage} />
                </div>               
                <div className="py-8 flex flex-col">
                    <div className="mx-auto w-full max-w-3xl">
                        <Markdown className={`flex-col article_text max-w-5xl mx-auto`}>{post.content}</Markdown>
                        <div className="header__underline"></div>     
                    </div>
                </div>
                <div className="relative mx-auto h-full max-w-prose text-lg" aria-hidden="true">
                    <svg
                        className="absolute bottom-12 right-full -translate-x-32 transform"
                        width="400"
                        height="384"
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
                            width="4"
                            height="4"
                            className="text-gray-200"
                            fill="currentColor"
                            />
                        </pattern>
                        </defs>
                        <rect width="400" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
                    </svg>
                    </div>
                
                </section>
                <section id="author" aria-labelledby="author-title" className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16">
                <div className="absolute inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]">
                    <svg aria-hidden="true" className="absolute inset-0 h-full w-full">
                    <defs>
                        <pattern id=":ra:" width="128" height="128" patternUnits="userSpaceOnUse" x="50%" y="100%">
                        <path d="M0 128V.5H128" fill="none" stroke="currentColor"></path>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#:ra:)"></rect>
                    </svg>
                </div>
                <div className="relative mx-auto max-w-5xl sm:px-6">
                    <div className="bg-slate-50 max-sm:pt-12 px sm:rounded-6xl">
                    <div className="relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
                        <img alt="" sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem" src="/assets/images/paddy.jpeg" width="576" height="576" decoding="async" data-nimg="1" className="absolute inset-0 h-full w-full object-top object-cover shadow-xl" loading="lazy" style={{ "color": "transparent"}} />
                    </div>
                    <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32 rounded shadow-xl">
                        
                        <p className="mt-8 font-display font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                            <span className="block text-red-600">Paddy Ryan,</span>
                        </p>
                        <p className="mt-2 font-display font-extrabold tracking-tight text-slate-900 sm:text-2xl">Co-Founder, BUSY<span style={{ "color":"red"}}>LITTLE</span>PIXELS.</p>
                        <p className="mt-4 text-md tracking-tight text-slate-700 article_text">I’ve been designing and developing professionally for over a decade and have worked with dozens of the biggest brands to create roadmaps to success for their products and tech. I’ve worked with companies from startups to Nasdaq listed enterprises, and honed my abilities to navigate the brave new world that is all things tech.</p>
                    </div>
                    </div>
                </div>
            </section>
            </FadeIn>
        </main>   
	)
}
export default PostPage