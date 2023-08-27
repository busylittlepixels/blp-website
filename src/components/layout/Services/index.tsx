import FadeIn from "../../shared/FadeIn";

export const Services = () => {

    return(
        <div className="container mx-auto w-full px-4 bg-white max-w-auto">
            <svg className="max-md:hidden absolute right-0 transform mt-12 z-10 mr-20 mix-blend-darken" width="650" height="384" fill="none" viewBox="0 0 400 384"><defs><pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor"></rect></pattern></defs><rect width="650" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"></rect></svg>
            <div className="mx-auto grid grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-0 md:px-4 sm:py-32 lg:max-w-full lg:grid-cols-2 lg:px-8">
                <div>
                    <h2 className="font-black tracking-tighter text-3xl md:text-[3.5rem] mb-12 last:mb-0 uppercase leading-4">OUR <span style={{ "color": "red"}}>SERVICES</span></h2>
                    <div className="header__underline"></div>
                    
                    <div className="RichText_richText__qEmi6 text-gray-600 mt-4 article_text flex-col"><p><span>Crafting Tomorrow's Digital Solutions, Today...with <strong>busy<span className="red">little</span>pixels. </strong>

Merging technological mastery with strategic insight and team synergy, we're more than just a service provider. We're your digital partner, eager to co-create exceptional digital journeys.</span></p></div>
                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                    <div className="pt-4">
                        <h3 className="font-black text-gray-900">Fractional CTO Services</h3>
                        <p className="mt-2 text-normal text-gray-500 article_text flex-col">
                        Strategic Technology Leadership: Access top-tier technological expertise without the commitment of a full-time executive. Our Fractional CTOs bring deep industry knowledge to align tech strategies with your business goals.     
                        </p>
                    </div>

                    <div className="pt-4">
                        <h3 className="font-black text-gray-900">Web Development</h3>
                        <p className="mt-2 text-normal text-gray-500 article_text flex-col">

                        Create vibrant, responsive, and engaging websites that captivate your audience.

                        CMS Integration: Manage content effortlessly with seamless Content Management System integrations tailored to your needs.

                        </p>
                    </div>

                    <div className="pt-4">
                        <h3 className="font-black text-gray-900">App Development</h3>
                        <p className="mt-2 text-normal text-gray-500 article_text flex-col">

                        Cross-Platform Solutions: Reach your audience everywhere with apps optimized for Android, iOS, and the web.
                        </p>
                    </div>

                    <div className="pt-4">
                        <h3 className="font-black text-gray-900">Strategic Planning</h3>
                        <p className="mt-2 text-normal text-gray-500 article_text flex-col">Vision Crafting, Competitive Analysis: Gain insights into your industry landscape, identifying opportunities and threats to ensure you always stay ahead. </p>
                    </div>

                    <div className="pt-4">
                        <h3 className="font-black text-gray-900">Solutions Architecture</h3>
                        <p className="mt-2 text-normal text-gray-500 article_text flex-col">Languages & Frameworks: From Python to React, Ruby on Rails to Vue.js, we handpick the perfect tech for your unique requirements.</p>
                    </div>

                    <div className="pt-4">
                        <h3 className="font-black text-gray-900">Team Development and Growth</h3>
                        <p className="mt-2 text-normal text-gray-500 article_text flex-col">
                        Talent Acquisition, Training & Development: Equip your team with the latest skills and knowledge, keeping them agile and updated.</p>
                    </div>
                    </dl>
                </div>
                <FadeIn>
                    <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                        <img src="https://source.unsplash.com/640x640/?code" alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." className="rounded-lg bg-gray-100 shadow-xl" />
                        <img src="https://source.unsplash.com/640x640/?tech" alt="Top down view of walnut card tray with embeped magnets and card groove." className="rounded-lg bg-gray-100 shadow-xl"/>
                        <img src="https://source.unsplash.com/640x640/?mobile" alt="Side of walnut card tray with card groove and recessed card area." className="rounded-lg bg-gray-100 shadow-xl"/>
                        <img src="https://source.unsplash.com/640x640/?app" alt="Walnut card tray filled with cards and card angled in dedicated groove." className="rounded-lg bg-gray-100 shadow-xl"/>
                    </div>
                </FadeIn>
            </div>
            <div className="absolute inset-x-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]">
                <svg aria-hidden="true" className="absolute inset-0 h-full w-full">
                    <defs>
                    <pattern id=":ra:" width="128" height="128" patternUnits="userSpaceOnUse" x="50%" y="100%">
                        <path d="M0 128V.5H128" fill="none" stroke="currentColor"></path>
                    </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#:ra:)"></rect>
                </svg>
            </div>
        </div>
    )
}

export default Services; 
