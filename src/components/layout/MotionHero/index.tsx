"use client";
import { useHeroAnimation } from '../../../hooks/useHeroAnimation';

export const MotionHero = () => {
    useHeroAnimation(); 
    return(
        
        <div className="motionHero">
           
            <div className="page-wrap">
                <header className="page-header">
                    <div className="motionHeroUnit">
                    {/* @ts-ignore */}
                    <article id="hero-1" style={{"--i": "5"}}>
                        <div className="hero-info">
                            <h2>Travel the</h2>
                            <h1>World</h1>
                            <h3>Pragser Wildsee, Italy</h3>
                        </div>
                        <div className="hero-image hi-1"></div>
                    </article>

                    {/* @ts-ignore */}
                    <article id="hero-2" style={{"--i": "4"}}>
                        <div className="hero-info">
                            <h2>Savour the</h2>
                            <h1>Journey</h1>
                            <h3>Marignier, France</h3>
                        </div>
                        <div className="hero-image hi-2"></div>
                    </article>

                    {/* @ts-ignore */}
                    <article id="hero-3" style={{"--i": "3"}}>
                        <div className="hero-info">
                            <h2>Expand Your</h2>
                            <h1>Horizons</h1>
                            <h3>Hooker Valley Track, New Zealand</h3>
                        </div>
                        <div className="hero-image hi-3"></div>
                    </article>
                    {/* @ts-ignore */}
                    <article id="hero-4" style={{"--i": "2"}}>
                            
                        <div className="hero-info">
                            <h2>Explore and</h2>
                            <h1>Reflect</h1>
                            <h3>Dolmites, Italy</h3>
                        </div>
                        <div className="hero-image hi-4"></div>

                    </article>
                {/* @ts-ignore */}
                    <article id="hero-5" style={{"--i": "1"}}>
                        <div className="hero-info">
                            <h2>Change Your</h2>
                            <h1>Perspective</h1>
                            <h3>Phuket, Thailand</h3>
                        </div>
                        <div className="hero-image hi-5"></div>
                    </article>
                    </div>
                </header>
                <section></section>
            </div>
        </div>
       
    )
}

export default MotionHero; 