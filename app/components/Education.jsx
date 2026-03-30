export default function Education() {
  const education = [
    {
      degree: "B.Tech in Computer Science Engineering ",
      school: "Shambhunath Institute of Engineering & Technology, Prayagraj UP (AKTU)",
      year: " Sept 2025",
      percentage: "72%",
      image: "/image/siet.jpg",
    },
    {
      degree: "Intermediate (12th) - Science (PCM)",
      school: "Surat Pandey Degree College Garhwa Jharkhand (JAC Ranchi)",
      year: "July 2021",
      percentage: "78.2%",
      image: "/image/12th spdc.jpg",
    },
    
  ];

  return (
    <section id="education" className="relative py-24 px-6 bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 transition-colors duration-300 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-3xl opacity-20 -top-48 -right-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-yellow-200 dark:bg-yellow-900/30 rounded-full blur-3xl opacity-20 -bottom-48 -left-48 animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Geometric decorative elements */}
        <svg className="absolute w-full h-full opacity-10 dark:opacity-5" viewBox="0 0 1000 1000">
          <circle cx="100" cy="100" r="50" stroke="currentColor" fill="none" className="text-blue-400"/>
          <circle cx="900" cy="900" r="30" stroke="currentColor" fill="none" className="text-yellow-400"/>
          <line x1="100" y1="100" x2="500" y2="500" stroke="currentColor" className="text-blue-300"/>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3">
            <span className="text-3xl">🎓</span>
            My Education
          </h2>
          <p className="text-gray-600 dark:text-gray-400 italic text-lg max-w-3xl mx-auto">
            "Education is Not The Learning Of Facts, But The Training Of The Mind To Think."
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-8">
          {education.map((item, index) => (
            <div
              key={index}
              className="relative group rounded-2xl overflow-hidden bg-white dark:bg-slate-800/50 backdrop-blur-md border border-gray-200 dark:border-purple-400/30 shadow-lg dark:shadow-2xl hover:shadow-xl dark:hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-500/0 group-hover:to-blue-500/10 dark:group-hover:to-purple-500/20 transition duration-300 z-0" />

              <div className="relative z-10 grid md:grid-cols-3 gap-6 p-8">
                {/* Image Section */}
                <div className="md:col-span-1 flex items-center justify-center">
                  <div className="relative w-full">
                    <img
                      src={item.image}
                      alt={item.school}
                      className="w-full h-48 rounded-xl object-cover shadow-lg transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:col-span-2 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {item.degree}
                  </h3>
                  
                  <p className="text-gray-700 dark:text-gray-300 text-lg font-semibold mb-3">
                    {item.school}
                  </p>

                  <div className="flex flex-wrap gap-4 items-center text-gray-600 dark:text-gray-400 mb-3">
                    <span className="flex items-center gap-2">
                       {item.year} 
                    </span>
                    {item.percentage !== "NA" && (
                      <span className="flex items-center gap-2 px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-semibold">
                         Percentage: {item.percentage}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}