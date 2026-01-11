import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Phone, MapPin, GraduationCap, ChevronDown, FileText, Copy, Check } from "lucide-react";
import { useState } from "react";
import profilePhoto from "@/assets/profile_pic.jpg";

const HeroSection = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("kaqamar@uwaterloo.ca");
      setIsCopied(true);
      window.setTimeout(() => setIsCopied(false), 1500);
    } catch {
      setIsCopied(false);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen hero-gradient flex flex-col items-center justify-center pt-16 pb-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center animate-fade-in-up">
          {/* Profile Photo */}
          <div className="relative mb-8">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              <img
                src={profilePhoto}
                alt="Khalil Ahmad Qamar"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute inset-0 -m-2 rounded-full border-2 border-dashed border-primary/30 animate-[spin_20s_linear_infinite]" />
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Khalil Ahmad Qamar
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Mechatronics Engineering @ University of Waterloo 
          </p>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            AI, Computer Vision, Data, Python, Full-Stack 
          </p>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-4 leading-relaxed">
            Driven to build and learn
          </p>

          {/* Quick Info Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground">
              <GraduationCap className="h-4 w-4" />
              University of Waterloo
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground">
              <MapPin className="h-4 w-4" />
              Waterloo, ON
            </div>
          </div>

          {/* Contact Links */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="flex items-center gap-2 px-4 py-2 text-sm text-foreground bg-card/70 border border-border rounded-full shadow-sm hover:shadow-md hover:border-primary/40 transition-all"
              aria-live="polite"
              aria-label="Copy email address"
              title="Click to copy email"
            >
              <Copy className="h-4 w-4 text-muted-foreground" />
              <span className="hidden sm:inline text-muted-foreground border border-muted-foreground/60 rounded-full px-2 py-0.5 leading-none">
                {isCopied ? "Copied" : "Copy"}
              </span>
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">
                {isCopied ? "Copied!" : "kaqamar@uwaterloo.ca"}
              </span>
              <span className="sm:hidden">{isCopied ? "Copied!" : "Email"}</span>
              <span className="sr-only">{isCopied ? "Email copied" : "Click to copy email"}</span>
            </button>
            <a
              href="https://www.linkedin.com/in/khalil-ahmad-qamar/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm text-foreground bg-card/70 border border-border rounded-full shadow-sm hover:shadow-md hover:border-primary/40 transition-all"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="https://github.com/Khalilq199"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm text-foreground bg-card/70 border border-border rounded-full shadow-sm hover:shadow-md hover:border-primary/40 transition-all"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <span className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              +1 (647) 913-6891
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button asChild size="lg" className="gap-2 shadow-md hover:shadow-lg transition-shadow">
              <a href="/resume.pdf" download>
                <FileText className="h-5 w-5" />
                Download Resume
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("experience")}
              className="gap-2"
            >
              View Experience
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="gap-2"
            >
              View Projects
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="gap-2"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <button
          onClick={() => scrollToSection("experience-strip")}
          className="scroll-cta flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-primary hover:bg-primary/20 transition-all"
          aria-label="Scroll to next section"
        >
          <ChevronDown className="h-6 w-6" />
          <span className="text-base font-medium leading-none">Scroll down</span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
