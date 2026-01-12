import { useState } from "react";
import { ChevronDown, ChevronUp, Github, ExternalLink, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  title: string;
  tagline: string;
  image: string;
  problem: string;
  solution: string;
  outcome: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  substackUrl?: string;
}

const ProjectsSection = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // ===== ADD NEW PROJECTS HERE =====
  const projects: Project[] = [
    {
      id: "proj-1",
      title: "AI Medical Image Analyzer",
      tagline: "Deep learning system for early disease detection in X-rays",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      problem: "Radiologists spend hours manually reviewing X-rays, leading to fatigue and missed diagnoses",
      solution: "Built a CNN-based system that pre-screens X-rays and highlights areas of concern with 94% accuracy",
      outcome: "Reduced initial screening time by 70% and improved early detection rates in pilot hospital",
      techStack: ["Python", "TensorFlow", "FastAPI", "React", "Docker"],
      githubUrl: "https://github.com/Khalilq199/medical-ai",
      demoUrl: "https://demo.example.com",
      substackUrl: "https://substack.com/@khalilqamar/process",
    },
    {
      id: "proj-2",
      title: "Real-Time Object Tracker",
      tagline: "Computer vision system for autonomous drone navigation",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=400&fit=crop",
      problem: "Drones struggle to track moving objects in complex environments with varying lighting",
      solution: "Developed a hybrid tracking algorithm combining YOLO detection with Kalman filtering for prediction",
      outcome: "Achieved 45fps tracking on embedded hardware with 98% object retention rate",
      techStack: ["Python", "PyTorch", "OpenCV", "C++", "ROS"],
      githubUrl: "https://github.com/Khalilq199/drone-tracker",
      demoUrl: "https://youtube.com/watch?v=demo",
    },
    {
      id: "proj-3",
      title: "HealthSync Platform",
      tagline: "Full-stack patient management system for clinics",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      problem: "Small clinics lack affordable, integrated systems for patient records and scheduling",
      solution: "Built a cloud-native platform with real-time scheduling, secure records, and analytics dashboard",
      outcome: "Deployed to 3 clinics serving 2,000+ patients with 99.9% uptime",
      techStack: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
      githubUrl: "https://github.com/Khalilq199/healthsync",
      substackUrl: "https://substack.com/@khalilqamar/healthsync",
    },
    // ===== DUPLICATE THIS BLOCK TO ADD ANOTHER PROJECT =====
  ];

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="py-20 section-gradient-alt">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
          Projects
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Featured work showcasing AI, full-stack, and systems engineering
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-card-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-foreground/80 mb-4">
                  {project.tagline}
                </p>

                {/* Expanded Content */}
                {expandedId === project.id && (
                  <div className="space-y-3 mb-4 animate-fade-in">
                    <div>
                      <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                        Problem
                      </span>
                      <p className="text-sm text-foreground/85">{project.problem}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                        What I Built
                      </span>
                      <p className="text-sm text-foreground/85">{project.solution}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                        Outcome
                      </span>
                      <p className="text-sm text-foreground/85">{project.outcome}</p>
                    </div>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, expandedId === project.id ? undefined : 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {!expandedId && project.techStack.length > 3 && (
                    <span className="px-2 py-1 text-xs font-medium text-muted-foreground">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>

                {/* Links (shown when expanded) */}
                {expandedId === project.id && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.githubUrl && (
                      <Button asChild variant="outline" size="sm" className="gap-2">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.demoUrl && (
                      <Button asChild variant="outline" size="sm" className="gap-2">
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    )}
                    {project.substackUrl && (
                      <Button asChild variant="outline" size="sm" className="gap-2">
                        <a href={project.substackUrl} target="_blank" rel="noopener noreferrer">
                          <FileText className="h-4 w-4" />
                          My Process
                        </a>
                      </Button>
                    )}
                  </div>
                )}

                {/* Expand/Collapse Button */}
                <div className="mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toggleExpand(project.id)}
                    className="cta-pop gap-2 text-primary border-primary/40 hover:border-primary hover:text-primary shadow-sm hover:shadow-md transition-all w-full justify-center"
                  >
                    {expandedId === project.id ? (
                      <>
                        <ChevronUp className="h-4 w-4" />
                        Show Less
                      </>
                    ) : (
                      <>
                        <ChevronDown className="h-4 w-4" />
                        Learn More
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
