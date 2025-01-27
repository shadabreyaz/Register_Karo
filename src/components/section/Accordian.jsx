import React, { useState } from 'react'
import Button from '../UI/Button';

const accordians = [
  {
    id: 1,
    title: "Can I recover deleted files from desktop with this software?",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis laborum, tenetur quibusdam eius velit aut dolorum aperiam dolores labore molestias, consectetur, eligendi voluptatum autem. Fugiat eius quae corporis libero excepturi?" ,
  },
  {
    id: 2,
    title: "What is your refund policy?",
    description:
      "We offer a 48-hour refund policy from the moment you join the community. If you wish to request a refund within this timeframe, please contact us at registerkaro.in. Refunds will be issued in USD or USDT, regardless of the USD value at the time of payment completion on the Platform.",
  },
  {
    id: 3,
    title: "Is Guaranteed Satisfaction?",
    description:
      "We ensure that you stay 100% satisfied with our offered services.",
  },
  {
    id: 4,
    title: "How long is my membership for?",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", 
  },
  {
    id: 5,
    title: "Is this software compatible with both Windows and Mac?",
    description:
      "Yes, our software is fully compatible with both Windows and Mac operating systems.",
  },
];

export default function Accordian() {

const [open, setOpen] = useState(null);

const toggleAccordion = (id) => {
  setOpen((prevOpen) => (prevOpen === id ? null : id));
};
  return (
    <section className="bg-[#FAFAFA] px-3 sm:px-16 py-10">
      <p className='text-Yellow text-center mb-4'>FAQ</p>
      <h2 className='text-Menu_Black text-center text-3xl font-bold'>Frequently Asked Questions</h2>
      <div className="space-y-3 sm:px-5 mt-8">
          {accordians.map((item) => (
            <div
              key={item.id}
              className="border px-4 sm:px-6 py-2 bg-white rounded-md shadow-sm shadow-[rgba(0,0,0,0.46)]"
            >
              <button
                onClick={() => toggleAccordion(item.id)}
                className="w-full flex items-center justify-between gap-x-2 py-2 focus:outline-none"
              >
                <h2 className="font-medium text-left text-sm sm:text-base">
                  {item.title}
                </h2>
                <div
                  className={`flex-shrink-0 transform transition-transform duration-300 ${
                    open === item.id ? "rotate-0" : "-rotate-90"
                  }`}
                >
                  <img src="/images/down-arrow.svg" alt="left-arrow" />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  open === item.id ? "max-h-40" : "max-h-0"
                }`}
              >
                <p className="text-sm py-4 w-11/12">{item.description}</p>
              </div>
            </div>
          ))}
      </div>
      <div className='text-center mt-8'>
            <Button label="Show more" />
       </div>
    </section>  

  )
}
