import Image from "next/image";
import Link from "next/link";
import "./css/home.css";

export default function Home() {
  return (
    <div className="main-homepage">
      <div className="blur-bg">
      <div className="main-content">
      <div className="text">
        <h1 className="profession">
        Governor Sindh</h1>
        <h2 className="governor">Kamran Khan Tessori</h2>
        <h2 className="course">Certified Cloud</h2>
        <h2 className="course">Applied Generative AI</h2>
        <h2 className="course">Engineer (GenEng)</h2>
        <p className="detail">Earn up to $5,000 / month</p>
        <p className="detail">Now admissions are open in Hyderabad</p>
        <button className="apply-button"><Link href="/">APPLY NOW</Link></button>
      </div>
     <Image width={1600} height={1212} src = "/cover.png" alt="Governor Sindh" className="governor-img"/>
      
     </div>
     </div>
    </div>
  );
}
