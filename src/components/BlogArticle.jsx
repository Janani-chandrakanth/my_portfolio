import { ArrowLeft, Calendar, Clock, Tag, Share2 } from 'lucide-react';

export default function BlogArticle({ article, onBack }) {
  if (!article) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900/10 to-black text-white">
      {/* Header with back button */}
      <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-300 hover:text-pink-400 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Blog</span>
          </button>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Category Badge */}
        <div className="mb-6">
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${article.color} text-white`}>
            {article.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent">
          {article.title}
        </h1>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8 pb-8 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>{article.readTime}</span>
          </div>
          <button className="flex items-center gap-2 ml-auto hover:text-pink-400 transition-colors">
            <Share2 className="w-5 h-5" />
            <span>Share</span>
          </button>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          {article.tags.map((tag, i) => (
            <span key={i} className="flex items-center gap-1 px-3 py-1 bg-pink-500/10 text-pink-300 rounded-full border border-pink-500/20 text-sm">
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>

        {/* Article Body - Professional Blog Styling */}
        <div className="prose prose-lg prose-invert max-w-none">
          {article.content.split('\n').map((paragraph, i) => {
            const trimmed = paragraph.trim();
            
            // Handle main headings (##)
            if (trimmed.startsWith('## ')) {
              return (
                <h2 key={i} className="text-3xl font-bold text-white mt-12 mb-6 first:mt-0">
                  {trimmed.replace('## ', '')}
                </h2>
              );
            }
            
            // Handle subheadings (###)
            if (trimmed.startsWith('### ')) {
              return (
                <h3 key={i} className="text-2xl font-semibold text-pink-400 mt-8 mb-4">
                  {trimmed.replace('### ', '')}
                </h3>
              );
            }
            
            // Handle bullet lists
            if (trimmed.startsWith('- ')) {
              return (
                <li key={i} className="text-gray-300 leading-loose text-lg ml-6 mb-3 list-disc marker:text-pink-400">
                  {trimmed.replace('- ', '')}
                </li>
              );
            }
            
            // Handle numbered lists
            if (trimmed.match(/^\d+\./)) {
              return (
                <li key={i} className="text-gray-300 leading-loose text-lg ml-6 mb-3 list-decimal marker:text-pink-400">
                  {trimmed.replace(/^\d+\./, '').trim()}
                </li>
              );
            }
            
            // Handle horizontal rule
            if (trimmed === '---') {
              return <hr key={i} className="my-12 border-white/10" />;
            }
            
            // Handle paragraphs with bold text
            if (trimmed && trimmed.includes('**')) {
              const parts = trimmed.split('**');
              return (
                <p key={i} className="text-gray-300 leading-loose text-lg mb-6 font-serif italic">
                  {parts.map((part, j) => 
                    j % 2 === 1 ? (
                      <strong key={j} className="text-white font-bold not-italic">
                        {part}
                      </strong>
                    ) : (
                      <span key={j}>{part}</span>
                    )
                  )}
                </p>
              );
            }
            
            // Regular paragraphs - Beautiful blog style
            if (trimmed) {
              return (
                <p key={i} className="text-gray-300 leading-loose text-lg mb-6 font-serif">
                  {trimmed}
                </p>
              );
            }
            
            return null;
          })}
        </div>

        {/* End of Article */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 italic">~ End of Article ~</p>
          <button
            onClick={onBack}
            className="mt-6 px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            ← Back to Blog
          </button>
        </div>
      </article>
    </div>
  );
}