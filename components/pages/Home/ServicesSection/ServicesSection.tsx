// components/ServicesSection.js
import { FaShieldAlt, FaLock, FaUsers } from "react-icons/fa";
import Image from "next/image";
import servicesImg from "/public/services.gif"; // Replace with your image path

const services = [
  {
    icon: <FaShieldAlt size={40} className="text-blue-600" />,
    title: "Advanced Threat Protection",
    description:
      "Our solutions protect your systems from emerging threats with real-time detection and advanced response strategies.",
  },
  {
    icon: <FaLock size={40} className="text-blue-600" />,
    title: "Data Encryption & Security",
    description:
      "We provide top-tier encryption services to ensure that all sensitive data remains secure and inaccessible to unauthorized users.",
  },
  {
    icon: <FaUsers size={40} className="text-blue-600" />,
    title: "User Authentication & Access Control",
    description:
      "Our authentication solutions safeguard user access, ensuring only authorized personnel can access critical information.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 px-8 lg:px-16 bg-gray-50 relative">
      <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-12">
        Our Services
      </h2>
      <div className="flex flex-col items-center space-y-12">
        {/* Image Section */}
        <div className="relative flex justify-center items-center w-full lg:w-2/3">
          <Image
            src={servicesImg}
            alt="Our Services"
            width={500}
            height={500}
            className="rounded-lg shadow-none mix-blend-multiply opacity-90"
          />
        </div>
        {/* Services Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-200"
            >
              <div className="mb-6 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">
                {service.title}
              </h3>
              <p className="text-blue-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
