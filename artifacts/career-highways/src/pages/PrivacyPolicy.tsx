import { useEffect, useState } from "react";
import { Link } from "wouter";

// Generic Markdown-like renderer for simple structure
function renderMarkdown(md: string) {
  const blocks = md.split('\n\n').filter(Boolean);
  
  return blocks.map((block, i) => {
    if (block.startsWith('# ')) {
      return <h1 key={i} className="text-4xl font-heading uppercase text-accent mt-12 mb-6">{block.replace('# ', '')}</h1>;
    }
    if (block.startsWith('## ')) {
      return <h2 key={i} className="text-3xl font-heading uppercase text-accent mt-10 mb-4">{block.replace('## ', '')}</h2>;
    }
    if (block.startsWith('### ')) {
      return <h3 key={i} className="text-2xl font-heading uppercase text-accent mt-8 mb-4">{block.replace('### ', '')}</h3>;
    }
    if (block.startsWith('- ')) {
      const items = block.split('\n').filter(item => item.startsWith('- '));
      return (
        <ul key={i} className="list-disc pl-6 space-y-2 my-4">
          {items.map((item, j) => (
            <li key={j} className="text-lg text-muted-foreground">{item.replace('- ', '')}</li>
          ))}
        </ul>
      );
    }
    // Check if it's a bold text paragraph
    if (block.startsWith('**') && block.endsWith('**')) {
      return <p key={i} className="text-lg font-bold text-foreground my-4">{block.replace(/\*\*/g, '')}</p>;
    }
    
    // Fallback to regular paragraph, strip links and basic markdown formatting
    let content = block;
    // Strip markdown links [text](url) -> text
    content = content.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
    // Strip italic/bold
    content = content.replace(/\*\*([^*]+)\*\*/g, '$1');
    content = content.replace(/_([^_]+)_/g, '$1');
    
    if (content.includes('Skip to main content')) return null;

    return <p key={i} className="text-lg text-muted-foreground leading-relaxed my-4">{content}</p>;
  });
}

export default function PrivacyPolicy() {
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    document.title = "Privacy Policy - Career Highways";
    // We'll fetch the JSON at runtime. In dev it might be served, 
    // but typically we can just fetch it or hardcode a fallback if fetch fails.
    fetch(`${import.meta.env.BASE_URL}data/site-content.json`)
      .then(res => res.json())
      .then(data => {
        if (data && data["https://careerhighways.com/privacy-policy/"]) {
          setContent(data["https://careerhighways.com/privacy-policy/"].md);
        }
      })
      .catch(err => {
        console.error(err);
        // Fallback text if json is not available at runtime
        setContent("# CAREER HIGHWAYS® Privacy Policy\n\n### _Effective and Last Updated: November 17, 2025_\n\n### Introduction\n\nCareer Highways®, Inc. respects your privacy. In addition to providing numerous privacy features, Career Highways® has created this Privacy Policy to demonstrate in writing our firm commitment to privacy.");
      });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <section className="bg-accent text-white pt-32 pb-12">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h1 className="font-heading text-5xl md:text-6xl uppercase">Privacy Policy</h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <article className="prose prose-lg max-w-4xl mx-auto px-4 md:px-6">
          {content ? renderMarkdown(content) : (
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-slate-200 rounded w-1/3"></div>
              <div className="h-4 bg-slate-200 rounded w-full"></div>
              <div className="h-4 bg-slate-200 rounded w-5/6"></div>
              <div className="h-4 bg-slate-200 rounded w-full"></div>
            </div>
          )}
        </article>
      </section>
    </div>
  );
}
