import React from 'react'
import Card from '../UI/Card';

const benefits = [
    {
      id: 0, 
      title: "Why Choose Register Karo",
      description: "It is with consistent services and results that build trust with the people and that in turn help us to serve the business better.",
    },
    {
      id: 1,
      icon: "/images/register-1.svg",
      title: "Confidential & Safe",
      description: "All your private information is safe with us.",
      bgColor: "bg-[#FEF3EF]",
    },
    {
      id: 2,
      icon: "/images/register-2.svg", 
      title: "No Hidden Fee",
      description:
        "Everything is put before you with no hidden charges or conditions.",
      bgColor: "bg-[#F1FBF3]",
    },
    {
      id: 3,
      icon: "/images/register-2.svg",
      title: "Guaranteed Satisfaction",
      description:
        "We ensure that you stay 100% satisfied with our offered services.",
       bgColor: "bg-[#EDF3FF]",
    },
    {
      id: 4,
      icon: "/images/register-3.svg",
      title: "Expert CA/CS Assistance",
      description: "Prompt support from our in-house expert professionals.",
      bgColor: "bg-[#FBF1FB]",
    },
    {
      id: 5,
      icon: "/images/register-1.svg",
      title: "Confidential & Safe",
      description: "All your private information is safe with us.",
      bgColor: "bg-[rgba(39,174,96,0.04)]",
    },
  ];

export default function WhyChoose() {
  return (
    <section className="px-3 sm:px-16 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
        {benefits.map(({ id, icon, title, description, bgColor }) => (
          <div
            key={id}
            className={`col-span-1 ${id === 0 ? "sm:col-span-2" : ""} ${
              id === 3 ? "md:col-start-2" : ""
            }`}
          >
            {id === 0 ? (
              <div>
                <h2 className="text-Yellow text-sm">WHY REGISTERKARO.IN</h2>
                <h2 className="text-Menu_Black text-3xl font-bold my-4">
                  {title}
                </h2>
                <p className="mb-3 sm:mb-6 text-[#0D1216] sm:text-lg max-w-2xl">
                  {description}
                </p>
              </div>
            ) : (
              <Card
                icon={icon}
                title={title}
                description={description}
                bgColor={bgColor}
                fontWeight='font-medium'
                morePadding={true}
                className="shadow-md rounded-md h-full hover:scale-105 transition-all duration-300"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
