import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2 } from "lucide-react";

export default function BookStrategySession() {
  useEffect(() => {
    document.title = "Book a Skills Intelligence Strategy Session | Career Highways";
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
            src="/images/strategy-session.jpg" 
            alt="Strategy Session" 
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
              Book a Strategy Session
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
              Stop guessing about skills, hiring, career pathways, and AI impact. In one session, you'll walk away with practical next steps to improve retention, hiring accuracy, and workforce readiness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Clarify role & skill gaps",
                desc: "Identify strengths, expose gaps, and know exactly where to act first."
              },
              {
                title: "Improve retention",
                desc: "Make career pathways clear, visible, and usable for your employees."
              },
              {
                title: "Strengthen hiring",
                desc: "Align hiring criteria to the skills that really drive success in your roles."
              },
              {
                title: "Prepare for AI change",
                desc: "Know what work is changing, and where people matter most."
              }
            ].map((prop, i) => (
              <motion.div
                key={i}
                initial={{opacity:0, y:24}} 
                whileInView={{opacity:1, y:0}} 
                viewport={{once:true, margin:"-50px"}} 
                transition={{duration:0.6, delay: i * 0.1}}
              >
                <Card className="h-full border-border bg-slate-50">
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="font-heading text-xl md:text-2xl uppercase text-accent mb-3">{prop.title}</h3>
                    <p className="text-muted-foreground">{prop.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{opacity:0, y:24}} 
            whileInView={{opacity:1, y:0}} 
            viewport={{once:true, margin:"-50px"}} 
            transition={{duration:0.6}}
            className="mt-12 bg-accent text-white p-6 md:p-8 rounded-lg flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12"
          >
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-secondary w-6 h-6" />
              <span className="font-medium tracking-wide uppercase text-sm">Working session, not a generic demo</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-secondary w-6 h-6" />
              <span className="font-medium tracking-wide uppercase text-sm">Actionable outputs you can use internally</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-secondary w-6 h-6" />
              <span className="font-medium tracking-wide uppercase text-sm">Built for HR, talent & transformation leaders</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 md:py-28 bg-slate-50 border-t border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{opacity:0, y:24}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true, margin:"-50px"}} 
              transition={{duration:0.6}}
            >
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">REQUEST SESSION</p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase leading-tight mb-8">
                Let's get started
              </h2>
              
              {submitted ? (
                <div className="bg-white border border-border rounded-lg p-12 text-center flex flex-col items-center">
                  <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-3xl uppercase text-accent mb-4">Request Received</h3>
                  <p className="text-muted-foreground text-lg max-w-md mx-auto">
                    Thanks — we'll be in touch within 24 hours to schedule your strategy session.
                  </p>
                </div>
              ) : (
                <Card className="bg-white">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Work Email</Label>
                        <Input id="email" type="email" required />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="company">Company</Label>
                          <Input id="company" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="role">Role / Job Title</Label>
                          <Input id="role" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="size">Company Size</Label>
                        <Select required>
                          <SelectTrigger id="size">
                            <SelectValue placeholder="Select company size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-499">1 - 499 employees</SelectItem>
                            <SelectItem value="500-999">500 - 999 employees</SelectItem>
                            <SelectItem value="1000-4999">1,000 - 4,999 employees</SelectItem>
                            <SelectItem value="5000+">5,000+ employees</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="challenge">What's the biggest workforce challenge you're trying to solve?</Label>
                        <Textarea id="challenge" rows={4} required />
                      </div>
                      <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white h-12 uppercase tracking-wider font-semibold">
                        Request Session
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </motion.div>

            <motion.div
              initial={{opacity:0, y:24}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true, margin:"-50px"}} 
              transition={{duration:0.6, delay: 0.2}}
              className="space-y-8"
            >
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">DELIVERABLES</p>
              <h2 className="font-heading text-4xl md:text-5xl uppercase leading-tight mb-8">
                What You'll Get From the Session
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                This is not a surface-level conversation. It is a working session designed to help you leave with clarity, direction, and usable next steps.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "A Skills-Based View of Your Workforce",
                    desc: "Get a clearer picture of the capabilities your key roles require and where gaps may be slowing performance, hiring, or mobility."
                  },
                  {
                    title: "Career Pathway Direction",
                    desc: "Identify how to create visible growth pathways that strengthen retention and make internal advancement easier to understand."
                  },
                  {
                    title: "Practical Next Steps",
                    desc: "Walk away with prioritized actions your team can use right away instead of abstract recommendations that stall after the meeting."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <span className="text-secondary font-heading text-lg">{i + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl uppercase text-accent mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div
            initial={{opacity:0, y:24}} 
            whileInView={{opacity:1, y:0}} 
            viewport={{once:true, margin:"-50px"}} 
            transition={{duration:0.6}}
            className="text-center mb-16"
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">DETAILS</p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground mt-4">Everything you need to know before booking</p>
          </motion.div>

          <motion.div
            initial={{opacity:0, y:24}} 
            whileInView={{opacity:1, y:0}} 
            viewport={{once:true, margin:"-50px"}} 
            transition={{duration:0.6}}
          >
            <Accordion type="single" collapsible className="w-full">
              {[
                {q: "Who is this session for?", a: "Best for CHROs, Heads of Talent, HR leaders, Workforce & transformation leaders, and Talent acquisition and L&D teams. If you're trying to improve hiring, retention, career pathways, or understand AI's impact on your roles, this session is for you."},
                {q: "How long does the session take?", a: "The typical strategy session is scheduled for 45-60 minutes to ensure we have enough time to dive into your specific workforce challenges and outline actionable next steps."},
                {q: "Do I need to prepare anything?", a: "No formal preparation is required, but it helps to have a clear understanding of your current job architecture, where you are experiencing retention or hiring challenges, and any current skills initiatives."},
                {q: "Is this just a sales demo?", a: "No. While we may show relevant parts of the Career Highways platform, the focus is entirely on your challenges and structuring a skills intelligence approach that works for your organization."},
                {q: "What happens after I submit the form?", a: "A member of our team will reach out within 24 hours to schedule a time that works for you and ask a few brief qualifying questions to ensure the session is tailored to your needs."},
                {q: "Is there a cost for this session?", a: "No, the initial strategy session is complimentary for qualified enterprise organizations."},
                {q: "Who from my team should attend?", a: "We recommend bringing the key decision-makers involved in HR, talent strategy, compensation, or workforce transformation."},
                {q: "Can we review our current job architecture during the call?", a: "Yes, we encourage it. Discussing your current framework helps us provide more specific, actionable recommendations."}
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-border py-2">
                  <AccordionTrigger className="text-left font-heading text-xl uppercase text-accent hover:text-secondary hover:no-underline transition-colors">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
