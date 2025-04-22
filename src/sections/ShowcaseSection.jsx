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
      <div className="app-showcase" ref={(el) => (sectionRefs.current[0] = el)} id="work">
        <div className="w-full showcaselayout">
          <div className="first-project-wrapper" ref={(el) => (cardRefs.current[0] = el)}>
            <div className="image-wrapper">
              <a href="https://hospital-management-system-lyart-eta.vercel.app/" target="_blank" rel="noopener noreferrer">
                <img src="/images/hospital.png" alt="Hospital Management System Interface" />
              </a>
            </div>
            <div className="text-content">
              <h2>Hospital Management System</h2>
              <p className="text-white-50 md:text-xl">
                A platform built to streamline hospital operations, including rating hospitals, listing facilities, and displaying specialties.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={(el) => (cardRefs.current[1] = el)}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <a href="https://strengthgymphillaur.in" target="_blank" rel="noopener noreferrer">
                  <img src="/images/project2.png" alt="Hospital Facilities Listing" />
                </a>
              </div>
              <h2>Hospital Facilities Listing</h2>
            </div>

            <div className="project" ref={(el) => (cardRefs.current[2] = el)}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <a href="https://sutlejindustrialcorp.com" target="_blank" rel="noopener noreferrer">
                  <img src="/images/project3.png" alt="Hospital Specialties Showcase" />
                </a>
              </div>
              <h2>Hospital Specialties Showcase</h2>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="app-showcase" ref={(el) => (sectionRefs.current[1] = el)} id="projects">
        <div className="w-full showcaselayout">
          <div className="first-project-wrapper" ref={(el) => (cardRefs.current[3] = el)}>
            <div className="image-wrapper">
              <a href="https://hackathon-nine-peach.vercel.app/" target="_blank" rel="noopener noreferrer">
                <img src="/images/RAG.png" alt="RAG App Interface" />
              </a>
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
                <a href="https://tridenity.com" target="_blank" rel="noopener noreferrer">
                  <img src="/images/project1.png" alt="Startup Web Agency" />
                </a>
              </div>
              <h2>My Startup website of Web Agency</h2>
            </div>

            <div className="project" ref={(el) => (cardRefs.current[5] = el)}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <a href="https://sih-project-two.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <img src="/images/agribid.png" alt="Agribid Marketplace App" />
                </a>
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
