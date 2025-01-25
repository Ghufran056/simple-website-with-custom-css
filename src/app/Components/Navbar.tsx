import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="main">
      <Link href="/" className="button">Home</Link>
      <Link href="/about" className="button">About</Link>
      <Link href="/contact-us" className="button">Contact Us</Link>
    
    </div>
  );
}
