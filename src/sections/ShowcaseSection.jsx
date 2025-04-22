import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRefs = useRef([]);
  const cardRefs = useRef([]);
  const [expanded, setExpanded] = useState({});

  const toggleReadMore = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  useGSAP(() => {
    sectionRefs.current.forEach((section) => {
      gsap.fromTo(section, { opacity: 0 }, { opacity: 1, duration: 1.5 });
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
          {/* Project 0 */}
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
              {expanded[0] && (
                <div className="mt-3 text-sm text-gray-300">
                  <p><strong>Functionality:</strong> Search hospitals, view details, rate, filter specialties, admin controls.</p>
                  <p><strong>Tech Stack:</strong> React, Tailwind CSS, Node.js</p>
                  <p><strong>Language:</strong> JavaScript</p>
                  <p><strong>Database:</strong> MongoDB</p>
                </div>
              )}
              <button onClick={() => toggleReadMore(0)} className="mt-2 text-blue-400 hover:underline">
                {expanded[0] ? "Show Less" : "Read More"}
              </button>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            {/* Project 1 */}
            <div className="project" ref={(el) => (cardRefs.current[1] = el)}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <a href="https://strengthgymphillaur.in" target="_blank" rel="noopener noreferrer">
                  <img src="/images/project2.png" alt="Strength Gym" />
                </a>
              </div>
              <h2>Strength Gym Fitness Centre</h2>
              {expanded[1] && (
                <div className="mt-2 text-sm text-gray-300 px-2">
                  <p><strong>Functionality:</strong> Showcase gym services, trainer info, contact form.</p>
                  <p><strong>Tech Stack:</strong> HTML, CSS, JS, Bootstrap</p>
                  <p><strong>Language:</strong> JavaScript</p>
                  <p><strong>Database:</strong> None (Static Site)</p>
                </div>
              )}
              <button onClick={() => toggleReadMore(1)} className="mt-2 text-blue-400 hover:underline">
                {expanded[1] ? "Show Less" : "Read More"}
              </button>
            </div>

            {/* Project 2 */}
            <div className="project" ref={(el) => (cardRefs.current[2] = el)}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <a href="https://sutlejindustrialcorp.com" target="_blank" rel="noopener noreferrer">
                  <img src="/images/project3.png" alt="Hospital Specialties Showcase" />
                </a>
              </div>
              <h2>Sutlej Industrial Corp</h2>
              {expanded[2] && (
                <div className="mt-2 text-sm text-gray-300 px-2">
                  <p><strong>Functionality:</strong> Showcase product range, services, contact form.</p>
                  <p><strong>Tech Stack:</strong> WordPress, Elementor</p>
                  <p><strong>Language:</strong> PHP (WordPress)</p>
                  <p><strong>Database:</strong> MySQL</p>
                </div>
              )}
              <button onClick={() => toggleReadMore(2)} className="mt-2 text-blue-400 hover:underline">
                {expanded[2] ? "Show Less" : "Read More"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="app-showcase" ref={(el) => (sectionRefs.current[1] = el)} id="projects">
        <div className="w-full showcaselayout">
          {/* Project 3 */}
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
              {expanded[3] && (
                <div className="mt-3 text-sm text-gray-300">
                  <p><strong>Functionality:</strong> Upload PDFs, get summaries, ask questions with AI-generated answers.</p>
                  <p><strong>Tech Stack:</strong> Next.js, TypeScript, OpenAI API, Milvus, Tailwind</p>
                  <p><strong>Language:</strong> TypeScript</p>
                  <p><strong>Database:</strong> PostgreSQL, Milvus (vector DB)</p>
                </div>
              )}
              <button onClick={() => toggleReadMore(3)} className="mt-2 text-blue-400 hover:underline">
                {expanded[3] ? "Show Less" : "Read More"}
              </button>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            {/* Project 4 */}
            <div className="project" ref={(el) => (cardRefs.current[4] = el)}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <a href="https://tridenity.com" target="_blank" rel="noopener noreferrer">
                  <img src="/images/project1.png" alt="Startup Web Agency" />
                </a>
              </div>
              <h2>My Startup Website - Tridenity</h2>
              {expanded[4] && (
                <div className="mt-2 text-sm text-gray-300 px-2">
                  <p><strong>Functionality:</strong> Landing page, services showcase, project portfolio, contact.</p>
                  <p><strong>Tech Stack:</strong> React, Tailwind, Framer Motion</p>
                  <p><strong>Language:</strong> JavaScript</p>
                  <p><strong>Database:</strong> None (Static)</p>
                </div>
              )}
              <button onClick={() => toggleReadMore(4)} className="mt-2 text-blue-400 hover:underline">
                {expanded[4] ? "Show Less" : "Read More"}
              </button>
            </div>

            {/* Project 5 */}
            <div className="project" ref={(el) => (cardRefs.current[5] = el)}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <a href="https://sih-project-two.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <img src="/images/agribid.png" alt="Agribid Marketplace App" />
                </a>
              </div>
              <h2>Agribid - A Marketplace for Farmers</h2>
              {expanded[5] && (
                <div className="mt-2 text-sm text-gray-300 px-2">
                  <p><strong>Functionality:</strong> Farmer and buyer login, product listing, real-time bidding, chat.</p>
                  <p><strong>Tech Stack:</strong> React, Node.js, Tailwind CSS, Socket.IO</p>
                  <p><strong>Language:</strong> JavaScript</p>
                  <p><strong>Database:</strong> MongoDB</p>
                </div>
              )}
              <button onClick={() => toggleReadMore(5)} className="mt-2 text-blue-400 hover:underline">
                {expanded[5] ? "Show Less" : "Read More"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppShowcase;
