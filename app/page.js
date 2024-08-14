import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tools from "./components/Tools";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import Classify from "./components/Classify";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Classify/>
      <About />
      <Tools />
      <Stats />
      <Footer />
      
    </div>
  );
}
