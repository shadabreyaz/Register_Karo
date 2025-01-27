import React from 'react'

const footerData = [
    {
      heading: "",
      content: [
        "Design outstanding interfaces with advanced Figma features in a matter of minutes.",
      ],
      icons: [
        { id: 1, name: "Facebook", url: "#", icon: "Fb.svg" },
        { id: 2, name: "Instagram", url: "#", icon: "Insta.svg" },
        { id: 3, name: "Pintrest", url: "#", icon: "Pintrest.svg" },
        { id: 4, name: "Twiter", url: "#", icon: "Twiter.svg" },
      ],
    },
    {
      heading: "Start a Business",
      content: ["Features", "Solutions", "Integrations", "Enterprise", "Solutions"],
    },
    {
      heading: "Government Registration",
      content: ["Partners", "Community", "Developers", "App", "Blog"],
    },
    {
      heading: "Compliance & Tax",
      content: ["Channels", "Scale", "Watch the Demo", "Our Competition"],
    },
    {
      heading: "BIS & CDSCO",
      content: ["About Us", "News", "Leadership", "Media Kit"],
    },
  ];

export default function Footer() {
  return (
    <footer className="bg-Top_Header text-Footer py-10 px-3 sm:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 xl:place-items-center">
        {footerData.map(({ heading, content, icons }, index) => (
          <div key={index} className="flex flex-col space-y-4">
            {heading && (
              <h3 className="text-lg font-bold text-Yellow">{heading}</h3>
            )}
            {content && (
              <ul className="space-y-2">
                {content.map((item, idx) => (
                  <li key={idx} className="text-sm sm:text-base hover:underline cursor-pointer font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {icons && (
              <div className="flex space-x-3">
                {icons.map(({ id, name, url, icon }) => (
                  <a key={id} href={url} className="w-6 h-6">
                    <img
                      src={`/images/${icon}`}
                      alt={name}
                      className="w-full h-full object-contain"
                    />
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className='flex flex-col items-center justify-center mt-14 space-y-4 text-center'>
       <button onClick={() =>
              window.scrollTo({
              top: 0,
              behavior: "smooth",
                 })
              }
         className="h-6 sm:h-14 w-6 sm:w-14 rounded-full bg-Yellow flex items-center justify-center" >
            <img src="/images/r-arrow.svg" alt="arrow-up" className='rotate-[270deg]'/>
       </button>
        <p>© 2024 Registerkaro. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
