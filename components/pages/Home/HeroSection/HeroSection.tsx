// components/HeroSection.js
import Image from "next/image";
import heroImg from "/public/hero-image.gif";
import ShadButton from "@/components/ui/Button/ShadButton";
import { ButtonType } from "@/components/ui/Button/button.enums";

export default function HeroSection() {
  return (
    <section className="relative text-blue-600 py-16 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6 text-[#1E293B]">
            Empower Your Digital Security
          </h1>
          <p className="text-lg sm:text-xl mb-6 text-gray-600">
            Protect your business from evolving cyber threats. Our solutions ensure your digital assets are secured against all dangers.
          </p>
          <div className="flex space-x-6 mt-8">
            <ShadButton buttonText={"Learn More"} buttonType={ButtonType.PRIMARY} />
            <ShadButton buttonText={"Get started"} buttonType={ButtonType.SECONDARY} />
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
