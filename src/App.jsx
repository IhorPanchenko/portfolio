import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Portfolio from "./components/sections/Portfolio";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Technologies from "./components/sections/Technologies";
import SoftSkills from "./components/sections/SoftSkills";
import ShinyEffect from "./components/UI/ShinyEffect";

export default function App() {
  return (
    <React.Fragment>
      <div className=" selection:bg-purple-400 selection:text-gray-800 relative overflow-hidden">
        <Navbar />

        <main className="max-w-[1300px] mx-auto px-8">
          <Hero />
          <About />
          <Skills />
          <Portfolio />
          <Experience />
        </main>
        <ShinyEffect size={1400} />
        <Footer />
      </div>
    </React.Fragment>
  );
}
