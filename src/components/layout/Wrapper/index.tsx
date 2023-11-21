'use client';
import React from 'react';
import { Nav } from '../../shared/Nav';
import { Footer } from '../../shared/Footer';
import tw from 'tailwind-styled-components';
import dynamic from 'next/dynamic';
import { AnimatePresence } from 'framer-motion';

const Notice = tw.div`
  text-center bg-red-600 text-white text-4xl font-black py-8 mb-4
`;
type Props = {
	children: React.ReactNode;
};

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
	ssr: false,
});

const nav = [
	{
		link: 'About Us',
		href: '/about-us',
		pageLink: '/about-us',
		label: 'About Us',
	},
	{
		link: 'Services',
		href: '/services',
		pageLink: '/services',
		label: 'Services',
	},
	{
		link: 'Studio',
		href: '/studio',
		pageLink: '/studio',
		label: 'Studio',
	},
	{
		link: 'Blog',
		href: '/blog',
		pageLink: '/blog',
		label: 'Blog',
	},

	{
		link: 'Contact',
		href: '/contact',
		pageLink: '/contact',
		label: 'Contact',
	},
];

export const Wrapper = ({ children }: Props): React.ReactElement => {
	return (
		<>
			<Nav menu={nav} />
			<AnimatePresence>{children}</AnimatePresence>
			{/* <AnimatedCursor
            //@ts-ignore
            innerSize={8}
            outerSize={8}
            color='220, 90, 90'
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={5}
            clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link'
            ]}
            innerStyle={{
            borderRadius: '0'
            }}
            outerStyle={{
            borderRadius: '0'
            }}
            /> */}
			<Footer />
		</>
	);
};

export default Wrapper;
