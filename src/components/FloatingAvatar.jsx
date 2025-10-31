import { useState, useEffect } from 'react';
import { MessageCircle, X, Heart, Star, Zap } from 'lucide-react';

export default function FloatingAvatar() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [currentSection, setCurrentSection] = useState('home');
  const [showMessage, setShowMessage] = useState(false);
  const [messageText, setMessageText] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [expression, setExpression] = useState('happy');
  const [isWaving, setIsWaving] = useState(false);

  // Messages and expressions for different sections
  const sectionData = {
    home: { message: "Hey! Welcome to my portfolio! 👋", expression: "happy", emoji: "👋" },
    about: { message: "Want to know more about me? 😊", expression: "curious", emoji: "😊" },
    experience: { message: "Check out my work experience! 💼", expression: "proud", emoji: "💼" },
    projects: { message: "Here are my favorite projects! 🚀", expression: "excited", emoji: "🚀" },
    skills: { message: "Click any skill to learn more! 💡", expression: "smart", emoji: "💡" },
    timeline: { message: "My journey so far... 📚", expression: "thoughtful", emoji: "📚" },
    achievements: { message: "Proud of these moments! 🏆", expression: "proud", emoji: "🏆" },
    blog: { message: "Read about my experiences! 📝", expression: "writing", emoji: "📝" },
    testimonials: { message: "What people say about me! 💬", expression: "blushing", emoji: "💬" },
    contact: { message: "Let's connect! Reach out anytime! 📧", expression: "friendly", emoji: "📧" }
  };

  // Avatar expressions
  const expressions = {
    happy: { eyes: "^_^", mouth: "smile" },
    excited: { eyes: "★_★", mouth: "big-smile" },
    curious: { eyes: "o_o", mouth: "small" },
    proud: { eyes: "^‿^", mouth: "smile" },
    smart: { eyes: "◕‿◕", mouth: "smile" },
    thoughtful: { eyes: "◉_◉", mouth: "neutral" },
    writing: { eyes: "─_─", mouth: "focused" },
    blushing: { eyes: ">///<", mouth: "shy" },
    friendly: { eyes: "^ω^", mouth: "smile" }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.keys(sectionData);
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = window.innerHeight / 2;
          
          if (rect.top <= offset && rect.bottom >= offset) {
            if (currentSection !== section) {
              setCurrentSection(section);
              setExpression(sectionData[section].expression);
              setMessageText(sectionData[section].message);
              setShowMessage(true);
              
              // Wave when entering new section
              setIsWaving(true);
              setTimeout(() => setIsWaving(false), 1000);
              
              setTimeout(() => setShowMessage(false), 4000);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSection]);

  // Subtle mouse follow
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 15;
      const y = (e.clientY / window.innerHeight - 0.5) * 15;
      setPosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleMessage = () => {
    if (!showMessage) {
      setMessageText(sectionData[currentSection].message);
      setIsWaving(true);
      setTimeout(() => setIsWaving(false), 1000);
    }
    setShowMessage(!showMessage);
  };

  if (!isVisible) return null;

  const currentExpression = expressions[expression] || expressions.happy;

  return (
    <>
      {/* Floating Avatar Container */}
      <div 
        className="fixed bottom-24 right-8 z-40 transition-all duration-300 ease-out"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      >
        {/* Message Bubble */}
        {showMessage && (
          <div className="absolute bottom-full right-0 mb-4 animate-slide-up">
            <div className="relative bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 text-white px-6 py-3 rounded-2xl shadow-2xl max-w-xs border-2 border-white/20">
              <p className="text-sm font-medium flex items-center gap-2">
                {messageText}
              </p>
              <div className="absolute -bottom-2 right-8 w-4 h-4 bg-purple-600 transform rotate-45 border-r-2 border-b-2 border-white/20"></div>
            </div>
          </div>
        )}

        {/* Avatar */}
        <div className="relative group">
          {/* Animated glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-60 group-hover:opacity-80 animate-pulse-slow"></div>
          
          {/* Main Avatar Circle */}
          <div 
            className={`relative w-24 h-24 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 border-4 border-white shadow-2xl cursor-pointer transform group-hover:scale-110 transition-all duration-300 flex items-center justify-center overflow-hidden ${isWaving ? 'animate-bounce' : ''}`}
            onClick={toggleMessage}
          >
            {/* Your photo as background */}
            <div className="absolute inset-0 opacity-30">
              <img 
                src="/src/assets/JANANI C.jpg"
                alt="Janani"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Cute Character Face */}
            <div className="relative z-10 flex flex-col items-center justify-center">
              {/* Eyes */}
              <div className="text-2xl font-bold mb-1 text-white drop-shadow-lg">
                {currentExpression.eyes}
              </div>
              
              {/* Mouth */}
              <div className="text-xl text-white drop-shadow-lg">
                {currentExpression.mouth === 'smile' && '‿'}
                {currentExpression.mouth === 'big-smile' && '⌣'}
                {currentExpression.mouth === 'small' && '·'}
                {currentExpression.mouth === 'neutral' && '—'}
                {currentExpression.mouth === 'focused' && '▭'}
                {currentExpression.mouth === 'shy' && '◡'}
              </div>
            </div>

            {/* Online indicator */}
            <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse shadow-lg">
              <div className="absolute inset-0 bg-green-400 rounded-full animate-ping"></div>
            </div>
          </div>

          {/* Waving hand animation */}
          {isWaving && (
            <div className="absolute -top-4 -left-4 text-3xl animate-wave">
              👋
            </div>
          )}

          {/* Message button */}
          <button
            onClick={toggleMessage}
            className="absolute -top-2 -right-2 p-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 rounded-full shadow-lg transition-all duration-300 hover:scale-110 border-2 border-white"
          >
            {showMessage ? (
              <X className="w-4 h-4 text-white" />
            ) : (
              <MessageCircle className="w-4 h-4 text-white animate-bounce-subtle" />
            )}
          </button>

          {/* Floating particles */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="relative">
              <Heart className="absolute text-pink-400 w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:animate-float-up" />
              <Star className="absolute left-4 text-yellow-400 w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:animate-float-up animation-delay-200" />
              <Zap className="absolute left-8 text-purple-400 w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:animate-float-up animation-delay-400" />
            </div>
          </div>

          {/* Section emoji */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-3xl animate-float pointer-events-none">
            {sectionData[currentSection]?.emoji}
          </div>
        </div>
      </div>

      {/* Hide button */}
      <button
        onClick={() => setIsVisible(false)}
        className="fixed bottom-24 right-36 z-40 px-3 py-1 bg-gray-800/80 hover:bg-gray-700 rounded-full text-gray-300 hover:text-white transition-all duration-300 text-xs font-medium"
        title="Hide avatar"
      >
        Hide ✕
      </button>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(-50%, 0px) rotate(0deg);
          }
          50% {
            transform: translate(-50%, -15px) rotate(5deg);
          }
        }

        @keyframes float-up {
          0% {
            opacity: 0;
            transform: translateY(0px);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(-30px);
          }
        }

        @keyframes wave {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(20deg);
          }
          75% {
            transform: rotate(-20deg);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        .animate-slide-up {
          animation: slide-up 0.4s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-up {
          animation: float-up 2s ease-out infinite;
        }

        .animate-wave {
          animation: wave 0.6s ease-in-out;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </>
  );
}