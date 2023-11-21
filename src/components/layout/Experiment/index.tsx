'use client';
import { useEffect } from 'react';
import { useSlider } from '../../../hooks/useSlider';

export const Experiment = () => {
	const { sliderRef, position, nextPosition } = useSlider();

	const debounce = (func, wait, immediate) => {
		let timeout;
		return function () {
			const context = this,
				args = arguments;
			const later = function () {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			const callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};

	return (
		<div className="experiment">
			<svg height="0" width="0">
				<symbol id="twitter" viewBox="0 0 800 800">
					<path d="M679 239s-21 34-55 57c7 156-107 329-314 329-103 0-169-50-169-50s81 17 163-45c-83-5-103-77-103-77s23 6 50-2c-93-23-89-110-89-110s23 14 50 14c-84-65-34-148-34-148s76 107 228 116c-22-121 117-177 188-101 37-6 71-27 71-27s-12 41-49 61c30-2 63-17 63-17z" />
				</symbol>
				<symbol id="dribble" viewBox="0 0 800 800">
					<path d="M400 665c-146 0-265-119-265-265s119-265 265-265 265 119 265 265-119 265-265 265zm223-229s-69-22-140-9c30 81 43 161 43 161s82-49 97-152zM488 609s-15-90-48-172c-132 44-179 142-179 142s96 83 227 30zm-256-57c80-128 193-152 193-152s-12-27-19-39c-124 37-232 32-232 32s-8 87 58 159zm-54-198s102 2 210-28c-38-71-84-130-84-130-107 49-126 158-126 158zm169-174s50 65 85 134c84-31 118-83 118-83s-76-78-203-51zm102 167c6 11 20 44 20 44s64-11 157 7c0-85-51-141-51-141s-38 55-126 90z" />
				</symbol>

				<symbol id="codepen" viewBox="0 0 800 800">
					<path d="M140 482V320q0-10 10-18l238-158q12-8 24 0l238 158q9 6 10 19v158q0 10-10 19L412 656q-12 8-24 0L150 497q-9-6-10-15zm282-278v104l97 65 78-52zm-44 104V204L203 321l78 52zm-193 54v75l56-37zm193 234V492l-97-65-78 52zm22-143l79-53-79-53-79 53zm22 143l175-117-78-52-97 64v105zm193-159v-75l-56 38z" />
				</symbol>
			</svg>

			<div className="slider-content" ref={sliderRef}>
				<div className="slider-wrapper">
					<div className="slider-container">
						<div className="control-nav">
							<ul>
								<li className="active">
									<span className="line"></span>
									<span className="number">1</span>
								</li>
								<li>
									<span className="line"></span>
									<span className="number">2</span>
								</li>
								<li>
									<span className="line"></span>
									<span className="number">3</span>
								</li>
								<li>
									<span className="line"></span>
									<span className="number">4</span>
								</li>
							</ul>
						</div>
						<div className="lines-wrapper">
							<div className="croses">
								<span>+</span>
								<span>+</span>
								<span>+</span>
								<span>+</span>
							</div>
							<span className="vertical"></span>
							<span className="horizontal"></span>
							<span className="horizontal"></span>
							<span className="horizontal"></span>
							<span className="horizontal"></span>
						</div>
						<div className="image-mask">
							<img
								className=""
								src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/42764/karlie-kloss_copy.png"
								alt=""
							/>
						</div>
						<div
							className="slide active red"
							data-order="1"
							data-color="#EE4654"
							data-img="https://s3-us-west-2.amazonaws.com/s.cdpn.io/42764/karlie-kloss_copy.png"
						>
							<div className="fake-bg red"></div>

							<canvas
								className="canvas"
								data-image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/42764/mask-karlie.jpg"
							></canvas>
							<div className="slide-content ">
								<div className="image-caption">
									<span className="line"></span>
									<span>Spring / Summer 2016</span>
								</div>
								<div className="title-background">
									<span className="mask-wrap">
										<span className="mask">Karlie</span>
									</span>
									<span className="mask-wrap">
										<span className="mask">Kloss</span>
									</span>
								</div>

								<div className="title-wrapper">
									<h1>
										<span className="mask-wrap">
											<span className="mask">Karlie</span>
										</span>
										<span className="mask-wrap">
											<span className="mask">Kloss</span>
										</span>
									</h1>
									<span className="gallery">View gallery</span>
								</div>
							</div>
						</div>

						<div
							className="slide blue"
							data-order="2"
							data-color="#EE4654"
							data-img="https://s3-us-west-2.amazonaws.com/s.cdpn.io/42764/aline-weber.png"
						>
							<div className="fake-bg blue"></div>
							<canvas
								className="canvas"
								data-image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/42764/mask-aline.jpg"
							></canvas>
							<div className="slide-content ">
								<div className="image-caption">
									<span className="line"></span>
									<span>Fall / Winter 2016</span>
								</div>

								<div className="title-background">
									<span className="mask-wrap">
										<span className="mask">Aline</span>
									</span>
									<span className="mask-wrap">
										<span className="mask">Weber</span>
									</span>
								</div>

								<div className="title-wrapper">
									<h1>
										<span className="mask-wrap">
											<span className="mask">Aline</span>
										</span>
										<span className="mask-wrap">
											<span className="mask">Weber</span>
										</span>
									</h1>
									<span className="gallery">View gallery</span>
								</div>
							</div>
						</div>

						{/* <div className="slide green" data-order="3" data-color="#7ffe8e" data-img="https://s3-us-west-2.amazonaws.com/s.cdpn.io/42764/miranda-kerr-color.png">
                        <div className="fake-bg green"></div>
                        <canvas className="canvas"  ref={canvasRef} data-image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/42764/mask-miranda.jpg"></canvas>
                        <div className="slide-content ">
                            
                            <div className="image-caption">
                                <span className="line"></span>
                                <span>Spring / Summer 2015</span>
                                
                            </div>
                            
                            <div className="title-background">
                                <span className="mask-wrap">
                                <span className="mask">Miranda</span>
                                </span>
                                <span className="mask-wrap">
                                <span className="mask">Kerr</span>
                                </span>
                            </div>
                            
                            <div className="title-wrapper">
                            <h1>
                                <span className="mask-wrap">
                                <span className="mask">Miranda</span>
                                </span>
                                <span className="mask-wrap">
                                <span className="mask">Kerr</span>
                                </span>
                            </h1>
                            <span className="gallery">View gallery</span>
                            </div>
                            
                        </div>
                        </div>
                        
                        <div className="slide grey" data-order="4" data-color="#bcbcbc" data-img="https://s3-us-west-2.amazonaws.com/s.cdpn.io/42764/kate-moss-color.png">
                        <div className="fake-bg grey"></div>
                        <canvas className="canvas"  ref={canvasRef} data-image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/42764/mask-kate.jpg"></canvas>
                        <div className="slide-content ">
                            
                            <div className="image-caption">
                                <span className="line"></span>
                                <span>Fall / Winter 2015</span>
                                
                            </div>
                            
                            <div className="title-background">
                                <span className="mask-wrap">
                                <span className="mask">Kate</span>
                                </span>
                                <span className="mask-wrap">
                                <span className="mask">Moss</span>
                                </span>
                            </div>
                            
                            <div className="title-wrapper">
                            <h1>
                                <span className="mask-wrap">
                                <span className="mask">Kate</span>
                                </span>
                                <span className="mask-wrap">
                                <span className="mask">Moss</span>
                                </span>
                            </h1>
                            <span className="gallery">View gallery</span>
                            </div>
                            
                        </div>
                        </div> */}
					</div>
				</div>
				{/* <div className="social-icons">
                    <ul>
                        <li><a href="https://twitter.com/mariosmaselli">
                                <svg id="twitter-icon">
                            <use xlink:href="#twitter"></use>
                            </svg>
                            </a>
                        </li>
                        <li><a href="https://dribbble.com/mariosmaselli">
                                <svg id="dribble-icon">
                            <use xlink:href="#dribble"></use>
                            </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://codepen.io/mariosmaselli/">
                                <svg id="codepen-icon">
                            <use xLink:href="#codepen"></use>
                            </svg>
                            </a>
                        </li>
                    </ul>
                </div> */}
				<div className="footer-wrapper">
					<ul>
						<li className="box" data-id="1">
							<div className="hover-box"></div>
							<div className="box-content">
								<span>spring/summer </span>
								<span>collection</span>
							</div>
						</li>
						<li className="box" data-id="2">
							<div className="hover-box"></div>
							<div className="box-content">
								<span>fall/winter 2016 </span>
								<span>collection</span>
							</div>
						</li>
						<li className="box" data-id="3">
							<div className="hover-box"></div>
							<div className="box-content">
								<span>spring/summer 2015</span>
								<span>collection</span>
							</div>
						</li>
						<li className="box" data-id="4">
							<div className="hover-box"></div>
							<div className="box-content">
								<span>fall/winter 2015 </span>
								<span>collection</span>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Experiment;
