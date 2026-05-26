import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Employers() {
  useEffect(() => {
    document.title = "Skills-Based Workforce Planning for Employers | Career Highways";
  }, []);

  return (
    <div className="bg-background flex flex-col min-h-screen">
      <section className="relative pt-40 pb-24 flex items-center justify-center min-h-[60vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/chros-hr-executives.jpg" 
            alt="HR Executives" 
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
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">Talent is Currency</p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl uppercase leading-tight mb-6">
              Turn Career Architecture into Retention & Productivity
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light mb-10 max-w-2xl">
              Powered by unified job architecture, skills intelligence, and career pathways.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-secondary text-white hover:bg-secondary/90 tracking-widest uppercase text-xs">
                <Link href="/book-a-strategy-session">Book a Strategy Session</Link>
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
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">The Business Challenge</p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase leading-tight mb-8 text-accent">
                Enterprise Career Architecture Is Broken
              </h2>
              
              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed mb-8">
                <p className="font-semibold text-accent">In most organizations:</p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1 text-xl">•</span>
                    <span>Job architecture lives in spreadsheets and disconnected systems.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1 text-xl">•</span>
                    <span>Inferred skills without governance create noise and false signals.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1 text-xl">•</span>
                    <span>Dashboards that aren't integrated into job architecture don't change decisions.</span>
                  </li>
                </ul>
                <div className="p-6 bg-accent/5 rounded-lg border border-accent/10 mt-8">
                  <p className="font-medium text-accent">
                    1 in 3 employees leave because they don't see a future — costing up to 200% of salary per departure.
                  </p>
                </div>
                <p>
                  Without dynamic career infrastructure, enterprises cannot operationalize skills-based work.
                </p>
              </div>
            </div>
            <div className="relative aspect-square lg:aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
              <img src="/images/insight-to-action.jpg" alt="Business Challenge" className="w-full h-full object-cover" />
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
              <img src="/images/enterprise-realization.jpg" alt="Living Skills Infrastructure" className="w-full h-full object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">The Shift</p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase leading-tight mb-8">
                From Static Job Frameworks to Living Skills Infrastructure
              </h2>
              
              <div className="space-y-6 text-lg text-white/80 leading-relaxed mb-8">
                <p>
                  Career Highways replaces manual job architecture with a living Skills Intelligence system of record.
                </p>
                <p className="font-semibold text-white">Instead of isolated frameworks, you gain:</p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1 text-xl">•</span>
                    <span>A unified Master Skills framework</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1 text-xl">•</span>
                    <span>Structured job families and role alignment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1 text-xl">•</span>
                    <span>Continuously updated career pathways</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1 text-xl">•</span>
                    <span>Embedded AI Impact visibility</span>
                  </li>
                </ul>
                <p className="text-xl font-medium text-secondary mt-8">
                  This is not a career framework. It is adaptive workforce infrastructure.
                </p>
              </div>
              <Button asChild size="lg" className="bg-white text-accent hover:bg-white/90 tracking-widest uppercase text-xs">
                <Link href="/book-a-strategy-session">Book a Strategy Session</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 24 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-50px" }} 
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">Measured Impact</p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase leading-tight text-accent">
              Proven Enterprise & Economic Outcomes
            </h2>
            <p className="mt-6 text-xl text-foreground/70">
              Organizations implementing Skills Intelligence report measurable improvements:
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 24 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-50px" }} 
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { stat: "+58%", label: "Employee Retention" },
              { stat: "+56%", label: "Employee Engagement" },
              { stat: "3x", label: "Internal Mobility" },
              { stat: "40%", label: "Faster Candidate Matching" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-border text-center">
                <div className="font-heading text-5xl lg:text-6xl text-accent mb-4">{item.stat}</div>
                <div className="text-sm font-semibold tracking-widest uppercase text-foreground/60">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-border overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <p className="text-center text-sm font-semibold tracking-[0.2em] uppercase text-foreground/50 mb-10">
            Trusted by Forward-Thinking Organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            <img src="/images/logo-mn-state.png" alt="MN State" className="h-12 object-contain" />
            <img src="/images/logo-essentia.png" alt="Essentia" className="h-12 object-contain" />
            <img src="/images/logo-centracare.png" alt="CentraCare" className="h-12 object-contain" />
            <img src="/images/logo-bgc-chicago.png" alt="Boys & Girls Clubs" className="h-12 object-contain" />
            <img src="/images/logo-tribal-health.png" alt="Tribal Health" className="h-12 object-contain" />
            <img src="/images/logo-full-sail.png" alt="Full Sail" className="h-12 object-contain" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-accent text-white text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 24 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-50px" }} 
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl uppercase mb-8">
              Ready to Operationalize Skills Intelligence?
            </h2>
            <Button asChild size="lg" className="bg-secondary text-white hover:bg-secondary/90 tracking-widest uppercase text-sm px-8 py-6 rounded-md">
              <Link href="/book-a-strategy-session">Book a Strategy Session</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
