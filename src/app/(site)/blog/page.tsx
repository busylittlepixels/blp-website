import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Page } from '../../../payload/payload-types'
import FadeIn from '../../../components/shared/FadeIn'
import { RichText } from '../../../components/layout/RichText'
import { Date } from '../../../components/custom/Date'

export const metadata: Metadata = {
	title: 'Blog | Busy Little Pixels',
	description:
		'Busy Little Blog - We are Fractional CTO experts. Headless web and app development, devops, project management, digital strategy, media and events',
}

export default async function Blog() {
	const blog: Page = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts`, {
		next: { revalidate: 3600 },
	})
		.then(res => res.json())
		.then(res => res?.docs)

	if (!blog) {
		return notFound()
	}
	// @ts-ignore
	const posts: any = blog

	const capitalizeCategory = c => {
		const cat = c[0].split(' ')
		let i
		for (i = 0; i < cat.length; i++) {
			return (cat[i] = cat[i].charAt(0).toUpperCase() + cat[i].slice(1))
		}
	}

	return (
		<main className={'blog index'}>
			<div className="absolute inset-x-0 bottom-10 top-0 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]">
				<svg aria-hidden="true" className="absolute inset-0 h-full w-full">
					<defs>
						<pattern
							id=":ra:"
							width="128"
							height="128"
							patternUnits="userSpaceOnUse"
							x="50%"
							y="100%"
						>
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
							<h1 className="blogIndexHeading">
								BUSY<span style={{ color: 'red' }}>LITTLE</span>BLOG
							</h1>
							<div className="header__underline"></div>
							<p className="blogIntroString">
								At{' '}
								<span>
									<strong> busy</strong>
								</span>
								<span style={{ color: 'red' }}>
									<strong>little</strong>
								</span>
								<strong>pixels</strong>, we navigate the ever-changing landscape of
								business and technology.
								<br />
								From industry and tech commentary, to emerging trends, we've always
								got something to say.
							</p>

							<div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
								{posts.map((post: any, _id) => {
									return (
										<article
											key={post.id}
											className="relative isolate flex flex-col gap-8 lg:flex-row"
										>
											<div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
												<img
													src={post.featuredImage}
													alt={`${post.title} main image`}
													className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
												/>
												<div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
											</div>
											<div>
												<div className="flex items-center gap-x-4 text-xs">
													<time className="text-gray-500">
														<Date dateString={post.createdAt} />
													</time>
													<Link
														href={`/blog/${post.category}/${post.slug}`}
														className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
													>
														{post.category
															? capitalizeCategory(post.category)
															: ''}
													</Link>
												</div>
												<div className="group relative">
													<h3 className="mt-3 text-2xl font-black leading-6 text-black group-hover:text-red-500 transition-all">
														<Link href={`/blog/${post.slug}`}>
															<span className="absolute" />
															{post.title}
														</Link>
													</h3>
													<RichText
														content={post.excerpt}
														className={`text-sm leading-6 text-gray-600 article_text`}
													/>
												</div>
												<div className="flex">
													<div className="relative flex items-center gap-x-4">
														<img
															src={
																'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80'
															}
															alt=""
															className="h-10 w-10 rounded-full bg-gray-50"
														/>
														<div className="text-sm leading-6">
															<p className="font-semibold text-gray-900">
																<a href={'#'}>
																	<span className="absolute inset-0" />
																	Paddy Ryan
																</a>
															</p>
															<p className="text-gray-600">
																Co-Founder
															</p>
														</div>
													</div>
												</div>
											</div>
										</article>
									)
								})}
							</div>
						</div>
					</div>
				</div>
			</FadeIn>
		</main>
	)
}
