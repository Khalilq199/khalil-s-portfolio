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
  substackLabel?: string;
}

const ProjectsSection = () => {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const toBullets = (text: string) =>
    text
      .split(/\.\s+/)
      .map((sentence) => sentence.trim())
      .filter(Boolean)
      .map((sentence) => (sentence.endsWith(".") ? sentence : `${sentence}.`));

  // ===== ADD NEW PROJECTS HERE =====
  const projects: Project[] = [
    {
      id: "proj-1",
      title: "PulseAI - Medical Diagnosis Assistant",
      tagline: "Deep learning system for early disease detection in X-rays",
      image: "/pulseai.avif",
      problem: "LLMs are unsafe for medical use when relying on internal knowledge due to hallucinations and lack of grounding. Keyword-based search fails to capture semantic meaning in complex medical queries.",
      solution: "Built an end-to-end Retrieval-Augmented Generation (RAG) medical chatbot grounded in textbooks and clinical literature. Implemented a PDF ingestion and chunking pipeline, generated embeddings, and indexed them in Pinecone for semantic retrieval. Developed a Flask API with LangChain-based orchestration and deployed the system using Docker, AWS EC2, and GitHub Actions CI/CD.",
      outcome: "Enabled evidence-grounded medical question answering using semantic retrieval rather than model recall. Delivered a fully deployed, production-style AI system with automated cloud deployment.",
      techStack: ["Python", "LangChain", "Flask", "Pinecone", "Docker", "AWS (EC2, ECR)", "GitHub Actions", "LLMs", "Embedding Models"],
      githubUrl: "https://github.com/Khalilq199/PulseAI",
      substackUrl: "https://khalilahmadqamar.substack.com/p/pulseai-medical-rag-chatbot",
      substackLabel: "Check out my process!",
    },
    {
      id: "proj-2",
      title: "AI Voice Assistant",
      tagline: "Real-time multi-user voice receptionist with live AI reasoning",
      image: "/ai_voice_assistant.png",
      problem: "Most voice assistants are single-user and limited to scripted interactions. Real-time, multi-user voice systems with live AI reasoning are hard to build and scale.",
      solution: "Built a real-time AI voice receptionist using Python, Flask, React, SQLite, and LiveKit. Implemented low-latency two-way voice conversations powered by OpenAI GPT models. Designed multi-room session management to support concurrent users and agents. Added secure token-based authentication for LiveKit audio sessions. Built a modular backend with an extensible agent framework and a SQLite-backed data layer for real queries (e.g., vehicle lookups).",
      outcome: "Delivered a fully functional multi-session voice AI system with reliable real-time performance. Demonstrated an end-to-end architecture combining audio streaming, LLMs, backend services, and persistent data. Created a scalable foundation for future task-specific agents and external API integrations.",
      techStack: [
        "Python",
        "Flask",
        "React",
        "SQLite",
        "LiveKit",
        "WebRTC",
        "OpenAI GPT models",
        "REST APIs",
        "Git/GitHub",
      ],
      githubUrl: "https://github.com/Khalilq199/AI-Voice-Assisstant",
      demoUrl: "https://www.youtube.com/watch?v=cD3q9o8iKaE&ab_channel=InnovationByKhalil",
    },
    {
      id: "proj-3",
      title: "NoteAnchor - Secure Notetaking app",
      tagline: "Secure full-stack note-taking with user authentication",
      image: "/noteanchor_1.png",
      problem: "I wanted to build a secure, full-stack web app that handles user data correctly end to end.",
      solution: "Built NoteAnchor, a secure note-taking web app using Python, Flask, SQLite, and SQLAlchemy. Implemented user registration, login, and session management with password hashing using Flask-Login. Designed full CRUD functionality for personal notes with per-user data isolation. Used SQLAlchemy ORM for structured database models and clean database access. Added form validation, flash messaging, and Jinja2 templating for dynamic, user-aware pages.",
      outcome: "Delivered a fully functional authentication-based web application with persistent user data. Demonstrated strong fundamentals in backend security, database design, and Flask routing. Built a clean foundation for future extensions such as note encryption, tagging, or cloud deployment.",
      techStack: ["Python", "Flask", "SQLite", "SQLAlchemy", "Flask-Login", "Jinja2", "HTML/CSS", "Git/GitHub"],
      githubUrl: "https://github.com/Khalilq199/healthsync",
      demoUrl: "https://demo.example.com",
    },
    {
      id: "proj-4",
      title: "Hercules - Automated Pick and Place Robot",
      tagline: "Autonomous robot with multi-sensor perception and control",
      image: "/Hercules_1.jpg",
      problem: "Needed a reliable autonomous system for real-time navigation, object classification, and manipulation.",
      solution: "Built Hercules, an autonomous robot programmed in C/C++ that uses multi-sensor fusion for real-time perception and control. Implemented autonomous navigation, object detection, and a coordinated robotic arm for pick-and-place tasks.",
      outcome: "Delivered a fully autonomous system capable of navigating, classifying objects, and manipulating them without human input. Demonstrated strong fundamentals in embedded C/C++, sensor integration, and real-time robotic control.",
      techStack: ["C", "C++", "Embedded Systems", "Sensor Fusion", "Robotics"],
      githubUrl: "https://github.com/Khalilq199/Automated-Pick-and-Place-robot---Hercules",
    },
    // ===== DUPLICATE THIS BLOCK TO ADD ANOTHER PROJECT =====
  ];

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section id="projects" className="py-20 section-gradient-alt">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
          Check out some of my Projects!
        </h2>
        <div className="flex items-center justify-center gap-2 text-primary text-sm font-medium mb-12 max-w-2xl mx-auto">
          <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 shadow-sm">
            Scroll down for Experience
          </span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => {
            const isExpanded = expandedIds.has(project.id);
            return (
            <div
              key={project.id}
              className={`bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ${
                isExpanded ? "md:max-w-[1100px] mx-auto" : ""
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Project Image */}
                <div
                  className={`relative overflow-hidden rounded-xl border border-border bg-gradient-to-br from-secondary/40 to-secondary/10 p-3 shadow-sm ${
                    project.id === "proj-2" && isExpanded
                      ? "md:w-80 lg:w-96"
                      : project.id === "proj-3" && isExpanded
                        ? "md:w-80 lg:w-96"
                        : project.id === "proj-4" && isExpanded
                          ? "md:w-80 lg:w-96"
                      : isExpanded
                        ? "md:w-80 lg:w-96 h-56 md:h-60 lg:h-72"
                        : "md:w-72 lg:w-80 h-52 md:h-52 lg:h-60"
                  }`}
                >
                  {(project.id === "proj-2" || project.id === "proj-3") && isExpanded ? (
                    <div className="w-full space-y-3">
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="w-full rounded-lg border border-border/60 bg-background/70 object-contain shadow-sm"
                      />
                      {project.id === "proj-2" && (
                        <img
                          src="/ai_voice_assistant_2.png"
                          alt={`${project.title} additional preview`}
                          className="w-full rounded-lg border border-border/60 bg-background/70 object-contain shadow-sm"
                          loading="lazy"
                        />
                      )}
                      {project.id === "proj-3" && (
                        <img
                          src="/noteanchor_2.png"
                          alt={`${project.title} additional preview`}
                          className="w-full rounded-lg border border-border/60 bg-background/70 object-contain shadow-sm"
                          loading="lazy"
                        />
                      )}
                    </div>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full transition-transform duration-500 hover:scale-105 ${
                        isExpanded ? "object-contain" : "object-contain"
                      } rounded-lg border border-border/60 bg-background/70 shadow-sm`}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 gap-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <h3 className="text-2xl font-semibold text-card-foreground">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    {isExpanded && (
                      <div className="animate-fade-in">
                        <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                          Problem
                        </span>
                        <ul className="mt-2 space-y-2 text-sm text-foreground/85">
                          {toBullets(project.problem).map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div>
                      <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                        What I Built
                      </span>
                      <ul className="mt-2 space-y-2 text-sm text-foreground/85">
                        {toBullets(project.solution).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {isExpanded && (
                      <div className="animate-fade-in">
                        <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                          Outcome
                        </span>
                        <ul className="mt-2 space-y-2 text-sm text-foreground/85">
                          {toBullets(project.outcome).map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-2">
                    {project.githubUrl && (
                      <Button asChild variant="outline" size="sm" className="gap-2 shine-link">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.demoUrl && (
                      <Button asChild variant="outline" size="sm" className="gap-2 shine-link">
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    )}
                    {project.substackUrl && (
                      <Button asChild variant="outline" size="sm" className="gap-2 shine-link">
                        <a href={project.substackUrl} target="_blank" rel="noopener noreferrer">
                          <FileText className="h-4 w-4" />
                          {project.substackLabel ?? "My Process"}
                        </a>
                      </Button>
                    )}
                  </div>

                  {/* Expand/Collapse Button */}
                  <div className="pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleExpand(project.id)}
                      className="cta-pop shine-link gap-2 text-primary border-primary/40 hover:border-primary hover:text-primary shadow-sm hover:shadow-md transition-all"
                    >
                    {isExpanded ? (
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
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
