import { Mail, Linkedin, Github, Phone, FileText, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
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
          <a
            href={`mailto:${contactInfo.email}`}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4" />
            {contactInfo.email}
          </a>
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
