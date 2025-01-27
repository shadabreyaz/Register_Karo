import React from 'react'

export default function Video() {
  return (
  <section className="bg-Top_Header px-3 sm:px-16 py-12 text-white">
    <div className="flex flex-col lg:flex-row gap-3">
      <div className="flex-1 pt-12">
        <h2 className='text-4xl font-bold mb-4'>0ur Video Introductions</h2>
        <p className="mb-3 sm:mb-6 text-[#AAB5CD] text-sm sm:text-base">Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt apis dui.</p>       

        <div className="my-8 space-y-6">
            <div className="flex items-start gap-x-2">
                <img src="/images/video-img-2.webp" alt="Rating_32" />
              <div>
                 <p className='sm:text-2xl font-bold mb-2'>Explore ideas together</p>
                 <span className='text-sm sm:text-base text-[#AAB5CD]'>Engage audience segments and finally create actionable insights. <br />Amplify vertical integration.</span>
              </div>
            </div>
            <div className="flex items-start gap-x-2">
                <img src="/images/video-img-2.webp" alt="Rating_33" />
                <div>
                   <p className='sm:text-2xl font-bold mb-2'>Bring those ideas to life</p>
                   <span className='text-sm sm:text-base text-[#AAB5CD]'>Engage audience segments and finally create actionable insights. <br />Amplify vertical integration.</span>
                </div>
            </div>       
        </div>
      </div>

      <div className="relative flex-1 justify-items-center overflow-hidden rounded-2xl">
        <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center z-20">
            <a href="#">
              <img src="/images/youtube_logo.svg" alt="youtube"/>   
            </a>
        </div>
        <span className="absolute top-0 w-full h-full bg-video_gradient opacity-75"></span>
        <img src="/images/video-poster.webp" alt="cover-img" className='w-full h-full object-cover' loading='lazy'/> 
      </div>

    </div>
  </section>
  )
}
