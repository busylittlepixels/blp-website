/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import FadeIn from '../../../components/shared/FadeIn'

import { Services } from '../../../components/layout/Services'
import { LogoCloud } from '../../../components/layout/LogoCloud'
import { Team } from '../../../components/layout/Team'
import { Metadata } from 'next'
import { HubSpotForm } from '../../../components/layout/HubspotForm'

const studioP1 = `<h2 class="font-black text-2xl">NAVIGATING THE DIGITAL LANDSCAPE  <span class="rd_txt"> WITH EXPERTISE</span></h2><p>Our company stands as a beacon for ambitious scale-ups and established entities. Embracing a fractional CTO approach, we focus on elevating your content, transforming it from mere text into a compelling narrative. Our expertise in integrating third-party APIs and implementing state-of-the-art hosting solutions ensures a seamless, effective, and unforgettable digital journey. Are you ready to revolutionize your digital presence?<p>`
const studioP2 = `<h2 class="font-black text-2xl">DRIVING TECHNICAL INNOVATION <span class="rd_txt">FORWARD</span></h2><p>Innovation in technology is our core pursuit, extending beyond any single platform. Our journey includes collaborations with leading global entities and involvement in significant projects from Ireland abd across Europe - especially in the realm of governmental tech initiatives. At the forefront of technological advancements, we're dedicated to crafting solutions that captivate and inspire. Join us in shaping a narrative of innovation that truly impacts and connects.<p>`
const studioP3 = `<h2 class="font-black text-2xl">More than a service; we're your <span class="rd_txt">digital compass</span></h2><p>Navigating the ever-evolving digital landscape can be daunting, but our seasoned team is here to guide you from your current position to your envisioned pinnacle. As trusted advisors, we'll share insights that illuminate your path. As builders, we craft robust solutions tailored to your unique needs. And as technical facilitators and enablers, we ensure a seamless transition and implementation, empowering your business every step of the way. With Busy Little Pixels by your side, your journey towards growth and innovation is not just assured; it's inspired.<p>`

export const metadata: Metadata = {
	title: 'Why BLP | Busy Little Pixels',
	description:
		'What We Are is Who We Are. Factional CTOs, Web and mobile application development specialists, technical business architects and trusted advisors',
	keywords:
		'Fractional CTO, Technical Specialists, Professional Services, Technical Roadmap, Web and Application development',
}

export default async function Page() {
	return (
		<>
			<FadeIn>
				<main className={`blog`}>
					<svg
						className="max-md:hidden absolute right-0 transform mt-12 z-10 mr-20 mix-blend-darken"
						width="650"
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
								></rect>
							</pattern>
						</defs>
						<rect
							width="650"
							height="384"
							fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
						></rect>
					</svg>

					<div className="absolute inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]">
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
									<path
										d="M0 128V.5H128"
										fill="none"
										stroke="currentColor"
									></path>
								</pattern>
							</defs>
							<rect width="100%" height="100%" fill="url(#:ra:)"></rect>
						</svg>
					</div>
					<section className="px-6 max-sm:pt-10 md:py-20 bg-white pb-0 md:pb-0">
						<div className="grid grid-cols-1 justify-items-center gap-2 md:gap-10 homeAdjust mb-2">
							<div className="max-full text-left leading-relaxed">
								<h1 className="font-black text-4xl md:text-7xl mb-6 last:mb-0 text-center">
									WHY B<span style={{ color: 'red' }}>L</span>P?
								</h1>
								<div className="header__underline"></div>
							</div>
							<div className="RichText_richText__qEmi6 text-gray-600 mt-4 article_text flex-col">
								<div className="max-full text-center leading-relaxed mb-8">
									<p className="article_text max-w-5xl mx-auto">
										At the core of our operations is a fusion of imaginative
										design and cutting-edge technology, underpinned by our
										fractional CTO expertise. Whether you're scaling up or
										branching out, our extensive tech toolkit is your ally for
										the future. We meticulously develop web, technical and
										business solutions that grow in tandem with your goals and
										dreams. From the initial spark of an idea to the final
										stages of execution, encompassing seamless third-party API
										integration and robust hosting strategies, our team is
										dedicated to enhancing every aspect of your digital
										footprint. Join us in a journey where every pixel is a
										testament to innovation.
									</p>
								</div>
							</div>
						</div>
						<FadeIn>
							<div className="shiney-wrapper shine">
								<img
									alt={'image alt blog'}
									src={'/assets/images/desk.webp'}
									width={1200}
									height={300}
									className="shadow-lg h-1/2 mx-auto rounded-lg"
									loading="lazy"
								/>
							</div>
							{/* <Video videoEmbedCode={article ? article.articleVideoEmbed : null} /> */}
						</FadeIn>

						<div className="py-8 flex flex-col md:flex-row">
							<div className="mx-auto w-full max-w-3xl">
								<div
									dangerouslySetInnerHTML={{ __html: studioP1 }}
									className={'article_text mt-8 flex-col'}
								/>
								<div
									dangerouslySetInnerHTML={{ __html: studioP2 }}
									className={'article_text mt-2 flex-col'}
								/>
							</div>
						</div>
						<div className="w-full mb-12 shiney-wrapper shine" style={{ opacity: 1 }}>
							<img
								alt="image alt blog"
								src="/assets/images/studio2.png"
								width="800"
								height="200"
								className="shadow-lg h-1/2 mx-auto rounded-lg"
							/>
						</div>
						<div className="mx-auto w-full max-w-3xl">
							<div
								dangerouslySetInnerHTML={{ __html: studioP3 }}
								className={'article_text mt-8 flex-col'}
							/>
						</div>
						<div
							className="relative mx-auto h-full max-w-prose text-lg"
							aria-hidden="true"
						>
							<svg
								className="absolute bottom-12 right-full -translate-x-32 transform mix-blend-darken"
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
								<rect
									width="400"
									height="384"
									fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
								/>
							</svg>
						</div>
					</section>

					<LogoCloud />
					<Services />
					<Team />
					<section
						className="text-black relative mt-2 mb-2 w-full max-w-full"
						id="contact"
					>
						<div className="absolute inset-0 bg-gray-300 overflow-hidden">
							<iframe
								width={'100%'}
								height={'100%'}
								frameBorder="0"
								marginHeight={0}
								marginWidth={0}
								title="map"
								scrolling="no"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152515.6931206764!2d-6.245704099999999!3d53.324320099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e80ea27ac2f%3A0xa00c7a9973171a0!2sDublin%2C%20Ireland!5e0!3m2!1sen!2snl!4v1692869457747!5m2!1sen!2snl"
								style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
							></iframe>
						</div>
						<FadeIn>
							<div className="container px-5 py-24 mx-auto flex">
								<div className="lg:w-1/3 md:w-2/3 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
									<>
										<h2 className="text-black text-lg mb-1 font-black uppercase">
											CONTACT US <span style={{ color: 'red' }}>TODAY</span>
										</h2>
										<div className="header__underline"></div>
										<p className="leading-relaxed my-5 text-black">
											To contact us, please add your email address and message
											below.
										</p>
										<HubSpotForm />
									</>
								</div>
							</div>
						</FadeIn>
					</section>
				</main>
			</FadeIn>
		</>
	)
}
