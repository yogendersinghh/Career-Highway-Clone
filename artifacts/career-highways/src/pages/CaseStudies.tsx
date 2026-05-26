import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CaseStudies() {
  useEffect(() => {
    document.title = "Workforce Capability Case Studies | Career Highways";
  }, []);

  const studies = [
    { logo: "logo-mn-state.png", name: "Minnesota State", desc: "Transforming pathways for higher education." },
    { logo: "logo-essentia.png", name: "Essentia Health", desc: "Aligning healthcare workforce skills." },
    { logo: "logo-centracare.png", name: "CentraCare", desc: "Modernizing job architecture in care settings." },
    { logo: "logo-bgc-chicago.png", name: "BGC Chicago", desc: "Skills for Chicago: 40% faster candidate matching and 1,000+ job placements." },
    { logo: "logo-tribal-health.png", name: "Tribal Health", desc: "Building structured healthcare pathways." },
    { logo: "logo-full-sail.png", name: "Full Sail University", desc: "Bridging the gap between education and career readiness." },
  ];

  return (
    <div className="bg-background min-h-screen">
      <section className="relative pt-40 pb-24 flex items-center justify-center min-h-[60vh]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/outcomes.jpg" 
            alt="Case Studies Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-accent/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-accent to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10 text-center text-white">
          <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-50px"}} transition={{duration:0.6}}>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">The Work In Action</p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl uppercase leading-tight mb-6 text-white">
              Case Studies and Impact
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Career Highways works with leading employers, higher education organizations, nonprofits, workforce development organizations, K12 schools and learners to provide economic mobility for all.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studies.map((study, i) => (
              <motion.div key={i} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-50px"}} transition={{duration:0.6, delay: i * 0.1}}>
                <Card className="h-full hover:shadow-lg transition-shadow bg-white border-border">
                  <CardContent className="p-8 flex flex-col items-center text-center h-full">
                    <div className="h-24 flex items-center justify-center mb-6">
                      <img src={`/images/${study.logo}`} alt={study.name} className="max-h-full max-w-[160px] object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
                    </div>
                    <h3 className="font-heading text-2xl uppercase mb-3">{study.name}</h3>
                    <p className="text-muted-foreground">{study.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-50px"}} transition={{duration:0.6}} className="mt-24 text-center">
            <h2 className="font-heading text-4xl md:text-5xl uppercase mb-8">Ready to see these outcomes?</h2>
            <Button asChild size="lg" className="bg-accent text-white hover:bg-accent/90 px-8 py-6 text-lg uppercase tracking-wider">
              <Link href="/book-a-strategy-session">Book a Strategy Session</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}