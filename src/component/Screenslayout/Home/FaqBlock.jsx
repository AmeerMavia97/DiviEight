
// import { ArrowRight, Plus } from "lucide-react";
// import IntroBlock from "@/component/layout/IntroBlock/IntroBlock";
// import FaqAccordion, { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/component/ui/accordion";
// import { useState } from "react";

// const faqs = [
//     {
//         question: "Is co-ownership legally safe?",
//         answer: "Yes, all co-ownership agreements are drafted by licensed real estate attorneys and recorded on our immutable ledger. Each party's ownership stake, rights, and responsibilities are clearly defined in legally binding documents.",
//     },
//     {
//         question: "How do you verify buyers?",
//         answer: "We use our proprietary DS-4 verification system that checks financial history, credit scores, income verification, and investment capacity. Only buyers who pass this comprehensive screening are matched with co-ownership opportunities.",
//     },
//     {
//         question: "Can I buy property with someone I don't know?",
//         answer: "Absolutely! Our CM² algorithm matches you with compatible co-buyers based on investment goals, timeline, budget, and lifestyle preferences. Many successful co-ownerships begin with strangers who become great investment partners.",
//     },
//     {
//         question: "Who manages agreements and disputes?",
//         answer: "All agreements are managed through our platform with clear protocols for dispute resolution. Our dedicated support team and network of legal professionals are available to mediate any issues that may arise.",
//     },
//     {
//         question: "How do referral fees work for agents?",
//         answer: "Agents receive guaranteed commission payouts backed by our ledger-verified closing system. There are no hidden fees or commission disputes — you see exactly what you'll earn before accepting any referral.",
//     },
//     {
//         question: "Do sellers pay extra to use the platform?",
//         answer: "No, sellers pay standard market rates. Our revenue model is based on buyer matching fees and agent subscriptions, not seller markups. You receive competitive offers from verified, committed buyer groups.",
//     },
// ];

// const FaqBlock = () => {


//     return (
//         <section id="faq" className="pb-20 relative bg-brandLight dark:bg-brandDark">
//             <div className="container mx-auto px-6 lg:px-20">

//                 <IntroBlock
//                     badge="FAQ"
//                     title={"Frequently Asked"}
//                     highlight="Questions"

//                 />

//                 <div className="absolute w-[450px] h-[450px] bg-[#cefcffa2] dark:bg-[#46adb47a] -left-60 -top-40 blur-3xl"></div>

//                 <div className="absolute w-[250px] h-[250px] bg-[#cefcffa2] dark:bg-[#46adb47a] -right-10 -bottom-20 blur-3xl"></div>

//                 {/* FAQ Accordion */}
//                 <div className="max-w-3xl mx-auto z-50 relative">
//                     <div className="max-w-3xl mx-auto z-50 relative">
//                         <Accordion
//                             type="single"
//                             collapsible
//                             defaultValue="item-0"
//                             className="space-y-4 grid grid-cols-1"
//                         >
//                             {faqs.map((faq, index) => (
//                                 <AccordionItem
//                                     key={index}
//                                     value={`item-${index}`}
//                                     className="rounded-sm bg-gradient-to-b relative from-[#000] to-[#3b8f9586] dark:bg-white dark:from-[#181818] dark:to-[#234c55] overflow-hidden border-none transition-all"
//                                 >
//                                     <AccordionTrigger className="text-left text-white px-6 text-xl font-semibold hover:no-underline pt-6 pb-5 flex justify-between items-center data-[state=closed]:text-black">
//                                         <h1>{faq.question}</h1>
//                                         <Plus className="h-5 w-5 shrink-0 transition-transform duration-200 data-[state=open]:rotate-45" />
//                                     </AccordionTrigger>

//                                     <AccordionContent className="text-white px-6 py-2 text-[15.5px] pb-6 leading-relaxed">
//                                         <p className="pt-4">{faq.answer}</p>
//                                     </AccordionContent>
//                                 </AccordionItem>
//                             ))}
//                         </Accordion>
//                     </div>

//                 </div>

//             </div>
//         </section>
//     );
// };

// export default FaqBlock;
