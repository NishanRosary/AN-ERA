import React from 'react';
import { BackgroundBeams } from './components/ui/background-beams';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AnimatedTextCycle } from './components/AnimatedText';
import { RainbowButton } from './components/ui/rainbow-button';
import { Features } from './components/Features';
import { ActionSearchBar } from './components/ActionSearch';
import { TestimonialsSection } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Sparkles } from 'lucide-react';

const testimonials = [
  {
    author: {
      name: "Sarah Chen",
      role: "CTO, TechNova",
      avatar: "https://i.pravatar.cc/150?img=32"
    },
    text: "AN-Era transformed our legacy infrastructure. Their cloud architecture solutions allowed us to scale 10x without downtime."
  },
  {
    author: {
      name: "Marcus Rodriguez",
      role: "CEO, FinSecure",
      avatar: "https://i.pravatar.cc/150?img=11"
    },
    text: "The cybersecurity audit was thorough and eye-opening. We now have an enterprise-grade protection shield around our assets."
  },
  {
    author: {
      name: "Emily Watson",
      role: "VP Product, E-CommX",
      avatar: "https://i.pravatar.cc/150?img=47"
    },
    text: "The immersive web experience AN-Era built for us increased our user engagement by 150% in the first quarter."
  },
  {
    author: {
      name: "David Kim",
      role: "Founder, DataFlow",
      avatar: "https://i.pravatar.cc/150?img=60"
    },
    text: "Their data analytics team turned our messy data streams into actionable insights. Truly world-class expertise."
  }
];

const pricingPlans = [
  {
    name: "Startup",
    price: "4999",
    yearlyPrice: "3999",
    period: "mo",
    features: [
      "Custom Web Application",
      "Basic Cloud Infrastructure",
      "Standard Security Audit",
      "Email & Chat Support",
      "1 Dedicated Origin Node"
    ],
    description: "Perfect for seed-stage startups ready to build robust MVPs.",
    buttonText: "Start Building",
    href: "#contact",
    isPopular: false
  },
  {
    name: "Enterprise",
    price: "12999",
    yearlyPrice: "10399",
    period: "mo",
    features: [
      "Full-stack Web & Mobile Apps",
      "Advanced Global Cloud Architecture",
      "Continuous Penetration Testing",
      "24/7 Priority Support SLAs",
      "Dedicated Technical Account Manager"
    ],
    description: "Comprehensive solutions for scaling enterprises.",
    buttonText: "Join Enterprise",
    href: "#contact",
    isPopular: true
  },
  {
    name: "Scale",
    price: "8999",
    yearlyPrice: "7199",
    period: "mo",
    features: [
      "Immersive Next.js Apps",
      "Multi-region Cloud Setup",
      "Quarterly Security Audits",
      "Priority 12/5 Support",
      "Advanced Data Analytics"
    ],
    description: "Ideal for Series A+ companies experiencing rapid growth.",
    buttonText: "Scale with Us",
    href: "#contact",
    isPopular: false
  }
];

function App() {
  return (
    <div className="relative min-h-screen font-body selection:bg-accent/30 selection:text-foreground bg-background">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <BackgroundBeams />
      </div>
      <Navbar />

      <main className="flex-1 w-full overflow-hidden">
        {/* HERO SECTION */}
        <section className="relative w-full h-screen flex items-center justify-center pt-20" id="home">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,var(--accent-foreground,rgba(62,207,122,0.1))_0,transparent_50%)] opacity-20" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-card/40 backdrop-blur-md mb-8 shadow-sm dark:shadow-[0_0_15px_rgba(62,207,122,0.15)]">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-foreground/90">Welcome to the New Era of Technology</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-foreground tracking-tighter dark:mix-blend-plus-lighter max-w-5xl leading-[1.1]">
              Engineering the Future of <br className="hidden md:block" />
              <AnimatedTextCycle
                words={["Immersive Web", "Scalable Cloud", "Cybersecurity", "Data Analytics"]}
                className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-light to-mint-flash"
              />
            </h1>

            <p className="mt-8 text-lg md:text-xl text-foreground/80 max-w-2xl font-medium leading-relaxed">
              AN-Era is a premium full-service technology company. We build world-class digital experiences that empower NextGen startups and enterprises globally.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center gap-6">
              <RainbowButton>
                Start Your Project
                <span className="ml-1 opacity-70 group-hover:translate-x-1 group-hover:opacity-100 transition-all font-mono">→</span>
              </RainbowButton>
              <a href="#work" className="text-foreground hover:text-accent font-semibold flex items-center gap-2 transition-colors py-3 px-6 rounded-full hover:bg-muted border border-transparent hover:border-border">
                View our work
              </a>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="relative py-32 z-10 w-full" id="services">
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-24 relative">
              <h2 className="text-sm font-mono tracking-[0.2em] text-accent uppercase mb-4">Our Expertise</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground dark:text-white">End-to-End Technology Powerhouse</h3>
            </div>

            <Features />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </section>

        {/* SPLINE 3D / ACTION SEARCH */}
        <section className="relative py-32 bg-background/50 backdrop-blur-xl border-y border-border z-10" id="work">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <ActionSearchBar />
          </div>
        </section>

        {/* TESTIMONIALS */}
        <TestimonialsSection
          title="Trusted by Visionaries"
          description="Hear from leaders who have transformed their businesses with AN-Era."
          testimonials={testimonials}
        />

        {/* PRICING */}
        <Pricing plans={pricingPlans} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
