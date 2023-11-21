'use client'
import useGSAPScrollSlide from '../../../hooks/useGSAPScrollSlide'

const slides = [
	{
		index: 1,
		title: 'SCROLL',
		image: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjMyMDUzOA&ixlib=rb-1.2.1&q=80&w=400',
	},
	{
		index: 2,
		title: 'SWIPE',
		image: 'https://images.unsplash.com/photo-1558603668-6570496b66f8?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjMyMDUzOA&ixlib=rb-1.2.1&q=85&w=400',
	},
	{
		index: 3,
		title: 'SCROLL',
		image: 'https://images.unsplash.com/photo-1537165924986-cc3568f5d454?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjMyMDU4NA&ixlib=rb-1.2.1&q=85&w=400',
	},
	{
		index: 4,
		title: 'SLIDE',
		image: 'https://images.unsplash.com/photo-1537165924986-cc3568f5d454?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjMyMDU4NA&ixlib=rb-1.2.1&q=85&w=400',
	},
]

export const ScrollTriggerSlide = () => {
	const { currentIndex, animating } = useGSAPScrollSlide() // Use the custom hook here
	let outputNo = currentIndex + 1
	// console.log(animating);
	// console.log(currentIndex);
	// console.log(outputNo);
	return (
		<>
			<div className="scrollTriggerSlide">
				{slides.map((slide, i) => {
					return (
						<section
							className={`slide ${
								currentIndex == i ? 'active' : ''
							}`}
							key={i}
						>
							<div className="slide__outer">
								<div className="slide__inner">
									<div className="slide__content">
										<div className="slide__container">
											<h2 className="slide__heading">
												{slide.title}
											</h2>
											<figure className="slide__img-cont">
												<img
													className="slide__img"
													src={slide.image}
													alt={slide.title}
												/>
											</figure>
										</div>
									</div>
								</div>
							</div>
						</section>
					)
				})}

				<section className="overlay">
					<div className="overlay__content">
						<p className="overlay__count">
							0<span className="count">{outputNo}</span>
						</p>
						<figure className="overlay__img-cont">
							<img
								className="image"
								src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjMxOTU4Mw&ixlib=rb-1.2.1&q=80&w=800"
							/>
							<img
								className="image"
								src="https://images.unsplash.com/photo-1594666757003-3ee20de41568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjMxOTcwOA&ixlib=rb-1.2.1&q=80&w=800"
							/>
							<img
								className="image"
								src="https://images.unsplash.com/photo-1579830341096-05f2f31b8259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjMxOTQ5Ng&ixlib=rb-1.2.1&q=80&w=800"
							/>
							<img
								className="image"
								src="https://images.unsplash.com/photo-1603771628302-c32c88e568e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjMxOTUxNg&ixlib=rb-1.2.1&q=80&w=800"
							/>
						</figure>
					</div>
				</section>
			</div>
		</>
	)
}

export default ScrollTriggerSlide
