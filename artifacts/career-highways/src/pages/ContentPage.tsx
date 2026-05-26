import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

type PageMeta = { title?: string; excerpt?: string; md?: string };
type AllMeta = Record<string, PageMeta>;

type Props = {
  sourceUrl: string;
  kind?: "page" | "article" | "press" | "case" | "knowledge";
  eyebrow?: string;
  fallbackTitle?: string;
};

const kindLabel: Record<NonNullable<Props["kind"]>, string> = {
  page: "Career Highways",
  article: "Insights",
  press: "In the Press",
  case: "Case Study",
  knowledge: "Knowledge Center",
};

export default function ContentPage({ sourceUrl, kind = "page", eyebrow, fallbackTitle }: Props) {
  const [meta, setMeta] = useState<PageMeta | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetch(`${import.meta.env.BASE_URL}data/pages-meta.json`)
      .then((r) => r.json() as Promise<AllMeta>)
      .then((all) => {
        if (cancelled) return;
        setMeta(all[sourceUrl] || null);
        setLoading(false);
      })
      .catch(() => {
        if (cancelled) return;
        setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [sourceUrl]);

  const title = (meta?.title?.split("|")[0]?.trim() || fallbackTitle || "Career Highways").trim();
  const excerpt = meta?.excerpt?.trim() || "";

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative pt-40 pb-20 bg-accent text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/insights-bg.jpeg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-5xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-secondary font-semibold tracking-[0.2em] uppercase mb-6 text-sm"
          >
            {eyebrow || kindLabel[kind]}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl uppercase leading-[1.05] mb-6"
          >
            {title}
          </motion.h1>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          {loading ? (
            <div className="h-24 animate-pulse bg-muted rounded" />
          ) : (
            <>
              {excerpt ? (
                <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-10 font-light">
                  {excerpt}
                </p>
              ) : (
                <p className="text-lg text-muted-foreground mb-10">
                  This {kindLabel[kind].toLowerCase()} is published on careerhighways.com.
                </p>
              )}
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  className="bg-accent text-white hover:bg-accent/90 tracking-widest uppercase text-sm px-8 py-6"
                >
                  <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
                    Read full {kind === "press" ? "release" : kind === "case" ? "case study" : "article"}
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-white tracking-widest uppercase text-sm px-8 py-6"
                >
                  <Link href="/book-a-strategy-session">Book a strategy session</Link>
                </Button>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
