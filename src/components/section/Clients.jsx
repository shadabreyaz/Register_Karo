import React from 'react'
import Button from '../UI/Button';
const lists = [
    {
      id: 1,
      icon: "/images/list-1.svg", 
      title: "Fill up Application Form",
      bgColor: "bg-[#EB5757]",
    },
    {
      id: 2,
      icon: "/images/list-2.svg",
      title: "Make Online Payment",
      bgColor: "bg-[#27AE60]",
    },
    {
      id: 3,
      icon: "/images/list-3.svg",
      title: "Executive will Process Application",
      bgColor: "bg-[#F2994A]",
    },
    {
      id: 4,
      icon: "/images/mail.svg",
      title: "Get Confirm Mail",
      bgColor: "bg-[#828282]",
    },
  ];


  const blogs = [
    {
      id:1,
      icon: "/images/blog-1.webp",
      author:"Prabhash Mishra • 1 Jan 2023 • Today",
      title: "Small business & Startup",
      description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      tags: [
        { text: "Tax & Audit", bgColor: "bg-[#F9F5FF] text-[#6941C6]" },
        { text: "Management", bgColor: "bg-[#EEF4FF] text-[#363F72]" },
      ],
    },
    {
      id:2,
      icon: "/images/blog-3.webp",
      author:"Mahesh Kumar • 1 Jan 2023",
      title: "Scale-Up Company Offer",
      description: "Mental models are simple expressions of complex processes or relationships.",
      tags: [
        { text: "Tax", bgColor: "bg-[#ECFDF3] text-[#027A48]" },
        { text: "Research", bgColor: "bg-[#F9F5FF] text-[#6941C6]" },
        { text: "Compliance", bgColor: "bg-[#FFF6ED] text-[#C4320A]" },
      ],
    },
    {
      id:3,
      icon: "/images/blog-1.webp",
      author:"Rakesh Mishra • 1 Jan 2023 • Today",
      title: "Growing Business Package",
      description: "Foster customer relationships by effectively serving your market.",
      tags: [
        { text: "Audit", bgColor: "bg-[#F9F5FF] text-[#6941C6]" },
        { text: "Money Back", bgColor: "bg-[#EEF4FF] text-[#363F72]" },
      ],
    },
    {
      id:4,
      icon: "/images/blog-2.webp",
      author:"Karan Kumar • 1 Jan 2024",
      title: "Scale-Up Company Offer",
      description: "Collaboration can make our teams stronger, and our individual designs better.",
      tags: [
        { text: "Management", bgColor: "bg-[#EEF4FF] text-[#363F72]" },
        { text: "Money", bgColor: "bg-[#F9F5FF] text-[#6941C6]" },
      ],
    },
    {
      id:5,
      icon: "/images/blog-4.webp",
      author:"Richa Singh • 1 Jan 2023",
      title: "Payroll Services",
      description: "JavaScript frameworks make development easy with extensive features and functionalities.",
      tags: [
        { text: "Tax return", bgColor: "bg-[#ECFDF3] text-[#027A48]" },
        { text: "News", bgColor: "bg-[#FFF6ED] text-[#C4320A]" },
        { text: "Audit", bgColor: "bg-[#F9F5FF] text-[#6941C6]" },
      ],
    },
    {
      id:6,
      icon: "/images/blog-3.webp",
      author:"Prabhash Mishra • 1 Jan 2023 • Today",
      title: "Bookkeeping Services",
      description: "Steering user behaviours with creative design, data insights & technology.",
      tags: [
        { text: "Private Limited Company", bgColor: "bg-[#F9F5FF] text-[#6941C6]" },
        { text: "Customer success", bgColor: "bg-[#EEF4FF] text-[#363F72]" },
      ],
    },
  ];
export default function Clients() {
  const icons = [
    { src: "/images/logo_1.svg", alt: "Icon C", x: "12%", y: "12%", size: "large" },
    { src: "/images/logo_2.svg", alt: "Icon B", x: "4%", y: "40%", size: "medium" },
    { src: "/images/logo_3.svg", alt: "Icon C", x: "16%", y: "66%", size: "large" },
    { src: "/images/logo_4.svg", alt: "Icon B", x: "24%", y: "36%", size: "medium" },
    { src: "/images/logo_5.svg", alt: "Icon A", x: "6%", y: "82%", size: "small" },
    { src: "/images/logo_6.svg", alt: "Icon A", x: "28%", y: "72%", size: "small" },
    { src: "/images/logo_1.svg", alt: "Icon G", x: "46%", y: "71%", size: "large" },
    { src: "/images/logo_1.svg", alt: "Icon D",  x: "40%", y: "8%", size: "small" },
    { src: "/images/logo_2.svg", alt: "Icon E", x: "82%", y: "12%", size: "medium" },
    { src: "/images/logo_3.svg", alt: "Icon G", x: "61%", y: "61%", size: "large" },
    { src: "/images/logo_4.svg", alt: "Icon F", x: "51%", y: "31%", size: "small" },
    { src: "/images/logo_6.svg", alt: "Icon F", x: "61%", y: "21%", size: "small" },
    { src: "/images/logo_5.svg", alt: "Icon E", x: "70%", y: "22%", size: "medium" },
    { src: "/images/logo_6.svg", alt: "Icon G", x: "78%", y: "44%", size: "large" },
    { src: "/images/logo_4.svg", alt: "Icon H", x: "72%", y: "78%", size: "small" },
    { src: "/images/logo_5.svg", alt: "Icon I", x: "36%", y: "56%", size: "medium" },
    { src: "/images/logo_1.svg", alt: "Icon I", x: "85%", y: "78%", size: "medium" },
  ];

  const getSize = (size) => {
    if (size === "small") {
      return { container: "w-12 h-12 sm:w-16 sm:h-16", image: "w-8 h-8 sm:w-10 sm:h-10" }; // Smaller circles
    } else if (size === "medium") {
      return { container: "w-16 h-16 sm:w-20 sm:h-20", image: "w-12 h-12 sm:w-14 sm:h-14" }; // Larger circles
    } else if (size === "large") {
      return { container: "w-20 h-20 sm:w-24 sm:h-24", image: "w-16 h-16 sm:w-20 sm:h-20" }; // Larger circles
    }
    return {};
  };

  
  return (
    // clients starts here
    <div className='py-10 bg-[#FAFAFA]'>
        <div className='flex flex-col justify-center items-center px-3 sm:px-0'>
          <h2 className='text-Menu_Black text-center text-3xl font-bold my-6'>Our Happy Clients</h2>
          <p className='text-Gray text-center text-sm max-w-2xl pb-4'>Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
          <div className="relative w-full overflow-hidden h-96">
            <div className="absolute inset-0">
              {icons.map((icon, index) => {
                const sizes = getSize(icon.size);
                return (
                  <div
                    key={index}
                    className={`absolute flex items-center justify-center bg-white rounded-full shadow-md ${sizes.container} transition-transform duration-300 hover:scale-125 animate-float`}
                    style={{
                      top: icon.y,
                      left: icon.x,
                      animationDelay: `${index * 0.2}s`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <img
                      src={icon.src}
                      alt={icon.alt}
                      className={`rounded-full object-cover ${sizes.image}`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <button className='border-none font-semibold text-Top_Header flex items-center justify-center gap-2 mt-3 mb-12'>Show more<img src="/images/r-arrow.svg" alt="r-arrow"/></button>
        </div>
{/* clients ends here */}


        <div className="bg-Yellow py-10 px-3 sm:px-16">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-center">
                {lists.map(({ id, icon, title, bgColor }) => (
                <div className="flex items-center gap-x-3" key={id}>
                    <div className={`h-12 w-12 rounded-full flex items-center justify-center ${bgColor} flex-shrink-0`}>
                      <img src={icon} alt={id}  loading='lazy'/>
                    </div>
                    <p className="sm:text-lg font-semibold text-[#3C2109]">{title}</p>
                </div>
                ))}
            </div>
        </div>


{/* blogs starts here */}
        <div className='py-10 px-3 sm:px-16'>
          <p className='text-Yellow text-center mb-4'>EXPLORE OUR BLOGS</p>
          <h2 className='text-Menu_Black text-center text-3xl font-bold'>Accelerate Digital Transformation</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-12 md:px-12'>
           {blogs.map(({id,icon,author,title,description,tags})=>{
            return (
              <div className={`flex flex-col space-y-4`} key={id}>
                <img className="object-cover w-full" src={icon} alt={id} loading='lazy'/>
                <span className='text-sm font-semibold text-[#667085]'>{author}</span>
                <a href='#start' className="text-lg sm:text-2xl font-bold text-Dark_Black flex items-center justify-between">{title} <img src="/images/r-arrow.svg" alt="up-arrow" className='-rotate-45'/></a>
                <p className="text-sm sm:text-base text-[#667085] mt-4">
                   {description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {tags.map(({text,bgColor}, index) => (
                      <span key={index} className={`${bgColor} px-3 py-1 text-xs sm:text-sm font-medium rounded-full`}>
                        {text}
                      </span>
                    ))}
                 </div>
              </div>
             )
           })}
          </div>

          <div className='text-center mt-12'>
            <Button label="Show more blogs" />
          </div>
        </div>
{/* blogs ends here */}

    </div>
  )
}
