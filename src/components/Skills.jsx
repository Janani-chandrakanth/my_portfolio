import { useState } from 'react';
import { Award, ExternalLink, Code, Database, Wrench, Palette, Layers, BookOpen, Video, FileText } from 'lucide-react';

export default function Skills({ onViewSkill }) {
  const [selectedCert, setSelectedCert] = useState(null);

  const skillsData = {
    "Java": {
      definition: "A versatile, object-oriented programming language used for building enterprise applications, Android apps, and web services.",
      resources: [
        { name: "Java Documentation", url: "https://docs.oracle.com/javase/tutorial/", type: "docs" },
        { name: "Java Programming - Coursera", url: "https://www.coursera.org/learn/java-programming", type: "course" },
        { name: "Java Tutorial - W3Schools", url: "https://www.w3schools.com/java/", type: "tutorial" }
      ]
    },
    "C": {
      definition: "A powerful procedural programming language that provides low-level memory access and is widely used in system programming and embedded systems.",
      resources: [
        { name: "Learn C - Official Tutorial", url: "https://www.learn-c.org/", type: "tutorial" },
        { name: "C Programming - GeeksforGeeks", url: "https://www.geeksforgeeks.org/c-programming-language/", type: "tutorial" },
        { name: "The C Programming Language Book", url: "https://www.amazon.com/Programming-Language-2nd-Brian-Kernighan/dp/0131103628", type: "docs" }
      ]
    },
    "SQL": {
      definition: "Structured Query Language for managing and manipulating relational databases. Essential for backend development and data analysis.",
      resources: [
        { name: "SQL Tutorial - W3Schools", url: "https://www.w3schools.com/sql/", type: "tutorial" },
        { name: "SQL for Data Science - Coursera", url: "https://www.coursera.org/learn/sql-for-data-science", type: "course" },
        { name: "SQLBolt - Interactive Lessons", url: "https://sqlbolt.com/", type: "tutorial" }
      ]
    },
    "MySQL": {
      definition: "An open-source relational database management system that uses SQL. Popular for web applications and used in the LAMP stack.",
      resources: [
        { name: "MySQL Documentation", url: "https://dev.mysql.com/doc/", type: "docs" },
        { name: "MySQL Tutorial - TutorialsPoint", url: "https://www.tutorialspoint.com/mysql/", type: "tutorial" },
        { name: "MySQL Crash Course", url: "https://www.youtube.com/watch?v=7S_tz1z_5bA", type: "video" }
      ]
    },
    "MongoDB": {
      definition: "A NoSQL document database that stores data in flexible, JSON-like documents. Great for handling large amounts of unstructured data.",
      resources: [
        { name: "MongoDB University", url: "https://university.mongodb.com/", type: "course" },
        { name: "MongoDB Documentation", url: "https://docs.mongodb.com/", type: "docs" },
        { name: "MongoDB Crash Course", url: "https://www.youtube.com/watch?v=ofme2o29ngU", type: "video" }
      ]
    },
    "React": {
      definition: "A JavaScript library for building user interfaces, particularly single-page applications. Developed and maintained by Meta (Facebook).",
      resources: [
        { name: "React Official Docs", url: "https://react.dev/", type: "docs" },
        { name: "React - The Complete Guide", url: "https://www.udemy.com/course/react-the-complete-guide/", type: "course" },
        { name: "React JS - freeCodeCamp", url: "https://www.youtube.com/watch?v=bMknfKXIFA8", type: "video" }
      ]
    },
    "Node.js": {
      definition: "A JavaScript runtime built on Chrome's V8 engine that allows you to run JavaScript on the server-side. Perfect for building scalable network applications.",
      resources: [
        { name: "Node.js Documentation", url: "https://nodejs.org/docs/", type: "docs" },
        { name: "Node.js Tutorial - W3Schools", url: "https://www.w3schools.com/nodejs/", type: "tutorial" },
        { name: "Node.js Full Course", url: "https://www.youtube.com/watch?v=Oe421EPjeBE", type: "video" }
      ]
    },
    "Tailwind CSS": {
      definition: "A utility-first CSS framework that provides low-level utility classes to build custom designs without leaving your HTML.",
      resources: [
        { name: "Tailwind CSS Docs", url: "https://tailwindcss.com/docs", type: "docs" },
        { name: "Tailwind CSS Crash Course", url: "https://www.youtube.com/watch?v=UBOj6rqRUME", type: "video" },
        { name: "Tailwind UI Components", url: "https://tailwindui.com/", type: "docs" }
      ]
    },
    "Canva": {
      definition: "A graphic design platform used to create social media graphics, presentations, posters, documents and other visual content.",
      resources: [
        { name: "Canva Design School", url: "https://www.canva.com/designschool/", type: "course" },
        { name: "Canva Tutorials", url: "https://www.canva.com/learn/", type: "tutorial" },
        { name: "Canva for Beginners", url: "https://www.youtube.com/watch?v=9sgsKGxDLKE", type: "video" }
      ]
    },
    "Figma": {
      definition: "A collaborative interface design tool used for creating UI/UX designs, prototypes, and design systems in a browser-based environment.",
      resources: [
        { name: "Figma Official Tutorials", url: "https://www.figma.com/resources/learn-design/", type: "tutorial" },
        { name: "Figma for Beginners", url: "https://www.youtube.com/watch?v=FTFaQWZBqQ8", type: "video" },
        { name: "Figma Community", url: "https://www.figma.com/community", type: "docs" }
      ]
    },
    "Git": {
      definition: "A distributed version control system for tracking changes in source code during software development. Essential for collaboration.",
      resources: [
        { name: "Git Documentation", url: "https://git-scm.com/doc", type: "docs" },
        { name: "Learn Git Branching", url: "https://learngitbranching.js.org/", type: "tutorial" },
        { name: "Git & GitHub Crash Course", url: "https://www.youtube.com/watch?v=RGOj5yH7evk", type: "video" }
      ]
    },
    "Github": {
      definition: "A web-based platform for version control using Git. It provides hosting for software development and collaboration features.",
      resources: [
        { name: "GitHub Docs", url: "https://docs.github.com/", type: "docs" },
        { name: "GitHub Skills", url: "https://skills.github.com/", type: "course" },
        { name: "GitHub for Beginners", url: "https://www.youtube.com/watch?v=PQsJR8ci3J0", type: "video" }
      ]
    },
    "VS Code": {
      definition: "A lightweight but powerful source code editor developed by Microsoft. Supports debugging, Git integration, and extensions.",
      resources: [
        { name: "VS Code Docs", url: "https://code.visualstudio.com/docs", type: "docs" },
        { name: "VS Code Tips & Tricks", url: "https://code.visualstudio.com/docs/getstarted/tips-and-tricks", type: "tutorial" },
        { name: "VS Code Crash Course", url: "https://www.youtube.com/watch?v=WPqXP_kLzpo", type: "video" }
      ]
    },
    "Eclipse": {
      definition: "An integrated development environment (IDE) used primarily for Java development, but supports other languages through plugins.",
      resources: [
        { name: "Eclipse Documentation", url: "https://www.eclipse.org/documentation/", type: "docs" },
        { name: "Eclipse IDE Tutorial", url: "https://www.tutorialspoint.com/eclipse/", type: "tutorial" },
        { name: "Eclipse for Java", url: "https://www.youtube.com/watch?v=S3vYvHVMD-8", type: "video" }
      ]
    }
  };

  const skillCategories = [
    {
      category: "Languages",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: ["Java", "C", "SQL"]
    },
    {
      category: "Database",
      icon: <Database className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      skills: ["MySQL", "MongoDB"]
    },
    {
      category: "Tools & Version Control",
      icon: <Wrench className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      skills: ["VS Code", "Eclipse", "Git", "Github"]
    },
    {
      category: "Design",
      icon: <Palette className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500",
      skills: ["Canva", "Figma"]
    },
    {
      category: "Frameworks",
      icon: <Layers className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      skills: ["React", "Node.js", "Tailwind CSS"]
    }
  ];

  const certifications = [
    {
      name: "Java Built-in Data Structures",
      issuer: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/verify/JQ5SP5MEPDM4",
      image: "/src/assets/certificates/coursera.jpg"
    },
    {
      name: "Canva Essentials",
      issuer: "Canva Design School",
      link: "https://www.canva.com/design-school/certification-award/57819795-ed37-4bb3-a31f-094a0114bf20",
      image: "/src/assets/certificates/canva.jpg"
    },
    {
      name: "SQL (Basic, Intermediate, Advanced)",
      issuer: "HackerRank",
      link: "https://www.hackerrank.com/certificates/iframe/da8797f3429c",
      image: "/src/assets/certificates/hackerrank-sql.jpg"
    }
  ];

  const openSkillModal = (skillName) => {
    if (skillsData[skillName] && onViewSkill) {
      onViewSkill({ name: skillName, ...skillsData[skillName] });
    }
  };

  const openCertModal = (cert) => {
    setSelectedCert(cert);
  };

  const closeCertModal = () => {
    setSelectedCert(null);
  };

  const getIconForResourceType = (type) => {
    switch (type) {
      case 'video':
        return <Video className="w-4 h-4" />;
      case 'course':
        return <BookOpen className="w-4 h-4" />;
      case 'tutorial':
        return <FileText className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-gradient-to-b from-purple-900/10 to-black text-white"
    >
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
        Skills & <span className="text-pink-500">Technologies</span>
      </h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl">
        Click on any skill to learn more about it and find learning resources
      </p>

      <div className="max-w-7xl w-full">
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="relative bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-pink-500/50 transition-all duration-300 hover:transform hover:scale-105 group overflow-hidden"
            >
              {/* Background glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Category Header */}
              <div className="relative z-10 flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.category}
                </h3>
              </div>

              {/* Skills Tags - Clickable */}
              <div className="relative z-10 flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <button
                    key={i}
                    onClick={() => openSkillModal(skill)}
                    className={`px-4 py-2 rounded-lg bg-white/10 text-gray-200 text-sm font-medium border border-white/20 hover:border-pink-400 hover:bg-white/20 transition-all duration-200 cursor-pointer hover:scale-110`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-pink-500/30 transition-all duration-300 mb-8">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Award className="w-8 h-8 text-pink-400" />
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Certifications
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <div 
                key={i} 
                className="relative bg-gradient-to-br from-pink-500/10 to-purple-500/10 p-6 rounded-xl border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 hover:scale-105 cursor-pointer group overflow-hidden"
                onClick={() => openCertModal(cert)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 to-purple-500/0 group-hover:from-pink-500/10 group-hover:to-purple-500/10 transition-all duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 bg-pink-500/20 rounded-lg">
                      <Award className="w-5 h-5 text-pink-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-semibold mb-1 group-hover:text-pink-300 transition-colors">
                        {cert.name}
                      </p>
                      <p className="text-gray-400 text-sm">{cert.issuer}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-pink-500/20">
                    <span className="text-pink-400 text-sm font-medium">View Certificate</span>
                    <ExternalLink className="w-4 h-4 text-pink-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={closeCertModal}
        >
          <div 
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl max-w-4xl w-full border-2 border-pink-500/30 relative overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
            
            <button
              onClick={closeCertModal}
              className="absolute top-4 right-4 p-2 bg-pink-600 hover:bg-pink-700 rounded-full transition-all duration-300 hover:rotate-90 z-10"
            >
              <span className="text-xl font-bold">×</span>
            </button>

            <div className="relative z-10 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-pink-500/20 rounded-xl">
                  <Award className="w-8 h-8 text-pink-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                    {selectedCert.name}
                  </h3>
                  <p className="text-gray-400 mt-1">{selectedCert.issuer}</p>
                </div>
              </div>

              {selectedCert.image && (
                <div className="mb-6 rounded-xl overflow-hidden border-2 border-pink-500/30 hover:border-pink-500/50 transition-all duration-300">
                  <img
                    src={selectedCert.image}
                    alt={`${selectedCert.name} certificate`}
                    className="w-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              <a
                href={selectedCert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-pink-500/50"
              >
                <ExternalLink size={20} />
                <span>View Original Certificate</span>
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="absolute w-[600px] h-[600px] bg-pink-600/10 blur-3xl bottom-0 left-1/2 -translate-x-1/2 -z-10"></div>
    </section>
  );
}