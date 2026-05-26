import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function InThePress() {
  useEffect(() => {
    document.title = "Career Highways in the Press | Media & Coverage";
  }, []);

  const pressItems = [
    { date: "Recent", outlet: "Businessolver", title: "Career Highways Joins Businessolver Pinnacle Partner Program" },
    { date: "Recent", outlet: "Associated Press", title: "Career Highways Announces SkillXP to Help Enterprises Turn Learning Investments Into Workforce Capability" },
    { date: "Recent", outlet: "Industry News", title: "Companies Cutting Entry-Level Jobs Risk Long-Term Talent Shortages" },
    { date: "Recent", outlet: "Forbes", title: "Enterprise AI’s Illusion of Progress: Coordination Theater" },
    { date: "Recent", outlet: "Associated Press", title: "Career Highways Launches Skills Intelligence Platform to Help Employers Quantify AI’s Impact on Work" }
  ];

  return (
    <div className="bg-background min-h-screen">
      <section className="relative pt-40 pb-24 flex items-center justify-center min-h-[60vh]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/highway-aerial.jpg" 
            alt="In the Press Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-accent/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-accent to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10 text-center text-white">
          <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-50px"}} transition={{duration:0.6}}>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">What People Are Saying</p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl uppercase leading-tight mb-6 text-white">
              In The Press
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Career Highways collaborates with enterprise employers, education leaders, and workforce organizations to modernize career pathways and expand economic mobility.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="flex flex-col gap-6">
            {pressItems.map((item, i) => (
              <motion.div key={i} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-50px"}} transition={{duration:0.6, delay: i * 0.1}}>
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 text-sm font-semibold tracking-wider text-muted-foreground uppercase">
                        <span>{item.date}</span>
                        <span className="w-1 h-1 rounded-full bg-border"></span>
                        <span className="text-secondary">{item.outlet}</span>
                      </div>
                      <h3 className="font-heading text-2xl uppercase leading-tight text-accent">{item.title}</h3>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-50px"}} transition={{duration:0.6}} className="mt-20 p-10 bg-muted text-center rounded-lg">
            <h3 className="font-heading text-2xl uppercase mb-4">Media Inquiries</h3>
            <p className="text-muted-foreground">For press and media inquiries, please reach out to our team at:</p>
            <a href="mailto:contact@careerhighways.com" className="inline-block mt-4 text-secondary font-bold hover:underline">contact@careerhighways.com</a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}