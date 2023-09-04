import { FadeIn } from '../FadeIn'
import { CustomSVG } from '../Windmill'

// const currentYear = () => {
//   let currentTime = new Date()
//   return currentTime.getFullYear()
// }

const SignUpForm = () => {
  return (
    <div className="px-4">
      <form
        action="/api/sign-up"
        method="post"
        className="grid w-full max-w-xl grid-cols-1 gap-6"
      >
        <div className="text-center tracking-tight text-slate-300">
          <h3 className="text-center font-black tracking-tighter text-3xl md:text-6xl mb-4 text-white last:mb-0 uppercase">Sign up for our busy<span style={{ "color": "red"}}>little</span>updates</h3>
          <p className="mb-4 last:mb-0">We promise we won't spam you, or do anything nefarious or shifty with your data. <br />Frankly, that's just not how we roll. </p>
        </div>
    
        <div className="grid grid-cols-1 gap-2">
          <div className="relative">
            <label>
              <span className="sr-only">Email address</span>
              <input
                name="email"
                type="email"
                placeholder="your.name@example.com"
                required={true}
                className="w-full rounded border border-slate-500 bg-slate-600 py-3 pl-3 pr-10 text-white placeholder-slate-400"
              />
            </label>
            <button
              type="submit"
              className="absolute top-0 right-0 bottom-0 flex items-center justify-center px-3 text-2xl text-slate-400"
            >
              <span className="sr-only">Submit</span>
              <span aria-hidden={true}>&rarr;</span>
            </button>
          </div>
          <p className="text-center text-xs text-slate-400">By subscribing to our newsletter you accept to receive recurring emails from our company</p>
        </div>
      </form>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-black py-20 text-slate-300 md:pb-12 footer">
      <div className='windmill'>
        <CustomSVG />
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-10 md:gap-20">
        <FadeIn>
          <SignUpForm />
        </FadeIn>
        
        <div className="mx-auto w-full max-w-3xl text-center text-xs font-black tracking-tight text-white">
          © 2023 <a href="https://busylittlepixelsv2.vercel.app">busy<span style={{"color": "red"}}>little</span>pixels.</a> Made with <a href="https://nextjs.org" target="_blank">NextJS</a>, <a href="https://payloadcms.com" target="_blank">PayloadCMS</a> and (of course) <span style={{"color": "red"}}>&hearts;</span> in Amsterdam.
        </div>
      </div>
    </footer>
  );
};

export default Footer