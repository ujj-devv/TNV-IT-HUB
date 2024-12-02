// components/HeroSection.js
import Image from "next/image";
import heroImg from "/public/hero-image.gif";


export default function HeroSection() {
  return (
    <section className="relative text-blue-600 py-16 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            Empower Your Digital Security
          </h1>
          <p className="text-lg sm:text-xl mb-6">
            Protect your business from evolving cyber threats. Our solutions ensure your digital assets are secured against all dangers.
          </p>
          <div className="flex space-x-6 mt-8">
            <button className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
              Learn More
            </button>
            <button className="border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition duration-200">
              Get Started
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="hidden lg:block">
          <Image
            src={heroImg}
            alt="Cybersecurity"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
