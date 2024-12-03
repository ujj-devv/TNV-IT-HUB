"use client";
import Image from "next/image";
import noviLogo from "/public/novi.svg";
import googleLogo from "/public/google.svg";
import bicycleShopImg from "/public/bicycle-shop.jpg";

const logoArray = [
    { icon: noviLogo, alt: "Novi" },
    { icon: googleLogo, alt: "Google" },
    { icon: bicycleShopImg, alt: "Bicycle Shop" }
]

export default function ClientsLogos() {
    return (
        <section className="bg-white py-10">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-12 text-[#1E293B]">Our Trusted Clients</h2>
                <div className="overflow-hidden">
                    <div
                        id="logos-container"
                        className="flex animate-marquee space-x-10 items-center"
                    >
                        {/* Client logos */}
                        {
                            logoArray.map(({ icon, alt }) => (
                                <div className="client-logo" key={icon}>
                                    <Image
                                        src={icon}
                                        alt={alt}
                                        width={150}
                                        height={60}
                                        className="object-contain"
                                    />
                                </div>

                            ))
                        }
                        {/* Repeat logos to ensure a continuous scroll */}
                        {/* {
                            logoArray.map(({ icon, alt }) => (
                                <div className="client-logo" key={icon}>
                                    <Image
                                        src={icon}
                                        alt={alt}
                                        width={150}
                                        height={60}
                                        className="object-contain"
                                    />
                                </div>

                            ))
                        } */}
                    </div>
                </div>
            </div>

            {/* CSS Animation */}
            <style jsx>{`
        /* Create the infinite scroll effect */
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        /* Apply animation to the container */
        #logos-container {
          animation: marquee 20s linear infinite;
        }
      `}</style>
        </section>
    );
}
