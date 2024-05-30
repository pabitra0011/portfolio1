import Hero from "../../components/Hero/Hero";
import Skill from "../../components/Skills/Skill";
import { About } from "../../components/about/About";
import Contact from "../../components/contact/Contact";
import { Footer } from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Portfolio from "../../components/portfolio/Portfolio";
import Reviews from "../../components/testimonial/Reviews";



const Homepage = ()=>{

    return(
    <div>
         {/* <Navbar /> */}
     <Hero />
      <About />
     <Skill />
     <Portfolio />
     <Reviews />
     <Contact />
     {/* <Footer /> */}
     </div>
    )
}

export default Homepage;