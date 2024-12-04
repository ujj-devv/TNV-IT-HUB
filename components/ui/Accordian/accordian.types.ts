type AccordionItemType = {
    value: string;
    trigger: React.ReactNode;
    content: React.ReactNode;
};

export type ShadAccordionProps = {
    items: AccordionItemType[];
    type?: 'single' | 'multiple'; // Allow choosing between single or multiple accordion types
    collapsible?: boolean; // Option to make it collapsible
};