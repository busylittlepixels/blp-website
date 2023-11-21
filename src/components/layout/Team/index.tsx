'use client'
import Image from 'next/image'

const people = [
	{
		name: 'Paddy Ryan',
		role: 'Co-Founder & CEO',
		imageUrl: '/assets/images/paddy.jpeg',
		bio: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',
		twitterUrl: '#',
		linkedinUrl: '#',
		location: 'Dublin, Ireland',
	},
	{
		name: 'Bobbi Summers',
		role: 'Co-Founder & CTO',
		imageUrl: '/assets/images/person2.avif',
		bio: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',
		twitterUrl: '#',
		linkedinUrl: '#',
		location: 'Amsterdam, Netherlands',
	},
	{
		name: 'Orsi Kneitner',
		role: 'Head of Operations',
		imageUrl: '/assets/images/orsi.jpeg',
		bio: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',
		twitterUrl: '#',
		linkedinUrl: '#',
		location: 'Vienna, Austria',
	},
	{
		name: 'Harry Laird',
		role: 'Product and Technology Lead',
		imageUrl: '/assets/images/harry.png',
		bio: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',
		twitterUrl: '#',
		linkedinUrl: '#',
		location: 'Middlesbrough, United Kingdom',
	},
	// More people...
]

interface ITeam {
	headline?: string
}

export const Team = ({ headline }: ITeam) => {
	return (
		<div className="bg-black py-24 sm:py-32 overflow-hidden w-full">
			<div className="relative inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]">
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
						{headline ? headline : 'MEET THE '}
						<span style={{ color: 'red' }}>PIXELS</span>...
					</h1>
					<div className="header__underline"></div>
					<p className="mt-6 text-lg leading-8 text-gray-300">
						We are a dynamic and distributed fractional CTO company founded by a
						team of experienced professionals who have walked the path of CTOs,
						Technical Leads, Developers, and Marketing Specialists. <br />
						<br />
						With our studios headquartered in the bustling tech hub of Dublin,
						and distributed bases in Austria, the UK and The Netherlands - we
						bring together a wealth of expertise and a passion for driving
						technological innovation.
					</p>
				</div>
				<ul
					role="list"
					className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4 xl:grid-cols-4 relative z-10"
				>
					{people.map(person => (
						<li key={person.name}>
							<span className="shiney-wrapper shine">
								<Image
									className="aspect-[14/13] w-full rounded-2xl object-top object-cover"
									src={person.imageUrl}
									alt={person.name}
									width={300}
									height={300}
									loading="lazy"
								/>
							</span>
							<h2 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">
								{person.name}
							</h2>
							<p className="text-base leading-7 text-gray-300">{person.role}</p>
							<p className="text-sm leading-6 text-gray-300">
								{person.location}
							</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
