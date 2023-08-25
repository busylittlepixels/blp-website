import React from 'react';
import Image from "next/image";

const loginlogo = '../../../../assets/images/loginlogo.png';


export const Logo = () => (
    <div className="logo">
      <Image
        width={100}
        height={100}
        src={loginlogo}
        alt="Busy Little Pixels Logo"
      />
    </div>
  );

export default Logo;