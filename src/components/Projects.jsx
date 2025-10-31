import rm1 from '../assets/projects/rms/rm1.png';
import rm2 from '../assets/projects/rms/rm2.png';
import rm3 from '../assets/projects/rms/rm3.png';
import rm4 from '../assets/projects/rms/rm4.png';
import rm5 from '../assets/projects/rms/rm5.png';
import rm6 from '../assets/projects/rms/rm6.png';
import rm7 from '../assets/projects/rms/rm7.png';
import rm8 from '../assets/projects/rms/rm8.png';
import rm9 from '../assets/projects/rms/rm9.png';
import rm10 from '../assets/projects/rms/rm10.png';
import rm11 from '../assets/projects/rms/rm11.png';
import rm12 from '../assets/projects/rms/rm12.png';
import rm13 from '../assets/projects/rms/rm13.png';
import rm14 from '../assets/projects/rms/rm14.png';
import rm15 from '../assets/projects/rms/rm15.png';
import rm16 from '../assets/projects/rms/rm16.png';
import rm17 from '../assets/projects/rms/rm17.png';
import rm18 from '../assets/projects/rms/rm18.png';

// ✅ Import videos the same way as images
import miniproj1 from '../assets/projects/MINIPROJ.mp4';
import miniproj2 from '../assets/projects/MINIPROJ2.mp4';

import { useState } from 'react';
import { Github, ExternalLink, X, Play, Image } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Digitized Bonafide Certificate System ",
      description:
        "A web-based solution to automate bonafide certificate requests, streamlining the process and enhancing security for students and administrators",
      tech: ["PHP", "MySQL", "FPDF"],
      github: "https://github.com/Janani-chandrakanth",
      link: "#",
      video: miniproj1, // ✅ Use imported video
      images: [],
    },
    {
      title: "Automated Grading System ",
      description:
        "ML-powered system that evaluates handwritten and typed answer sheets using OCR, NLP, and rule-based scoring for accurate assessment",
      tech: ["Machine Learning", "OCR", "NLP", "Python"],
      github: "https://github.com/Janani-chandrakanth",
      link: "#",
      video: miniproj2, // ✅ Use imported video
      images: [],
    },
    {
      title: "Recruitment Management System ",
      description:
        "Full-stack application with responsive UI/UX design for managing rms processes efficiently, built during internship",
      tech: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
      github: "https://github.com/Janani-chandrakanth",
      link: "#",
      video: null,
      images: [rm1,rm2,rm3,rm4,rm5,rm6,rm7,rm8,rm9,rm10,rm11,rm12,rm13,rm14,rm15,rm16,rm17,rm18],
    },
    {
      title: "Healthcare Platform Design ",
      description:
        "Comprehensive UI/UX design for healthcare platform featuring patient dashboards, appointment booking, live consultations, and logistics management",
      tech: ["Figma", "UI/UX", "Design Systems"],
      github: "#",
      link: "https://www.figma.com/proto/lulyeYdwYOdY52okkJkmuX/Design-Contest?node-id=0-1&t=vEJo8YALGPyhUdoc-1",
      video: null,
      images: [],
      isFigma: true,
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-gradient-to-b from-black to-purple-900/20 text-white"
    >
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        Featured <span className="text-pink-500">Projects</span>
      </h2>

      {/* Projects Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-pink-500 hover:scale-105 transform transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <h3 className="text-2xl font-semibold text-pink-400 mb-3 group-hover:text-pink-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-pink-500/20 text-pink-300 text-xs px-3 py-1 rounded-full border border-pink-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              {/* View Media Button - only show if has images or video */}
              {((project.images?.length > 0) || project.video) && (
                <button
                  onClick={() => openModal(project)}
                  className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                >
                  {project.video ? <Play size={16} /> : <Image size={16} />}
                  <span>View {project.video ? 'Demo' : 'Screenshots'}</span>
                </button>
              )}

              {!project.isFigma && project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-pink-400 transition-colors px-4 py-2 border border-white/20 rounded-lg hover:border-pink-400"
                >
                  <Github size={16} />
                  <span>Code</span>
                </a>
              )}

              {project.isFigma ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                >
                  <ExternalLink size={16} />
                  <span>View in Figma</span>
                </a>
              ) : (
                project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-pink-400 transition-colors px-4 py-2 border border-white/20 rounded-lg hover:border-pink-400"
                  >
                    <ExternalLink size={16} />
                    <span>Live</span>
                  </a>
                )
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-slate-900 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-pink-500/30 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 bg-pink-600 hover:bg-pink-700 rounded-full transition-colors z-10"
            >
              <X size={24} />
            </button>

            {/* Modal Content */}
            <div className="p-8">
              <h3 className="text-3xl font-bold text-pink-400 mb-4">
                {selectedProject.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Video */}
              {selectedProject.video && (
                <div className="mb-6">
                  <video 
                    controls 
                    className="w-full rounded-lg border border-pink-500/30"
                    preload="metadata"
                  >
                    <source src={selectedProject.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}

              {/* Screenshots */}
              {selectedProject.images?.length > 0 && (
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedProject.images.map((image, i) => (
                    <img
                      key={i}
                      src={image}
                      alt={`${selectedProject.title} screenshot ${i + 1}`}
                      className="w-full rounded-lg border border-pink-500/30 hover:scale-105 transition-transform duration-300"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Glow at bottom */}
      <div className="absolute w-[600px] h-[600px] bg-pink-600/10 blur-3xl bottom-0 left-1/2 -translate-x-1/2 -z-10"></div>
    </section>
  );
}