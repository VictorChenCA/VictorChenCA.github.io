import { GrLinkedin, GrGithub, GrMail } from "react-icons/gr"

export default function Hero() {
  return (
    <section className="bg-prussian_blue-300 text-baby_powder py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-6xl font-bold mb-4">
          <span className="animate-gradient-text bg-clip-text text-transparent bg-gradient-to-r from-myrtle_green-400 via-beige-400 to-myrtle_green-400 bg-300% animate-gradient">
            Victor Chen
          </span>
        </h1>
        <p className="text-xl mb-8">Stanford CS Student | Researcher | Developer</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:victor36@stanford.edu"
            className="bg-myrtle_green text-baby_powder px-4 py-2 rounded-full flex items-center hover:bg-myrtle_green-600 transition-colors duration-300"
            aria-label="Email Victor Chen"
          >
            <GrMail className="mr-2" /> Email
          </a>
          <a
            href="https://github.com/victorchenca"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-myrtle_green text-baby_powder px-4 py-2 rounded-full flex items-center hover:bg-myrtle_green-600 transition-colors duration-300"
            aria-label="Victor Chen's GitHub profile"
          >
            <GrGithub className="mr-2" /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/victorchenca"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-myrtle_green text-baby_powder px-4 py-2 rounded-full flex items-center hover:bg-myrtle_green-600 transition-colors duration-300"
            aria-label="Victor Chen's LinkedIn profile"
          >
            <GrLinkedin className="mr-2" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

