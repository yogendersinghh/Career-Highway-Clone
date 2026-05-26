import { useEffect } from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export default function Team() {
  useEffect(() => {
    document.title = "Meet the Career Highways Team | Workforce Experts";
  }, []);

  const team = [
    {
      name: "Liz Eversoll",
      title: "Chief Executive Officer",
      bio: "Liz Eversoll is a seasoned technology executive and entrepreneur with 30+ years of experience driving growth and transformation in enterprise software, IT services, and workforce technology. She has led multi-billion-dollar business units, built and exited companies, and held senior operational roles across software services, consulting, and channel sales."
    },
    {
      name: "Mark Kendall",
      title: "Chief Revenue Officer",
      bio: "Mark Kendall brings four decades of enterprise sales, partnership, and consulting experience in employee benefits, HR, and workforce productivity. Mark spent the bulk of his career serving Fortune-level clients on the insurance and consulting side of the business."
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      <section className="relative pt-40 pb-24 flex items-center justify-center min-h-[60vh]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/christina-wocin.jpg" 
            alt="Team Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-accent/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-accent to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10 text-center text-white">
          <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-50px"}} transition={{duration:0.6}}>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">Over 150 years combined experience</p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl uppercase leading-tight mb-6 text-white">
              Our Founding Team
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Experienced Education, Technology and HR Leaders working with the largest employers and educational systems in the country.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            {team.map((member, i) => (
              <motion.div key={i} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-50px"}} transition={{duration:0.6, delay: i * 0.1}}>
                <Card className="h-full border-none shadow-sm hover:shadow-md transition-all">
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <Avatar className="w-32 h-32 mb-6 border-4 border-muted">
                      <AvatarFallback className="bg-accent text-white font-heading text-4xl">{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-heading text-3xl uppercase mb-2 text-accent">{member.name}</h3>
                    <p className="text-secondary font-semibold uppercase tracking-wider text-sm mb-6">{member.title}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}