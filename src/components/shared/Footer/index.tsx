'use client';
import Link from 'next/link'
// @ts-ignore
import { experimental_useFormState as useFormState } from 'react-dom'
// @ts-expect-error
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import {createSignup} from "../../../app/(site)/actions";
import { FadeIn } from "../FadeIn";
import React from 'react';

const currentYear = () => {
  let currentTime:Date = new Date();
  let year:number = currentTime.getFullYear();
  return year;
}


let initialState:any = {
    email: "",
}

function SubmitButton(){
    const { pending } = useFormStatus();

    return(
        
    <button type="submit" aria-disabled={pending} className="absolute top-0 right-0 bottom-0 flex items-center justify-center px-3 text-2xl text-slate-400">
        <span className="sr-only">Submit</span>
        <span aria-hidden={true}>&rarr;</span>    
    </button>

        
    )

}

export function SignUpForm(){
   
    const [state, formAction]= useFormState(createSignup, initialState)

  return (
    <div className="px-4">
      
      <form
        action={formAction}
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
            <SubmitButton />
          </div>
          <p className="text-center text-xs text-slate-400">By subscribing to our newsletter you accept to receive recurring emails from our company</p>
        </div>
      </form>
    </div>
  );
};

export const Footer = () => {


  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  return (
    <footer className="bg-black py-20 text-slate-300 md:pb-12 footer relative">
      
      <div className="grid grid-cols-1 justify-items-center gap-10 md:gap-20">
        <FadeIn>
          <SignUpForm />
        </FadeIn>
        
        <div className="mx-auto w-full max-w-3xl text-center text-xs tracking-tight text-white">
          © {currentYear()} <a href="https://busylittlepixels.com" className='font-black'>busy<span style={{"color": "red"}}>little</span>pixels.</a><span className='font-black'> Made with <span style={{"color": "red"}}>&hearts;</span> in Amsterdam.</span> 
          <br />
          <div className='justify-center flex flex-row gap-2 pt-2'>
            <Link href={`/privacy-policy`} className={`text-white hover:text-[#f00000] font-bold text-xs`}>Privacy Policy</Link>
            <a onClick={goToTop} className={'cursor-pointer hover:text-[#f00000] font-bold'}>Back to top</a>
          </div>
        </div>
       
      </div>

    </footer>
  );
};

export default Footer