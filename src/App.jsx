import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_CONTENT } from "./graphql/queries";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Portfolio from "./components/sections/Portfolio";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import ShinyEffect from "./components/UI/ShinyEffect";
import Education from "./components/sections/Education";

export default function App() {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const { data, loading, error, refetch } = useQuery(GET_ALL_CONTENT, {
    variables: { language: currentLanguage },
  });

  const handleLanguageChange = (lang) => {
    setCurrentLanguage(lang);
    refetch({ language: lang });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="relative overflow-hidden selection:bg-purple-400 selection:text-gray-800">
      <Navbar
        navContent={data.navContent}
        handleLanguageChange={handleLanguageChange}
        currentLanguage={currentLanguage}
      />

      <main className="mx-auto max-w-[1300px] px-8">
        <Hero heroContent={data.heroContent} />
        <About aboutContent={data.aboutContent} />
        <Skills />
        <Portfolio portfolio={data.portfolio} />
        <Experience experience={data.experience} />
        <Education education={data.education} />
      </main>

      <ShinyEffect size={1400} />
      <Footer heroContent={data.heroContent} />
    </div>
  );
}
