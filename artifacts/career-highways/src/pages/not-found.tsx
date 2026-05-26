import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] w-full flex flex-col items-center justify-center bg-background text-center px-6 pt-32 pb-24">
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">
        404
      </p>
      <h1 className="font-heading text-5xl md:text-7xl uppercase text-accent mb-6">
        Page not found
      </h1>
      <p className="text-lg text-foreground/70 max-w-xl mb-10">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Button asChild className="bg-accent text-white hover:bg-accent/90 tracking-widest uppercase text-xs">
        <Link href="/">Back to home</Link>
      </Button>
    </div>
  );
}
