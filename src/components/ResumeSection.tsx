import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Maximize2, X } from "lucide-react";

const ResumeSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsExpanded(true);
    window.addEventListener("openResumePreview", handleOpen);
    return () => window.removeEventListener("openResumePreview", handleOpen);
  }, []);

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
            <div className="aspect-[8.5/11] bg-secondary/50">
              <iframe
                title="Resume preview"
                src="/resume.pdf#zoom=94"
                className="h-full w-full"
              />
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
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm animate-fade-in"
            onClick={() => setIsExpanded(false)}
          >
            <div
              className="relative bg-card rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
              onClick={(event) => event.stopPropagation()}
            >
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
                <div className="aspect-[8.5/11] bg-secondary/30 rounded-lg overflow-hidden">
                  <iframe
                    title="Resume preview expanded"
                    src="/resume.pdf#zoom=94"
                    className="h-full w-full"
                  />
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
