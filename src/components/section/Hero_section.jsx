import React from 'react'
import Button from '../UI/Button'

export default function Hero_section() {
  return (
    <>
    <div className="bg-hero-bg-gradient pt-10 pl-3 sm:pl-16 flex flex-col lg:flex-row justify-between text-Dark_Black">
        <div className='space-y-10 pr-3 sm:pr-16 lg:pr-0'>
            <span className='text-sm font-semibold flex items-center gap-2'><img src="/images/single_star.svg" alt="star" />Google Rating <img src="/images/stars.webp" alt="Group" /></span>
            <h1 className="font-extrabold text-3xl xl:text-5xl">Your Trusted Partner <br />For <span className="text-Yellow">Compliance</span> needs</h1>
            <p className="lg:text-xl lg:max-w-2xl text-Gray">An online business compliance platform that helps entrepreneurs and other individuals with various, <span className='font-bold'>registrations, tax filings,</span> and other <span className='font-bold'>legal matters</span>.</p>
            <div className="flex justify-between items-center flex-wrap sm:flex-nowrap gap-3 sm:gap-0">
                    <div className="flex items-center gap-x-2">
                    <img src="/images/hero_1.svg" alt="Rating" />
                    <div>
                        <p className='text-xl font-extrabold bg-text_gradient bg-clip-text text-transparent'>4.5+</p>
                        <span className='text-sm text-Gray'>Customer Rating</span>
                    </div>
                    </div>
                    <div className="flex items-center gap-x-2">
                    <img src="/images/hero_2.svg" alt="Rating_2" />
                    <div>
                        <p className='text-xl font-extrabold bg-text_gradient bg-clip-text text-transparent'>20,000+</p>
                        <span className='text-sm text-Gray'>Clients</span>
                    </div>
                    </div>
                    <div className="flex items-center gap-x-2">
                    <img src="/images/hero_1.svg" alt="Rating_3" />
                    <div>
                        <p className='text-xl font-extrabold bg-text_gradient bg-clip-text text-transparent'>99.8%</p>
                        <span className='text-sm text-Gray'>Financial Stability</span>
                    </div>
                    </div>
                
            </div>
            <div className='flex items-center gap-6 flex-col sm:flex-row'>
              <Button label="Get Started For Free" />
              <button className='hover:scale-125 transition-all duration-300 font-semibold flex gap-2'><img src="/images/play.svg" alt="play-btn"/>See how it works</button>   
            </div> 
        </div>

       <div className="relative text-Dark_Black text-sm font-semibold flex items-baseline pt-14 overflow-hidden">
         <div className='absolute top-4 sm:top-0 -right-4 flex flex-col space-y-3 sm:space-y-6'>
           <span className="px-5 sm:px-8 py-4 bg-white rounded-xl border border-Border shadow-md shadow-[#000026]">Annual Compliance</span>
           <span className="px-5 sm:px-8 py-4 bg-white rounded-xl border border-Border shadow-md shadow-[#000026]">Payroll Services</span>
           <span className="px-5 sm:px-8 py-4 bg-white rounded-xl border border-Border shadow-md shadow-[#000026]">Company Formation</span>
           <span className="px-5 sm:px-8 py-4 bg-white rounded-xl border border-Border shadow-md shadow-[#000026]">Annual Compliance</span>
         </div>
        <img src="/images/hero_img.webp" alt="hero-img" />
        <img src="/images/hero_img_2.svg" alt="hero-second" className="h-48 w-auto"/>
       </div>
    </div>
    <div className='py-20 px-3'>
        <h2 className='text-Menu_Black text-center text-2xl font-bold'>Trusted By Over 100+ Startups and freelance business</h2>
        <div className='flex items-center justify-center gap-9 mt-9 flex-wrap'>
            <img src="/images/Oracle.svg" alt="oracle" />
            <img src="/images/morpheus.svg" alt="morpheus_1" />
            <img src="/images/samsung.webp" alt="samsung_1" />
            <img src="/images/morpheus.svg" alt="morpheus_2" />
            <img src="/images/monday.svg" alt="monday" />
            <img src="/images/samsung.webp" alt="samsung_2" />
        </div>
    </div>
    </>
  )
}
