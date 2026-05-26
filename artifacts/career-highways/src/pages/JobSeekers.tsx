import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function JobSeekers() {
  useEffect(() => {
    document.title = "Job Seekers - Career Highways";
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <section className="relative pt-40 pb-24 flex items-center justify-center min-h-[70vh]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/js-hero.jpg" 
            alt="Job Seekers Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-accent/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-accent to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10 text-center text-white flex flex-col items-center">
          <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-50px"}} transition={{duration:0.6}} className="max-w-4xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">Your path is your power</p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl uppercase leading-tight mb-8 text-white">
              Find your way with our Career Path AI Platform.
            </h1>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg" className="bg-secondary text-white hover:bg-secondary/90 px-8 py-6 text-lg uppercase tracking-wider">
                <Link href="/book-a-strategy-session">Book a Demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-accent hover:bg-white hover:text-accent px-8 py-6 text-lg uppercase tracking-wider bg-white">
                <Link href="/solutions">View Solutions</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-50px"}} transition={{duration:0.6}}>
              <h2 className="font-heading text-4xl md:text-5xl uppercase leading-tight mb-6">Discover Your Talents</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Providing learners the tools to discover their talents and careers that are a natural fit, and employers a way to maximize and retain their workforce.
              </p>
            </motion.div>
            <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-50px"}} transition={{duration:0.6, delay:0.2}}>
              <img src="/images/js-ipad.webp" alt="Career Path Interface" className="w-full h-auto rounded-xl shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-accent text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-50px"}} transition={{duration:0.6}} className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl uppercase">Success Stories</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-50px"}} transition={{duration:0.6, delay:0.1}} className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="font-heading text-2xl uppercase mb-2 text-secondary">Meet Mya</h3>
              <p className="text-xs font-bold tracking-widest uppercase mb-1 text-white/70">Career: Marketing</p>
              <p className="text-xs font-bold tracking-widest uppercase mb-4 text-white/70">Superpower: Organization</p>
              <p className="text-lg italic text-white/90">"Who knew my that my Superpower of organization skills could make me so marketable!"</p>
            </motion.div>
            
            <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-50px"}} transition={{duration:0.6, delay:0.2}} className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="font-heading text-2xl uppercase mb-2 text-secondary">Meet Enrique</h3>
              <p className="text-xs font-bold tracking-widest uppercase mb-1 text-white/70">Career: Chef</p>
              <p className="text-xs font-bold tracking-widest uppercase mb-4 text-white/70">Superpower: Creativity</p>
              <p className="text-lg italic text-white/90">"Thanks to the AI Career Mentor, my resume shot to the top of the stack for my dream job."</p>
            </motion.div>

            <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-50px"}} transition={{duration:0.6, delay:0.3}} className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="font-heading text-2xl uppercase mb-2 text-secondary">Meet Samantha</h3>
              <p className="text-xs font-bold tracking-widest uppercase mb-4 text-white/70">Employer</p>
              <p className="text-lg italic text-white/90">"Our Career Path visualization has made us a more attractive employer and helped us retain our talent."</p>
            </motion.div>
          </div>
          
          <div className="mt-16 text-center">
            <Button asChild size="lg" className="bg-secondary text-white hover:bg-secondary/90 px-8 py-6 text-lg uppercase tracking-wider">
              <a href="https://app.careerhighways.com/my-profile" target="_blank" rel="noopener noreferrer">What's Your SuperPower?</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}