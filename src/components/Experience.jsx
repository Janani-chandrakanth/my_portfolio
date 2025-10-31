import { Briefcase } from 'lucide-react';

export default function Experience() {
  const experience = {
    company: "Sri Ethiraja Technologies",
    role: "Web Development Intern",
    duration: "June 2024 - July 2024",
    location: "Coimbatore, Tamil Nadu",
    highlights: [
      "Developed Recruitment Management System with Node.js and MongoDB",
      "Designed responsive UI/UX prototypes using modern design principles",
      "Delivered user-friendly application within project timeline"
    ]
  };

  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-gradient-to-b from-purple-900/10 to-black text-white"
    >
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        My <span className="text-pink-500">Experience</span>
      </h2>

      {/* Experience Card */}
      <div className="max-w-3xl w-full">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-pink-500/50 transition-all duration-300 shadow-xl">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-pink-500/20 rounded-lg">
              <Briefcase className="w-8 h-8 text-pink-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-pink-400 mb-1">{experience.role}</h3>
              <p className="text-xl text-gray-300 mb-2">{experience.company}</p>
              <p className="text-gray-400">{experience.duration} | {experience.location}</p>
            </div>
          </div>
          
          <div className="space-y-3 ml-16">
            {experience.highlights.map((highlight, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute w-[500px] h-[500px] bg-pink-600/10 blur-3xl -z-10"></div>
    </section>
  );
}