import React from "react";
import Link from "next/link";

function Nav() {
  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li> 
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/classes">Classes</Link></li>
        <li><Link href="/nutrition">Nutrition</Link></li>
        <li><Link href="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
