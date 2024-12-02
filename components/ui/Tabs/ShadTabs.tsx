import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ShadTabsPropsType } from './tabs.types'

const ShadTabs = ({ triggerList, contentList }: ShadTabsPropsType) => {
  return (
    <Tabs defaultValue={triggerList[0]?.value} className="p-4">
      <TabsList>
        {triggerList.map((trigger, index) => (
          <TabsTrigger
            key={index}
            value={trigger.value}
            className=" transition-all duration-200  focus:text-red-600 data-[state=active]:bg-[#105DD9] data-[state=active]:text-white"
          >
            {trigger.label}
          </TabsTrigger>
        ))}
      </TabsList>

      
      {contentList.map((content, index) => (
        <TabsContent key={index} value={content.value}>
          {content.content}
        </TabsContent>
      ))}
    </Tabs>
  )
}

export default ShadTabs
