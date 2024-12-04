import React from 'react'
import ServicesCard from '../components/ServicesCard/ServicesCard';
import { GiCyberEye } from "react-icons/gi";
import { MdUnsubscribe } from "react-icons/md";
import { SiSpringsecurity } from "react-icons/si";

const servicesData = [
    {
        icon: <GiCyberEye size={40} className='text-[#FF3366]'/>,
        title: "Pentesting",
        description: "Pentesting services involve conducting simulated cyber attacks on a system or network to identify vulnerabilities and assess security measures, helping organizations strengthen their defenses against real-world threats.",
        actionText: "Learn About Pentesting",
    },
    {
        icon: <MdUnsubscribe size={40} className='text-[#FF3366]'/>,
        title: "Security Subscriptions",
        description: "Security subscriptions provide a range of packages that include both offensive and defensive security solutions ensuring comprehensive security at a fair price for companies of all sizes.",
        actionText: "Learn About Security Subscriptions",
    },
    {
        icon: <SiSpringsecurity size={40} className='text-[#FF3366]' />,
        title: "Security Staffing",
        description: "Staffing Services offer the perfect solution to augment your team with skilled security professionals, ensuring robust defense against cyber threats while enhancing operational efficiency.",
        actionText: "Learn About Security Staffing",
    },
];

const Services = () => {
    return (
        <div className="px-8 lg:px-16 py-8">
            <h2 className="text-3xl font-bold text-[#1E293B] mb-8 text-center">Services Provided by TNV-IT HUB</h2>
            <div className=" grid grid-cols-1 md:grid-cols-2 md:mx-32  gap-8 justify-center">
                {servicesData.map((service, index) => (
                    <ServicesCard
                        key={index}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                        actionText={service.actionText}
                    />
                ))}
            </div>
        </div>
    )
}

export default Services;
