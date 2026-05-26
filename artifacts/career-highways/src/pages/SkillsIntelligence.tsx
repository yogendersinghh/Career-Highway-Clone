import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function SkillsIntelligence() {
  useEffect(() => {
    document.title = "What Is Skills Intelligence? A Workforce Capability Framework | Career Highways";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative pt-40 pb-24 flex items-center justify-center min-h-[60vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/highway-aerial.jpg"
            alt="Skills Intelligence"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-accent/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-accent to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10 text-center">
          <motion.div 
            initial={{opacity:0, y:24}} 
            whileInView={{opacity:1, y:0}} 
            viewport={{once:true, margin:"-50px"}} 
            transition={{duration:0.6}}
            className="max-w-4xl mx-auto"
          >
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl uppercase text-white mb-6 leading-tight">
              Enterprise Skills Intelligence
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              The adaptive intelligence layer that transforms skills, job architecture, and career paths into strategic workforce infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div
            initial={{opacity:0, y:24}} 
            whileInView={{opacity:1, y:0}} 
            viewport={{once:true, margin:"-50px"}} 
            transition={{duration:0.6}}
            className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:uppercase prose-headings:text-accent prose-h2:text-4xl prose-h3:text-2xl prose-a:text-secondary hover:prose-a:text-secondary/80"
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4 not-prose">Strategic Context</p>
            <h2>The Workforce Is Changing Faster Than Enterprise Systems</h2>
            <p>
              AI acceleration, role compression, and skills volatility are reshaping how work gets done.
            </p>
            <p><strong>Most enterprises are attempting to respond with:</strong></p>
            <ul>
              <li>Static taxonomies</li>
              <li>One-time skills assessments</li>
              <li>Overlay dashboards</li>
              <li>Disconnected talent marketplaces</li>
            </ul>
            <p>
              These approaches create visibility — but not decision infrastructure. Without a governed, living skills system, workforce strategy becomes reactive.
            </p>
            <p>
              Skills Intelligence connects job architecture and career pathways into one governed workforce infrastructure — not isolated data or dashboards.
            </p>

            <hr className="my-12" />

            <div className="bg-muted p-8 rounded-xl border border-border my-12">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4 not-prose">Forbes</p>
              <h3 className="mt-0">10-27-25</h3>
              <blockquote className="border-l-4 border-secondary pl-6 italic my-6 text-xl text-muted-foreground">
                “The people who “grew up” inside the organization developed deep cultural understanding, loyalty, and strategic intuition. Now that automation is replacing those foundational roles, companies are undermining the very system that sustained their leadership pipelines. The cost won’t be visible in this quarter’s earnings; it will emerge years later, when organizations find themselves with scale but without stewardship.”
              </blockquote>
              <p className="font-semibold">— Liz Eversoll, CEO, Career Highways</p>
            </div>

            <div className="bg-muted p-8 rounded-xl border border-border my-12">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4 not-prose">Washington Examiner</p>
              <h3 className="mt-0">1-7-26</h3>
              <blockquote className="border-l-4 border-secondary pl-6 italic my-6 text-xl text-muted-foreground">
                “Government can encourage skills-first practices, but employers must build the infrastructure. Right now, most companies don’t know what skills they have, let alone what they’ll need tomorrow.”
              </blockquote>
              <p className="font-semibold">— Liz Eversoll, CEO, Career Highways</p>
            </div>
            
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-20 md:py-28 bg-accent text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <motion.div
            initial={{opacity:0, y:24}} 
            whileInView={{opacity:1, y:0}} 
            viewport={{once:true, margin:"-50px"}} 
            transition={{duration:0.6}}
          >
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-12">
                <h2 className="font-heading text-4xl md:text-5xl uppercase mb-6 text-white">Ready to Build Your Skills Infrastructure?</h2>
                <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                  Stop guessing about skills, hiring, career pathways, and AI impact. In one session, you'll walk away with practical next steps to improve retention, hiring accuracy, and workforce readiness.
                </p>
                <Button asChild size="lg" className="bg-secondary text-white hover:bg-secondary/90 tracking-widest uppercase rounded-md text-sm px-8">
                  <Link href="/book-a-strategy-session">Book a Strategy Session</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
