import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Dolchico - Premium Fashion",
    description: "Elegant e-commerce platform showcasing premium fashion collections with modern design and seamless shopping experience.",
    tech: ["AWS", "Node.js", "Next.js", "PostgreSQL", "Prisma", "Express", "Tailwind CSS", "ShadCN"],
    image: "/images/dolchico.png",
    liveUrl: "https://dolchico.com",
    githubUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "AI PDF Analyzer",
    description: "AI-powered document processing with intelligent Q&A capabilities.",
    tech: ["TypeScript", "OpenAI", "PostgreSQL"],
    image: "/images/RAG.png",
    liveUrl: "https://insurance-project-sepia.vercel.app/",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Manish Academy",
    description: "Educational platform providing comprehensive learning resources and course management system.",
    tech: ["React", "JavaScript", "CSS"],
    image: "/images/Insurance.png",
    liveUrl: "https://academymanish.netlify.app/",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "BrownKudi - Farming Platform",
    description: "Modern agricultural platform connecting farmers with resources and market opportunities.",
    tech: ["React", "Next.js", "TailwindCSS"],
    image: "/images/farming.png",
    liveUrl: "https://brownkudi.vercel.app",
    githubUrl: "#"
  },
  {
    id: 5,
    title: "Fitness Center Website",
    description: "Modern fitness center showcase with service listings and contact forms.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/images/project2.png",
    liveUrl: "https://strengthgymphillaur.in",
    githubUrl: "#"
  },
  {
    id: 6,
    title: "Industrial Corporate Site",
    description: "Professional corporate website showcasing industrial services and capabilities.",
    tech: ["WordPress", "PHP", "MySQL"],
    image: "/images/project3.png",
    liveUrl: "https://sutlejindustrialcorp.com",
    githubUrl: "#"
  },
  {
    id: 7,
    title: "Tridenity - Startup Website",
    description: "Modern startup landing page with services showcase and portfolio.",
    tech: ["React", "Tailwind", "Framer Motion"],
    image: "/images/project1.png",
    liveUrl: "https://tridenity.com",
    githubUrl: "#"
  }
];

const ProjectCard = ({ project }) => {
  return (
    <div className={`group relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-800/50 rounded-2xl overflow-hidden transition-all duration-500 hover:border-neutral-700 hover:bg-neutral-900/80 ${
      project.featured 
        ? 'md:col-span-2 lg:col-span-3 border-blue-500/50 bg-gradient-to-br from-blue-900/20 via-neutral-900/50 to-neutral-900/50' 
        : ''
    }`}>
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
            ⭐ Featured Project
          </span>
        </div>
      )}

      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
            project.featured ? 'h-96 lg:h-[500px] object-contain bg-white/5' : 'h-48'
          }`}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Overlay Links */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors duration-200"
          >
            <ExternalLink className="w-4 h-4 text-white" />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors duration-200"
          >
            <Github className="w-4 h-4 text-white" />
          </a>
        </div>
      </div>

      {/* Project Content */}
      <div className={`space-y-4 ${project.featured ? 'p-8' : 'p-6'}`}>
        <div className="space-y-2">
          <h3 className={`font-semibold text-white group-hover:text-blue-400 transition-colors duration-300 ${
            project.featured ? 'text-2xl' : 'text-lg'
          }`}>
            {project.title}
          </h3>
          <p className={`text-neutral-400 leading-relaxed ${
            project.featured ? 'text-base' : 'text-sm'
          }`}>
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className={`font-medium bg-blue-600/20 text-blue-300 rounded-full ${
                project.featured ? 'px-4 py-2 text-sm' : 'px-2 py-1 text-xs'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const AppShowcase = () => {
  return (
    <section className="py-20 bg-black" id="work">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-light text-white tracking-wide">
            Featured <span className="font-semibold text-blue-400">Work</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            A selection of projects showcasing modern web development and design principles.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <button className="px-8 py-3 border border-neutral-600 text-neutral-300 font-medium rounded-lg hover:border-neutral-500 hover:text-white transition-all duration-200">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
