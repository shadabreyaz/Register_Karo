/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Top_Header: '#1C4670',
        Blue: '#1C4670', 
        Gray: '#4F4F4F', 
        Yellow: '#FFA229', 
        Dark_Black: '#010101', 
        Menu_Black: '#272D37', 
        Footer: '#AAB5CD', 
      },
      backgroundImage: {
        'vertical-line-gradient': 'linear-gradient(to bottom, rgba(0,0,0), #D0D0D0, rgba(0,0,0))',
        'hero-bg-gradient': 'linear-gradient(to bottom right, #FFFFFF, rgba(255, 240, 220, 0.67), rgba(237, 246, 255, 0.7), rgba(237, 246, 255, 0.7))',
        'hero_text_gradient': 'linear-gradient(to bottom right, #FFA229, #1C4670)',
        'video_gradient': 'linear-gradient(to bottom, rgba(20, 120, 241, 0.35), rgba(0,0,0,1))',
        'text_gradient': 'linear-gradient(to bottom right, #FFA229, rgba(255,162,41,0.67), #1C4670, #1C4670)',
        'bg_gradient': 'linear-gradient(to right, #FFA229, #1C4670, #1C4670)',
      },
      animation: {
        float: "float 4s ease-in-out infinite", // Add floating animation
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      }, 
    },
  },
  plugins: [],
}

