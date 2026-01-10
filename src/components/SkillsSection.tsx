const SkillsSection = () => {
  // ===== EDIT SKILLS AS NEEDED =====
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "TypeScript", "JavaScript", "C++", "Java", "SQL", "Go"],
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Node.js", "TensorFlow", "PyTorch", "FastAPI", "Express", "Next.js", "OpenCV"],
    },
    {
      title: "Tools & Platforms",
      skills: ["AWS", "Docker", "Git", "Linux", "PostgreSQL", "MongoDB", "Redis", "Kubernetes"],
    },
    {
      title: "Domains",
      skills: ["AI/ML", "Computer Vision", "Deep Learning", "Full-Stack Development", "Data Engineering", "Robotics", "Embedded Systems"],
    },
  ];
  // ===== END EDITABLE SECTION =====

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
          Skills
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Technical expertise across the full stack and AI/ML domains
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="space-y-4"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium bg-secondary text-secondary-foreground rounded-md hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
