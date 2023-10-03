	"use client";

	import React, { useRef } from "react";
	import Slider from "react-slick";
	import Slide from "./Slide";
	import { FadeIn } from "../../shared/FadeIn";

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
			centerMode: false
			}
		}
		]
	};

	const contentA: SlideContent = {
		bodyCopy: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a sapien vestibulum, cursus tortor eu, maximus dolor. Sed ut gravida lectus, ac suscipit augue. Donec et sapien maximus, rhoncus nisi at, egestas est. Fusce mauris lacus, molestie vel pretium nec, aliquam vel nibh. Donec a aliquet lorem. Donec et sapien maximus, rhoncus nisi at, egestas est. Fusce mauris lacus, molestie vel pretium nec.”",
		creditName: "Ross O'Kelly",
		creditTitle: "Tech lead",
		creditCompany: " Dublin",
		city: "Dublin", 
		country: "Ireland 🇮🇪"
	};

	const contentB: SlideContent = {
		bodyCopy: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a sapien vestibulum, cursus tortor eu, maximus dolor. Sed ut gravida lectus, ac suscipit augue. Donec et sapien maximus, rhoncus nisi at, egestas est. Fusce mauris lacus, molestie vel pretium nec, aliquam vel nibh. Donec a aliquet lorem. Donec et sapien maximus, rhoncus nisi at, egestas est. Fusce mauris lacus, molestie vel pretium nec.”",
		creditName: "Aoibhinn Cooper",
		creditTitle: "Creative Director",
		creditCompany: " Snooze Creative",
		city: "Dublin", 
		country: "Ireland 🇮🇪"
	};

	const contentC: SlideContent = {
		bodyCopy: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a sapien vestibulum, cursus tortor eu, maximus dolor. Sed ut gravida lectus, ac suscipit augue. Donec et sapien maximus, rhoncus nisi at, egestas est. Fusce mauris lacus, molestie vel pretium nec, aliquam vel nibh. Donec a aliquet lorem. Donec et sapien maximus, rhoncus nisi at, egestas est. Fusce mauris lacus, molestie vel pretium nec.”",
		creditName: "Pablo Roman",
		creditTitle: "CTO",
		creditCompany: " Squares",
		city: "Amsterdam", 
		country: "The Netherlands 🇳🇱"
	};

	const contentD: SlideContent = {
		bodyCopy: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a sapien vestibulum, cursus tortor eu, maximus dolor. Sed ut gravida lectus, ac suscipit augue. Donec et sapien maximus, rhoncus nisi at, egestas est. Fusce mauris lacus, molestie vel pretium nec, aliquam vel nibh. Donec a aliquet lorem. Donec et sapien maximus, rhoncus nisi at, egestas est. Fusce mauris lacus, molestie vel pretium nec.”",
		creditName: "Patrick De Laive",
		creditTitle: "Co-Founder",
		creditCompany: " TNW",
		city: "Amsterdam", 
		country: "The Netherlands 🇳🇱"
	};

	const contentE: SlideContent = {
		bodyCopy: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a sapien vestibulum, cursus tortor eu, maximus dolor. Sed ut gravida lectus, ac suscipit augue. Donec et sapien maximus, rhoncus nisi at, egestas est. Fusce mauris lacus, molestie vel pretium nec, aliquam vel nibh. Donec a aliquet lorem. Donec et sapien maximus, rhoncus nisi at, egestas est. Fusce mauris lacus, molestie vel pretium nec.”",
		creditName: "Heather Hickey",
		creditTitle: "CEO",
		creditCompany: " Hickey's of Wicklow",
		city: "Dublin", 
		country: "Ireland 🇮🇪"
	};

	return (
		<div className="block relative row py-12">
			<FadeIn>
				<div className={`mx-auto max-w-7xl px-6 lg:px-8`}>
					<h2 className="text-4xl font-black tracking-tight text-black sm:text-6xl uppercase mb-4">WHAT OUR <span style={{"color": "red"}}>CLIENTS</span> SAY...</h2>
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
								<Slide {...contentB} />
								<Slide {...contentC} />
								<Slide {...contentD} />
								<Slide {...contentE} />
							
							</Slider>
						</div>
					</div>
				</div>
			</FadeIn>
		</div>
	);
	}

	export default Testimonials;