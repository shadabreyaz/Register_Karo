import React from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';

const services = [
  {
    id:1,
    icon: "/images/service_4.svg",
    title: "Company Formation",
    description: "Build web-based solutions that enhance customer experience.",
    link: "#",
  },
  {
    id:2,
    icon: "/images/service_3.svg",
    title: "Company Secretarial Services",
    description: "Make data-driven decisions and utilize technology to reach business goals.",
    link: "#",
  },
  {
    id:3,
    icon: "/images/service_5.svg",
    title: "Virtual Office Address",
    description: "Foster customer relationships by effectively serving your market.",
    link: "#",
  },
  {
    id:4,
    icon: "/images/service_2.svg",
    title: "Annual Compliance Services",
    description: "Turn your ideas into modern products with our design experts.",
    link: "#",
  },
  {
    id:5,
    icon: "/images/service_5.svg",
    title: "Payroll Services",
    description: "Expand your business across the globe with minimal effort.",
    link: "#",
  },
  {
    id:6,
    icon: "/images/service_4.svg",
    title: "Bookkeeping Services",
    description: "Steering user behaviours with creative design, data insights & technology.",
    link: "#",
  },
];

export default function Service() {
  return (
    <div className="py-10 px-3 sm:px-20 bg-[#FAFAFA]">
      <h2 className="text-Yellow text-center text-sm">WELCOME TO REGISTERKARO.IN</h2>
      <h2 className="text-Menu_Black text-center text-3xl font-bold mt-2">Explore Our Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 mt-12">
        {services.map(({ id, icon, title, description }) => {
          const isExcluded = id === 1 || id === 4;
          return (
            <Card key={id} icon={icon} title={title} description={description}
              className={`relative ${isExcluded ? "" : "border-s"}`}>
              <button className="border-none font-semibold text-[#001038] flex items-center justify-center gap-2">
                Learn more <img src="/images/service-arrow.webp" alt={`card-arrow-${id}`} />
              </button>
              {!isExcluded && (
                <div
                  className={`h-4 w-1 bg-[#BB162B] absolute ${
                    id % 2 === 0 ? "top-4" : "top-48"
                  } -left-[3px]`}
                ></div>
              )}
            </Card>
          );
        })}
      </div>

      <div className="text-center mt-8">
        <Button label="See All Services" />
      </div>
    </div>
  )
}
