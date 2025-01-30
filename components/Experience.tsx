export default function Experience() {
  const experiences = [
    {
      company: "Rézme",
      position: "Front-End Web Development Contractor",
      date: "December 2024 - Present",
      description: [
        "Iterated on a scalable web app with Next.js & Vercel, problem-solved to improve sign-up success rate by over 200%.",
        "Developed and documented in an agile startup environment. Prioritized tasks and effectively delivered features.",
      ],
    },
    {
      company: "Lawrence Berkeley National Lab",
      position: "Research Assistant, Earth and Energy Sciences Division",
      date: "June 2024 - September 2024",
      description: [
        "Designed & developed a global NetCDF data visualization webapp entirely from scratch, adopted as a lab-wide template.",
        "Implemented and hosted a LSTM enabled Methane Emissions visualizer, creating an interactive, rotatable, and 3D globe.",
      ],
    },
  ]

  return (
    <section id="experience" className="bg-prussian_blue-300 text-baby_powder p-8 rounded-lg">
      <h2 className="text-4xl font-bold mb-8 text-beige-400 text-center">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
              <h3 className="text-2xl font-semibold text-myrtle_green-800">{exp.company}</h3>
              <span className="text-lg text-baby_powder mt-1 sm:mt-0">{exp.date}</span>
            </div>
            <p className="font-semibold mb-3 text-myrtle_green-600">{exp.position}</p>
            <ul className="list-disc list-inside space-y-2">
              {exp.description.map((item, i) => (
                <li key={i} className="text-baby_powder">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

