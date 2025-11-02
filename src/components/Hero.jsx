export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-black via-purple-900/20 to-black text-white pt-20"
    >
      {/* Profile Image */}
      <div className="mb-8 flex justify-center">
        <div className="relative group">
          {/* Animated glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-300 animate-pulse"></div>
          
          {/* Profile image container */}
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-purple-500/50 group-hover:border-pink-500/50 transition-all duration-300 shadow-2xl">
            <img 
              src="/src/assets/JANANI_C.jpg"
              alt="Janani Chandrakanth"
              className="w-full h-full object-cover object-[70%_35%]"
            />
          </div>
        </div>
      </div>

      {/* Name + Intro */}
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
        Hello All, I'm{" "}
        <span className="text-pink-500 drop-shadow-lg">Janani C</span>
      </h1>

      <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed mb-2">
        A passionate <span className="text-pink-400">Full Stack Developer</span> | 
        <span className="text-purple-400"> UI/UX Designer</span> | 
        <span className="text-orange-400"> AI Enthusiast</span>
      </p>

      <p className="text-lg text-gray-400 mb-6">
        B.Tech IT Student @ Sri Ramakrishna Engineering College | CGPA: 8.5
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <a
          href="#projects"
          className="bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition-transform duration-300"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="border border-pink-500 text-pink-400 px-6 py-3 rounded-lg font-semibold hover:bg-pink-600/20 transition-all duration-300"
        >
          Let's Connect
        </a>
      </div>

      {/* Glow or animation */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-3xl absolute top-1/3 left-1/2 -translate-x-1/2"></div>
      </div>
    </section>
  );
}