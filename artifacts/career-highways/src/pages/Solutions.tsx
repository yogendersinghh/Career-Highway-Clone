import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function Solutions() {
  useEffect(() => {
    document.title = "Workforce Capability System & Skills Intelligence Solutions | Career Highways";
  }, []);

  return (
    <div className="bg-background flex flex-col min-h-screen">
      <section className="relative pt-40 pb-24 flex items-center justify-center min-h-[60vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/outcomes.jpg" 
            alt="Enterprise Solutions" 
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
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">Enterprise Solutions</p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl uppercase leading-tight mb-8">
              Drive Retention, Mobility, and Workforce Clarity
            </h1>
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
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">Career Pathing</p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase leading-tight mb-8 text-accent">
                Make Career Progression Clear and Actionable
              </h2>
              
              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed mb-8">
                <p>
                  More than 70% of organizations lack active, usable career pathways. As a result, employees struggle to see progression opportunities, and internal mobility remains underutilized.
                </p>
                <p>
                  When growth is unclear, engagement declines and external hiring becomes the default.
                </p>
                <p>
                  Activating skills-based career pathways makes advancement visible and attainable. Career Highways maps validated transitions between roles and clarifies readiness requirements so employees and managers can make informed development decisions.
                </p>
                <p className="font-medium text-accent">
                  Internal mobility increases, engagement strengthens, and retention improves — because growth becomes tangible.
                </p>
              </div>
            </div>
            <div className="relative aspect-square lg:aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
              <img src="/images/traditional-job-model.jpg" alt="Career Pathing" className="w-full h-full object-cover" />
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
            <div className="order-2 lg:order-1 relative aspect-square lg:aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
              <img src="/images/planning-teams.jpg" alt="Job Architecture" className="w-full h-full object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">Job Architecture</p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase leading-tight mb-8 text-accent">
                Bring Structure and Consistency to Evolving Roles
              </h2>
              
              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed mb-8">
                <p>
                  In many organizations, job architecture lives in spreadsheets, static documents, and disconnected systems. Updating roles requires manual coordination across HR, compensation, and business leaders — often resulting in inconsistencies and outdated definitions.
                </p>
                <p>
                  As work evolves, maintaining alignment across job families, leveling, and skills becomes increasingly complex.
                </p>
                <p>
                  Modernizing job architecture replaces fragmented frameworks with a normalized, skills-aligned structure that reflects how work is performed today. Career Highways brings roles, leveling, and capabilities into a living system that supports mobility, compensation alignment, and workforce planning.
                </p>
                <p className="font-medium text-accent">
                  The result is structural clarity with significantly less manual effort.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-accent text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">Platform Capabilities</p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase leading-tight">
              Explore Our Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors">
              <CardHeader>
                <CardTitle className="font-heading uppercase text-2xl">Skills Intelligence</CardTitle>
                <CardDescription className="text-white/60">The adaptive intelligence layer that transforms skills, job architecture, and career paths into strategic workforce infrastructure.</CardDescription>
              </CardHeader>
              <CardContent>
                <img src="/images/differentiator.jpg" alt="Skills Intelligence" className="w-full h-48 object-cover rounded-md opacity-80" />
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="text-secondary p-0 hover:text-white">
                  <Link href="/career-highways-skills-intelligence" className="flex items-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors">
              <CardHeader>
                <CardTitle className="font-heading uppercase text-2xl">SkillXP</CardTitle>
                <CardDescription className="text-white/60">Connect learning to the skills your organization needs and the roles employees are moving toward.</CardDescription>
              </CardHeader>
              <CardContent>
                <img src="/images/js-hero.jpg" alt="SkillXP" className="w-full h-48 object-cover rounded-md opacity-80" />
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="text-secondary p-0 hover:text-white">
                  <Link href="/skillxp-learning-aligned-to-skills-and-roles" className="flex items-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors">
              <CardHeader>
                <CardTitle className="font-heading uppercase text-2xl">Agentic AI</CardTitle>
                <CardDescription className="text-white/60">Structured AI that performs workforce work within defined authority and human-at-the-wheel oversight.</CardDescription>
              </CardHeader>
              <CardContent>
                <img src="/images/workforce-agent-b.jpg" alt="Agentic AI" className="w-full h-48 object-cover rounded-md opacity-80" />
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="text-secondary p-0 hover:text-white">
                  <Link href="/artificial-intelligence" className="flex items-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
