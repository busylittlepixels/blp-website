import { FadeIn } from "../../shared/FadeIn"


export const LogoCloud = ({ content }:any) => {


    return (
      <div className="bg-black py-24 sm:py-32">
        <FadeIn>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <h1 className="font-black tracking-tighter text-3xl md:text-[3.5rem] mb-2 md:mb-2 last:mb-0 uppercase text-white pb-8">WE <span style={{"color":"red"}}>PIXELED</span> FOR...</h1>
            <div className="header__underline"></div>
            <div className="mx-auto mt-10 grid grid-cols-4 items-start gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:grid-cols-4">
              <img
                className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                src="https://tailwindui.com/img/logos/transistor-logo-white.svg"
                alt="Transistor"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                src="https://tailwindui.com/img/logos/reform-logo-white.svg"
                alt="Reform"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                src="https://tailwindui.com/img/logos/tuple-logo-white.svg"
                alt="Tuple"
                width={158}
                height={48}
              />
              {/* {/* <img
                className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                src="https://tailwindui.com/img/logos/savvycal-logo-white.svg"
                alt="SavvyCal"
                width={158}
                height={48}
              /> */}
              <img
                className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                src="https://tailwindui.com/img/logos/statamic-logo-white.svg"
                alt="Statamic"
                width={158}
                height={48}
              /> 
            </div>
          </div>
        </div>
        </FadeIn>
      </div>
    )
  }
  