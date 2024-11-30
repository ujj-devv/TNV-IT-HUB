"use client";
// import Image from "next/image";
import { motion } from "motion/react";
// import heroImg from "/public/hero-image.jpg";
import { HiShieldCheck, HiLockClosed, HiChartBar } from "react-icons/hi";
import Robot from "./components/Robot/Robot";

export default function Home() {
    return (
        <div className="bg-gradient-to-br from-white via-gray-100 to-white text-gray-800 min-h-screen">
            {/* Navbar Section */}
            <nav className="bg-white text-gray-800 py-6 shadow-md">
                <div className="container mx-auto px-6 lg:px-20 flex items-center justify-between">
                    <h1 className="text-4xl font-bold text-green-600">CyberSecure</h1>
                    <ul className="flex space-x-8">
                        <li><a href="#home" className="hover:text-green-500 transition-all duration-300">Home</a></li>
                        <li><a href="#features" className="hover:text-green-500 transition-all duration-300">Features</a></li>
                        <li><a href="#services" className="hover:text-green-500 transition-all duration-300">Services</a></li>
                        <li><a href="#pricing" className="hover:text-green-500 transition-all duration-300">Pricing</a></li>
                        <li><a href="#faqs" className="hover:text-green-500 transition-all duration-300">FAQs</a></li>
                    </ul>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-b from-white via-gray-100 to-white overflow-hidden" id="home">
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" fill="none">
                        <circle cx="400" cy="400" r="400" fill="url(#gradient)" />
                        <defs>
                            <radialGradient id="gradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(400 400) rotate(90) scale(400)">
                                <stop stopColor="#32736A" />
                                <stop offset="1" stopColor="#e0e0e0" />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
                <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between relative z-10">
                    <motion.div className="text-center lg:text-left max-w-lg" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-800">Your Shield Against Cyber Threats</h1>
                        <p className="mt-4 text-lg text-gray-600">Advanced threat detection and real-time monitoring to secure your digital assets.</p>
                        <div className="mt-8">
                            <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all duration-300">Get Started</button>
                            <button className="ml-4 px-6 py-3 bg-transparent border border-gray-400 hover:border-gray-200 text-gray-600 hover:text-white rounded-lg transition-all duration-300">Learn More</button>
                        </div>
                    </motion.div>
                    <Robot/>
                </div>
            </section>

            {/* Our Services Section */}
            <section className="py-16 px-6 lg:px-20 bg-white" id="services">
                <h2 className="text-3xl font-bold text-center text-gray-800">Our Services</h2>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto">
                    {[
                        { icon: <HiShieldCheck className="text-5xl text-green-500" />, title: "Threat Prevention", description: "Identify and neutralize cyber threats before they happen." },
                        { icon: <HiLockClosed className="text-5xl text-green-500" />, title: "Data Protection", description: "Secure your sensitive data with advanced encryption." },
                        { icon: <HiChartBar className="text-5xl text-green-500" />, title: "Security Audits", description: "Detailed audits to ensure your systems are airtight." }
                    ].map((service, index) => (
                        <motion.div key={index} className="bg-gray-100 p-8 rounded-lg shadow-lg hover:scale-105 transition-transform">
                            <div className="flex justify-center">{service.icon}</div>
                            <h3 className="mt-4 text-2xl text-center font-bold text-gray-800">{service.title}</h3>
                            <p className="mt-4 text-gray-600">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Pricing Plans Section */}
            <section className="py-16 px-6 lg:px-20 bg-gray-100" id="pricing">
                <h2 className="text-3xl font-bold text-center text-gray-800">Pricing Plans</h2>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto">
                    {[
                        {
                            title: "Basic",
                            price: "$29/mo",
                            features: [
                                "Real-time threat monitoring",
                                "Basic data encryption",
                                "Monthly security reports",
                                "Email support"
                            ],
                        },
                        {
                            title: "Professional",
                            price: "$49/mo",
                            features: [
                                "Real-time threat monitoring",
                                "Advanced data encryption",
                                "Weekly security reports",
                                "Priority email support",
                                "Automated threat resolution"
                            ],
                        },
                        {
                            title: "Enterprise",
                            price: "Contact Us",
                            features: [
                                "Real-time threat monitoring",
                                "Custom encryption solutions",
                                "Daily security reports",
                                "Dedicated account manager",
                                "24/7 phone support",
                                "Custom security audits",
                                "Integration with enterprise tools"
                            ],
                        },
                    ].map((plan, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-200 p-8 rounded-lg shadow-lg hover:scale-105 transition-transform"
                        >
                            <h3 className="text-2xl font-bold text-center text-green-500">{plan.title}</h3>
                            <p className="text-center text-gray-800 mt-2 text-lg">{plan.price}</p>
                            <ul className="mt-4 text-gray-600 space-y-2">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center">
                                        <span className="text-green-500 mr-2">✔</span> {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className="mt-6 w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                                {plan.title === "Enterprise" ? "Contact Us" : "Choose Plan"}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* FAQs Section */}
            <section className="py-16 px-6 lg:px-20 bg-white" id="faqs">
                <h2 className="text-3xl font-bold text-center text-gray-800">Frequently Asked Questions</h2>
                <div className="mt-10 max-w-4xl mx-auto space-y-4">
                    {[
                        { question: "What is CyberSecure?", answer: "CyberSecure is a comprehensive cybersecurity solution to protect your digital assets." },
                        { question: "How do I get started?", answer: "Click the 'Get Started' button to sign up and integrate our tools." },
                        { question: "What industries do you serve?", answer: "We serve industries including finance, healthcare, retail, and more." }
                    ].map((faq, index) => (
                        <details key={index} className="bg-gray-100 p-4 rounded-lg">
                            <summary className="text-lg font-bold text-gray-800">{faq.question}</summary>
                            <p className="mt-2 text-gray-600">{faq.answer}</p>
                        </details>
                    ))}
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-white text-gray-600 py-8">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 CyberSecure. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}
