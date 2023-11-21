'use client';
import React, { useRef } from 'react';
import Slider from 'react-slick';
import Slide from './Slide';
import { FadeIn } from '../../shared/FadeIn';

interface SlideContent {
	bodyCopy: string;
	creditName: string;
	creditTitle: string;
	creditCompany: string;
	city: string;
	country: string;
}

export const Testimonials = () => {
	const slide = useRef<Slider | null>(null);
	const settings = {
		infinite: true,
		centerMode: true,
		variableWidth: true,
		speed: 500,
		arrows: false,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1310,
				settings: {
					centerMode: false,
				},
			},
		],
	};

	const contentA: SlideContent = {
		bodyCopy:
			"“Before any talk of design or a line of code has been written, BLP guide you through the project workflow and help you, as a client or a collaborator, to develop a better understanding of the potential issues that may crop up during a project's development.”",
		creditName: 'Ross Kelly',
		creditTitle: 'CEO',
		creditCompany: ' Dublin',
		city: 'Dublin',
		country: 'Ireland 🇮🇪',
	};

	// const contentB: SlideContent = {
	// 	bodyCopy: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a sapien vestibulum, cursus tortor eu, maximus dolor. Sed ut gravida lectus, ac suscipit augue. Donec et sapien maximus, rhoncus nisi at, egestas est. Fusce mauris lacus, molestie vel pretium nec.”",
	// 	creditName: "Aoibhinn Cooper",
	// 	creditTitle: "Creative Director",
	// 	creditCompany: " Snooze Creative",
	// 	city: "Dublin",
	// 	country: "Ireland 🇮🇪"
	// };

	const contentC: SlideContent = {
		bodyCopy:
			'“Busy Little Pixels not only have a deep technical understanding, but they also knows how to apply that knowledge in the most efficient way. A humble, intelligent and hard working team, that will go out of their way to ensure the success of any project. 10/10 would recommend!”',
		creditName: 'Pablo Roman',
		creditTitle: 'CTO',
		creditCompany: ' Shapes and Places',
		city: 'Amsterdam',
		country: 'The Netherlands 🇳🇱',
	};

	const contentD: SlideContent = {
		bodyCopy:
			'BLP are a pleasure to deal with. The team strives to understand your needs as a client and always impresses with the latest technology that can completely change your train of thought into something more positive than you had anticipated. Great crew to deal with.”',
		creditName: 'Patrick De Laive',
		creditTitle: 'Co-Founder',
		creditCompany: ' TNW',
		city: 'Amsterdam',
		country: 'The Netherlands 🇳🇱',
	};

	// const contentE: SlideContent = {
	// 	bodyCopy: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a sapien vestibulum, cursus tortor eu, maximus dolor. Sed ut gravida lectus, ac suscipit augue. Donec et sapien maximus, rhoncus nisi at, egestas est. Fusce mauris lacus, molestie vel pretium nec.”",
	// 	creditName: "Heather Hickey",
	// 	creditTitle: "CEO",
	// 	creditCompany: " Hickey's of Wicklow",
	// 	city: "Dublin",
	// 	country: "Ireland 🇮🇪"
	// };

	return (
		<div className="bg-white py-20">
			<FadeIn>
				<div className={`mx-auto max-w-7xl px-6 lg:px-8 mb-6`}>
					<h1 className="text-4xl font-black tracking-tight text-black sm:text-6xl uppercase mb-4">
						WHAT OUR <span style={{ color: 'red' }}>CLIENTS</span> SAY...
					</h1>
					<div className="header__underline"></div>
				</div>
				<div className={`w-full`}>
					<div className="testimonial-container">
						<div className="testimonial-slider relative">
							<Slider
								className="testimonial-slider__slides"
								{...settings}
								ref={slide}
								slidesToShow={1}
								swipeToSlide={true}
							>
								<Slide {...contentA} />
								<Slide {...contentC} />
								<Slide {...contentD} />
							</Slider>
						</div>
					</div>
				</div>
			</FadeIn>
		</div>
	);
};

export default Testimonials;
