import React from 'react'
import Image from 'next/image'

interface SlideProps {
	bodyCopy: string
	creditName: string
	creditTitle: string
	creditCompany: string
	city: string
	country: string
}

export const Slide = ({ bodyCopy, creditName, city, country }: SlideProps) => {
	return (
		<div className="testimonial-slide p-6 md:p-10 mx-2">
			<p className={`p-4 md:pb-6`}>{bodyCopy}</p>
			<div className="credit pb-6">
				<div className="image">
					<Image
						width={70}
						height={70}
						src="https://source.unsplash.com/user/erondu"
						alt="unsplash"
					/>
				</div>
				<div className="meta">
					<p className="pb-2 leading-8 text-lg">{creditName}</p>
					<span>
						{city},<br />
						{country}
					</span>
				</div>
			</div>
		</div>
	)
}
export default Slide
