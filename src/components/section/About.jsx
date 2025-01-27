import React from 'react'
import Button from '../UI/Button'

export default function About() {
  return (
    <section className="bg-[#FAFAFA] px-3 sm:px-16 py-12">
      <div className="flex flex-col lg:flex-row gap-3">
        <div className="flex-1">
          <h2 className='text-Yellow text-sm'>WELCOME TO REGISTERKARO.IN</h2>
          <h2 className='text-Menu_Black text-3xl font-bold my-4'>About <span className='text-Yellow'>Register Karo</span></h2>
          <p className="mb-3 sm:mb-6 text-[#0D1216] text-sm sm:text-base">We have been using Intelegencia as our DevOps vendor for our field service applications over the last couple of years and I’m extremely pleased with their performance, ability to execute, and willingness to adapt in our ever changing environment. Perry is an outstanding leader who is fanatical about customer satisfaction. He has built a solid team which has consistently delivered on projects thereby exceeding everyone’s expectations.</p>
          <p className="mb-3 sm:mb-6 text-[#0D1216] text-sm sm:text-base"> I would strongly recommend their services to any organization that is looking for solid, reliable, and predictable outcomes.</p>
          <Button label='Learn more' classes="mb-3" />
        </div>
        <div className="relative flex-1 justify-items-center">
          <img className='relative z-10' src="/images/about-img.webp" alt="about-img" loading='lazy'/>
            <img src="/images/about-bg-2.png" alt="about_shape" loading='lazy' className='absolute bottom-0 right-0 z-0'/>
            <img src="/images/about-bg.svg" alt="about_shape2" loading='lazy' className='absolute -top-10 sm:-top-6 right-0 z-0'/>
        </div>
      </div>
    </section>
  )
}
