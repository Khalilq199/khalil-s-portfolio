import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileText, Download, Maximize2, X } from "lucide-react";

const ResumeSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="resume" className="py-20 section-gradient-alt">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
          Resume
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Download or preview my full resume
        </p>

        <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm">
          {/* Resume Preview */}
          <div className="relative">
            {/* Placeholder for resume preview - replace with actual PDF embed or image */}
            <div className="aspect-[8.5/11] bg-secondary/50 flex flex-col items-center justify-center p-8 text-center">
              <FileText className="h-16 w-16 text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Khalil Ahmad Qamar
              </h3>
              <p className="text-muted-foreground mb-4">
                Mechatronics Engineering | University of Waterloo
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• AI/ML Research Intern @ Tech Research Lab</p>
                <p>• Full-Stack Developer @ HealthTech Startup</p>
                <p>• Computer Vision Engineer @ Robotics Company</p>
              </div>
              <p className="mt-6 text-xs text-muted-foreground italic">
                Click "Expand Preview" to view full resume or download PDF
              </p>
            </div>

            {/* Expand button overlay */}
            <button
              onClick={() => setIsExpanded(true)}
              className="absolute inset-0 flex items-center justify-center bg-foreground/0 hover:bg-foreground/5 transition-colors group"
            >
              <span className="flex items-center gap-2 px-4 py-2 bg-background/90 backdrop-blur-sm rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="h-4 w-4" />
                Expand Preview
              </span>
            </button>
          </div>

          {/* Actions */}
          <div className="p-4 border-t border-border flex flex-wrap justify-center gap-4">
            <Button asChild className="gap-2">
              <a href="/resume.pdf" download>
                <Download className="h-4 w-4" />
                Download PDF
              </a>
            </Button>
            <Button variant="outline" onClick={() => setIsExpanded(true)} className="gap-2">
              <Maximize2 className="h-4 w-4" />
              Expand Preview
            </Button>
          </div>
        </div>

        {/* Expanded Modal */}
        {isExpanded && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm animate-fade-in">
            <div className="relative bg-card rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsExpanded(false)}
                className="absolute top-4 right-4 z-10"
              >
                <X className="h-5 w-5" />
              </Button>

              {/* Full resume preview */}
              <div className="p-8">
                <div className="aspect-[8.5/11] bg-secondary/30 flex flex-col items-center justify-center p-8 text-center rounded-lg">
                  <FileText className="h-24 w-24 text-muted-foreground mb-6" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Khalil Ahmad Qamar
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Mechatronics Engineering | University of Waterloo
                  </p>
                  <div className="space-y-3 text-muted-foreground text-left max-w-md">
                    <div>
                      <h4 className="font-semibold text-foreground">Experience</h4>
                      <p>• AI/ML Research Intern @ Tech Research Lab</p>
                      <p>• Full-Stack Developer @ HealthTech Startup</p>
                      <p>• Computer Vision Engineer @ Robotics Company</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Education</h4>
                      <p>• BASc Mechatronics Engineering, University of Waterloo</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Skills</h4>
                      <p>Python, TensorFlow, PyTorch, React, Node.js, AWS, Docker</p>
                    </div>
                  </div>
                  <p className="mt-8 text-xs text-muted-foreground italic">
                    Note: Replace this placeholder with your actual resume PDF
                  </p>
                </div>

                <div className="mt-6 flex justify-center">
                  <Button asChild size="lg" className="gap-2">
                    <a href="/resume.pdf" download>
                      <Download className="h-5 w-5" />
                      Download Full Resume
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResumeSection;
