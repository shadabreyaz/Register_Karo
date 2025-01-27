import React, { useState } from 'react'

const slides = [
    {
      id: 1,
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proidentUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat consequat aute irure sint amet occaecat cupidatat non proident",
      image: "/images/video-poster.webp",
      name: "Chris",
      label: "President and CEO, PrintReach, USA",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, reiciendis! Voluptatibus, inventore quos reiciendis dolore voluptate nihil non numquam quasi consequatur, similique, quia officia esse eum facere error iure doloribus.",
      image: "/images/blog-4.webp",
      name: "Scarlett",
      label: "CEO, PrintReach, Texas",
    },
    {  
      id: 3,
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      image: "/images/video-poster.webp",
      name: "Emma",
      label: "President and CEO, PrintReach, NY",
    },
    {
      id: 4,
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      image: "/images/blog-4.webp",
      name: "Bella slide-4",
      label: "Vice Chancellor, PrintReach, Auckland",
    },
    {
      id: 5,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, unde dolorum.",
      image: "/images/blog-3.webp",
      name: "Cateline",
      label: "Vice Chancellor,UAE",
    },
  ];

export default function Slider() {
  let[current,setCurrent] = useState(0);

  let previousSlide =()=>{
    if(current === 0){setCurrent(slides.length - 1)}
    else{setCurrent(current - 1)}
  }
  let nextSlide =()=>{
    if(current === slides.length -1){setCurrent(0)}
    else{setCurrent(current + 1)}
  }
  return (
    <section className="bg-Top_Header px-4 sm:px-16 py-12">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-y-3">
        <h3 className="font-bold text-3xl text-white text-center">What people say about us</h3>
        <div className="flex items-center gap-x-3">
          <button onClick={previousSlide} className="h-10 w-10 bg-white flex items-center justify-center rounded-full shadow-md hover:bg-Yellow rotate-0 hover:rotate-180 transition-colors duration-300 group">
            <img src="/images/slider_r-arrow.svg" alt="left arrow" className="group-hover:hidden" />
            <img src="/images/slider-r-arrow-light.svg" alt="left arrow" className="hidden group-hover:block"/>
          </button>
          <button onClick={nextSlide} className="h-10 w-10 bg-white flex items-center justify-center rounded-full shadow-md hover:bg-Yellow rotate-180 hover:rotate-0 transition-colors duration-300 group ">
            <img src="/images/slider_r-arrow.svg" alt="right arrow" className="group-hover:hidden"/>
            <img src="/images/slider-r-arrow-light.svg" alt="right arrow" className="hidden group-hover:block"/>
          </button>
        </div>
      </div>

      {/* Slider Section */}
      <div className="overflow-hidden">
        <div className={`flex transition ease-out duration-500`}
        style={{transform:`translateX(-${(current*100)}%)`}} >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0 flex flex-col" >
              <div className="bg-white border shadow-lg rounded-xl px-3 sm:px-10 py-8 space-y-3 sm:space-y-6 flex-1">  
                <div className="flex items-center justify-between">
                  <img  className="w-8" src="/images/Quote.svg" alt="quote icon"/>
                  <img src="/images/slider_star.webp" alt="star icon"/>
                </div>
                <p className="text-[#667085] text-sm sm:text-base text-center">
                  {slide.text}
                </p>
                <div className="flex items-center gap-x-4">
                  <img
                    src={slide.image}
                    alt={slide.name}
                    className="rounded-full h-16 w-16 object-cover shadow-md"
                  />
                  <div>
                    <p className="text-lg font-bold text-gray-800">
                      {slide.name}
                    </p>
                    <span className="text-sm text-[#667085]">{slide.label}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-center gap-3 mt-8 w-full cursor-pointer'>
        {slides.map((slide,i)=>(
           <div onClick={()=>{setCurrent(i)}} key={i} className={`rounded-full w-3 h-3 ${i==current? 'bg-Yellow':'bg-[#D9D9D9]'}`}></div>
        ))}
      </div>
    </section>   
  );
}