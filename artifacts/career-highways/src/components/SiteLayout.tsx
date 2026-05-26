import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

const NAV: NavItem[] = [
  {
    label: "Skills Intelligence",
    href: "/career-highways-skills-intelligence",
    children: [
      { label: "What Is Skills Intelligence?", href: "/career-highways-skills-intelligence" },
      { label: "Solutions", href: "/solutions" },
      { label: "Agentic AI", href: "/artificial-intelligence" },
    ],
  },
  {
    label: "For Employers",
    href: "/employers",
    children: [
      { label: "Employers", href: "/employers" },
      { label: "Talent Developers", href: "/talent-developers" },
      { label: "Pathways in Minutes", href: "/pathways-in-minutes" },
      { label: "SkillXP", href: "/skillxp-learning-aligned-to-skills-and-roles" },
    ],
  },
  {
    label: "About",
    href: "/about-career-highways",
    children: [
      { label: "About Career Highways", href: "/about-career-highways" },
      { label: "Team", href: "/career-highways-team" },
      { label: "Businessolver Partner", href: "/businessolver-pinnacle-partner" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
  {
    label: "Insights",
    href: "/insights",
    children: [
      { label: "Insights", href: "/insights" },
      { label: "Knowledge Center", href: "/knowledge-center" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "In the Press", href: "/in-the-press" },
      { label: "FAQ", href: "/faq" },
    ],
  },
];

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const isHome = location === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerBg = isScrolled ? "bg-accent shadow-md" : (isHome ? "bg-transparent" : "bg-accent");
  const headerText = "text-white";

  return (
    <div className="min-h-[100dvh] flex flex-col">
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${headerBg} ${headerText}`}>
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 z-50">
            <img src="/images/logo-white.png" alt="Career Highways" className="h-8 md:h-10 object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] font-semibold tracking-widest uppercase">
            {NAV.map((item) => (
              <div key={item.label} className="relative group py-6 -my-6">
                <Link
                  href={item.href}
                  className="hover:text-secondary transition-colors inline-flex items-center gap-1"
                >
                  {item.label}
                  {item.children ? <ChevronDown className="h-3 w-3 opacity-70" /> : null}
                </Link>
                {item.children ? (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                    <div className="bg-white text-accent rounded-md shadow-2xl py-3 min-w-[260px] border border-black/5">
                      {item.children.map((c) => (
                        <Link
                          key={c.href + c.label}
                          href={c.href}
                          className="block px-6 py-3 text-[13px] font-semibold tracking-wider uppercase hover:bg-accent/5 hover:text-secondary transition-colors whitespace-nowrap"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="https://app.careerhighways.com" target="_blank" rel="noopener noreferrer" className="text-[13px] font-semibold tracking-widest uppercase hover:text-secondary transition-colors">
              Login
            </a>
            <Button asChild variant="outline" className="border-white text-accent hover:bg-white hover:text-accent font-semibold tracking-widest uppercase text-xs rounded-md">
              <Link href="/book-a-strategy-session">Book a Strategy Session</Link>
            </Button>
          </div>

          {/* Mobile Nav */}
          <div className="lg:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu" className="text-white hover:bg-white/10">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-accent border-l-0 text-white w-[300px] flex flex-col gap-8 pt-20">
                <nav className="flex flex-col gap-5 text-sm font-semibold tracking-widest uppercase">
                  {NAV.map((item) => (
                    <div key={item.label} className="flex flex-col gap-3">
                      <Link href={item.href} className="hover:text-secondary">{item.label}</Link>
                      {item.children ? (
                        <div className="flex flex-col gap-2 pl-3 border-l border-white/15 text-xs font-medium text-white/70">
                          {item.children.map((c) => (
                            <Link key={c.href + c.label} href={c.href} className="hover:text-secondary">{c.label}</Link>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ))}
                </nav>
                <div className="flex flex-col gap-4 mt-auto">
                  <a href="https://app.careerhighways.com" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold tracking-widest uppercase text-center hover:text-secondary">
                    Login
                  </a>
                  <Button asChild className="w-full bg-secondary text-white hover:bg-secondary/90 tracking-widest uppercase rounded-md">
                    <Link href="/book-a-strategy-session">Book a Strategy Session</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full flex flex-col">
        {children}
      </main>

      <footer className="bg-accent text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            <div className="lg:col-span-2">
              <img src="/images/logo-white.png" alt="Career Highways" className="h-10 mb-6 object-contain" />
              <p className="text-white/70 max-w-sm mb-8 leading-relaxed">
                The adaptive intelligence layer that transforms skills, job architecture, and career paths into strategic workforce infrastructure.
              </p>
              <div className="flex items-center gap-4">
                <Button asChild className="bg-secondary text-white hover:bg-secondary/90 tracking-widest uppercase text-xs rounded-md">
                  <Link href="/book-a-strategy-session">Book a Strategy Session</Link>
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-heading text-xl uppercase tracking-wider mb-6 text-white">Company</h4>
              <ul className="flex flex-col gap-3 text-white/70">
                <li><Link href="/about-career-highways" className="hover:text-secondary transition-colors">About</Link></li>
                <li><Link href="/career-highways-team" className="hover:text-secondary transition-colors">Team</Link></li>
                <li><Link href="/contact-us" className="hover:text-secondary transition-colors">Contact Us</Link></li>
                <li><Link href="/in-the-press" className="hover:text-secondary transition-colors">In the Press</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-xl uppercase tracking-wider mb-6 text-white">Platform</h4>
              <ul className="flex flex-col gap-3 text-white/70">
                <li><Link href="/career-highways-skills-intelligence" className="hover:text-secondary transition-colors">Skills Intelligence</Link></li>
                <li><Link href="/employers" className="hover:text-secondary transition-colors">Employers</Link></li>
                <li><Link href="/solutions" className="hover:text-secondary transition-colors">Solutions</Link></li>
                <li><Link href="/skillxp-learning-aligned-to-skills-and-roles" className="hover:text-secondary transition-colors">SkillXP</Link></li>
                <li><Link href="/artificial-intelligence" className="hover:text-secondary transition-colors">AI Impact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-xl uppercase tracking-wider mb-6 text-white">Resources</h4>
              <ul className="flex flex-col gap-3 text-white/70">
                <li><Link href="/insights" className="hover:text-secondary transition-colors">Insights</Link></li>
                <li><Link href="/knowledge-center" className="hover:text-secondary transition-colors">Knowledge Center</Link></li>
                <li><Link href="/case-studies" className="hover:text-secondary transition-colors">Case Studies</Link></li>
                <li><Link href="/faq" className="hover:text-secondary transition-colors">FAQ</Link></li>
                <li><Link href="/pathways-in-minutes" className="hover:text-secondary transition-colors">Pathways in Minutes</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
            <p>&copy; {new Date().getFullYear()} Career Highways</p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-use" className="hover:text-white transition-colors">Terms of Use</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
