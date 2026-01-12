import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Experience {
  id: string;
  title: string;
  company: string;
  dates: string;
  location: string;
  shortBullets: string[];
  fullBullets: string[];
  techStack: string[];
  logo?: string;
}

const ExperienceSection = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [expandedMedia, setExpandedMedia] = useState<{
    src: string;
    alt: string;
    title: string;
  } | null>(null);

  // ===== ADD NEW EXPERIENCES HERE (Most recent first) =====
  const experiences: Experience[] = [
    {
      id: "exp-1",
      title: "Computer Vision Research Intern",
      company: "Unity Health Toronto, St. Michael’s Hospital",
      dates: "August 2025 – December 2025",
      location: "Toronto, ON",
      shortBullets: [
        "Developed ultrasound computer vision models for diaphragm segmentation on ICU patient data",
"Trained models using COCO-style datasets and prompt-based supervision",
"Reduced manual annotation and analysis time by over 100 hours per week",
      ],
      fullBullets: [
        "Developed ultrasound computer vision models for diaphragm segmentation on ICU patient data",
"Trained models using COCO-style datasets and prompt-based supervision",
"Reduced manual annotation and analysis time by over 100 hours per week",

"Built end-to-end data annotation and mask conversion pipelines in Python using PyTorch and OpenCV, transforming raw B-mode ultrasound frames into bounding-box prompts for supervised fine-tuning",

"Implemented a full prompt-conditioned inference and evaluation workflow with MMDetection and MMEngine, benchmarking segmentation performance using IoU, Dice score, and mAP across validation datasets",

"Created NumPy, Pandas, and Matplotlib utilities to enhance ultrasound B-mode image quality and support large-scale training data exploration and analysis",

"Designed scalable AI-assisted ultrasound analysis pipelines to support future clinical research and translational imaging workflows within the lab"


      ],
      techStack: ["Python", "MMEngine", "OpenCV", "NumPy", "PyTorch","Git", 'Pandas', 'Matplotlib', "YAML",],
    },
    {
      id: "exp-2",
      title: "Software Engineer Intern",
      company: "Untether AI",
      dates: "January 2025 – April 2025",
      location: "Toronto, ON",
      shortBullets: [
        "Built an end-to-end Python ETL pipeline to collect, process, and structure 3000+ AI accelerator test logs",
"Automated large-scale log ingestion and analysis, eliminating 40+ hours per week of manual data collection",
"Drove performance and yield analytics across 200+ tests while keeping compatibility with 10+ legacy log formats"

      ],
      fullBullets: [
        "Built an end-to-end Python ETL pipeline to collect, process, and structure 3000+ AI accelerator test logs",
"Automated large-scale log ingestion and analysis, eliminating 40+ hours per week of manual data collection",
"Drove performance and yield analytics across 200+ tests while keeping compatibility with 10+ legacy log formats",
"Automated retrieval, processing, and synchronization of 2,000+ firmware log files using Linux SCP and SFTP protocols",
"Implemented automated log parsing and metric computation workflows using Pandas, NumPy, and Matplotlib, delivered through an interactive analysis GUI",
"Developed a reusable XML schema library covering 100+ chip tests to enable dynamic validation and significantly reduce data corruption"

      ],
      techStack: ["Python", "Numpy", "Pandas", "Git", "XML", "Matplotlib", "Linux"],
    },
    {
      id: "exp-3",
      title: "Software Reliability Engineer Intern",
      company: "IKO North America",
      dates: "April 2024 – August 2024",
      location: "Brampton, ON",
      shortBullets: [
        "Queried internal search engine data using SQL and Google BigQuery across thousands of spare parts",
"Designed structured data schemas to organize search and usage data for analysis",
"Generated usage and performance analytics to better understand user behavior",
"Built Looker Studio dashboards that improved request turnaround time by 25% and drove adoption at  plants"


      ],
      fullBullets: [
        "Queried internal search engine data using SQL and Google BigQuery across thousands of spare parts",
"Designed structured data schemas to organize search and usage data for analysis",
"Generated usage and performance analytics to better understand user behavior",
"Built Looker Studio dashboards that improved request turnaround time by 25% and drove adoption at  plants",
"Developed and deployed new search engine features with JavaScript, Node.js, and Git, streamlining standardization workflows and reducing completion time by 30%.",
"Built automation functions in Outlook VBA to auto-fill spare parts requests and route emails, improving communication efficiency by 30%.",
"Worked cross-functionally with reliability engineers, plant engineers, and inventory coordinators to enhance data visibility, minimize manual errors, and improve end-to-end workflow reliability.",
      ],
      techStack: ["BigQuery", "SQL", "Node.js", "Javascript", "VBA", "Git", "Looker Studio"],
    },

    {
      id: "exp-4",
      title: "Midnight Sun Firmware team member",
      company: "Midnight Sun",
      dates: "August 2024 – January 2026",
      location: "Waterloo, ON",
      shortBullets: [
        "Collaborating on STM32 embedded C/C++ firmware development for driver controls and power systems",


      ],
      fullBullets: [
        "Collaborating on STM32 embedded C/C++ firmware development for driver controls and power systems",
"Designed power balancing algorithms for battery efficiency and performance using I2C, SPI, and UART protocols",
      ],
      techStack: ["C++", "C", "Linux", "STM32"],
    },
    // ===== ADD NEW EXPERIENCE CARD ABOVE THIS LINE =====
  ];

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
          <span>Scroll down for Resume</span>
          <ChevronDown className="h-4 w-4" />
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
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
                        <span className="text-xs text-muted-foreground">
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Bullets */}
                    <ul className="space-y-2 mb-4">
                      {((exp.id === "exp-4" || expandedId === exp.id)
                        ? exp.fullBullets
                        : exp.shortBullets
                      ).map(
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
                    </ul>

                    {/* Expand/Collapse Button */}
                    {exp.id !== "exp-4" && exp.fullBullets.length > exp.shortBullets.length && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleExpand(exp.id)}
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
                            src: "/ultrasam.gif",
                            alt: "Ultrasound segmentation preview",
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
                            src: "/untether.jpg",
                            alt: "Untether AI engineering preview",
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
                            src: "/iko.jpg",
                            alt: "IKO North America preview",
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
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedMedia({
                            src: "/midnightsun.webp",
                            alt: "Midnight Sun preview",
                            title: "Midnight Sun",
                          })
                        }
                        className="w-full text-left"
                        aria-label="Expand Midnight Sun preview"
                      >
                        <div className="w-full rounded-lg border border-border bg-secondary/20 shadow-sm px-1.5 py-2">
                          <div className="px-2 pb-2 text-xs font-semibold text-foreground/80 tracking-wide uppercase text-center">
                            Midnight Sun
                          </div>
                          <img
                            src="/midnightsun.webp"
                            alt="Midnight Sun preview"
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
                </div>
              </div>
            </div>
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
            <img
              src={expandedMedia.src}
              alt={expandedMedia.alt}
              className="w-full max-h-[85vh] object-contain rounded-md"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ExperienceSection;
