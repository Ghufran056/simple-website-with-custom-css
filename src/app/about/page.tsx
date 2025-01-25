import Image from "next/image";
import "./about.css"

export default function About() {
  return (
    <div className="about">
      
    <Image width={350} height={100} src = "/Ghufran.jpeg" alt="Ghufran Shah" className="my-pic"/>
    
    <div className="right">
      <h1 className="about-me">About Me</h1>
      <h2 className="name">Ghufran Shah - Frontend Developer</h2>
      <p className="description">I am a Frontend developer with experience in HTML, CSS, Javascript and Typescript currently learning Nextjs from GIAIC. </p>
    </div>
    </div>
  );
}