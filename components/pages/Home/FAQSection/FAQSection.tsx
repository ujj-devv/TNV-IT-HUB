import Image from "next/image";
import ShadAccordion from "@/components/ui/Accordian/ShadAccordian";
import faq from "/public/FAQs.svg"

const accordionData = [
  {
    value: "item-1",
    trigger: "What is cybersecurity, and why is it important?",
    content:
      "Cybersecurity involves protecting systems, networks, and data from cyber threats. It's crucial to prevent unauthorized access, data breaches, and ensure the integrity and confidentiality of information.",
  },
  {
    value: "item-2",
    trigger: "How does this app protect my data?",
    content:
      "Our app uses advanced encryption, secure authentication methods, and continuous monitoring to safeguard your data from unauthorized access and breaches.",
  },
  {
    value: "item-3",
    trigger: "Can this app detect and prevent cyber threats?",
    content:
      "Yes, the app is equipped with real-time threat detection, AI-based anomaly detection, and proactive measures to prevent phishing, malware, and other cyberattacks.",
  },
  {
    value: "item-4",
    trigger: "How often are security updates provided?",
    content:
      "We provide regular updates to address new vulnerabilities and enhance protection. Updates are applied automatically to ensure you stay secure.",
  },
  {
    value: "item-5",
    trigger: "Is this app suitable for businesses of all sizes?",
    content:
      "Absolutely! Our app is designed to cater to individuals and businesses, from small startups to large enterprises, with scalable solutions tailored to your needs.",
  },
];


export default function FAQ() {
  return (
    <section className="px-8 lg:px-16 py-16 bg-white text-[#1E293B]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col lg:flex-row items-center  lg:space-x-10">
          {/* Image Section */}
          <div className="flex-shrink-0 w-full lg:w-1/2 mb-8 lg:mb-0">
            <Image
              src={faq}
              alt="FAQ Illustration"
              width={450} 
              height={450} 
              className="w-full h-auto" 
              priority 
            />
          </div>
          {/* Accordion Section */}
          <div className="w-full lg:w-1/2">
            <ShadAccordion items={accordionData} type="single" collapsible />
          </div>
        </div>
      </div>
    </section>
  );
}
