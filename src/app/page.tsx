import React from 'react';
import Projects from "./components/Projects";
import Skills2 from "./components/Skillstwo";
import { Achievements } from './components/Achievements';
import { ContactMe } from './components/ContactMe';
import HomePage2 from "./components/Homepage2";
import Experience from "./components/Experience";
export default function Home() {
  return (
    <div>
      <h1 className="text-2xl text-center"></h1>
      <HomePage2/>
      <Experience/>
      <Projects/>
      {/* <Skills/> */}
      <Skills2/>
      <Achievements/>
      <ContactMe/>
    </div>
  );
}
