import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Hero() {
  const namesRef = useRef();

  useGSAP(() => {
    // const images = gsap.utils.toArray("#img-wrapper");

    // images.forEach((image, i) => {
    //   ScrollTrigger.create({
    //     trigger: image,
    //     start: "top top",
    //     end: "bottom center",
    //     markers: true,
    //   });

    //   let animation = gsap.timeline().to("#names", { yPercent: -110 });

    //   ScrollTrigger.create({
    //     trigger: image,
    //     start: "top bottom",
    //     end: "bottom center",
    //     animation: animation,
    //     scrub: true,
    //   });
    // });

    gsap.to("#parent-text", {
      scrollTrigger: {
        trigger: "#artists",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      },
      yPercent: -275,
    });

    gsap.from("#hero-wrapper", {
      y: -100,
      opacity: 0,
      duration: 0.8,
    });
  }, {});

  return (
    <section className="font-satoshi overflow-hidden" id="hero-container">
      <div
        id="hero-wrapper"
        className="p-[1.5rem] w-screen h-screen fixed flex flex-col justify-between z-20"
      >
        <div id="wrapper-content">
          <h1 className="display font-bold">GLASTONBURY</h1>
          <h1 className="display font-bold">FESTIVAL</h1>
          <h1 className="display font-bold">2024</h1>

          <div id="wrapper-title" className="overflow-hidden h-[7rem]">
            <div id="parent-text" className="w-full h-full">
              <h1 className="display font-bold" id="names">
                LINEUP
              </h1>
              <h1 className="display font-bold text-pink" id="names">
                DUA LIPA
              </h1>
              <h1 className="display font-bold text-blue" id="names">
                DISCLOSURE
              </h1>
              <h1 className="display font-bold text-green" id="names">
                JUNGLE
              </h1>
            </div>
          </div>
        </div>

        <div id="wrapper-subcontent" className="flex text-center">
          <p className="mr-[2rem]">JUNE 26TH – JUNE 30TH</p>
          <p className="uppercase">glastonburyfestivals.co.uk</p>
        </div>
      </div>

      <div id="artists-list" className="w-screen z-10">
        <div className="container w-full">
          <div id="empty-div" className="w-full h-screen"></div>

          <div id="trigger" className="w-full h-[50vh]"></div>

          <div id="artists">
            <div id="artist-section" className="w-full">
              <div className="row justify-end">
                <div className="col-9">
                  <div id="img-wrapper" className="w-full h-[40rem] relative">
                    <Image
                      alt="artist photo"
                      src={
                        "/assets/dua-lipa-blonde-uhdpaper.com-4K-6.2235.webp"
                      }
                      fill
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="uppercase pt-[2rem] text-end h1 font-editorial">
                    <p>Pyramid Stage - Friday</p>
                  </div>
                </div>
              </div>
            </div>

            <div id="trigger" className="w-full h-[50vh]"></div>
            <div id="artist-section" className="w-full">
              <div className="row">
                <div className="col-6 ml-[8.333%]">
                  <div id="img-wrapper" className="w-full h-[40rem] relative">
                    <Image
                      alt="artist photo"
                      src={"/assets/Disclosure-hero-press-pic@1400x1050.webp"}
                      fill
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="uppercase pt-[2rem] h1 font-editorial">
                    <p>Pyramid Stage - saturday</p>
                  </div>
                </div>
              </div>
            </div>

            <div id="trigger" className="w-full h-[50vh]"></div>
            <div id="artist-section" className="w-full">
              <div className="row justify-end">
                <div className="col-5 mr-[8.333%]">
                  <div id="img-wrapper" className="w-full h-[40rem] relative">
                    <Image
                      alt="artist photo"
                      src={"/assets/Jungle-1-1024x650.webp"}
                      fill
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="uppercase pt-[2rem] text-end h1 font-editorial">
                    <p>Pyramid Stage - sunday</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="trigger" className="w-full h-[50vh]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
