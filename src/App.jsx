import About from "./components/section/About"
import Accordian from "./components/section/Accordian"
import Service from "./components/section/Service"
import Clients from "./components/section/Clients"
import Footer from "./components/layout/Footer"
import Hero_section from "./components/section/Hero_section"
import Navbar from "./components/layout/Navbar"
import Slider from "./components/section/Slider"
import Video from "./components/section/Video"
import WhyChoose from "./components/section/WhyChoose"
import WhyRegister from "./components/section/WhyRegister"
import Phone from "./components/section/Phone"


function App() {

  return (
    <>
     <div className="max-w-[1680px] mx-auto">
       <Navbar />
       <Hero_section />
       <Service />
       <About />
       <WhyChoose />
       <Video />
       <Clients />
       <Slider />
       <Accordian />
       <Phone />
       <WhyRegister />
       <Footer />  
     </div>
    </>
  )
}

export default App
