import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function SkillXP() {
  useEffect(() => {
    document.title = "SkillXP | Connect Learning to Skills, Roles, and Progression";
  }, []);

  return (
    <div className="bg-background flex flex-col min-h-screen">
      <section className="relative pt-40 pb-24 flex items-center justify-center min-h-[60vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/sign-into-career-highways.jpg" 
            alt="SkillXP" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-accent/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-accent to-transparent opacity-90" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 24 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-50px" }} 
            transition={{ duration: 0.6 }}
            className="max-w-4xl text-white"
          >
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl uppercase leading-tight mb-6">
              Align Learning to Skills, Roles, and Real Progression
            </h1>
            <h2 className="text-xl md:text-2xl text-white/90 font-light mb-10 max-w-2xl">
              SkillXP connects development to the skills your organization needs and the roles employees are moving toward.
            </h2>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-secondary text-white hover:bg-secondary/90 tracking-widest uppercase text-xs">
                <Link href="/book-a-strategy-session">Request a Demo</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 24 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-50px" }} 
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase leading-tight mb-8 text-accent">
              Connect Learning to Skills, Roles, and Progression
            </h2>
            <div className="text-lg text-foreground/80 space-y-4">
              <p>Most LMS platforms report on activity—courses completed, hours spent, content accessed.</p>
              <p>They don't show how learning translates into skill development, role readiness, or internal movement.</p>
              <p>SkillXP connects learning directly to skills, roles, and progression across the organization.</p>
              <p className="font-medium text-accent mt-6">Replace your LMS at a fraction of the cost. See how SkillXP makes it possible.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 24 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-50px" }} 
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">The Gap</p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase leading-tight mb-8 text-accent">
                Learning Is Not Connected to How Work Actually Evolves
              </h2>
              
              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed mb-8">
                <p>
                  In most organizations, learning operates separately from roles and workforce planning.
                </p>
                <p className="font-semibold text-accent">That disconnect creates friction:</p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1 text-xl">•</span>
                    <span>Employees complete training without clear next steps</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1 text-xl">•</span>
                    <span>Development is not tied to role requirements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1 text-xl">•</span>
                    <span>L&D lacks visibility into whether learning is building relevant skills</span>
                  </li>
                </ul>
                <p className="font-medium text-accent mt-8 p-6 bg-accent/5 rounded-lg border border-accent/10">
                  Closing this gap requires aligning learning to how roles are defined and how people actually move across them.
                </p>
              </div>
            </div>
            <div className="relative aspect-square lg:aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
              <img src="/images/learning-and-development-leaders.jpg" alt="Learning and Development" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-accent text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 24 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-50px" }} 
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div className="order-2 lg:order-1 relative aspect-video rounded-xl overflow-hidden shadow-2xl">
              <img src="/images/ch-home-mockup.png" alt="SkillXP Platform" className="w-full h-full object-contain bg-accent/50 p-4" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">SkillXP</p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase leading-tight mb-8">
                Learning Aligned to Skills and Roles
              </h2>
              <p className="text-xl text-white/80 mb-10">
                Connect development to the skills employees need now and the roles they can grow into next.
              </p>
              
              <div className="space-y-8 text-white/80">
                <div>
                  <h3 className="font-heading text-2xl uppercase text-secondary mb-2">Skills-Based Learning</h3>
                  <p>SkillXP connects learning pathways to the skills required for current and future roles.</p>
                </div>
                <div>
                  <h3 className="font-heading text-2xl uppercase text-secondary mb-2">Clear Next Steps</h3>
                  <p>Employees can see what to learn based on where they are today and where they can go next.</p>
                </div>
                <div>
                  <h3 className="font-heading text-2xl uppercase text-secondary mb-2">Aligned Development</h3>
                  <p>L&D can align development directly to workforce needs instead of tracking generic activity.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
