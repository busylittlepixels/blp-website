'use client';
import { BigTextLittleText } from '../../layout/BigTextLittleText'
import { ParallaxProvider } from "react-scroll-parallax";

export const Parallax = () => {

    return(
        <ParallaxProvider>
            <BigTextLittleText />

        </ParallaxProvider>
    )

}

export default Parallax