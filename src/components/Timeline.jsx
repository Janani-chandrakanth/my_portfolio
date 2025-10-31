import { GraduationCap, Briefcase, Award } from 'lucide-react';

export default function Timeline() {
  const timelineItems = [
    {
      year: "2024",
      type: "work",
      icon: <Briefcase className="w-5 h-5" />,
      title: "Web Development Intern",
      organization: "Sri Ethiraja Technologies",
      location: "Coimbatore, Tamil Nadu",
      description: "Developed Recruitment Management System with Node.js and MongoDB. Designed responsive UI/UX prototypes.",
      color: "from-pink-500 to-rose-500"
    },
    {
      year: "2023",
      type: "achievement",
      icon: <Award className="w-5 h-5" />,
      title: "Smart India Hackathon 2023",
      organization: "Team Lead",
      location: "National Level Competition",
      description: "Qualified at internal level with Plant Disease Detection System project.",
      color: "from-purple-500 to-pink-500"
    },
    {
      year: "2022 - 2026",
      type: "education",
      icon: <GraduationCap className="w-5 h-5" />,
      title: "B.Tech Information Technology",
      organization: "Sri Ramakrishna Engineering College",
      location: "Coimbatore, Tamil Nadu",
      description: "Current CGPA: 8.5/10. Focus on full-stack development, AI/ML, and UI/UX design.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      year: "2022",
      type: "education",
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Higher Secondary (HSC)",
      organization: "CEOA Matric Higher Secondary School",
      location: "Madurai, Tamil Nadu",
      description: "Bio-Maths stream with 91% marks.",
      color: "from-green-500 to-emerald-500"
    },
    {
      year: "2020",
      type: "education",
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Secondary School (SSLC)",
      organization: "CEOA Matriculation School",
      location: "Madurai, Tamil Nadu",
      description: "Completed with 99% marks.",
      color: "from-yellow-500 to-orange-500"
    },
  ];

  return (
    <section
      id="timeline"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-gradient-to-b from-black to-purple-900/20 text-white"
    >
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
        My <span className="text-pink-500">Journey</span>
      </h2>
      <p className="text-gray-400 text-center mb-16 max-w-2xl">
        A timeline of my education, experience, and achievements
      </p>

      {/* Timeline */}
      <div className="max-w-4xl w-full relative">
        {/* Center line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-500 via-purple-500 to-pink-500 hidden md:block"></div>

        {timelineItems.map((item, index) => (
          <div
            key={index}
            className={`relative mb-12 md:mb-16 ${
              index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%] md:text-left'
            }`}
          >
            {/* Timeline dot */}
            <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 hidden md:block z-10`}>
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center border-4 border-black shadow-lg`}>
                <div className="text-white">
                  {item.icon}
                </div>
              </div>
            </div>

            {/* Content card */}
            <div
              className={`bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-pink-500/50 transition-all duration-300 hover:scale-105 group ${
                index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
              }`}
            >
              {/* Mobile icon */}
              <div className="md:hidden mb-4">
                <div className={`inline-flex w-12 h-12 rounded-full bg-gradient-to-r ${item.color} items-center justify-center`}>
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>
              </div>

              {/* Year badge */}
              <div className="inline-block mb-3">
                <span className={`px-4 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${item.color} text-white`}>
                  {item.year}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-2">
                {item.title}
              </h3>

              {/* Organization */}
              <p className="text-lg text-gray-300 font-semibold mb-1">
                {item.organization}
              </p>

              {/* Location */}
              <p className="text-sm text-gray-400 mb-3">
                📍 {item.location}
              </p>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Glow effect */}
      <div className="absolute w-[600px] h-[600px] bg-pink-600/10 blur-3xl -z-10"></div>
    </section>
  );
}