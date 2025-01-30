export default function Research() {
  const researchProjects = [
    {
      title: "Computer Science and Informatics Summer Research Experience",
      institution: "Stony Brook University, New York",
      date: "June 2022 - September 2022",
      description: [
        "Developed a computer vision-based deep learning tool to assist residents in classifying solid wastes for proper disposal.",
        "Trained artificial intelligence models for image classification, object detection (mAP_0.5=0.872), and instance segmentation.",
        "Integrated PyTorch and Tensorflow Lite models into an Android mobile app published on the Google Play store.",
      ],
    },
    {
      title: "AI & Drone Orthomosaic Guided River Cleanup",
      role: "Commercial Drone Pilot and AI Engineer",
      date: "September 2021 - June 2022",
      description: [
        "Applied advanced augmentation to the TACO dataset, increasing size 6x; conducted iterative transfer learning on YOLOv5, optimizing computer vision classification, detection, and segmentation models to classify waste from aerial orthomosaics.",
        "Enabled and automated statistical analysis of trash distribution and density, reducing cleanup time and increasing efficacy.",
      ],
    },
  ]

  return (
    <section id="research" className="bg-prussian_blue-300 text-baby_powder p-8 rounded-lg">
      <h2 className="text-4xl font-bold mb-8 text-beige-400 text-center">Research</h2>
      <div className="space-y-8">
        {researchProjects.map((project, index) => (
          <div key={index}>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
              <h3 className="text-2xl font-semibold text-myrtle_green-800">{project.title}</h3>
              <span className="text-lg text-baby_powder mt-1 sm:mt-0">{project.date}</span>
            </div>
            <p className="font-semibold mb-3 text-myrtle_green-600">{project.institution || project.role}</p>
            <ul className="list-disc list-inside space-y-2">
              {project.description.map((item, i) => (
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

