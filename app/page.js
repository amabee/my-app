"use client";
import Header from "@/components/header";
import Image from "next/image";
import "../public/styles/style.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <Header/>
      <div className="banner" >
        <div className="content">
          <div data-aos="fade-right">The</div>
          <div data-aos="fade-right">Leaves</div>
          <div>
            <button className="button" data-aos="fade-up">Get Started!</button>
          </div>
        </div>
      </div>
    </div>
  );
}
