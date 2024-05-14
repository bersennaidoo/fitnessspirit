import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <h1>Fitness Spirit Club</h1>
      <Link href="/">
        <img
          src="/images/logo.svg"
          alt="Fitness Spirit Logo"
          width="297"
          height="220"
        />
      </Link>
    </header>
  );
};

export default Header;
