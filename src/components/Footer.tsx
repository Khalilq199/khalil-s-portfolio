import { useState } from "react";
import { Mail, Linkedin, Github, Phone, FileText, ArrowUp, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
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

  // ===== EDIT CONTACT INFO HERE =====
  const contactInfo = {
    email: "kaqamar@uwaterloo.ca",
    linkedin: "https://www.linkedin.com/in/khalil-ahmad-qamar/",
    github: "https://github.com/Khalilq199",
    phone: "+1 (647) 913-6891",
  };
  // ===== END EDITABLE SECTION =====

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Contact Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="flex items-center gap-2 text-sm text-foreground bg-card/70 border border-border rounded-full px-3 py-2 shadow-sm hover:shadow-md hover:border-primary/40 transition-all"
            aria-live="polite"
            aria-label="Copy email address"
            title="Click to copy email"
          >
            <Copy className="h-4 w-4 text-muted-foreground" />
            <span className="hidden sm:inline text-muted-foreground border border-muted-foreground/60 rounded-full px-2 py-0.5 leading-none">
              {isCopied ? "Copied" : "Copy"}
            </span>
            <Mail className="h-4 w-4" />
            <span>{isCopied ? "Copied!" : contactInfo.email}</span>
            <span className="sr-only">{isCopied ? "Email copied" : "Click to copy email"}</span>
          </button>
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <span className="flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4" />
            {contactInfo.phone}
          </span>
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <FileText className="h-4 w-4" />
            Resume
          </a>
        </div>

        {/* Back to Top */}
        <div className="flex justify-center mb-8">
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="gap-2"
          >
            <ArrowUp className="h-4 w-4" />
            Back to Top
          </Button>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Khalil Ahmad Qamar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
