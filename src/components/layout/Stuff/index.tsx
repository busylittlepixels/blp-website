'use client'
import './stuff.css'
import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform, MotionValue } from 'framer-motion'

function useParallax(value: MotionValue<number>, distance: number) {
	return useTransform(value, [0, 1], [-distance, distance])
}

interface ImageProps {
	id: number
}

const Image = ({ id }: ImageProps) => {
	const ref = useRef<HTMLDivElement | null>(null)
	const { scrollYProgress } = useScroll({ target: ref })
	const y = useParallax(scrollYProgress, 500)

	return (
		<section className={`vslide flex flex-col`}>
			<div ref={ref}>
				<img
					className={'vslideImage'}
					src={`/assets/images/beegee-400x400.jpg`}
					alt="A test Image skyscraper"
				/>
			</div>
			<motion.h2 className={'vSlideIndex'} style={{ y }}>{`#00${id}`}</motion.h2>
		</section>
	)
}

export const Stuff = () => {
	const { scrollYProgress } = useScroll()
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	})

	return (
		<div className={'stuff'}>
			{[1, 2, 3, 4, 5].map(image => (
				<Image key={image} id={image} />
			))}
			<motion.div className="progress" style={{ scaleX }} />
		</div>
	)
}

export default Stuff
