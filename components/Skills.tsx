export default function Skills() {
  const skillCategories = [
    {
      name: "Coding Languages",
      skills: ["Java", "Python", "JavaScript", "C++", "C", "HTML & CSS", "Assembly", "CircuitPython", "LaTeX"],
    },
    {
      name: "Libraries",
      skills: [
        "React",
        "PyTorch",
        "TensorFlow",
        "LiteRT",
        "NumPy",
        "Matplotlib",
        "pandas",
        "jQuery",
        "netCDF4",
        "cartopy",
        "geojson",
        "xarray",
      ],
    },
    {
      name: "Tools",
      skills: [
        "Git",
        "Next.js",
        "Vercel",
        "Jupyter/Conda",
        "Adobe Suite",
        "Blender",
        "FTPs",
        "GCP/Firebase",
        "Figma (working)",
        "Unity (working)",
      ],
    },
    {
      name: "Languages",
      skills: ["English (Native)", "Mandarin (Advanced)", "Korean (Intermediate)", "Spanish (Beginner)"],
    },
  ]

  return (
    <section id="skills" className="bg-prussian_blue-300 text-baby_powder p-8 rounded-lg">
      <h2 className="text-4xl font-bold mb-8 text-beige-400 text-center">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h3 className="text-2xl font-semibold mb-4 text-myrtle_green-800">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span key={i} className="bg-myrtle_green-600 text-baby_powder px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

