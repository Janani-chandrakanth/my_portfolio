import { Code, Palette } from 'lucide-react';

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-16 bg-gradient-to-b from-black to-purple-900/10 text-white"
    >
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
        About <span className="text-pink-500">Me</span>
      </h2>

      {/* Content */}
      <div className="max-w-4xl">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-pink-500/30 transition-all duration-300">
          <div className="text-center space-y-6 text-lg text-gray-300 mb-8">
            <p>
              Hello All! I'm <span className="text-pink-400 font-semibold">Janani</span>, a passionate IT student from Coimbatore with a strong foundation in full-stack development, UI/UX design. I love transforming ideas into functional, beautiful applications that solve real-world problems.
            </p>

            <p>
              With hands-on experience in web development and a proven track record in hackathons, I bring both technical expertise and creative problem-solving to every project. From building automated systems to designing intuitive interfaces, I'm always excited to learn and create something impactful.
            </p>

            <p>
              Beyond code, I'm a learner, a dreamer, and someone who values the quiet discipline of improvement — one commit, one sunrise at a time. 
            </p>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="flex items-start gap-4 bg-purple-500/10 p-4 rounded-lg border border-purple-500/20">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <Code className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-purple-400 mb-1">Development</h3>
                <p className="text-gray-400 text-sm">Full-stack web applications with modern tech stacks - React, Node.js, MongoDB</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-pink-500/10 p-4 rounded-lg border border-pink-500/20">
              <div className="p-2 bg-pink-500/20 rounded-lg">
                <Palette className="w-6 h-6 text-pink-400" />
              </div>
              <div>
                <h3 className="font-semibold text-pink-400 mb-1">Design</h3>
                <p className="text-gray-400 text-sm">User-centric UI/UX with Figma and Canva - creating beautiful digital experiences</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Small glowing divider */}
      <div className="mt-10 w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
    </section>
  );
}