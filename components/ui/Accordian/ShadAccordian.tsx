import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ShadAccordionProps } from "./accordian.types";

const ShadAccordion = ({
  items,
  type = "single",
  collapsible = false,
}: ShadAccordionProps) => {
  return (
    <Accordion type={type} collapsible={collapsible}>
      {items.map((item) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          className="border border-gray-300 rounded-lg mb-4 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          <AccordionTrigger className="px-4 py-3 font-medium bg-gray-50 text-gray-800 border-b border-gray-200 hover:bg-[#FF3366] hover:text-white hover:no-underline transition-colors duration-200">
            {item.trigger}
          </AccordionTrigger>
          <AccordionContent className="px-4 py-3 text-gray-700 bg-white">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default ShadAccordion;
