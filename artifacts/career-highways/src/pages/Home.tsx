import { useEffect, useState, useCallback } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 }
};

export default function Home() {
  useEffect(() => {
    document.title = "Career Highways | Skills Intelligence Platform for Skills-Based Job Architecture";
  }, []);

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero */}
      <section className="relative pt-40 pb-32 flex items-center justify-center min-h-[92vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bgnd.webp" 
            alt="Aerial view of a winding forest road" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/15"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-6xl text-center">
          <motion.h1 
            {...fadeUp}
            className="font-heading text-secondary text-6xl md:text-8xl lg:text-[8.5rem] uppercase leading-[0.95] mb-10 tracking-tight"
            style={{ textShadow: '0 2px 24px rgba(0,0,0,0.35)' }}
          >
            Skills Intelligence<br/>for Workforce<br/>Capability
          </motion.h1>
          <motion.p 
            {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}
            className="font-heading text-white text-3xl md:text-5xl lg:text-6xl uppercase mb-8 tracking-tight"
            style={{ textShadow: '0 2px 16px rgba(0,0,0,0.5)' }}
          >
            Manage skills. Not jobs.
          </motion.p>
          <motion.p 
            {...fadeUp} transition={{ duration: 0.6, delay: 0.25 }}
            className="font-heading text-white/95 text-lg md:text-xl lg:text-2xl uppercase tracking-[0.08em] max-w-3xl mx-auto mb-14"
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}
          >
            Replace static job architecture with real-time skills intelligence.
          </motion.p>
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.35 }}>
            <Button asChild size="lg" className="bg-white text-secondary hover:bg-white/95 hover:text-secondary font-bold tracking-[0.18em] uppercase text-sm px-10 py-7 rounded-md shadow-lg">
              <Link href="/book-a-strategy-session">See What's Possible</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 2. Pinnacle Partnership Spotlight */}
      <section className="bg-muted py-12 border-b border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
            <div className="flex items-center gap-6">
              <img src="/images/ico-bsc.png" alt="Businessolver" className="h-16 w-auto object-contain" />
              <p className="text-lg md:text-xl text-foreground font-medium max-w-2xl leading-relaxed">
                Career Highways and Businessolver are partnering to advance skills-based workforce intelligence and employee growth.
              </p>
            </div>
            <Button asChild className="bg-accent text-white hover:bg-accent/90 shrink-0 tracking-widest uppercase text-sm">
              <Link href="/businessolver-pinnacle-partner">Learn About the Partnership</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 3. Testimonials carousel */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-accent">
        <div className="absolute inset-0 z-0">
          <img src="/images/bgnd-testimonials.jpg" alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-accent/90 mix-blend-multiply"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">Trust Signals</p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase leading-tight text-white max-w-4xl mx-auto">
              Trusted by enterprise organizations modernizing hiring, mobility, and workforce strategy
            </h2>
          </div>
          
          <Carousel setApi={setApi} className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {[
                { quote: "We could not have built this platform in ten years. Being able to visualize our employees’ pathways with this level of clarity is truly game-changing.", author: "Talent SVP, sixth-largest healthcare provider by membership" },
                { quote: "By using Career Highways’ upskilling AI platform, we believe we can dramatically improve retention across our workforce.", author: "Head of Talent, 12th-largest staffing company" },
                { quote: "With nearly 20,000 employer customers, there isn’t a single one that couldn’t use this AI platform to improve every step of the talent lifecycle.", author: "Chief Strategy Officer, global benefits administration platform" },
                { quote: "A significant percentage of the workforce won't just need new skills—they’ll need entirely new career trajectories. What sets this apart is that it maps those transitions systematically, making internal mobility a repeatable process rather than a series of one-off exceptions.", author: "Leading Workforce AI Analyst" }
              ].map((item, i) => (
                <CarouselItem key={i}>
                  <div className="p-6 md:p-12 text-center flex flex-col items-center justify-center min-h-[300px]">
                    <p className="text-2xl md:text-4xl text-white font-light leading-relaxed mb-8">"{item.quote}"</p>
                    <p className="text-secondary font-semibold tracking-widest uppercase text-sm md:text-base">— {item.author}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center gap-4 mt-8">
              <CarouselPrevious className="static transform-none bg-white/10 hover:bg-white/20 text-white border-none" />
              <div className="flex gap-2">
                {Array.from({ length: count }).map((_, i) => (
                  <button
                    key={i}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${current === i + 1 ? "bg-secondary scale-125" : "bg-white/30"}`}
                    onClick={() => api?.scrollTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              <CarouselNext className="static transform-none bg-white/10 hover:bg-white/20 text-white border-none" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* 4. The Problem */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">The Problem</p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase leading-tight mb-8">
                Traditional Job Models Fail
              </h2>
              <div className="text-lg text-muted-foreground space-y-6">
                <p>Most enterprise job architecture was built for an era of stability, not speed. Today, relying on static job descriptions and isolated frameworks creates systemic friction:</p>
                <ul className="space-y-4 list-disc pl-5">
                  <li>Job families become disconnected from how work actually gets done.</li>
                  <li>Skills data rots in spreadsheets or rigid HRIS fields.</li>
                  <li>Mobility is restricted because advancement criteria remain unclear.</li>
                  <li>Reskilling initiatives stall without a connection to actual role requirements.</li>
                  <li>AI impact cannot be modeled because foundational role data is inaccurate.</li>
                </ul>
                <p className="font-medium text-foreground">Career Highways unifies jobs, skills, and pathways into a living system—eliminating the manual burden of maintaining architecture while creating a foundation for strategic workforce planning.</p>
              </div>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
              <img src="/images/traditional-job-model.jpg" alt="Traditional Job Models" className="rounded-xl shadow-xl w-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. The Solution */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp} className="order-2 lg:order-1">
              <img src="/images/chros-hr-executives.jpg" alt="Skills Intelligence Platform" className="rounded-xl shadow-xl w-full" />
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="order-1 lg:order-2">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">The Solution</p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase leading-tight mb-8">
                Skills Intelligence Platform: The Missing Workforce Foundation
              </h2>
              <div className="text-lg text-muted-foreground space-y-6">
                <p>A skills-based organization isn’t built on dashboards. It is built on governed, living infrastructure.</p>
                <p>Career Highways sits at the center of your talent ecosystem, replacing fragmented spreadsheets and static frameworks with a unified system of record for skills and capabilities.</p>
                <p>By normalizing job architecture and connecting it directly to dynamic skills data, organizations gain an always-on view of workforce readiness, capability gaps, and internal mobility opportunities.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. What We Do */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">What We Do</p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase leading-tight max-w-4xl mx-auto mb-12">
              Skills Intelligence That Connects Roles, Skills, and Career Pathways
            </h2>
            <img src="/images/sign-into-career-highways.jpg" alt="Platform UI" className="rounded-xl shadow-2xl w-full max-w-4xl mx-auto mb-12" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A complete, governed foundation for the skills-based organization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {[
              { title: "Living Job Architecture", desc: "Transform static spreadsheets into a dynamic, skills-aligned framework that updates as roles evolve." },
              { title: "Skills Intelligence", desc: "Gain continuous visibility into organizational capabilities, skill gaps, and readiness across every role." },
              { title: "Career Pathways", desc: "Activate internal mobility with governed, transparent advancement tracks that connect employees to growth." },
              { title: "AI Impact Analysis", desc: "Model how artificial intelligence will compress roles, shift skill requirements, and require workforce redesign." },
              { title: "Enterprise Integration", desc: "Embed governed skills data directly into your existing HR, learning, and talent acquisition systems." }
            ].map((card, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }}>
                <Card className="h-full border-border hover:border-secondary transition-colors bg-muted/50">
                  <CardHeader>
                    <CardTitle className="font-heading text-xl text-accent">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{card.desc}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" className="bg-accent text-white hover:bg-accent/90 tracking-widest uppercase px-8 py-6 text-sm">
              <Link href="/book-a-strategy-session">Start Making Better Decisions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 7. Who We Serve */}
      <section className="py-20 md:py-28 bg-muted border-y border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">Who We Serve</p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase leading-tight">
              Who Skills Intelligence Is Built For
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { img: "human-resource-executive.jpg", title: "CHRO & HR Executives", desc: "Move beyond reporting to active workforce capability management. Connect talent strategy directly to business execution." },
              { img: "talent-acquisition-leaders.jpg", title: "Talent Acquisition Leaders", desc: "Hire for capabilities, not just pedigrees. Clarify role requirements to accelerate matching and improve quality of hire." },
              { img: "planning-teams.jpg", title: "Workforce Strategy & Planning Teams", desc: "Model AI impact, forecast capability needs, and structure the organization for adaptability rather than rigidity." },
              { img: "learning-and-development-leaders.jpg", title: "Learning & Development Leaders", desc: "Stop guessing about training needs. Align learning investments directly to the skills your evolving roles require." }
            ].map((role, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="group overflow-hidden rounded-xl bg-background shadow-sm border border-border flex flex-col md:flex-row h-full">
                <div className="md:w-2/5 overflow-hidden">
                  <img src={`/images/${role.img}`} alt={role.title} className="w-full h-full object-cover min-h-[200px] group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8 md:w-3/5 flex flex-col justify-center">
                  <h3 className="font-heading text-2xl uppercase text-accent mb-4">{role.title}</h3>
                  <p className="text-muted-foreground">{role.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Differentiators */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">Differentiators</p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase leading-tight mb-8">
                Why Career Highways Is Different
              </h2>
              <div className="text-lg text-muted-foreground space-y-6">
                <p>Most skills tools are reference libraries or overlay dashboards. Career Highways is operational infrastructure.</p>
                <ul className="space-y-4 list-disc pl-5">
                  <li><strong>Built for Governance:</strong> Not a black-box matching engine, but a defined framework controlled by the enterprise.</li>
                  <li><strong>Connected Architecture:</strong> Unifies jobs, skills, and pathways in one system, rather than treating them as separate initiatives.</li>
                  <li><strong>Human-at-the-Wheel AI:</strong> Agentic AI scales the heavy lifting of maintaining architecture, but always within defined authority and human oversight.</li>
                </ul>
                <p className="font-medium text-foreground">The result is actionable intelligence, not just more data.</p>
              </div>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
              <img src="/images/differentiator.jpg" alt="Differentiator" className="rounded-xl shadow-xl w-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. Business Outcomes */}
      <section className="py-20 md:py-28 bg-accent text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp} className="order-2 lg:order-1">
              <img src="/images/outcomes.jpg" alt="Business Outcomes" className="rounded-xl shadow-2xl w-full" />
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="order-1 lg:order-2">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">Business Outcomes</p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase leading-tight mb-8 text-white">
                Measurable Impact Across the Talent Lifecycle
              </h2>
              <div className="text-lg text-white/80 space-y-6">
                <p>Organizations running on Skills Intelligence transform how they operate:</p>
                <ul className="space-y-4 list-disc pl-5">
                  <li><strong>Increased Retention:</strong> Employees who see clear paths stay longer.</li>
                  <li><strong>Accelerated Hiring:</strong> Standardized skill requirements reduce time-to-fill.</li>
                  <li><strong>Reduced External Spend:</strong> Greater internal mobility lowers acquisition costs.</li>
                  <li><strong>Improved Agility:</strong> Restructure and redeploy talent faster when needs change.</li>
                  <li><strong>Strategic Readiness:</strong> Know exactly where AI will disrupt work and how to respond.</li>
                </ul>
                <p className="font-semibold text-white">A unified talent foundation drives measurable ROI.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 10. Trusted by */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <p className="text-center text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-8">Trusted by</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale">
            {["logo-mn-state.png", "logo-essentia.png", "logo-centracare.png", "logo-bgc-chicago.png", "logo-tribal-health.png", "logo-full-sail.png"].map((logo, i) => (
              <img key={i} src={`/images/${logo}`} alt="Customer Logo" className="h-10 md:h-12 object-contain" />
            ))}
          </div>
        </div>
      </section>

      {/* 11. Final CTA row */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <h2 className="font-heading text-3xl md:text-4xl uppercase text-center mb-16">
            Start with a conversation — or see how others have done it
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div {...fadeUp}>
              <Card className="h-full overflow-hidden border-border flex flex-col hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden relative">
                  <img src="/images/strategy-session.jpg" alt="Strategy Session" className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-accent text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded">Enterprise</div>
                </div>
                <CardContent className="p-8 flex flex-col flex-1">
                  <h3 className="font-heading text-2xl uppercase text-accent mb-4">Strategy Session</h3>
                  <p className="text-muted-foreground mb-8 flex-1">
                    Stop guessing about skills, hiring, career pathways, and AI impact. In one session, you’ll walk away with practical next steps.
                  </p>
                  <Button asChild className="bg-accent text-white hover:bg-accent/90 tracking-widest uppercase w-full">
                    <Link href="/book-a-strategy-session">Request A Session</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
              <Card className="h-full overflow-hidden border-border flex flex-col hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden relative">
                  <img src="/images/download-brief.jpg" alt="Download Case Study" className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-accent text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded">Download</div>
                </div>
                <CardContent className="p-8 flex flex-col flex-1">
                  <h3 className="font-heading text-2xl uppercase text-accent mb-4">Featured Case Study</h3>
                  <p className="text-muted-foreground mb-8 flex-1">
                    Learn how leading organizations are using Career Highways to improve hiring, retention, and workforce readiness.
                  </p>
                  <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white tracking-widest uppercase w-full">
                    <Link href="/case-studies">Get the Case Study</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
