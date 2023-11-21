'use client';

import { useState, useRef } from 'react';
import { Gallery } from 'react-grid-gallery';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';

import { images, CustomImage } from './images';

const slides = images.map(
	({ original, title, description, width, height }) => ({
		src: original,
		title,
		description,
		width,
		height,
	}),
);

export const GalleryGrid = ({ content }: any) => {
	const captionsRef = useRef();
	const [index, setIndex] = useState(-1);

	const handleClick = (index: number, item: CustomImage) => setIndex(index);
	const [descriptionMaxLines, setDescriptionMaxLines] = useState(3);
	const [descriptionTextAlign, setDescriptionTextAlign] = useState<
		'start' | 'end' | 'center'
	>('start');

	return (
		<div id="gallery">
			<Gallery
				images={images}
				onClick={handleClick}
				enableImageSelection={false}
			/>
			<Lightbox
				slides={slides}
				plugins={[Captions]}
				captions={{ descriptionTextAlign, descriptionMaxLines }}
				open={index >= 0}
				index={index}
				close={() => setIndex(-1)}
			/>
		</div>
	);
};

export default GalleryGrid;
