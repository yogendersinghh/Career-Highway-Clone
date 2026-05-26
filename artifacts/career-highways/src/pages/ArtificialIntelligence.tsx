import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ArtificialIntelligence() {
  useEffect(() => {
    document.title = "AI Impact on Job Skills | Agnetic AI by Career Highways";
  }, []);

  return (
    <div className="bg-background flex flex-col min-h-screen">
      <section className="relative pt-40 pb-24 flex items-center justify-center min-h-[60vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/workforce-agent-b.jpg" 
            alt="Agentic AI" 
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
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl uppercase leading-tight mb-8">
              Agentic AI for Enterprise Workforce Systems
            </h1>
            <h3 className="text-xl md:text-2xl text-white/90 font-light mb-10 max-w-2xl leading-relaxed">
              Structured AI that performs workforce work within defined authority, enforceable controls, and human-at-the-wheel oversight.
            </h3>
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
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">Governance</p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase leading-tight mb-8 text-accent">
                When AI Performs Workforce Work, Governance Matters
              </h2>
              
              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed mb-8">
                <p>AI in workforce systems is no longer limited to dashboards and reporting.</p>
                <ul className="space-y-4 font-medium text-accent">
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1 text-xl">•</span>
                    <span>It identifies and classifies skills.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1 text-xl">•</span>
                    <span>It maintains job architecture.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1 text-xl">•</span>
                    <span>It detects capability gaps.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1 text-xl">•</span>
                    <span>It models workforce scenarios.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1 text-xl">•</span>
                    <span>It informs mobility and workforce investment decisions.</span>
                  </li>
                </ul>
                <p className="font-semibold text-accent mt-6">
                  When AI performs structured work inside enterprise talent infrastructure, governance must be intentional.
                </p>
                <p>
                  Career Highways builds Agentic AI as a controlled, scalable layer within Skills Intelligence. All AI capabilities operate within and extend the unified workforce infrastructure of job architecture, skills intelligence, and career pathways.
                </p>
              </div>
            </div>
            <div className="relative aspect-square lg:aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
              <img src="/images/governance.jpg" alt="Governance" className="w-full h-full object-cover" />
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
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div className="order-2 lg:order-1 relative aspect-square lg:aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
              <img src="/images/oversight.jpg" alt="Human at the Wheel" className="w-full h-full object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">Oversight</p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase leading-tight mb-8 text-accent">
                Human-at-the-Wheel By Design
              </h2>
              
              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
                <p>
                  Human-at-the-wheel means HR and business leaders define the work, decision boundaries, and risk thresholds before AI performs workforce actions. AI operates within that clearly defined scope.
                </p>
                <p className="font-medium text-accent">
                  Decision authority is established in advance — not inferred during execution.
                </p>
                <p>
                  High-impact changes or actions outside defined parameters are surfaced automatically for leadership review.
                </p>
                <p>
                  Guardrails operate continuously, ensuring workforce decisions stay within approved policy and governance standards.
                </p>
                <p>
                  Authority can be expanded, limited, or adjusted deliberately as organizational confidence and evidence grow.
                </p>
                <div className="p-6 bg-accent text-white rounded-lg mt-8">
                  <p className="font-medium">
                    Oversight is embedded in how the system operates — not applied after decisions have already been made.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-accent text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">Foundational Intelligence</p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase leading-tight mb-8">
                Skill AI: Intelligence Layer
              </h2>
              <div className="space-y-6 text-lg text-white/80 leading-relaxed mb-8">
                <p>
                  Our proprietary Agentic AI models map skills to roles with structural precision, maintaining the integrity of enterprise job architecture. It continuously analyzes external labor trends and internal role evolution to keep skills architecture accurate and dynamic without requiring massive manual audits.
                </p>
                <p>
                  Built specifically for the complexity of enterprise workforce planning, the AI operates transparently, exposing its confidence levels and rationale for skill mapping.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/images/foundational.jpg" alt="Foundational Intelligence" className="rounded-lg object-cover w-full h-full aspect-square" />
              <img src="/images/trust.jpg" alt="Trust" className="rounded-lg object-cover w-full h-full aspect-square" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
