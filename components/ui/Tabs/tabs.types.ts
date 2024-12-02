interface Tab {
    value: string
    label: string
  }
  
  interface TabContent {
    value: string
    content: React.ReactNode
  }
  
  export interface ShadTabsPropsType {
    triggerList: Tab[]
    contentList: TabContent[]
  }
  