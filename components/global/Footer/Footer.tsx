// components/Footer.js
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r text-[#1E293B] py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <div className="font-extrabold text-2xl">TNV IT-HUB</div>
            <p className="mt-2 text-sm text-gray-600">
              Empowering businesses with advanced cybersecurity solutions.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <a href="#home" className="hover:text-[#0F172A]">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#0F172A]">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#0F172A]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#0F172A]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-6 justify-center md:justify-start">
              <a href="#" className="text-[#1E293B] hover:text-[#0F172A]">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-[#1E293B] hover:text-[#0F172A]">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-[#1E293B] hover:text-[#0F172A]">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-[#1E293B] hover:text-[#0F172A]">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} TNV IT-HUB. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
