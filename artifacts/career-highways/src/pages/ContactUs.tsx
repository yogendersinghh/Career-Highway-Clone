import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, MapPin, Mail } from "lucide-react";

export default function ContactUs() {
  useEffect(() => {
    document.title = "Contact Us - Career Highways";
  }, []);

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-accent text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/bgnd-landing-pathway.jpg" 
            alt="Contact Career Highways" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-accent to-accent/60" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-7xl">
          <motion.div 
            initial={{opacity:0, y:24}} 
            animate={{opacity:1, y:0}} 
            transition={{duration:0.6}}
            className="max-w-4xl"
          >
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl uppercase leading-none mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
              Have a question about Career Highways? Exploring a skills strategy initiative? Evaluating platforms for job architecture, career pathways, or workforce transformation? We're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{opacity:0, y:24}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true, margin:"-50px"}} 
              transition={{duration:0.6}}
              className="space-y-12"
            >
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">EXPERTISE</p>
                <h2 className="font-heading text-3xl md:text-4xl uppercase leading-tight mb-8">
                  What We Can Help With
                </h2>
                <ul className="space-y-4">
                  {[
                    "Skills Intelligence and governed skills frameworks",
                    "Job architecture design and modernization",
                    "Career pathways and internal mobility strategy",
                    "Learning alignment through SkillXP (upskilling)",
                    "Enterprise pilots and platform demos",
                    "Partnerships and ecosystem collaboration"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-secondary w-6 h-6 shrink-0 mt-0.5" />
                      <span className="text-lg text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">THE PLATFORM</p>
                <h2 className="font-heading text-3xl md:text-4xl uppercase leading-tight mb-6">
                  Why Career Highways
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Career Highways unifies <strong className="text-foreground">job architecture, skills intelligence, and career pathways into governed workforce infrastructure</strong>—giving organizations a structured, data-driven foundation for long-term workforce health.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                  If you're ready to move from fragmented tools to an integrated system, start the conversation here.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{opacity:0, y:24}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true, margin:"-50px"}} 
              transition={{duration:0.6, delay: 0.2}}
            >
              <Card className="bg-slate-50 border-border">
                <CardContent className="p-8 md:p-10">
                  <h3 className="font-heading text-3xl uppercase text-accent mb-8">Send a Message</h3>
                  
                  {submitted ? (
                    <div className="bg-white border border-border rounded-lg p-10 text-center flex flex-col items-center">
                      <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mb-6">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h4 className="font-heading text-2xl uppercase text-accent mb-4">Message Sent</h4>
                      <p className="text-muted-foreground text-lg">
                        Thanks for reaching out. A member of our team will respond within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" required className="bg-white" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Work Email</Label>
                        <Input id="email" type="email" required className="bg-white" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input id="company" required className="bg-white" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" rows={5} required className="bg-white" />
                      </div>
                      <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white h-12 uppercase tracking-wider font-semibold">
                        Submit
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
