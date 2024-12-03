import React from "react";
import { TabContentSectionProps } from "./tabContent.types";
import ShadButton from "@/components/ui/Button/ShadButton";
import { ButtonType } from "@/components/ui/Button/button.enums";

const TabContentSection = ({
    title,
    description,
    action,
    imageIcon,
}: TabContentSectionProps) => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 p-6 bg-gray-50 rounded-lg shadow-lg">
            {/* Left Section: Text */}
            <div className="flex flex-col lg:w-2/3 text-center lg:text-left gap-4">
                <h3 className="text-2xl font-bold text-[#1E293B]">{title}</h3>
                <p className="text-lg text-gray-600 ">{description}</p>
                <ShadButton buttonText={action} buttonType={ButtonType.PRIMARY} customStyles="w-fit" />
            </div>
            {/* Right Section: Image */}
            <div className="lg:w-1/3 flex justify-center">{imageIcon}</div>
        </div>
    );
};

export default TabContentSection;
