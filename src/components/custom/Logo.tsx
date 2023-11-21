import React from 'react';
import Image from 'next/image';

const loginlogo = '/assets/images/loginlogo.png';

export const Logo = () => (
	<div className="logo">
		<Image
			width={420}
			height={300}
			src={loginlogo}
			alt="Busy Little Pixels Logo"
		/>
	</div>
);

export default Logo;
