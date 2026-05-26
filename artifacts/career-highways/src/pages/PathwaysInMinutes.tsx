import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function PathwaysInMinutes() {
  useEffect(() => {
    document.title = "Pathways In Minutes - Career Highways";
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <section className="relative pt-40 pb-24 flex items-center justify-center min-h-[60vh]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/pim-hero.jpg" 
            alt="Pathways in Minutes Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-accent/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-accent to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10 text-center text-white">
          <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-50px"}} transition={{duration:0.6}}>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">Pathways in Minutes</p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl uppercase leading-tight mb-8 text-white">
              Rapidly Build Accurate, Standardized Career Paths
            </h1>
            <Button asChild size="lg" className="bg-secondary text-white hover:bg-secondary/90 px-8 py-6 text-lg uppercase tracking-wider">
              <Link href="/book-a-strategy-session">Book a Demo</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-50px"}} transition={{duration:0.6}}>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">The Problem</p>
              <h2 className="font-heading text-4xl md:text-5xl uppercase leading-tight mb-6">Why Career Pathways Are Rarely Built.</h2>
              <div className="space-y-6 text-muted-foreground text-lg">
                <p>
                  Manual career pathing is slow, tedious, and often never gets done—leaving employees without a clear vision for advancement and growth. As a result, organizations see <strong>51% of their workforce looking for new jobs</strong>, with only 31% feeling engaged at work and just 3 hours of daily productive time.
                </p>
                <p>
                  Without structured career pathways, 87% of CEOs report persistent skills gaps, while <strong>72% of employers lack defined career advancement tracks</strong>, causing businesses to lose valuable talent and endure higher recruiting costs.
                </p>
                <p>
                  Employers who fail to provide visible, skill-building career paths risk increased turnover and missed opportunities to upskill their teams, directly impacting engagement, productivity, and the bottom line.
                </p>
              </div>
            </motion.div>
            <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-50px"}} transition={{duration:0.6, delay:0.2}} className="space-y-8">
              <img src="/images/pim-2.jpg" alt="Career Pathing Problem" className="rounded-xl shadow-lg w-full" />
              <img src="/images/pim-3.jpeg" alt="Career Pathways" className="rounded-xl shadow-lg w-full" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-accent text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-50px"}} transition={{duration:0.6}}>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">What is Career Pathing</p>
              <h2 className="font-heading text-4xl md:text-5xl uppercase leading-tight mb-6">Empower Growth</h2>
              <div className="space-y-6 text-white/80 text-lg">
                <p>
                  Career Highways empowers individuals and organizations to chart clear, personalized routes to career success using dynamic, AI-powered career mapping. Our platform visualizes every step—jobs, education, training, and certifications—so users can confidently see which skills to build and which roles to target.
                </p>
                <p>
                  Centering skill development and real employer needs, Career Highways removes the guesswork, making growth opportunities visible and actionable for both employees and companies.
                </p>
                <p>
                  At Career Highways, organizations turn career pathing into an advantage. Our AI-driven platform builds custom pathways fast and intuitively.
                </p>
              </div>
            </motion.div>
            
            <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-50px"}} transition={{duration:0.6, delay:0.2}}>
              <div className="relative rounded-xl overflow-hidden shadow-2xl group cursor-pointer border border-white/20">
                <img src="/images/pim-video.jpg" alt="Video poster" className="w-full h-auto" />
                <div className="absolute inset-0 bg-accent/30 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}