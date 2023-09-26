"use client";

import useParallaxHero from "./../../../hooks/useParallaxHero"; // Adjust path accordingly
export const MotionHero = () => {
    
    const { mainRef, scrollDistRef } = useParallaxHero();

    return(
        <div className='motionHeroComponent'>
            {/* ts-ignore */}
            <div className="scrollDist" ref={scrollDistRef}></div>
            {/* ts-ignore */}
            <div className="main" ref={mainRef}>
                <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
                    
                    <mask id="m">
                        <g className="cloud1">
                            <rect fill="#fff" width="100%" height="801" y="799" />
                            <image xlinkHref="https://assets.codepen.io/721952/cloud1Mask.jpg" width="1200" height="800"/>
                        </g>
                    </mask>
                    
                    <image className="sky" xlinkHref="https://assets.codepen.io/721952/sky.jpg"  width="1200" height="590" />
                    <image className="mountBg" xlinkHref="https://assets.codepen.io/721952/mountBg.png" width="1200" height="800"/>    
                    <image className="mountMg" xlinkHref="https://assets.codepen.io/721952/mountMg.png" width="1200" height="800"/>    
                    <image className="cloud2" xlinkHref="https://assets.codepen.io/721952/cloud2.png" width="1200" height="800"/>    
                    <image className="mountFg" xlinkHref="https://assets.codepen.io/721952/mountFg.png" width="1200" height="800"/>
                    <image className="cloud1" xlinkHref="https://assets.codepen.io/721952/cloud1.png" width="1200" height="800"/>
                    <image className="cloud3" xlinkHref="https://assets.codepen.io/721952/cloud3.png" width="1200" height="800"/>
                    <text fill="#fff" x="12.5%" y="250">DicPic</text>
                
                    
                    <g mask="url(#m)">
                        <rect fill="#fff" width="100%" height="100%" />      
                        {/* <text fill="#f00" x="12.5%" y="250">DicPic</text>
                        <text fill="#000" x="20%" y="325" fontSize=".25em">Supermarkt op wielen</text> */}
                    </g>
                    
                </svg>
            </div>
        </div>   
    )
}

export default MotionHero; 