import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Insights() {
  useEffect(() => {
    document.title = "Workforce Capability & AI Impact Insights | Career Highways";
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <section className="relative pt-40 pb-24 flex items-center justify-center min-h-[60vh]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/insights-bg.jpeg" 
            alt="Insights Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-accent/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-accent to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10 text-center text-white">
          <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-50px"}} transition={{duration:0.6}}>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">Insights & Research</p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl uppercase leading-tight mb-6 text-white">
              Workforce Capability & AI Impact
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-50px"}} transition={{duration:0.6}}>
              <h2 className="font-heading text-4xl md:text-5xl uppercase leading-tight mb-6">Explore Topics</h2>
              <div className="flex flex-wrap gap-4">
                <Link href="/career-highways-skills-intelligence" className="px-6 py-3 bg-muted hover:bg-secondary hover:text-white transition-colors rounded-full text-sm font-semibold uppercase tracking-wider">Skills Intelligence</Link>
                <Link href="/artificial-intelligence" className="px-6 py-3 bg-muted hover:bg-secondary hover:text-white transition-colors rounded-full text-sm font-semibold uppercase tracking-wider">Explainable AI</Link>
                <Link href="/case-studies" className="px-6 py-3 bg-muted hover:bg-secondary hover:text-white transition-colors rounded-full text-sm font-semibold uppercase tracking-wider">Case Studies</Link>
                <Link href="/knowledge-center" className="px-6 py-3 bg-muted hover:bg-secondary hover:text-white transition-colors rounded-full text-sm font-semibold uppercase tracking-wider">Knowledge Center</Link>
              </div>
            </motion.div>

            <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-50px"}} transition={{duration:0.6, delay:0.2}}>
              <Card className="bg-muted border-none shadow-none">
                <CardContent className="p-8 text-center">
                  <h3 className="font-heading text-2xl uppercase mb-4">Get Insights in your Inbox</h3>
                  <p className="text-muted-foreground mb-6">Stay ahead with our latest research on workforce capability and AI.</p>
                  <form className="flex flex-col gap-4" onSubmit={e => e.preventDefault()}>
                    <input type="email" placeholder="Your Email Address" className="w-full px-4 py-3 rounded border border-border bg-white focus:outline-none focus:ring-2 focus:ring-secondary" />
                    <Button type="button" className="w-full bg-accent text-white hover:bg-accent/90">Subscribe</Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-50px"}} transition={{duration:0.6}} className="text-center mt-20">
            <h2 className="font-heading text-4xl uppercase mb-6">Want to dive deeper?</h2>
            <Button asChild size="lg" className="bg-secondary text-white hover:bg-secondary/90 px-8 py-6 text-lg uppercase tracking-wider">
              <Link href="/book-a-strategy-session">Book a Strategy Session</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}