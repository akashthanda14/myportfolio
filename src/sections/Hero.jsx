import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect } from "react";

import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  useEffect(() => {
    // Remove the typing caret after animation completes
    const timer = setTimeout(() => {
      const typingElement = document.querySelector('.typing-text');
      if (typingElement) {
        typingElement.classList.add('typing-complete');
      }
    }, 3000); // 0.5s delay + 2s typing animation + 0.5s buffer

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2E2E2E_1px,transparent_1px),linear-gradient(to_bottom,#2E2E2E_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 animate-pulse" />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
          {/* Left content - 7 columns to balance with larger image */}
          <div className="lg:col-span-7 space-y-10">
            {/* Simple greeting */}
            <div className="space-y-6">
              <h1 className="font-light text-5xl md:text-7xl text-white tracking-wide leading-tight">
                <span className="typing-text">
                  <span>Hello, I'm</span>
                </span>
                <span className="block font-semibold text-blue-400 mt-2">
                  Akashdeep Singh
                </span>
              </h1>

              <p className="text-lg text-neutral-300 font-light leading-relaxed max-w-md">
                Full-stack developer creating digital solutions that matter.
              </p>
            </div>

            {/* Simple CTA */}
            <div className="flex gap-6 pt-4">
              <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200">
                View Work
              </button>
              <button className="px-6 py-3 border border-neutral-600 text-neutral-300 font-medium rounded-lg hover:border-neutral-500 hover:text-white transition-all duration-200">
                Contact
              </button>
            </div>
          </div>

          {/* Right visual - 5 columns for more space */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto lg:max-w-none">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-transparent rounded-3xl blur-2xl scale-105 animate-pulse"></div>
              
              {/* Profile image with enhanced effects */}
              <div className="relative group">
                <img
                  src="https://res.cloudinary.com/dmt4dj8ft/image/upload/f_auto,q_auto,w_800,h_800,c_fill/v1758031163/Gemini_Generated_Image_fz8x5zfz8x5zfz8x_1_vdlywf.png"
                  alt="Akashdeep Singh"
                  className="w-full h-full object-cover rounded-3xl shadow-2xl border-2 border-white/20 
                           group-hover:border-blue-400/50 transition-all duration-500 
                           group-hover:scale-105 group-hover:shadow-blue-500/25 group-hover:shadow-[0_0_50px_rgba(59,130,246,0.3)]"
                  loading="eager"
                />
                
                {/* Animated ring effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-blue-400/0 
                               group-hover:border-blue-400/30 transition-all duration-500 
                               animate-ping group-hover:animate-none"></div>
              </div>
              
              {/* Enhanced floating elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-600/30 to-purple-600/20 rounded-full backdrop-blur-sm animate-bounce shadow-lg" />
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-white/20 to-blue-400/10 rounded-full backdrop-blur-sm shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
