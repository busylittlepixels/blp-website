import React from 'react';
import Script from 'next/script';

const TestLayout = async ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Script src="https://unpkg.com/gsap@3/dist/TextPlugin.min.js" />

			{children}
		</>
	);
};

export default TestLayout;
