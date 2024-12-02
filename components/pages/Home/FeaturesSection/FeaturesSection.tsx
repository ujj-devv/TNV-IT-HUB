// components/Features.js
import Image from "next/image";
import featuresImg from "/public/features.gif";

export default function Features() {
  return (
    <section className="py-16 text-blue-700">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Our Features</h2>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:space-x-12">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
          <Image
            src={featuresImg}
            alt="Features Illustration"
            width={500}
            height={500}
            className="rounded-lg shadow-none"
          />
        </div>
        {/* Features Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-8 bg-white text-blue-600 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl hover:bg-[#FF3366] hover:text-white">
              <h3 className="text-xl font-semibold mb-4">Real-Time Monitoring</h3>
              <p>
                Track and respond to cyber threats in real-time with our advanced monitoring solutions.
              </p>
            </div>
            <div className="p-8 bg-white text-blue-600 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl hover:bg-[#FF3366] hover:text-white">
              <h3 className="text-xl font-semibold mb-4">Automated Response</h3>
              <p>
                Automatically neutralize threats with AI-powered security automation.
              </p>
            </div>
            <div className="p-8 bg-white text-blue-600 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl hover:bg-[#FF3366] hover:text-white">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p>
                Our team is always on hand to help, with round-the-clock customer support for any security concerns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
