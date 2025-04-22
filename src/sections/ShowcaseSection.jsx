import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRefs = useRef([]);
  const cardRefs = useRef([]);

  useGSAP(() => {
    sectionRefs.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0 },
        { opacity: 1, duration: 1.5 }
      );
    });

    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <>
      {/* SECTION 1 */}
      <div
        className="app-showcase"
        ref={(el) => (sectionRefs.current[0] = el)}
        id="work"
      >
        <div className="w-full showcaselayout">
          <div className="first-project-wrapper" ref={(el) => (cardRefs.current[0] = el)}>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              <h2>
                On-Demand Rides Made Simple with a Powerful, User-Friendly App called Ryde
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with React Native, Expo, & TailwindCSS for a fast, user-friendly experience.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={(el) => (cardRefs.current[1] = el)}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img src="/images/project2.png" alt="Library Management Platform" />
              </div>
              <h2>The Library Management Platform</h2>
            </div>

            <div className="project" ref={(el) => (cardRefs.current[2] = el)}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="YC Directory App" />
              </div>
              <h2>YC Directory - A Startup Showcase App</h2>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2 */}
      <div
        className="app-showcase"
        ref={(el) => (sectionRefs.current[1] = el)}
        id="projects"
      >
        <div className="w-full showcaselayout">
          <div className="first-project-wrapper" ref={(el) => (cardRefs.current[3] = el)}>
            <div className="image-wrapper">
              <img src="/images/RAG.png" alt="RAG App Interface" />
            </div>
            <div className="text-content">
              <h2>AI-Powered PDF Summarizer & Q/A System</h2>
              <p className="text-white-50 md:text-xl">
                Built with TypeScript, OpenAI, Milvus, PostgreSQL for precise, context-aware answers.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={(el) => (cardRefs.current[4] = el)}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img src="/images/hospital.png" alt="Hospital Management Platform" />
              </div>
              <h2>My Startup website of Web Agency</h2>
            </div>

            <div className="project" ref={(el) => (cardRefs.current[5] = el)}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/agribid.png" alt="Agribid Marketplace App" />
              </div>
              <h2>Agribid - A Marketplace for Farmers</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppShowcase;
