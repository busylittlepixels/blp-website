import React from 'react';
import { notFound } from 'next/navigation';
import { Page } from '../../../payload/payload-types';
import { FormEvent, useState } from 'react';
import { FadeIn } from '../../../components/shared/FadeIn';
import { HubSpotForm } from '../../../components/layout/HubspotForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact | Busy Little Pixels',
	description:
		'Contact Us - We are Fractional CTO experts. Headless web and app development, devops, project management, digital strategy, media and events',
};

export default async function Contact() {
	const map_url = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152515.6931206764!2d-6.245704099999999!3d53.324320099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e80ea27ac2f%3A0xa00c7a9973171a0!2sDublin%2C%20Ireland!5e0!3m2!1sen!2snl!4v1692869457747!5m2!1sen!2snl`;
	const form_title = `Get in Touch`;

	const about: Page = await fetch(
		`${process.env.NEXT_PUBLIC_SERVER_URL}/api/pages?where[slug][equals]=contact&depth=2`,
		{ next: { revalidate: 10 } },
	)
		.then(res => res.json())
		.then(res => res?.docs?.[0]);

	if (!about) {
		return notFound();
	}

	return (
		<>
			<FadeIn>
				<main className={`contact`}>
					<div className="bg-black py-24 sm:py-32 overflow-hidden w-full">
						<div className="relative inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]">
							<svg
								aria-hidden="true"
								className="absolute inset-0 h-full w-full"
							>
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
						<div
							className="hidden md:block relative mx-auto h-full max-w-prose text-lg"
							aria-hidden="true"
						>
							<svg
								className="absolute left-full transform"
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
						<div className="mx-auto max-w-7xl px-6 lg:px-8">
							<div className="mx-auto max-w-2xl lg:mx-0">
								<h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl uppercase mb-4">
									CONTACT <span style={{ color: 'red' }}>US</span>
								</h1>
								<div className="header__underline"></div>
								<p className="mt-6 text-lg leading-8 text-gray-300">
									We{`'`}re always happy to hear from you. Feel free to contact
									us via the form or our social platforms. For general enquires,
									see contact email below. For feedback, comments, questions or
									the odd SOS...please use the form on this page. We will
									endeavour to reply to your messages within 24 hours
								</p>
							</div>
							<div className="mx-auto max-w-2xl lg:mx-0">
								<dl className="mt-10 space-y-4 text-base leading-7 text-gray-300">
									<div className="flex gap-x-4">
										<dt className="flex-none">
											<span className="sr-only">Address</span>
											<svg
												className="h-7 w-6 text-gray-400"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth="1.5"
												stroke="currentColor"
												aria-hidden="true"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
												></path>
											</svg>
										</dt>
										<dd>
											<strong>Dublin (HQ)</strong>
											<br />
											The DGQ Building,
											<br />
											Customs Centre, <br />
											North Quay Dock, <br />
											Dublin, Ireland
										</dd>
									</div>
									<div className="flex gap-x-4">
										<dt className="flex-none">
											<span className="sr-only">Telephone</span>
											<svg
												className="h-7 w-6 text-gray-400"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth="1.5"
												stroke="currentColor"
												aria-hidden="true"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
												></path>
											</svg>
										</dt>
										<dd>
											<a
												className="hover:text-gray-900"
												href="tel:+1 (555) 234-5678"
											>
												+353 (87) 689-6090
											</a>
										</dd>
									</div>
									<div className="flex gap-x-4">
										<dt className="flex-none">
											<span className="sr-only">General enquires </span>
											<svg
												className="h-7 w-6 text-gray-400"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth="1.5"
												stroke="currentColor"
												aria-hidden="true"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
												></path>
											</svg>
										</dt>
										<dd>
											<a
												className="hover:text-gray-900"
												href="mailto:team@busylittlepixels.com"
											>
												team@busylittlepixels.com
											</a>
										</dd>
									</div>
								</dl>
							</div>
						</div>
					</div>
					<section
						className="text-black relative mt-2 mb-2 w-full max-w-full"
						id="contactPage"
					>
						<div className="absolute inset-0 bg-gray-300 overflow-hidden">
							<iframe
								width="100%"
								height="100%"
								frameBorder="0"
								marginHeight={0}
								marginWidth={0}
								title="map"
								scrolling="no"
								src={map_url}
								style={{
									filter: 'grayscale(1) contrast(1.2) opacity(0.4)',
								}}
							></iframe>
						</div>

						<div className="container px-5 py-24 mx-auto flex">
							<div className="lg:w-1/3 md:w-2/3 bg-white rounded-lg p-8 flex flex-col md:ml-auto  mt-10 md:mt-0 relative z-10 shadow-md">
								<>
									<h2 className="text-black text-lg mb-1 font-black uppercase">
										{form_title} <span style={{ color: 'red' }}></span>
									</h2>
									<div className="header__underline"></div>
									<p className="leading-relaxed mt-5 text-black">
										Please complete the form below. We aim to reply to all
										messages within 24 hours.
									</p>
									<br />
									<HubSpotForm />
								</>
							</div>
						</div>
					</section>
				</main>
			</FadeIn>
		</>
	);
}
