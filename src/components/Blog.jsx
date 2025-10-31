import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

export default function Blog({ onReadArticle }) {
  const fullArticle = {
    title: "A small share about my intern journey",
    date: "July 2024",
    readTime: "8 min read",
    category: "Web Development",
    color: "from-blue-500 to-cyan-500",
    tags: ["Node.js", "MongoDB", "Full-Stack", "Internship"],
    content: `
## The Beginning

During my internship at Sri Ethiraja Technologies in summer 2024, I was given an exciting challenge: build a complete Recruitment Management System from scratch, and I was both nervous and thrilled.

## The Problem

The company wanted us to build a system for managing the recruitment process by assigning various related modules.

## Technology Stack

After discussions with our mentor, we decided on:

**Frontend:**
- HTML5 for structure
- CSS3 for styling
- JavaScript for interactivity
- Bootstrap for responsive design

**Backend:**
- Node.js with Express.js framework
- MongoDB for database
- JWT for authentication

This was my first time working with MongoDB, and I was excited to learn about NoSQL databases!

## On the first day,
they told us to learn about ERP which stands for Enterprise Resource Planning ,its a software system that helps big companies manage
and automate their core business processes in one place .For an instance, Instead of each department keeping its own data -- like HR having one database , finance another and inventory a seperate one
ERP joins them together,so data can flow easily.

We were 13 of them ,they divided us in two groups and assigned as each ERP softwares , My team got oracle and we searched about it.
The two giants: SAP and Oracle
SAP -> Systems,Applications and Products in Data Processing , manages everything in one place
On the other hand Oracle same like sap, but if focuses more on databases and cloud Systems.They also uses AI and smart tools to give ideas or predictions
about business performance.

From the second day they started to assign the modules and deadlines to complete before it. 
And we assigned team leaders for each group and started to discuss to start the process. At first we got Applicants module , Role Assignment module and 
salary details module and employee benefits module for us . The other team was assigned with Authentication module , Employee module and Personal details module
Atlast we decided to integrate our both parts.

As we were in second year, we were new to work in backend and it gave us a opportunity to know about the backend process and APIs
(Application Programming Interface) which communicates between applications (between frontend and backend).
They conducted daily review to show our progress and suggestions to improve and took us along with them to client meetings.

## Challenges I Faced


###  Database Schema Design
Designing the MongoDB schema was challenging because I was used to SQL's structured approach. I learned about:
- Document relationships
- Embedding vs Referencing
- Indexing for performance

My final schema had three main collections:
- Users (HR managers, admins)
- Jobs (job postings)
- Applications (candidate applications)



## The UI/UX Journey

I spent significant time on the user interface because I believe good design is crucial. I:
- Created wireframes in Figma first
- Chose a clean, professional color scheme
- Ensured easy navigation
- Added loading states and error messages
- Made forms user-friendly with proper validation

## What I Learned

### Technical Skills
- Node.js & Express: Building RESTful APIs, middleware, routing
- MongoDB: NoSQL database design, queries, aggregation
- Authentication: JWT tokens, password hashing with bcrypt
- Frontend: DOM manipulation, async/await, fetch API
- Version Control: Git workflow, branching, merging

### Soft Skills
- Time Management: Meeting project deadlines
- Problem Solving: Debugging complex issues
- Communication: Regular updates to mentors
- Documentation: Writing clear code comments and documentation

## Key Takeaways

 Start with Planning: I spent the first week just planning and designing. This saved me time later.

 Break It Down: I divided the project into smaller modules and tackled them one by one.

 Don't Be Afraid to Ask: Whenever I was stuck, I asked my mentor. They appreciated my curiosity.

 Test Early, Test Often: I learned to test each feature immediately after building it.



## The Result

After 6 weeks of development, we integrated our both parts and done a presentation to the mentor and got suggestions to improve our skills and 
also they conducted viva to test our knowledge about the tech stack.
So overall , its the best experience that let you know your strength and weakness in the technical side and opportunity to learn more about technology
not alone tech but also helps you in soft skills and leadership qualities. In my case, it really helped me in team management and leading a team in proper way
The key I learnt from this is Patience and listening when working in a team. Empathy is one of the important characteristics of a team leader.




## Advice for Beginners

If you're about to build your first full-stack project:

 Choose a Real Problem: Build something that solves an actual problem
 Start Small: Don't try to build everything at once
 Learn by Doing: Reading is good, but building is better
 Embrace Errors: Every error is a learning opportunity
 Document Everything: Write down what you learn
 Ask for Feedback: Show your work to others


If you're working on your first full-stack project, keep going! The struggles are worth it. Feel free to reach out if you have questions!
What challenges have you faced in your projects? I'd love to hear about your experiences!
    `
  };

  const blogPosts = [
    {
      title: "My one month Intern Journey",
      excerpt: "Journey of creating the Recruitment Management System during my internship at Sri Ethiraja Technologies.",
      ...fullArticle
    }
  ];

  return (
    <section
      id="blog"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-gradient-to-b from-purple-900/20 to-black text-white"
    >
      {/* Title */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <BookOpen className="w-10 h-10 text-pink-400" />
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Blog & <span className="text-pink-500">Writings</span>
        </h2>
      </div>
      <p className="text-gray-400 text-center mb-12 max-w-2xl">
        Sharing my experiences, learnings, and thoughts on technology and development
      </p>

      {/* Blog Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl w-full mb-12">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="group bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-pink-500/50 transition-all duration-300 hover:transform hover:scale-105"
          >
            {/* Color bar */}
            <div className={`h-2 bg-gradient-to-r ${post.color}`}></div>

            <div className="p-6">
              {/* Category badge */}
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${post.color} text-white mb-4`}>
                {post.category}
              </span>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-300 leading-relaxed mb-4">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-pink-500/20 text-pink-300 rounded-full border border-pink-500/30">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Meta info */}
              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Read more button */}
              <button 
                onClick={() => onReadArticle(post)}
                className="flex items-center gap-2 text-pink-400 font-medium group-hover:gap-3 transition-all"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}

        {/* Coming Soon Cards */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 border-dashed flex flex-col items-center justify-center text-center">
          <div className="text-4xl mb-4">📝</div>
          <h3 className="text-xl font-bold text-gray-400 mb-2">More Articles Coming Soon!</h3>
          <p className="text-gray-500 text-sm">
            Stay tuned for articles!
          </p>
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute w-[600px] h-[600px] bg-pink-600/10 blur-3xl -z-10"></div>
    </section>
  );
}