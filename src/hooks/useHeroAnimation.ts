// useAnimation.ts
"use client";
import { useEffect } from 'react';
import gsap from 'gsap';

export const useHeroAnimation = () => {
  
    useEffect(() => {
        let tl = gsap.timeline({
          repeat: -1,
          yoyo: true,
          stagger: 0.1,
          ease: "expo.out"
        });

        gsap.set(["#hero-1 h2, #hero-1 h1, #hero-1 h3"], {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
        });
    
        gsap.set(
          [
            `#hero-2 h2, #hero-3 h2, #hero-4 h2, #hero-5 h2,
             #hero-2 h1, #hero-3 h1, #hero-4 h1, #hero-5 h1,
             #hero-2 h3, #hero-3 h3, #hero-4 h3, #hero-5 h3`
          ],
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
          }
        );

    let del = 4;
    let i = 1;

    
    while (i < 5) {
    tl.to(`#hero-${i} h2`, 0.9, {
      clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
      delay: del
    })
      .to(
        `#hero-${i} h1`,
        0.9,
        {
          clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
        },
        "-=0.3"
      )
      .to(
        `#hero-${i} h3`,
        0.9,
        {
          clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
        },
        "-=0.3"
      )
      .to(
        `#hero-${i} .hi-${i}`,
        0.7,
        {
          clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
        },
        "-=1"
      )
      .to(`#hero-${i + 1} h2`, 0.9, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
      })
      .to(
        `#hero-${i + 1} h1`,
        0.9,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
        },
        "-=0.3"
      )
      .to(
        `#hero-${i + 1} h3`,
        0.9,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
        },
        "-=0.3"
      );
    
      i++;
    
    }
  }, []);
};

export default useHeroAnimation;
