import { ArrowLeft, ExternalLink, BookOpen, Video, FileText } from 'lucide-react';

export default function SkillDetail({ skill, onBack }) {
  if (!skill) return null;

  const getIconForResourceType = (type) => {
    switch (type) {
      case 'video':
        return <Video className="w-5 h-5" />;
      case 'course':
        return <BookOpen className="w-5 h-5" />;
      case 'tutorial':
        return <FileText className="w-5 h-5" />;
      default:
        return <ExternalLink className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900/10 to-black text-white">
      {/* Header with back button */}
      <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-300 hover:text-pink-400 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Skills</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Skill Title with gradient */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent">
            {skill.name}
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
        </div>

        {/* What is section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-pink-400 mb-6">
            What is {skill.name}?
          </h2>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
            <p className="text-gray-300 leading-loose text-lg font-serif italic">
              {skill.definition}
            </p>
          </div>
        </section>

        {/* Learning Resources Section */}
        <section>
          <h2 className="text-3xl font-bold text-pink-400 mb-6">
            Learning Resources
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Curated resources to help you master {skill.name}
          </p>

          <div className="grid gap-6">
            {skill.resources.map((resource, i) => (
              <a
                key={i}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-pink-500/50 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    {/* Icon */}
                    <div className="p-3 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl group-hover:from-pink-500/30 group-hover:to-purple-500/30 transition-colors">
                      {getIconForResourceType(resource.type)}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-pink-300 transition-colors">
                        {resource.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm border border-pink-500/30 capitalize">
                          {resource.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <ExternalLink className="w-6 h-6 text-pink-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform flex-shrink-0" />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Back button at bottom */}
        <div className="mt-16 text-center">
          <button
            onClick={onBack}
            className="px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            ← Back to Skills
          </button>
        </div>
      </div>
    </div>
  );
}