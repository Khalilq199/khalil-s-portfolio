import { useState } from "react";
import { ChevronDown, ChevronUp, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Experience {
  id: string;
  title: string;
  company: string;
  dates: string;
  shortBullets: string[];
  fullBullets: string[];
  techStack: string[];
  logo?: string;
}

const ExperienceSection = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // ===== ADD NEW EXPERIENCES HERE (Most recent first) =====
  const experiences: Experience[] = [
    {
      id: "exp-1",
      title: "AI/ML Research Intern",
      company: "Tech Research Lab",
      dates: "May 2024 – Aug 2024",
      shortBullets: [
        "Developed computer vision models achieving 95% accuracy on medical imaging datasets",
        "Built end-to-end ML pipelines processing 10K+ images daily",
        "Collaborated with cross-functional teams to deploy models to production",
      ],
      fullBullets: [
        "Developed computer vision models achieving 95% accuracy on medical imaging datasets",
        "Built end-to-end ML pipelines processing 10K+ images daily",
        "Collaborated with cross-functional teams to deploy models to production",
        "Implemented data augmentation strategies reducing training time by 40%",
        "Published internal research paper on novel preprocessing techniques",
      ],
      techStack: ["Python", "TensorFlow", "OpenCV", "AWS", "Docker"],
    },
    {
      id: "exp-2",
      title: "Full-Stack Software Developer",
      company: "HealthTech Startup",
      dates: "Jan 2024 – Apr 2024",
      shortBullets: [
        "Built patient management system serving 5,000+ active users",
        "Designed RESTful APIs handling 100K+ requests per day",
        "Reduced page load times by 60% through optimization",
      ],
      fullBullets: [
        "Built patient management system serving 5,000+ active users",
        "Designed RESTful APIs handling 100K+ requests per day",
        "Reduced page load times by 60% through optimization",
        "Implemented real-time notifications using WebSocket connections",
        "Led migration from legacy system with zero downtime",
      ],
      techStack: ["React", "Node.js", "PostgreSQL", "Redis", "TypeScript"],
    },
    {
      id: "exp-3",
      title: "Computer Vision Engineer Intern",
      company: "Robotics Company",
      dates: "Sep 2023 – Dec 2023",
      shortBullets: [
        "Developed object detection system for autonomous navigation",
        "Optimized inference speed from 15fps to 45fps on edge devices",
        "Created synthetic data generation pipeline for training",
      ],
      fullBullets: [
        "Developed object detection system for autonomous navigation",
        "Optimized inference speed from 15fps to 45fps on edge devices",
        "Created synthetic data generation pipeline for training",
        "Integrated depth sensing with RGB cameras for 3D reconstruction",
        "Documented codebase and trained junior team members",
      ],
      techStack: ["Python", "PyTorch", "ROS", "C++", "CUDA"],
    },
    // ===== ADD NEW EXPERIENCE CARD ABOVE THIS LINE =====
  ];

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
          Experience
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Building impactful software through internships and research
        </p>

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
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Logo/Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-lg bg-accent flex items-center justify-center">
                      <Building2 className="h-8 w-8 text-accent-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-card-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">
                        {exp.dates}
                      </span>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-2 mb-4">
                      {(expandedId === exp.id ? exp.fullBullets : exp.shortBullets).map(
                        (bullet, idx) => (
                          <li
                            key={idx}
                            className="text-muted-foreground text-sm flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {bullet}
                          </li>
                        )
                      )}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Expand/Collapse Button */}
                    {exp.fullBullets.length > exp.shortBullets.length && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleExpand(exp.id)}
                        className="gap-2 text-muted-foreground hover:text-foreground"
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
