import React from 'react';
import { IoMdArrowForward } from "react-icons/io";
import { ServicesCardProps } from './services-card.types';



const ServicesCard = ({ icon, title, description, actionText }:ServicesCardProps) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 w-full hover:shadow-xl transition-shadow duration-300">
            {/* Icon and Title Section */}
            <div className="flex flex-col sm:flex-row items-center mb-4">
                {/* Icon */}
                <div className="rounded-full mr-4 mb-2 sm:mb-0">
                    {icon}
                </div>
                {/* Title */}
                <h3 className="text-[#1E293B] text-xl font-semibold text-left sm:text-left">{title}</h3>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-left mb-4">{description}</p>

            {/* Action Button */}
            <div className="flex justify-start">
                <button
                    className="flex items-center gap-2 bg-transparent text-blue-700 py-2 px-6 rounded-md border-0 transition-all duration-200 hover:scale-105 hover:bg-[#f0f4f8]"
                >
                    {actionText}<IoMdArrowForward />
                </button>


            </div>
        </div>
    );
};

export default ServicesCard;
