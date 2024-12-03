"use client"
import ApproachCard from '@/components/pages/Home/components/ApproachCard.tsx/ApproachCard';
import React, { useState } from 'react';
import { AiOutlineSolution } from "react-icons/ai";
import { PiGlobeSimpleX } from "react-icons/pi";
import { FaThinkPeaks } from "react-icons/fa6";
import { PiCubeTransparent } from "react-icons/pi";
import { GrUserManager } from "react-icons/gr";
import { RiRecycleLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";

const VerticalTabComponent = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            label: 'Quality',
            content: [
                {
                    icon:<AiOutlineSolution />,
                    title: "TNV-IT HUB",
                    iconText: "Tailored Solutions",
                    description: "Every solution we offer is meticulously tailored to each client's unique needs, ensuring the highest quality and best fit for optimal results."
                },
                {
                    icon:<PiGlobeSimpleX/>,
                    title: "Industry Average",
                    iconText: "One-Size-Fits-All",
                    description: "Many companies in our industry offer pre-packaged solutions that may not fully meet each client's unique needs, which can compromise the overall quality."
                }
            ]
        },
        {
            label: 'Innovation',
            content: [
                {
                    icon:<FaThinkPeaks />,
                    title: "TNV-IT HUB",
                    iconText: "Forward-Thinking",
                    description: "We constantly invest in new technologies and methodologies to stay ahead of the curve, delivering cutting-edge security solutions to our clients."
                },
                {
                    icon:<PiGlobeSimpleX/>,
                    title: "Industry Average",
                    iconText: "Conventional Methods",
                    description: "The industry often relies on established, conventional methodologies which can sometimes fail to anticipate and tackle emerging security threats."
                }
            ]
        },
        {
            label: 'Communication',
            content: [
                {
                    icon:<PiCubeTransparent/>,
                    title: "TNV-IT HUB",
                    iconText: "Transparent and Responsive",
                    description: "We prioritize clear, timely communication, keeping our clients informed and engaged throughout our collaboration."
                },
                {
                    icon:<PiGlobeSimpleX/>,
                    title: "Industry Average",
                    iconText: "Periodic Updates",
                    description: "The industry standard often involves providing updates at set intervals, which may leave clients uninformed about developments in real-time."
                }
            ]
        },
        {
            label: 'Expertise',
            content: [
                {
                    icon:<GrUserManager/>,
                    title: "TNV-IT HUB",
                    iconText: "Seasoned Specialists",
                    description: "Our team comprises seasoned cybersecurity specialists, consistently updated with the latest trends and threats to provide top-tier security solutions."
                },
                {
                    icon:<PiGlobeSimpleX/>,
                    title: "Industry Average",
                    iconText: "General Practitioners",
                    description: "Many companies have a team of general IT practitioners who, while capable, may lack the in-depth knowledge required to address nuanced security concerns."
                }
            ]
        },
        {
            label: 'Sustainability',
            content: [
                {
                    icon:<RiRecycleLine/>,
                    title: "TNV-IT HUB",
                    iconText: "Sustainable Operations",
                    description: "We implement eco-friendly practices throughout our operations, understanding the importance of sustainable business in today's world."
                },
                {
                    icon:<PiGlobeSimpleX/>,
                    title: "Industry Average",
                    iconText: "Limited Sustainability Efforts",
                    description: "While the industry is gradually embracing sustainability, many companies have yet to fully integrate green practices into their operations"
                }
            ]
        },
        {
            label: 'Aftercare',
            content: [
                {
                    icon:<BiSupport/>,
                    title: "TNV-IT HUB",
                    iconText: "Proactive Support",
                    description: "Our client support doesn't end after implementation. We provide ongoing assistance to ensure optimal performance and address any arising issues promptly."
                },
                {
                    icon:<PiGlobeSimpleX/>,
                    title: "Industry Average",
                    iconText: "Reactive Support",
                    description: "The industry standard often involves reactive support, where assistance is provided mainly when issues arise, rather than proactively ensuring optimal performance."
                }
            ]
        },
    ];

    const handleTabHover = (index: number) => {
        setActiveTab(index);
    };

    return (
        <div className="flex gap-4 md:gap-16">
            <div className="flex flex-col mr-4">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`  px-4 py-2 border-dashed border-l-2 rounded-full transition-colors duration-300 flex items-center ${activeTab === index
                            ? 'border-[#FF3366] bg-gray-200 text-[#FF3366]'
                            : 'border-gray-300 hover:border-gray-500 hover:text-gray-500'
                            }`}
                        onMouseEnter={() => handleTabHover(index)}
                    >
                        <div className={`w-2 h-2 mr-2 rounded-full  ${activeTab === index ? 'bg-[#FF3366]' : 'bg-gray-400'}`}></div>
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="w-3/4">
                <div className='flex flex-col gap-6'>
                    {
                        tabs[activeTab].content.map(({ iconText, description, title, icon }) => (
                            <ApproachCard
                                key={iconText}
                                title={title}
                                icon={icon}
                                iconText={iconText}
                                description={description}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default VerticalTabComponent;
