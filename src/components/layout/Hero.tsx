import { useState, useEffect } from "react";
import InfinityScene from "../three/InfinityTrail";

function Hero() {
  const words = ["Developer", "Thinker", "Engineer", "Builder"];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3600);

    return () => clearInterval(interval);
  }, []);

  return (
    // <section className="relative min-h-screen flex items-end px-6 md:px-8 pb-14 overflow-hidden ">
    <section className="relative min-h-screen flex flex-col justify-end px-6 md:px-8 pb-14 overflow-hidden">
      {/* LOCAL BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        {/* gradient ONLY affects this layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/80" />
      </div>

      {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-20">
        <div className="w-[90vw] max-w-[700px] md:max-w-[1100px] aspect-square opacity-70 blur-[0.2px] -translate-y-20">
          <InfinityScene />
        </div>
      </div> */}

      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="
        w-[140vw]
        sm:w-[120vw]
        md:w-[100vw]
        lg:w-[85vw]
        xl:w-[75vw]
        h-[80vh] md:h-auto
        md:aspect-square
        opacity-60 sm:opacity-70 md:opacity-80
        blur-[0.2px]
        -translate-y-[5%]
        sm:-translate-y-[10%]
        md:-translate-y-[15%]
        lg:-translate-y-[20%]"
          >
            <InfinityScene />
          </div>
        </div>
      </div>

      <div className="relative z-30 max-w-[800px] w-full flex flex-col">
        <div className="relative z-30 max-w-[800px] w-full flex flex-col">
          {/* <h1 className="text-[clamp(3rem,10vw,11rem)] leading-[0.85] tracking-tight font-medium"> */}
          <h1
            className="
            text-[clamp(4.5rem,14vw,6.5rem)]
            sm:text-[clamp(4rem,12vw,8rem)]
            md:text-[clamp(3.5rem,10vw,11rem)]
            leading-[0.85]
            tracking-tight
            font-medium"
          >
            I'm a
            <br />
            Creative
            <br />
            <span className="relative inline-block h-[1em] overflow-hidden align-bottom">
              <span
                key={index}
                className="block"
                style={{
                  animation: "wordSlide 4s cubic-bezier(0.76,0,0.24,1)",
                }}
              >
                {words[index]}
              </span>
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Hero;
