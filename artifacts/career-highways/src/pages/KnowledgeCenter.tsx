import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function KnowledgeCenter() {
  useEffect(() => {
    document.title = "What Is Skills Intelligence? A Workforce Capability Framework | Career Highways";
  }, []);

  const topics = [
    {
      title: "Skills Intelligence",
      description: "The adaptive intelligence layer that transforms skills, job architecture, and career paths.",
      href: "/career-highways-skills-intelligence"
    },
    {
      title: "AI Impact",
      description: "Agentic AI for Enterprise Workforce Systems and its impact on job skills.",
      href: "/artificial-intelligence"
    },
    {
      title: "Employers",
      description: "Skills-Based Workforce Planning and retention strategies.",
      href: "/employers"
    },
    {
      title: "Solutions",
      description: "Drive Retention, Mobility, and Workforce Clarity.",
      href: "/solutions"
    },
    {
      title: "SkillXP",
      description: "Connect Learning to Skills, Roles, and Progression.",
      href: "/skillxp-learning-aligned-to-skills-and-roles"
    },
    {
      title: "Case Studies",
      description: "Transforming Hiring Through Skills-Based Intelligence.",
      href: "/case-studies"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative pt-40 pb-24 flex items-center justify-center min-h-[60vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/bgnd-landing-pathway.jpg"
            alt="Knowledge Center"
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
              Knowledge Center
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Enterprise Skills Intelligence, Workforce Capability, and AI Impact insights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <motion.div
            initial={{opacity:0, y:24}} 
            whileInView={{opacity:1, y:0}} 
            viewport={{once:true, margin:"-50px"}} 
            transition={{duration:0.6}}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">Curated Resources</p>
            <h2 className="font-heading text-4xl md:text-5xl uppercase leading-tight mb-6">Explore by Topic</h2>
            <p className="text-lg text-muted-foreground">
              The workforce is changing faster than enterprise systems. Dive into our frameworks and insights to build strategic workforce infrastructure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topics.map((topic, i) => (
              <motion.div
                key={topic.title}
                initial={{opacity:0, y:24}} 
                whileInView={{opacity:1, y:0}} 
                viewport={{once:true, margin:"-50px"}} 
                transition={{duration:0.6, delay: i * 0.1}}
              >
                <Link href={topic.href}>
                  <Card className="h-full hover:shadow-md transition-all hover:border-secondary cursor-pointer group bg-white">
                    <CardContent className="p-8 flex flex-col h-full">
                      <h3 className="font-heading text-2xl uppercase mb-3 text-accent group-hover:text-secondary transition-colors">{topic.title}</h3>
                      <p className="text-muted-foreground flex-grow mb-6">{topic.description}</p>
                      <div className="flex items-center text-sm font-semibold tracking-widest uppercase text-secondary">
                        Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <motion.div
            initial={{opacity:0, y:24}} 
            whileInView={{opacity:1, y:0}} 
            viewport={{once:true, margin:"-50px"}} 
            transition={{duration:0.6}}
          >
            <h2 className="font-heading text-4xl md:text-5xl uppercase mb-6 text-accent">Ready to see what's possible?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Transform your skills, job architecture, and career paths into strategic workforce infrastructure.
            </p>
            <Button asChild size="lg" className="bg-secondary text-white hover:bg-secondary/90 tracking-widest uppercase rounded-md text-sm px-8">
              <Link href="/book-a-strategy-session">Book a Strategy Session</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
