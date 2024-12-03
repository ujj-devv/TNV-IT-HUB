import TabContentSection from '@/components/global/TabContent/TabContent';
import ShadTabs from '@/components/ui/Tabs/ShadTabs';
import Image from 'next/image';
import React from 'react';

const triggerList = [
  { value: 'public', label: 'Public' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'financial', label: 'Financial' },
  { value: 'industrial', label: 'Industrial' },
  { value: 'energy', label: 'Energy' },
  { value: 'transport', label: 'Transport' },
  { value: 'retail', label: 'Retail' },
];

const contentList = [
  {
    value: "public",
    content: (
      <TabContentSection
        title="Public Sector"
        description="Explore our public sector solutions that improve efficiency and security."
        action="Learn More"
        imageIcon={
          <Image
            src="/icons/public-sector-icon.png"
            alt="Public Sector Icon"
            width={128}
            height={128}
            className="object-contain"
          />
        }
      />
    ),
  },
  {
    value: "healthcare",
    content: (
      <TabContentSection
        title="Healthcare"
        description="Discover innovative healthcare solutions to enhance patient outcomes."
        action="Explore Healthcare"
        imageIcon={
          <Image
            src="/icons/healthcare-icon.png"
            alt="Healthcare Icon"
            width={128}
            height={128}
            className="object-contain"
          />
        }
      />
    ),
  },
  {
    value: "financial",
    content: (
      <TabContentSection
        title="Financial Services"
        description="Secure and optimize financial services with our advanced tools."
        action="Secure Finance"
        imageIcon={
          <Image
            src="/icons/financial-icon.png"
            alt="Financial Icon"
            width={128}
            height={128}
            className="object-contain"
          />
        }
      />
    ),
  },
  {
    value: "industrial",
    content: (
      <TabContentSection
        title="Industrial Solutions"
        description="Boost industrial productivity with our cutting-edge technologies."
        action="Learn More"
        imageIcon={
          <Image
            src="/icons/industrial-icon.png"
            alt="Industrial Icon"
            width={128}
            height={128}
            className="object-contain"
          />
        }
      />
    ),
  },
  {
    value: "energy",
    content: (
      <TabContentSection
        title="Energy Solutions"
        description="Drive sustainable energy solutions with our expertise."
        action="Explore Energy"
        imageIcon={
          <Image
            src="/icons/energy-icon.png"
            alt="Energy Icon"
            width={128}
            height={128}
            className="object-contain"
          />
        }
      />
    ),
  },
  {
    value: "transport",
    content: (
      <TabContentSection
        title="Transport Solutions"
        description="Revolutionize transport systems with our innovative approaches."
        action="Discover Transport"
        imageIcon={
          <Image
            src="/icons/transport-icon.png"
            alt="Transport Icon"
            width={128}
            height={128}
            className="object-contain"
          />
        }
      />
    ),
  },
  {
    value: "retail",
    content: (
      <TabContentSection
        title="Retail Solutions"
        description="Enhance retail experiences with our tailored retail solutions."
        action="Enhance Retail"
        imageIcon={
          <Image
            src="/icons/retail-icon.png"
            alt="Retail Icon"
            width={128}
            height={128}
            className="object-contain"
          />
        }
      />
    ),
  },
];

const Sectors = () => {
  return (
    <div className=" my-16 mx-auto flex flex-col justify-center items-center">
      <div>
        <h2 className="text-4xl font-extrabold text-center text-[#1E293B] mb-12">
          Sectors
        </h2>
      </div>
      <ShadTabs triggerList={triggerList} contentList={contentList} />
    </div>
  );
};

export default Sectors;
