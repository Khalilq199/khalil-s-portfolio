import { Mail, Linkedin, Github, Phone } from "lucide-react";

const ContactSection = () => {
  // ===== EDIT CONTACT INFO HERE =====
  const contactInfo = {
    email: "khalil.qamar@example.com",
    linkedin: "https://linkedin.com/in/khalilqamar",
    github: "https://github.com/khalilqamar",
    phone: "+1 (555) 123-4567",
  };
  // ===== END EDITABLE SECTION =====

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
          Get In Touch
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          I'm actively looking for software engineering opportunities. Let's connect!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Email */}
          <a
            href={`mailto:${contactInfo.email}`}
            className="flex items-center gap-4 p-6 bg-card border border-border rounded-lg hover:border-primary hover:shadow-md transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center group-hover:bg-primary transition-colors">
              <Mail className="h-5 w-5 text-accent-foreground group-hover:text-primary-foreground transition-colors" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Email</p>
              <p className="text-foreground font-medium">{contactInfo.email}</p>
            </div>
          </a>

          {/* Phone */}
          <div className="flex items-center gap-4 p-6 bg-card border border-border rounded-lg">
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
              <Phone className="h-5 w-5 text-accent-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Phone</p>
              <p className="text-foreground font-medium">{contactInfo.phone}</p>
            </div>
          </div>

          {/* LinkedIn */}
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-card border border-border rounded-lg hover:border-primary hover:shadow-md transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center group-hover:bg-primary transition-colors">
              <Linkedin className="h-5 w-5 text-accent-foreground group-hover:text-primary-foreground transition-colors" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">LinkedIn</p>
              <p className="text-foreground font-medium">Connect with me</p>
            </div>
          </a>

          {/* GitHub */}
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-card border border-border rounded-lg hover:border-primary hover:shadow-md transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center group-hover:bg-primary transition-colors">
              <Github className="h-5 w-5 text-accent-foreground group-hover:text-primary-foreground transition-colors" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">GitHub</p>
              <p className="text-foreground font-medium">View my code</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
