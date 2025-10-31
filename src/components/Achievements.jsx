import { Award, Trophy, Users } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Smart India Hackathon 2023",
      description: "Team Lead - Qualified at internal level with Plant Disease Detection System",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Design Thinking Competition",
      description: "Runner-Up - First event participation at SREC COIN",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Healthcare Platform Design",
      description: "Created comprehensive UI/UX for healthcare platform with patient dashboards and live consultations",
      color: "from-pink-500 to-red-500"
    }
  ];

  return (
    <section
      id="achievements"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-gradient-to-b from-black to-purple-900/20 text-white"
    >
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        Achievements & <span className="text-pink-500">Events</span>
      </h2>

      {/* Achievements Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-pink-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-3 bg-gradient-to-r ${achievement.color} bg-opacity-20 rounded-lg text-white`}>
                {achievement.icon}
              </div>
              <h3 className="text-lg font-bold text-pink-400 group-hover:text-pink-300 transition-colors">
                {achievement.title}
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              {achievement.description}
            </p>
          </div>
        ))}
      </div>

      {/* Glow effect */}
      <div className="absolute w-[600px] h-[600px] bg-pink-600/10 blur-3xl bottom-0 -z-10"></div>
    </section>
  );
}