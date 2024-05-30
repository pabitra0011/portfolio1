import './App.css'
import Hero from './components/Hero/Hero';
import Skill from './components/Skills/Skill';
import Textsphare from './components/UI/Textshpare/Textsphare';
import Navbar from './components/navbar/Navbar'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  BrowserRouter as Router,
  Route,
  RouterProvider,
  Routes,
  Outlet,
  
} from "react-router-dom";

import Portfolio from './components/portfolio/Portfolio'
import { Footer } from './components/footer/Footer';
import  Contact  from './components/contact/Contact';
import  Reviews from './components/testimonial/Reviews';
import Homepage from './pages/home/Home';
import Aboutpage from './pages/about/About';
import Projectspage from './pages/projects/Projectspage';
import Contactpage from './pages/contact/Contactpage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/about",
    element: <Aboutpage />
  },
  {
    path: "/projects",
    element: <Projectspage />
  },
  {
    path: "/contact",
    element: <Contactpage />
  },
]);

export const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};


function App() {
  
const {theme} = useTheme();

  return (
    <Router>
    <div className='app' >
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/projects" element={<Projectspage />} />
          <Route path="/contact" element={<Contactpage />} />
        </Routes>
      </Layout>
    </div>
  </Router>
  )
}

export default App
