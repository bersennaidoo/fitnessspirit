import React from "react";
import Link from "next/link";

function Nav() {
  return (
    <nav>
      <p>
        <Link href="/">Home</Link> &nbsp; &#9475; &nbsp;
        <Link href="/about">About Us</Link> &nbsp; &#9475; &nbsp;
        <Link href="/classes">Classes</Link> &nbsp; &#9475; &nbsp;
        <Link href="/nutrition">Nutrition</Link> &nbsp; &#9475; &nbsp;
        <Link href="/contact">Contact Us</Link>
      </p>
    </nav>
  );
}

export default Nav;
