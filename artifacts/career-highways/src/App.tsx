import { Switch, Route, Router as WouterRouter } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { SiteLayout } from "@/components/SiteLayout";
import About from "@/pages/About";
import SkillsIntelligence from "@/pages/SkillsIntelligence";
import KnowledgeCenter from "@/pages/KnowledgeCenter";

import Employers from "@/pages/Employers";
import Solutions from "@/pages/Solutions";
import SkillXP from "@/pages/SkillXP";
import ArtificialIntelligence from "@/pages/ArtificialIntelligence";
import Home from "@/pages/Home";

import Insights from "@/pages/Insights";
import FAQ from "@/pages/FAQ";
import CaseStudies from "@/pages/CaseStudies";
import InThePress from "@/pages/InThePress";
import Team from "@/pages/Team";
import JobSeekers from "@/pages/JobSeekers";
import TalentDevelopers from "@/pages/TalentDevelopers";
import PathwaysInMinutes from "@/pages/PathwaysInMinutes";
import BusinessolverPartner from "@/pages/BusinessolverPartner";

import BookStrategySession from "@/pages/BookStrategySession";
import ContactUs from "@/pages/ContactUs";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfUse from "@/pages/TermsOfUse";
import ContentPage from "@/pages/ContentPage";
import { dynamicRoutes } from "@/routes-data";
import { FlowEngageProvider, FlowEngageWidget } from "@flowengage/react-chatbot";
import "@flowengage/react-chatbot/styles.css";

function Router() {
  return (
    <SiteLayout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about-career-highways" component={About} />
        <Route path="/career-highways-skills-intelligence" component={SkillsIntelligence} />
        <Route path="/employers" component={Employers} />
        <Route path="/solutions" component={Solutions} />
        <Route path="/skillxp-learning-aligned-to-skills-and-roles" component={SkillXP} />
        <Route path="/artificial-intelligence" component={ArtificialIntelligence} />
        <Route path="/insights" component={Insights} />
        <Route path="/faq" component={FAQ} />
        <Route path="/knowledge-center" component={KnowledgeCenter} />
        <Route path="/case-studies" component={CaseStudies} />
        <Route path="/in-the-press" component={InThePress} />
        <Route path="/career-highways-team" component={Team} />
        <Route path="/job-seekers" component={JobSeekers} />
        <Route path="/talent-developers" component={TalentDevelopers} />
        <Route path="/pathways-in-minutes" component={PathwaysInMinutes} />
        <Route path="/book-a-strategy-session" component={BookStrategySession} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/businessolver-pinnacle-partner" component={BusinessolverPartner} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-of-use" component={TermsOfUse} />
        {dynamicRoutes.map((r) => (
          <Route key={r.path} path={r.path}>
            <ContentPage sourceUrl={r.src} kind={r.kind} eyebrow={r.eyebrow} />
          </Route>
        ))}
        <Route component={NotFound} />
      </Switch>
    </SiteLayout>
  );
}

function App() {
  return (
            <FlowEngageProvider
      siteId="1d07501f-869a-4f11-8510-e1b735ccb971"
    >
    <TooltipProvider>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
      <Toaster />
    </TooltipProvider>
    <FlowEngageWidget />
    </FlowEngageProvider>
  );
}

export default App;
