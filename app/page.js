"use client";

import { useEffect } from "react";

import Lenis from "@studio-freight/lenis";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <Menu />
      {/* <Hero /> */}
    </main>
  );
}
