import React from 'react'

const numbers = [
    {
      id: 1,
      title: "1M",
      content: "Customers",
    },
    {
      id: 2,
      title: "12",
      content: "Years of Excellence",
    },
    {
      id: 3,
      title: "41",
      content: "R&D Engineers",
    },
    {
      id: 4,
      title: "78",
      content: "Countries",
    },
    {
      id: 5,
      title: "3278",
      content: "PARTNERS",
    },
    {
      id: 6,
      title: "41",
      content: "Awards Received",
    },
  ];

export default function WhyRegister() {
  return (
    <>
    <section className="bg-[#FAFAFA] px-3 sm:px-16 py-10">
        <p className="text-Yellow text-center mb-2">Why Register karo</p>
        <h2 className="text-Menu_Black text-center text-3xl font-bold">
            Some Numbers are important
        </h2>
        <div className="flex flex-wrap sm:justify-between gap-y-8 gap-x-4 mt-12">
            {numbers.map(({ id, title, content }) => (
            <div
                className="flex flex-col items-center text-center gap-y-2 sm:gap-x-3 w-full sm:w-auto"
                key={id}
            >
                <h3 className="font-extrabold text-4xl bg-text_gradient bg-clip-text text-transparent">
                {title}
                <sup className="bg-text_gradient bg-clip-text text-transparent">+</sup>
                </h3>
                <p className="text-sm sm:text-lg font-bold text-[#181617]">
                {content}
                </p>
            </div>
            ))}
        </div>
    </section>
    
    <section className='bg-bg_gradient px-3 sm:px-16 py-12 text-white flex flex-col items-center justify-center'>
        <p className="font-semibold text-center mb-2">1% OF THE INDUSTRY</p>
        <h2 className="text-center text-3xl font-bold">
          Welcome to your new digital reality. Now.
        </h2>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-3 w-full max-w-md mx-auto my-8">
            <div className="flex w-full border-none rounded-md overflow-hidden">
            <input type="email"  placeholder="Enter Your Email"
                className="flex-1 px-4 py-2 text-sm sm:text-base focus:outline-none" />
            <button type="submit" className="px-6 py-2 text-white bg-Yellow text-sm sm:text-base font-semibold hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400">
                Submit
            </button>
            </div>
        </form>
        
        <div className="flex flex-wrap sm:flex-nowrap gap-2">
            <div className="flex items-center gap-x-2">
                <div className='bg-white h-5 w-5 rounded-full flex items-center justify-center'>
                  <img src="/images/check.svg" alt="check" />
                </div>
                 <span className='font-medium'>Instant results</span>
            </div> 
            <div className="flex items-center gap-x-2">
                <div className='bg-white h-5 w-5 rounded-full flex items-center justify-center'>
                  <img src="/images/check.svg" alt="check" />
                </div>
                 <span className='font-medium'>User-friendly interface</span>
            </div> 
            <div className="flex items-center gap-x-2">
                <div className='bg-white h-5 w-5 rounded-full flex items-center justify-center'>
                  <img src="/images/check.svg" alt="check" />
                </div>
                 <span className='font-medium'>Personalized customization</span>
            </div> 
        </div>
    </section>
    
    <section className="px-3 sm:px-16 py-10">
        <div className="flex flex-wrap justify-between gap-y-8 gap-x-4"> 
                <img src="/images/coinbase.svg" alt="logo-1" loading='lazy' />
                <img src="/images/dropbox.svg" alt="logo-2" loading='lazy'/>
                <img src="/images/spotify.png" alt="logo-3" loading='lazy' />
                <img src="/images/slack.svg" alt="logo-4" loading='lazy' />
                <img src="/images/coinbase.svg" alt="logo-5" loading='lazy' />
                <img src="/images/spotify.png" alt="logo-6" loading='lazy'/>
        </div>
    </section>
    
    </>

  )
}
