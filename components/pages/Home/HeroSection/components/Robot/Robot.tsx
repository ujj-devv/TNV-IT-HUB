import { useEffect } from "react";
import gsap from "gsap";

export default function Spider() {
  useEffect(() => {
    // GSAP Timeline
    const timeline = gsap.timeline({ defaults: { duration: 0.5, ease: "power1.out" } });

    // Animate small blocks moving to form the spider
    timeline
      .to("#block1", { x: 100, y: -150 })
      .to("#block2", { x: 150, y: -150 }, "<")
      // Add animations for other blocks
      .to("#spider-body", { opacity: 1, scale: 1.1 })
      .to("#spider-head", { opacity: 1, scale: 1.1 }, "<")
      .to("#leg1", { opacity: 1, rotate: -20, x: -10, y: -20 })
      .to("#leg2", { opacity: 1, rotate: 20, x: 10, y: -20 }, "<")
      .to("#leg3", { opacity: 1, rotate: -20, x: -30, y: -50 }, "<")
      .to("#leg4", { opacity: 1, rotate: 20, x: 30, y: -50 }, "<");

    return () => timeline.kill(); // Cleanup on component unmount
  }, []);

  return (
    <section className="mt-10 lg:mt-0 lg:ml-10 flex justify-center relative">
      <svg
        id="spider-svg"
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[400px] h-[400px]"
      >
        {/* Small Blocks */}
        <rect id="block1" x="50" y="400" width="20" height="20" fill="#16A34A" />
        <rect id="block2" x="100" y="400" width="20" height="20" fill="#16A34A" />

        {/* Spider Body */}
        <ellipse
          id="spider-body"
          cx="250"
          cy="250"
          rx="50"
          ry="75"
          fill="#16A34A"
          opacity="0"
        />
        <circle
          id="spider-head"
          cx="250"
          cy="150"
          r="30"
          fill="#16A34A"
          opacity="0"
        />

        {/* Spider Legs */}
        <line
          id="leg1"
          x1="200"
          y1="250"
          x2="150"
          y2="200"
          stroke="#16A34A"
          strokeWidth="5"
          opacity="0"
        />
        <line
          id="leg2"
          x1="300"
          y1="250"
          x2="350"
          y2="200"
          stroke="#16A34A"
          strokeWidth="5"
          opacity="0"
        />
        <line
          id="leg3"
          x1="190"
          y1="280"
          x2="140"
          y2="320"
          stroke="#16A34A"
          strokeWidth="5"
          opacity="0"
        />
        <line
          id="leg4"
          x1="310"
          y1="280"
          x2="360"
          y2="320"
          stroke="#16A34A"
          strokeWidth="5"
          opacity="0"
        />
      </svg>
    </section>
  );
}
