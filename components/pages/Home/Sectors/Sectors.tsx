import TabContentSection from '@/components/global/TabContent/TabContent';
import ShadTabs from '@/components/ui/Tabs/ShadTabs';
import Image from 'next/image';
import React from 'react';
import healthcare from "/public/healthcare.svg"
import financial from "/public/financial.svg"
import retail from "/public/retail.svg"
import transport from "/public/transport.svg"
import publicSector from "/public/public-sector.svg"
import energy from "/public/energy.svg"
import industrial from "/public/industrial.svg"

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
            src={publicSector}
            alt="Public Sector Icon"
            width={400}
            height={400}
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
            src={healthcare}
            alt="Healthcare Icon"
            width={400}
            height={400}
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
            src={financial}
            alt="Financial Icon"
            width={400}
            height={400}
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
            src={industrial}
            alt="Industrial Icon"
            width={400}
            height={400}
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
        title={"Energy Sector Cybersecurity"}
        description="Drive sustainable energy solutions with our expertise."
        action="Explore Energy"
        imageIcon={
          <Image
            src={energy}
            alt="Energy Icon"
            width={400}
            height={400}
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
            src={transport}
            alt="Transport Icon"
            width={400}
            height={400}
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
            src={retail}
            alt="Retail Icon"
            width={400}
            height={400}
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
