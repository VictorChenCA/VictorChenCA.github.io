export default function Honors() {
  const honors = [
    "United States Congressional Award - Gold Medal Recipient",
    "Duke Of Edinburgh International Award - Gold Award Recipient",
    "Taekwondo ('11-'24) - Third Dan Black Belt",
    "Figure Skating ('23-24) - Freestyle 1",
    "Concert Band, Wind Ensemble, Chamber Ensemble, Marching Band, Jazz Band, Winter Percussion, Color Guard Captain",
  ]

  return (
    <section id="honors" className="bg-prussian_blue-300 text-baby_powder p-8 rounded-lg">
      <h2 className="text-4xl font-bold mb-8 text-beige-400 text-center">Honors & Achievements</h2>
      <ul className="list-disc list-inside space-y-3">
        {honors.map((honor, index) => (
          <li key={index} className="text-baby_powder">
            {honor}
          </li>
        ))}
      </ul>
    </section>
  )
}

