import React from "react";

export const Slide = (props) => {
  
    return (
		<div className="testimonial-slide p-6 md:p-10 mx-2">
			<p className={`p-4 md:pb-6`}>{props.bodyCopy}</p>
			<div className="credit pb-6">
				<div className="image">
					<img src="https://source.unsplash.com/user/erondu" alt="unsplash" />
				</div>
				<div className="meta">
					<p className="pb-2 leading-8 text-lg">{props.creditName}</p>
					<span>
						
					{props.city},<br />
					{props.country}
					</span>
				</div>
			</div>
		</div>
    );
}
export default Slide;
