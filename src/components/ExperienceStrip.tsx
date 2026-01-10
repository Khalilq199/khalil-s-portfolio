const ExperienceStrip = () => {
  // ===== EDIT THESE HIGHLIGHTS AS NEEDED =====
  const highlights = [
    "Internships",
    "Research",
    "AI + Computer Vision",
    "Full-Stack Systems",
    "Healthcare Impact",
  ];
  // ===== END EDITABLE SECTION =====

  return (
    <section
      id="experience-strip"
      className="py-8 bg-primary"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-12">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex items-center gap-4 md:gap-8"
            >
              <span className="text-sm md:text-base lg:text-lg font-semibold text-primary-foreground uppercase tracking-wider">
                {highlight}
              </span>
              {index < highlights.length - 1 && (
                <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-primary-foreground/50" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceStrip;
