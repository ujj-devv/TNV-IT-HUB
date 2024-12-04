import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShadTabsPropsType } from './tabs.types';

const ShadTabs = ({ triggerList, contentList }: ShadTabsPropsType) => {
  return (
    <Tabs defaultValue={triggerList[0]?.value} className="w-2/3">
      <TabsList className="py-6 border-gray-300 w-full flex">
        {triggerList.map((trigger, index) => (
          <TabsTrigger
            key={index}
            value={trigger.value}
            className="flex-1 text-blue-700 py-3 text-lg font-semibold rounded-t-lg transition-all duration-200 border-b-4 border-transparent data-[state=active]:bg-[#105DD9] data-[state=active]:text-white data-[state=active]:border-[#105DD9] hover:bg-blue-100 text-center"
          >
            {trigger.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {contentList.map((content, index) => (
        <TabsContent key={index} value={content.value} className="my-16 text-lg">
          {content.content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default ShadTabs;
