import { Fragment, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { experiences } from "@/data/experience";

const ExperienceSection = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [expandedMedia, setExpandedMedia] = useState<{
    srcs: string[];
    alts: string[];
    title: string;
  } | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 section-gradient">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
          Experience
        </h2>
        <p className="text-muted-foreground text-center mb-4 max-w-2xl mx-auto">
          Impact through Internships and Research
        </p>
        <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm mb-12 max-w-2xl mx-auto">
          <span>Scroll down for Projects</span>
          <ChevronDown className="h-4 w-4" />
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Fragment key={exp.id}>
            {(index === 0 || exp.group !== experiences[index - 1].group) && (
              <h3 className="pt-4 text-xl font-semibold text-foreground">
                {exp.group === "professional" ? "Professional Experience" : "Teams & Research"}
              </h3>
            )}
            <div
              className="bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="p-6">
                <div className="grid gap-6 md:grid-cols-[1fr_auto]">
                  <div className="md:col-span-2">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-card-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {exp.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col items-start sm:items-end">
                        <span className="text-sm font-semibold text-primary whitespace-nowrap">
                          {exp.dates}
                        </span>
                        {exp.location && (
                          <span className="text-xs text-muted-foreground">
                            {exp.location}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Bullets */}
                    <ul className="space-y-2 mb-4">
                      {exp.collapsedBullets.map(
                        (bullet, idx) => (
                          <li
                            key={idx}
                            className="text-foreground/90 text-sm flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {bullet}
                          </li>
                        )
                      )}
                      {expandedId === exp.id && exp.expandedBullets.map(
                        (bullet, idx) => (
                          <li
                            key={`expanded-${idx}`}
                            className="text-foreground/90 text-sm flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {bullet}
                          </li>
                        )
                      )}
                    </ul>

                    {/* Expand/Collapse Button */}
                    {exp.expandedBullets.length > 0 && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleExpand(exp.id)}
                        aria-expanded={expandedId === exp.id}
                        className="cta-pop gap-2 text-primary border-primary/40 hover:border-primary hover:text-primary shadow-sm hover:shadow-md transition-all"
                      >
                        {expandedId === exp.id ? (
                          <>
                            <ChevronUp className="h-4 w-4" />
                            Show Less
                          </>
                        ) : (
                          <>
                            <ChevronDown className="h-4 w-4" />
                            Show More
                          </>
                        )}
                      </Button>
                    )}
                  </div>

                  {exp.id === "exp-1" && (
                    <div className="w-full md:w-80 lg:w-96 flex-shrink-0 self-start md:-mt-2">
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedMedia({
                            srcs: ["/ultrasam.gif"],
                            alts: ["Ultrasound segmentation preview"],
                            title: "Manual (left) vs Computer Vision (right) Ultrasound Segmentation",
                          })
                        }
                        className="w-full text-left"
                        aria-label="Expand ultrasound preview"
                      >
                        <div className="w-full rounded-lg border border-border bg-secondary/20 shadow-sm px-2 py-2">
                          <div className="px-2 pb-2 text-xs font-semibold text-foreground/80 tracking-wide uppercase text-center">
                            Manual vs Computer Vision Ultrasound Segmentation
                          </div>
                          <img
                            src="/ultrasam.gif"
                            alt="Ultrasound segmentation preview"
                            className="w-full max-h-56 object-contain"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        <span className="mt-2 block text-xs text-muted-foreground text-center">
                          <span className="expand-hint inline-flex items-center gap-1 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-primary shadow-sm">
                            Click to expand
                          </span>
                        </span>
                      </button>
                    </div>
                  )}

                  {exp.id === "exp-2" && (
                    <div className="w-full md:w-72 lg:w-80 flex-shrink-0 self-start md:-mt-3">
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedMedia({
                            srcs: ["/untether.jpg"],
                            alts: ["Untether AI engineering preview"],
                            title: "Untether AI chip",
                          })
                        }
                        className="w-full text-left"
                        aria-label="Expand Untether AI preview"
                      >
                        <div className="w-full rounded-lg border border-border bg-secondary/20 shadow-sm px-1.5 py-2">
                          <div className="px-2 pb-2 text-xs font-semibold text-foreground/80 tracking-wide uppercase text-center">
                            Untether AI chip
                          </div>
                          <img
                            src="/untether.jpg"
                            alt="Untether AI engineering preview"
                            className="w-full max-h-56 object-contain"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        <span className="mt-2 block text-xs text-muted-foreground text-center">
                          <span className="expand-hint inline-flex items-center gap-1 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-primary shadow-sm">
                            Click to expand
                          </span>
                        </span>
                      </button>
                    </div>
                  )}

                  {exp.id === "exp-3" && (
                    <div className="w-full md:w-72 lg:w-80 flex-shrink-0 self-start md:-mt-3">
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedMedia({
                            srcs: ["/iko.jpg"],
                            alts: ["IKO North America preview"],
                            title: "IKO North America",
                          })
                        }
                        className="w-full text-left"
                        aria-label="Expand IKO preview"
                      >
                        <div className="w-full rounded-lg border border-border bg-secondary/20 shadow-sm px-1.5 py-2">
                          <div className="px-2 pb-2 text-xs font-semibold text-foreground/80 tracking-wide uppercase text-center">
                            IKO North America
                          </div>
                          <img
                            src="/iko.jpg"
                            alt="IKO North America preview"
                            className="w-full max-h-56 object-contain"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        <span className="mt-2 block text-xs text-muted-foreground text-center">
                          <span className="expand-hint inline-flex items-center gap-1 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-primary shadow-sm">
                            Click to expand
                          </span>
                        </span>
                      </button>
                    </div>
                  )}

                    {exp.id === "exp-4" && (
                      <div className="w-full md:w-72 lg:w-80 flex-shrink-0 self-start md:-mt-3">
                        <div className="grid gap-3">
                          <button
                            type="button"
                            onClick={() =>
                              setExpandedMedia({
                                srcs: ["/vip.jpg"],
                                alts: ["Vision and Image Processing Lab preview 1"],
                                title: "Vision and Image Processing Lab",
                              })
                            }
                            className="w-full text-left"
                            aria-label="Expand VIP Lab preview 1"
                          >
                            <div className="w-full rounded-lg border border-border bg-secondary/20 shadow-sm px-1.5 py-2">
                            <img
                              src="/vip.jpg"
                              alt="Vision and Image Processing Lab preview 1"
                                className="w-full max-h-48 object-contain"
                                loading="lazy"
                                decoding="async"
                              />
                            </div>
                            <span className="mt-2 block text-xs text-muted-foreground text-center">
                              <span className="expand-hint inline-flex items-center gap-1 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-primary shadow-sm">
                                Click to expand
                              </span>
                            </span>
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              setExpandedMedia({
                                srcs: ["/vip2.webp"],
                                alts: ["Vision and Image Processing Lab preview 2"],
                                title: "Vision and Image Processing Lab",
                              })
                            }
                            className="w-full text-left"
                            aria-label="Expand VIP Lab preview 2"
                          >
                            <div className="w-full rounded-lg border border-border bg-secondary/20 shadow-sm px-1.5 py-2">
                            <img
                              src="/vip2.webp"
                              alt="Vision and Image Processing Lab preview 2"
                                className="w-full max-h-48 object-contain"
                                loading="lazy"
                                decoding="async"
                              />
                            </div>
                            <span className="mt-2 block text-xs text-muted-foreground text-center">
                              <span className="expand-hint inline-flex items-center gap-1 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-primary shadow-sm">
                                Click to expand
                              </span>
                            </span>
                          </button>
                        </div>
                      </div>
                    )}
                </div>
              </div>
            </div>
            </Fragment>
          ))}
        </div>
      </div>

      {expandedMedia && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setExpandedMedia(null)}
        >
          <div
            className="max-w-6xl w-full bg-card rounded-lg border border-border shadow-2xl p-4"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="px-4 pt-2 pb-3 text-sm font-semibold text-foreground/80 tracking-wide uppercase text-center">
              {expandedMedia.title}
            </div>
            <div className="space-y-4">
              {expandedMedia.srcs.map((src, idx) => (
                <img
                  key={src}
                  src={src}
                  alt={expandedMedia.alts[idx] ?? expandedMedia.title}
                  className="w-full max-h-[85vh] object-contain rounded-md"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ExperienceSection;
