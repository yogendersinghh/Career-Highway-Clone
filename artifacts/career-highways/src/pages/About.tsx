import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function About() {
  useEffect(() => {
    document.title = "About Career Highways | Skills Intelligence Platform Leader | Career Highways";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative pt-40 pb-24 flex items-center justify-center min-h-[60vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/about-hero.jpg"
            alt="About Career Highways"
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
              Skills Intelligence as Workforce Infrastructure
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Aligning job architecture, skills, and career pathways at enterprise scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Problem We Set Out to Solve */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{opacity:0, y:24}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true, margin:"-50px"}} 
              transition={{duration:0.6}}
            >
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">Work changed. Workforce systems didn't.</p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase leading-tight mb-8">The Problem We Set Out to Solve</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Over the last decade, jobs have evolved faster than the systems meant to manage them.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-secondary mt-1">•</span>
                  <span>AI is reshaping roles.</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-secondary mt-1">•</span>
                  <span>Skills are shifting constantly.</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-secondary mt-1">•</span>
                  <span>Organizations are under pressure to reskill, redeploy, and plan ahead.</span>
                </li>
              </ul>
              <p className="text-lg text-muted-foreground mb-4">
                But most companies are still operating on static job descriptions, fragmented HR systems, and disconnected skills data.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                The result isn't a lack of effort. It's a lack of structure.
              </p>
              <p className="text-lg font-medium text-accent">
                And without structure, strategy becomes reactive.
              </p>
            </motion.div>
            <motion.div
              initial={{opacity:0, y:24}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true, margin:"-50px"}} 
              transition={{duration:0.6, delay:0.2}}
              className="relative aspect-video rounded-xl overflow-hidden bg-accent/5 flex items-center justify-center group"
            >
              <a href="https://www.youtube.com/watch?v=DrBI1FHVNuI" target="_blank" rel="noopener noreferrer" className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z" /></svg>
                </div>
                <span className="text-accent font-semibold tracking-widest uppercase text-sm">Watch Video</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Where Career Highways Began */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{opacity:0, y:24}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true, margin:"-50px"}} 
              transition={{duration:0.6}}
              className="order-2 lg:order-1"
            >
              <img 
                src="/images/adobestock-364843654.webp" 
                alt="Where Career Highways Began" 
                className="rounded-xl shadow-xl w-full"
              />
            </motion.div>
            <motion.div
              initial={{opacity:0, y:24}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true, margin:"-50px"}} 
              transition={{duration:0.6}}
              className="order-1 lg:order-2"
            >
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">Inspiration without direction isn't enough.</p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase leading-tight mb-8">Where Career Highways Began</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We started by building career technical education content to help students — especially young women in STEM — see what was possible.
              </p>
              <p className="text-lg text-muted-foreground mb-4 font-medium text-accent">
                But we quickly realized something:
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Getting excited about a career is one thing. Knowing how to get there is another. Students didn't just need exposure. They needed pathways.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-lg text-muted-foreground">
                  <span className="text-secondary mt-1">•</span>
                  <span>What skills matter?</span>
                </li>
                <li className="flex items-start gap-3 text-lg text-muted-foreground">
                  <span className="text-secondary mt-1">•</span>
                  <span>What comes first?</span>
                </li>
                <li className="flex items-start gap-3 text-lg text-muted-foreground">
                  <span className="text-secondary mt-1">•</span>
                  <span>What does progression look like?</span>
                </li>
                <li className="flex items-start gap-3 text-lg text-muted-foreground">
                  <span className="text-secondary mt-1">•</span>
                  <span>How do I know this path fits me?</span>
                </li>
              </ul>
              <p className="text-lg text-muted-foreground mb-6">
                That realization became the foundation of Career Highways — structured career pathways and self-understanding tools, still available at no cost through our public ecosystem.
              </p>
              <p className="text-xl font-heading uppercase text-accent">
                Clarity changes confidence. Structure changes outcomes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Enterprise Realization */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{opacity:0, y:24}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true, margin:"-50px"}} 
              transition={{duration:0.6}}
            >
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase leading-tight mb-8">The Enterprise Realization</h2>
              <p className="text-lg text-muted-foreground mb-6">
                As we built tools to help individuals navigate their careers, enterprise employers approached us with a related problem.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                They didn't just need better hiring tools. They needed a way to manage internal capabilities, clarify advancement for their existing workforce, and align skills to roles structurally.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We realized that providing career pathways to individuals is only half the equation. The other half is providing employers the infrastructure to build and maintain those pathways internally.
              </p>
            </motion.div>
            <motion.div
              initial={{opacity:0, y:24}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true, margin:"-50px"}} 
              transition={{duration:0.6}}
            >
              <img 
                src="/images/enterprise-realization.jpg" 
                alt="The Enterprise Realization" 
                className="rounded-xl shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Strategic Focus */}
      <section className="py-20 md:py-28 bg-accent text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{opacity:0, y:24}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true, margin:"-50px"}} 
              transition={{duration:0.6}}
              className="order-2 lg:order-1"
            >
              <img 
                src="/images/why-skills-initiatives-stall.jpg" 
                alt="Our Strategic Focus" 
                className="rounded-xl shadow-xl w-full"
              />
            </motion.div>
            <motion.div
              initial={{opacity:0, y:24}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true, margin:"-50px"}} 
              transition={{duration:0.6}}
              className="order-1 lg:order-2"
            >
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">Core Philosophy</p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase leading-tight mb-8">Our Strategic Focus</h2>
              <p className="text-lg text-white/80 mb-6">
                Today, Career Highways operates as an enterprise Skills Intelligence platform. We don't just provide visibility into skills; we provide the operational infrastructure to manage them.
              </p>
              <h3 className="font-heading text-2xl uppercase mb-4 text-secondary">We connect and govern:</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-lg text-white/90">
                  <span className="text-secondary mt-1">•</span>
                  <span>Job Architecture</span>
                </li>
                <li className="flex items-start gap-3 text-lg text-white/90">
                  <span className="text-secondary mt-1">•</span>
                  <span>Skills Frameworks</span>
                </li>
                <li className="flex items-start gap-3 text-lg text-white/90">
                  <span className="text-secondary mt-1">•</span>
                  <span>Career Pathways</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* When pieces are aligned */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{opacity:0, y:24}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true, margin:"-50px"}} 
              transition={{duration:0.6}}
            >
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase leading-tight mb-8">When those pieces are aligned, organizations can:</h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-lg text-muted-foreground">
                  <span className="text-secondary mt-1">•</span>
                  <span>See the actual capabilities of their workforce.</span>
                </li>
                <li className="flex items-start gap-3 text-lg text-muted-foreground">
                  <span className="text-secondary mt-1">•</span>
                  <span>Give employees clear, actionable career paths.</span>
                </li>
                <li className="flex items-start gap-3 text-lg text-muted-foreground">
                  <span className="text-secondary mt-1">•</span>
                  <span>Plan for how AI will impact specific roles.</span>
                </li>
                <li className="flex items-start gap-3 text-lg text-muted-foreground">
                  <span className="text-secondary mt-1">•</span>
                  <span>Align learning directly to progression.</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{opacity:0, y:24}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true, margin:"-50px"}} 
              transition={{duration:0.6}}
            >
              <img 
                src="/images/insight-to-action.jpg" 
                alt="Insight to Action" 
                className="rounded-xl shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Dual Commitment */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl text-center">
          <motion.div
            initial={{opacity:0, y:24}} 
            whileInView={{opacity:1, y:0}} 
            viewport={{once:true, margin:"-50px"}} 
            transition={{duration:0.6}}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase leading-tight mb-8">Our Dual Commitment</h2>
            <p className="text-lg text-muted-foreground mb-6">
              We operate across both enterprise execution and public good, because workforce readiness requires both.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left mt-12">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-border">
                <h3 className="font-heading text-2xl uppercase mb-4 text-accent">For Enterprises</h3>
                <p className="text-muted-foreground">
                  We provide the governed infrastructure required to manage skills, architecture, and internal mobility at scale.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-border">
                <h3 className="font-heading text-2xl uppercase mb-4 text-accent">For the Public</h3>
                <p className="text-muted-foreground">
                  We maintain a no-cost ecosystem for individuals, educators, and workforce boards to ensure every person has access to career discovery, pathways, and the guidance required to achieve economic mobility.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Future we are building */}
      <section className="py-20 md:py-28 bg-white text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <motion.div
            initial={{opacity:0, y:24}} 
            whileInView={{opacity:1, y:0}} 
            viewport={{once:true, margin:"-50px"}} 
            transition={{duration:0.6}}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase leading-tight mb-8">The Future we are building</h2>
            <p className="text-xl text-muted-foreground mb-6">
              A future where skills are structured, career pathways are visible, and internal mobility is operationalized.
            </p>
            <p className="text-xl font-heading text-accent uppercase tracking-wide">
              Workforce clarity starts with workforce infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="relative py-24 bg-accent overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/bgnd-landing-pathway.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10 text-center">
          <motion.div
            initial={{opacity:0, y:24}} 
            whileInView={{opacity:1, y:0}} 
            viewport={{once:true, margin:"-50px"}} 
            transition={{duration:0.6}}
          >
            <h2 className="font-heading text-4xl md:text-5xl uppercase text-white mb-6">Ready to see what's possible?</h2>
            <Button asChild size="lg" className="bg-secondary text-white hover:bg-secondary/90 tracking-widest uppercase rounded-md text-sm px-8">
              <Link href="/book-a-strategy-session">Book a Strategy Session</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
