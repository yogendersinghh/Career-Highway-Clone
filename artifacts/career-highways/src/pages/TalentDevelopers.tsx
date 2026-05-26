import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function TalentDevelopers() {
  useEffect(() => {
    document.title = "Talent Developers - Career Highways";
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <section className="relative pt-40 pb-24 flex items-center justify-center min-h-[60vh]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/chros-hr-executives.jpg" 
            alt="Talent Developers Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-accent/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-accent to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10 text-center text-white">
          <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-50px"}} transition={{duration:0.6}}>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">Your path is your power</p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl uppercase leading-tight mb-8 text-white">
              Career Development for everyone, for life.
            </h1>
            <Button asChild size="lg" className="bg-secondary text-white hover:bg-secondary/90 px-8 py-6 text-lg uppercase tracking-wider">
              <a href="https://app.careerhighways.com/" target="_blank" rel="noopener noreferrer">Try It</a>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl text-center">
          <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-50px"}} transition={{duration:0.6}} className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">Turn-Key & Go</p>
            <h2 className="font-heading text-4xl md:text-5xl uppercase leading-tight mb-6">Lifetime Career Planning Tools</h2>
            <p className="text-lg text-muted-foreground">
              Every individual has access to a rich set of Career Development tools to help them discover, plan, and execute their career goals.
            </p>
          </motion.div>
          
          <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
             <motion.div initial={{opacity:0,x:-24}} whileInView={{opacity:1,x:0}} viewport={{once:true,margin:"-50px"}} transition={{duration:0.6}}>
              <img src="/images/christina-wocin.jpg" alt="Talent Development" className="rounded-xl shadow-lg w-full" />
            </motion.div>
            <motion.div initial={{opacity:0,x:24}} whileInView={{opacity:1,x:0}} viewport={{once:true,margin:"-50px"}} transition={{duration:0.6}}>
               <img src="/images/nik.jpg" alt="Talent Coaching" className="rounded-xl shadow-lg w-full" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}