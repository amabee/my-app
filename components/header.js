import Link from "next/link";
import React from "react";

const header = () => {
  return (
    <header>
      <div>WELCOME!</div>
      <Link
        style={{ textDecoration: "none", color: "white" }}
        href={"/calculator"}
      >
        <div>CALCULATOR</div>
      </Link>
      <Link
        style={{ textDecoration: "none", color: "white" }}
        href={"/calculator"}
      >
        {" "}
        <div>UNIT CONVERTER</div>
      </Link>
    </header>
  );
};

export default header;
