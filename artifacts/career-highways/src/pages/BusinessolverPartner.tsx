import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function BusinessolverPartner() {
  useEffect(() => {
    document.title = "Businessolver Pinnacle Partner | Career Highways";
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <section className="relative pt-40 pb-24 flex items-center justify-center min-h-[60vh]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/businessolver-implemented.jpg" 
            alt="Businessolver Partnership Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-accent/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-accent to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10 text-center text-white">
          <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-50px"}} transition={{duration:0.6}}>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">Partnership</p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl uppercase leading-tight mb-8 text-white">
              Businessolver Pinnacle Partner
            </h1>
            <p className="text-xl max-w-2xl mx-auto mb-10">
              Career Highways is proud to be a Businessolver Pinnacle Partner, integrating skills intelligence to drive career health and retention.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-secondary text-white hover:bg-secondary/90 px-8 py-6 text-lg uppercase tracking-wider">
                <Link href="/book-a-strategy-session">Book a Strategy Session</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-accent hover:bg-white hover:text-accent px-8 py-6 text-lg uppercase tracking-wider bg-white">
                <a href="https://www.businessolver.com/" target="_blank" rel="noopener noreferrer">Visit Businessolver</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-50px"}} transition={{duration:0.6}} className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl uppercase leading-tight">Partnership Impact</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-50px"}} transition={{duration:0.6, delay:0.1}} className="p-8 bg-muted rounded-xl">
              <p className="font-heading text-6xl text-secondary mb-4">75%</p>
              <p className="font-semibold uppercase tracking-wider">Faster job architecture rollout</p>
            </motion.div>
            
            <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-50px"}} transition={{duration:0.6, delay:0.2}} className="p-8 bg-muted rounded-xl">
              <p className="font-heading text-6xl text-secondary mb-4">+58%</p>
              <p className="font-semibold uppercase tracking-wider">Employee Retention</p>
            </motion.div>

            <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-50px"}} transition={{duration:0.6, delay:0.3}} className="p-8 bg-muted rounded-xl">
              <p className="font-heading text-6xl text-secondary mb-4">3x</p>
              <p className="font-semibold uppercase tracking-wider">Internal Mobility Increase</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}