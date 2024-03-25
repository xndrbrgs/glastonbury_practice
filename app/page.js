"use client";

import { useEffect } from "react";

import Lenis from "@studio-freight/lenis";

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
    <main className="bg-black font-satoshi">
      <section className="container max-w-full">
        <div className="row">
          <div className="col-12">
            <h1 className="text-display">maxjoy studio template</h1>
          </div>
        </div>
      </section>
    </main>
  );
}
