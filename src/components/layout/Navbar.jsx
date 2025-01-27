import React, { useState } from 'react'
import Button from '../UI/Button';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
        {/* top-header */}
        <div className="bg-Top_Header py-4 px-3 sm:px-16 flex justify-center sm:justify-end text-white">
           <div className='flex items-center flex-col sm:flex-row gap-2 md:gap-6'>
                <div className="flex items-center space-x-2 md:space-x-6 text-xs md:text-sm">
                    <a href="mailto:registerkaro.in" className="flex gap-2 items-center hover:underline">
                        <img src="/images/mail.svg" alt="mail" className="w-4 h-4"/>www.registerkaro.in
                    </a>
                    <span className="w-[1px] h-7 bg-vertical-line-gradient"></span>
                    <a href="tel:+918447746133" className="flex gap-2 items-center hover:underline">
                        <img src="/images/phone.svg" alt="phone" className="w-4 h-4"/>+91 84477&nbsp;46133
                    </a>
                    <span className="w-[1px] h-7 bg-vertical-line-gradient"></span>
                </div>
                <div className="flex items-center">
                        <a href="#" className="p-2">
                            <img src="/images/Fb.svg" alt="Facebook" className="w-5 h-5"/>
                        </a>
                        <a href="#" className="p-2">
                            <img src="/images/Insta.svg" alt="Instagram" className="w-5 h-5"/>
                        </a>
                        <a href="#" className="p-2">
                            <img src="/images/Twiter.svg" alt="Twitter" className="w-5 h-5"/>
                        </a>
                        <a href="#" className="p-2">
                            <img src="/images/Pintrest.svg" alt="Pinterest" className="w-5 h-5"/>
                        </a>
                </div>  
            </div> 
        </div>
        
        {/* navbar */}
        <nav className="py-4 px-2 sm:px-16">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div>
                    <a href="/"><img src="/images/Mainlogo.svg" alt="logo"/></a>
                </div>

                {/* Menu Items */}
                <div className={`hidden lg:flex items-center space-x-8 font-semibold text-Menu_Black`}>
                    <a href="/" className=" hover:underline">Home</a>
                    <a href="#Services" className="hover:underline flex items-baseline gap-1">Our Services <img src="/images/down-arrow.svg" alt="down-arrow" className='w-2'/></a>
                    <a href="#Contact" className="hover:underline">Contact Us</a>
                    <a href="#Contact" className="hover:underline">Blog</a>
                    <a href="#About" className="hover:underline">About Us</a>
                    <a href="#"><img src="/images/search.svg" alt="search" /></a>
                    <Button label="Talk An Expert" isYellow={true} />
                </div>

                {/* Hamburger Icon for Mobile */}
                <div className="lg:hidden">
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        className="text-Menu_Black focus:outline-none"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
         {/* Mobile Menu */}
         {isOpen && (
                <div className="lg:hidden px-3 sm:px-10 py-4 flex flex-col items-center gap-2 font-semibold text-Menu_Black">
                    <a href="#Home" className="block hover:underline">Home</a>
                    <a href="#Services" className="hover:underline flex items-center gap-1">Our Services <img src="/images/down-arrow.svg" alt="down-arrow" /></a>
                    <a href="#Contact" className="block hover:underline">Contact Us</a>
                    <a href="#Contact" className="block hover:underline">Blog</a>
                    <a href="#About" className="block hover:underline">About Us</a>
                    <a href="#Search" className="relative block"><input className='border border-Yellow rounded-md px-4 py-1' type="text" placeholder='Search' /><img src="/images/search.svg" alt="search" className='absolute top-2 right-2'/></a>
                    <Button label="Talk An Expert" isYellow={true} classes='mt-4 w-full' />
                </div>
            )}
    </header>
  )
}
