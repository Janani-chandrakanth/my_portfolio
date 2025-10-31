import { Mail, Github, Linkedin, MapPin, Phone, Code2 } from 'lucide-react';

export default function Contact() {
  const codingProfiles = [
    
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/JananiChandrakanth/", // Add your LeetCode profile
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
        </svg>
      ),
      color: "from-orange-500 to-yellow-500"
    },
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/profile/janani_2205041", // Add your HackerRank profile
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
          <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.908c0-.141-.116-.258-.258-.258h-.961c-.141 0-.258.115-.258.258v3.875h-.582c-.141 0-.258.115-.258.258v.961c0 .141.115.258.258.258h.582v3.875c0 .141.115.258.258.258h.961c.141 0 .258-.115.258-.258v-3.875h4.074v3.875c0 .141.115.258.258.258h.961c.141 0 .258-.115.258-.258V12.26h.578c.141 0 .258-.115.258-.258v-.961c0-.141-.115-.258-.258-.258h-.578V7.058c0-.141-.115-.258-.258-.258z"/>
        </svg>
      ),
      color: "from-green-600 to-teal-600"
    },
    {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/user/janani2e4a3/", // Add your GFG profile
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
          <path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.896 3.896 0 0 1-2.135-2.078 3.996 3.996 0 0 1-.272-1.838c.074-.64.287-1.249.619-1.778a4.155 4.155 0 0 1 1.429-1.329 4.51 4.51 0 0 1 1.914-.546c.655-.014 1.306.135 1.893.434a3.696 3.696 0 0 1 1.397 1.147c.308.476.503 1.028.571 1.603.07.574.003 1.158-.195 1.698zm-4.033-.883c.174.397.478.741.871.984a2.46 2.46 0 0 0 1.319.367c.439 0 .873-.115 1.26-.334.389-.219.712-.533.937-.912a2.378 2.378 0 0 0 .402-1.317c0-.458-.128-.902-.368-1.283a2.397 2.397 0 0 0-.976-.912 2.46 2.46 0 0 0-1.319-.367c-.439 0-.873.115-1.26.334a2.369 2.369 0 0 0-.937.912 2.378 2.378 0 0 0-.402 1.317c0 .458.128.902.473 1.211zM13.053 11.66c-.114-.003-.227-.015-.34-.035-.25-.046-.492-.126-.72-.24a2.53 2.53 0 0 1-.605-.41 2.218 2.218 0 0 1-.461-.637 2.129 2.129 0 0 1-.19-.82c-.009-.284.03-.567.114-.838.168-.542.487-1.033.926-1.415a3.225 3.225 0 0 1 1.486-.77 3.77 3.77 0 0 1 1.698.02c.54.137 1.04.404 1.452.776.205.185.38.405.517.651.137.247.234.516.288.797a2.05 2.05 0 0 1-.061.88 1.976 1.976 0 0 1-.363.71 2.185 2.185 0 0 1-.592.526 2.536 2.536 0 0 1-.706.313 3.085 3.085 0 0 1-.787.099h-.04c-.21 0-.42-.015-.628-.044a2.508 2.508 0 0 1-.602-.175 2.177 2.177 0 0 1-.528-.319 2.044 2.044 0 0 1-.413-.47c-.05-.074-.094-.15-.134-.23a1.882 1.882 0 0 1-.106-.304 1.628 1.628 0 0 1-.039-.324c0-.045.001-.09.004-.134.005-.09.016-.181.032-.27.035-.178.092-.35.167-.514.075-.163.17-.316.284-.454.114-.137.248-.258.399-.358a2.063 2.063 0 0 1 .535-.228 2.41 2.41 0 0 1 1.261-.003c.207.054.402.14.577.252.175.113.327.253.45.415a1.77 1.77 0 0 1 .244.556l-.003.002z"/>
        </svg>
      ),
      color: "from-green-500 to-emerald-500"
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-gradient-to-b from-purple-900/20 to-black text-white relative"
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">
        Let's <span className="text-pink-500">Connect!</span>
      </h2>

      {/* Contact Card */}
      <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-10 max-w-2xl w-full text-center shadow-lg hover:border-pink-500/30 transition-all duration-300">
        <p className="text-gray-300 mb-8 text-lg">
          I'm always excited to collaborate on interesting projects or discuss new opportunities. 
          Drop a message and let's build something meaningful together! 
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="mailto:jananichandrakanth777@gmail.com"
            className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Mail size={20} />
            <span>Email Me</span>
          </a>
          <a
            href="https://github.com/Janani-chandrakanth"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 border border-white/20"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/janani-c-b2338828a"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 border border-white/20"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Coding Profiles Section */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Code2 className="w-6 h-6 text-pink-400" />
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              Coding Profiles
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {codingProfiles.map((profile, i) => (
              <a
                key={i}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center gap-3 p-6 rounded-xl bg-gradient-to-br ${profile.color} bg-opacity-10 border border-white/20 hover:border-pink-500/50 transition-all duration-300 hover:scale-105 group`}
              >
                <div className="text-white group-hover:scale-110 transition-transform">
                  {profile.icon}
                </div>
                <span className="text-white font-medium">{profile.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-3 text-gray-400 mt-8 pt-6 border-t border-white/10">
          <div className="flex items-center justify-center gap-2">
            <Phone size={18} className="text-pink-400" />
            <span>+91 8148347980</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MapPin size={18} className="text-pink-400" />
            <span>Coimbatore, Tamil Nadu</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <p className="text-gray-400 mt-12 text-sm text-center">
        © {new Date().getFullYear()} Janani Chandrakanth • Built using React & Tailwind CSS
      </p>
      

      {/* Glow effect */}
      <div className="absolute w-[500px] h-[500px] bg-pink-600/10 blur-3xl bottom-0 left-1/2 -translate-x-1/2 -z-10"></div>
    </section>
  );
}