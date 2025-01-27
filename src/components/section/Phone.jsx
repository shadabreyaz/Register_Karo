import React from 'react'

export default function Phone() {
  return (
    <section className="bg-Top_Header px-3 sm:px-16 pt-10 text-white">
     <div className="flex flex-col lg:flex-row gap-6">
      <div className="flex-1 pt-0 sm:pt-12">
        <h2 className='text-4xl font-bold mb-4'>Manage Your Services by your Mobile&nbsp;Phone</h2>
        <p className="mb-3 sm:mb-12 text-[#AAB5CD] text-sm sm:text-base">Download our app to manage and track your services. Our app enables you to stay in touch with our experts and aids you in tracking your progress. </p>       
        <a href="#" className='font-medium'>Get the App</a>
        <div className="my-4 flex flex-wrap sm:flex-nowrap gap-2">
            <a href='#google' className="flex items-center gap-x-2 bg-white rounded-md py-1 px-4 sm:px-6 text-black">
                <img src="/images/apple.webp" alt="apple" />
              <div>
                 <span className='text-xs'>Get it on</span>
                 <p className='text-sm sm:text-base font-semibold mb-2'>App Store</p>
              </div>
            </a>
            <a href='#google' className="flex items-center gap-x-2 bg-white rounded-md py-1 px-4 sm:px-6 text-black">
                <img src="/images/playstore.webp" alt="playstore" />
              <div>
                 <span className='text-xs'>Get it on</span>
                 <p className='text-sm sm:text-base font-semibold mb-2'>Google Play</p>
              </div>
            </a>     
        </div>
      </div>

      <div className="relative flex-1 py-48 overflow-hidden">
        <img src="/images/phone.webp" alt="cover-img" className='absolute -top-12 sm:-top-32 object-cover' loading='lazy'/> 
      </div>

     </div>
   </section>
  )
}
