'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export const MotionImage = ({ alt, src }: any) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			className="w-full mb-2"
		>
			<Image
				alt={`${alt} featured image`}
				src={src}
				width={1200}
				height={300}
				className="shadow-md h-1/2 mx-auto rounded-md"
				loading={'lazy'}
			/>
		</motion.div>
	)
}

export default MotionImage
