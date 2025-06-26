import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
const FaqAccordion = ({faq,title}) => {
  return (
    <div className='space-y-6'>
      <h2 className='xl:text-4xl  text-2xl text-primary font-bold '>{title}</h2>
      <Accordion type="single" collapsible defaultValue="item-1" className="w-full " >
      {faq?.map((item, idx) => (
        <AccordionItem value={`item-${idx + 1}`} key={idx} className="border-b-0">
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
      </Accordion>
    </div>
  )
}

export default FaqAccordion
