import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  useEffect(() => {
    document.title = "Skills Intelligence & Workforce Capability FAQ | Career Highways";
  }, []);

  const faqs = [
    {
      q: "What is Career Highways?",
      a: "Career Highways is the only platform that unifies job architecture, skills intelligence, and career pathways into governed workforce infrastructure. It replaces static spreadsheets and disconnected HR systems with a living, continuously updated system of record for roles, skills, and career mobility. This unified foundation enables organizations to operationalize skills-based workforce strategy — not just document it."
    },
    {
      q: "What is Skills Intelligence?",
      a: "Skills Intelligence is the structured management, analysis, and optimization of skills and competencies across an organization. It enhances visibility into skill supply and demand, identifies capability gaps, models AI impact, and connects skills directly to role architecture and career pathways. Unlike static taxonomies or reporting dashboards, Skills Intelligence is embedded into workforce infrastructure — enabling continuous alignment between roles, skills, and business strategy."
    },
    {
      q: "How is Skills Intelligence different from a skills taxonomy?",
      a: "A skills taxonomy organizes terms. Skills Intelligence operationalizes them. Career Highways maps skills to roles, career pathways, workforce planning scenarios, and AI impact modeling — transforming reference data into governed, measurable workforce infrastructure."
    },
    {
      q: "Is Career Highways a career pathing tool?",
      a: "Yes. Career Highways is a powerful career pathing platform that enables transparent, personalized, data-driven career pathways for every employee. But it is far more than that. Unlike standalone career pathing tools that rely on static charts or manual configuration, Career Highways generates pathways dynamically from governed job architecture and real-time skills data."
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      <section className="relative pt-40 pb-24 flex items-center justify-center min-h-[60vh]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/adobestock-364843654.webp" 
            alt="FAQ Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-accent/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-accent to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10 text-center text-white">
          <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-50px"}} transition={{duration:0.6}}>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">Answers</p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl uppercase leading-tight mb-6 text-white">
              Frequently Asked Questions
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-50px"}} transition={{duration:0.6}}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left font-heading text-xl uppercase tracking-wide">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </div>
  );
}