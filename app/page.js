"use client"
import { ExternalLink, X } from "lucide-react"
import { useState } from "react"

const portfolioItems = [
  { name: "grained js", href: "https://grainedjs.vercel.app/" },
  { name: "Biosynthesis", href: "https://progbiz-three.vercel.app/" },
  { name: "TSEEP", href: "https://texol-pi.vercel.app/" },
  { name: "The Design Agency", href: "https://supercode-task.vercel.app/" },
  { name: "Knowme", subtitle: "(Work in Progress)", href: "https://knowme-pi.vercel.app" },
  { name: "Educare", href: "https://noviindus-task.vercel.app" },
]

const rightColumnItems = [
  { name: "Wisetree", href: "https://acodex-delta.vercel.app" },
  { name: "Filter-ecom", href: "https://appscrip-task-priyanandan.vercel.app" },
  { name: "Findaboutme", subtitle: "(Bleibtgleich.(WIP))", href: "https://findoutabout-me.vercel.app" },
  {name:"w- 1st media", href:"https://woxro-task-seven.vercel.app/"}
]

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (e) => {
    e.preventDefault()
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleContactClick = () => {
    window.location.href =
      "mailto:priyanandantx@gmail.com?subject=Hello Priyanandan&body=I want to connect with you!"
  }

  const handleInformationClick = () => {
    window.location.href = "https://portfolio-gsap-beta.vercel.app/"
  }

  return (
    <div className="h-screen overflow-hidden flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="flex justify-between items-start p-8 md:p-12">
        <div className="space-y-6">
          <div>
            <h1 className="text-lg font-medium text-foreground">Priyanandan</h1>
            <p className="text-muted-foreground">Frontend Developer</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <button
            onClick={openModal}
            className="text-foreground hover:text-muted-foreground transition-colors"
          >
            Work
          </button>
          <button
            onClick={handleInformationClick}
            className="text-foreground hover:text-muted-foreground transition-colors"
          >
            Information
          </button>
          <button
            onClick={handleContactClick}
            className="text-foreground hover:text-muted-foreground transition-colors"
          >
            Contact
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="px-8 md:px-12 py-12 flex-grow">
        <div className="max-w-2xl space-y-8">
          <p className="text-muted-foreground text-sm">Welcome 👋</p>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-foreground">
              I’m a self-taught frontend developer with a passion for creating engaging, user-friendly web experiences.
              My UI journey started with small projects, and over time I’ve built and refined designs that focus on both
              functionality and aesthetics. Every project you see here reflects how I learn, improve, and experiment with
              modern web technologies.
            </p>
          </div>

          <div className="pt-8">
            <p className="text-muted-foreground text-sm mb-8">My UI Journey</p>

            <button
              onClick={openModal}
              className="group flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors"
            >
              <span>Works</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-8 md:px-12 py-6">
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <p className="hidden md:block">
            If you’d like to discuss a project or just say hi, feel free to reach out anytime.
          </p>
          <button
            onClick={handleContactClick}
            className="bg-foreground text-background px-4 py-2 hover:bg-muted-foreground transition-colors"
          >
            Contact
          </button>
        </div>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-background w-full max-w-6xl p-8 md:p-12 h-screen overflow-hidden">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-2xl font-medium text-foreground mb-2">Works</h2>
                <p className="text-muted-foreground">A collection of my UI/Frontend projects</p>
              </div>
              <button
                onClick={closeModal}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Projects - two column layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 overflow-y-auto h-[85%] pr-2">
              {/* Left column (portfolioItems) */}
              <div className="space-y-8">
                {portfolioItems.map((item, index) => (
                  <div key={index} className="group">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block space-y-2"
                    >
                      <h3 className="text-lg font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                        {item.name}{" "}
                        {item.subtitle && (
                          <span className="text-red-600 text-sm">{item.subtitle}</span>
                        )}
                      </h3>
                    </a>
                  </div>
                ))}
              </div>

              {/* Right column (rightColumnItems) */}
              <div className="space-y-8">
                {rightColumnItems.map((item, index) => (
                  <div key={index} className="group">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block space-y-2"
                    >
                      <h3 className="text-lg font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                        {item.name}{" "}
                        {item.subtitle && (
                          <span className="text-red-600 text-sm">{item.subtitle}</span>
                        )}
                      </h3>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
