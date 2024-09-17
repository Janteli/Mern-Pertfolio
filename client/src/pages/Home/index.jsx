import React from "react";
import Header from "../../components/Header";
import Intro from "./Intro";
import About from "./About";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Courses from "../../pages/Home/Courses";
import Contact from "./Contact";
import Footer from "./Footer";
import Lefside from "./Lefside";
import { useSelector } from "react-redux";

const Home = () => {
  const {  portfolioData } = useSelector((state) => state.root);
  return (
    <div>
      <Header />
  
    {portfolioData && (
        <div className="bg-primary px-40 sm:px-5">
        <Intro />
        <About />
        <Experiences/>
        <Projects/>
        <Courses/>
        <Contact/>
        <Footer/>
        <Lefside/>
      </div>
    )}
    </div>
  );
};

export default Home;
