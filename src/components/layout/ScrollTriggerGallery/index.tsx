"use client";
import React from "react";
import useGSAPAnimation from "./../../../hooks/useGSAPAnimation"; // Adjust path accordingly

export const ScrollTrigger = () => {
  const { loaderRef } = useGSAPAnimation();

    return(
        <div className="scrollTriggerGallery">
			<div className="loader flex items-center justify-center">
				<div className="text" ref={loaderRef}>0%</div>
			</div>
			<div className="demo-wrapper">	
				
				<section className="demo-gallery">
					<ul className="wrapper">
					<li>
						<img height="874" src="https://source.unsplash.com/random/1240x874?sig=45" width="1240" />
					</li>
					<li>
						<img height="874" src="https://source.unsplash.com/random/1240x874?sig=153" width="1240" />
					</li>
					<li>
						<img height="874" src="https://source.unsplash.com/random/1240x874?sig=15" width="1240" />
					</li>
					</ul>
				</section>
				<section className="demo-gallery">
					<ul className="wrapper">
					<li>
						<img height="874" src="https://source.unsplash.com/random/1240x874?sig=156" width="1240" />
					</li>
					<li>
						<img height="874" src="https://source.unsplash.com/random/1240x874?sig=100" width="1240" />
					</li>
					<li>
						<img height="874" src="https://source.unsplash.com/random/1240x874?sig=131" width="1240" />
					</li>
					<li>
						<img height="874" src="https://source.unsplash.com/random/1240x874?sig=53" width="1240" />
					</li>
					</ul>
				</section>
				<section className="demo-gallery">
					<ul className="wrapper">
						<li>
							<img height="874" src="https://source.unsplash.com/random/1240x874?sig=129" width="1240" />
						</li>
						<li>
							<img height="874" src="https://source.unsplash.com/random/1240x874?sig=83" width="1240" />
						</li>
						<li>
							<img height="874" src="https://source.unsplash.com/random/1240x874?sig=143" width="1240" />
						</li>
					</ul>
				</section>
				<section className="demo-gallery">
					<ul className="wrapper">
						<li>
							<img height="874" src="https://source.unsplash.com/random/1240x874?sig=56" width="1240" />
						</li>
						<li>
							<img height="874" src="https://source.unsplash.com/random/1240x874?sig=132" width="1240" />
						</li>
						<li>
							<img height="874" src="https://source.unsplash.com/random/1240x874?sig=148" width="1240" />
						</li>
					</ul>
				</section>
				
			</div>
		</div>
    ); 
};

export default ScrollTrigger;





