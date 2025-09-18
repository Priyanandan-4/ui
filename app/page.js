"use client"
import Image from "next/image"
import { Instagram, ArrowRight, X } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import icon from "@/public/images/icon.png"

const portfolioItems = [
  { name: "grained js", href: "https://grainedjs.vercel.app/" },
  { name: "Biosynthesis", href: "https://progbiz-three.vercel.app/" },
  { name: "TSEEP", href: "https://texol-pi.vercel.app/" },
  { name: "The Design Agency", href: "https://supercode-task.vercel.app/" },
  { name: "Knowme (portfolio)", href: "https://knowme-pi.vercel.app" },
  { name: "Educare", href: "https://noviindus-task.vercel.app" },
]

const rightColumnItems = [
  { name: "Wisetree", href: "https://acodex-delta.vercel.app" },
  { name: "Filter-ecom", href: "https://appscrip-task-priyanandan.vercel.app" },
  { name: "Findaboutme", subtitle: "(Bleibtgleich.)", href: "https://findoutabout-me.vercel.app" },
]

const animateText = (element) => {
  if (element) {
    const text = element.textContent || ""
    const chars = text.split("")
    element.innerHTML = ""

    chars.forEach((char, index) => {
      const span = document.createElement("span")
      span.textContent = char === " " ? "\u00A0" : char
      span.style.opacity = "0"
      span.style.display = "inline-block"
      span.style.transition = "opacity 0.5s ease-out"
      element.appendChild(span)

      // Animate each character with random delay
      setTimeout(
        () => {
          span.style.opacity = "1"
        },
        Math.random() * 1000 + index * 70,
      )
    })
  }
}

const animateElements = () => {
  // Animate footer elements with stagger
  const footerElements = document.querySelectorAll(".footer-element")
  footerElements.forEach((element, index) => {
    const el = element
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out"

    setTimeout(
      () => {
        el.style.opacity = "1"
        el.style.transform = "translateY(0)"
      },
      1500 + index * 200,
    )
  })

  // Animate main image with gentle float
  const mainImage = document.querySelector(".main-image")
  if (mainImage) {
    mainImage.style.animation = "float 4s ease-in-out infinite"
  }

  // Animate quote text with fade in
  const quoteText = document.querySelector(".quote-text")
  if (quoteText) {
    quoteText.style.opacity = "0"
    quoteText.style.transform = "translateY(15px)"
    quoteText.style.transition = "opacity 1s ease-out, transform 1s ease-out"

    setTimeout(() => {
      quoteText.style.opacity = "1"
      quoteText.style.transform = "translateY(0)"
    }, 800)
  }

  // Animate click link with subtle pulse
  const clickLink = document.querySelector(".click-link")
  if (clickLink) {
    clickLink.style.animation = "pulse 3s ease-in-out infinite"
  }
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalAnimating, setIsModalAnimating] = useState(false)
  const portfolioTextRef = useRef(null)
  const uiProjectsTextRef = useRef(null)

  useEffect(() => {
    if (portfolioTextRef.current) {
      animateText(portfolioTextRef.current)
    }
    if (uiProjectsTextRef.current) {
      // Delay UI PROJECTS animation slightly
      setTimeout(() => {
        animateText(uiProjectsTextRef.current)
      }, 300)
    }

    animateElements()
  }, [])

  const openModal = (e) => {
    e.preventDefault()
    setIsModalOpen(true)
    setIsModalAnimating(true)

    // Reset animation state after animation completes
    setTimeout(() => {
      setIsModalAnimating(false)
    }, 400)
  }

  const closeModal = () => {
    setIsModalAnimating(true)

    // Wait for animation to complete before hiding modal
    setTimeout(() => {
      setIsModalOpen(false)
      setIsModalAnimating(false)
    }, 300)
  }

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .modal-backdrop {
          opacity: 0;
          transition: opacity 0.3s ease-out;
        }
        
        .modal-backdrop.show {
          opacity: 1;
        }
        
        .modal-backdrop.hide {
          opacity: 0;
        }
        
        .modal-content {
          opacity: 0;
          transform: scale(0.9) translateY(20px);
          transition: opacity 0.4s ease-out, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .modal-content.show {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
        
        .modal-content.hide {
          opacity: 0;
          transform: scale(0.9) translateY(20px);
          transition: opacity 0.3s ease-in, transform 0.3s ease-in;
        }
      `}</style>

      <div className="min-h-screen bg-stone-100 flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-start p-8">
          <div>
            <h1 ref={uiProjectsTextRef} className="text-6xl font-serif text-black leading-tight">
              UI PROJECTS
            </h1>
            <p className="quote-text text-lg md:text-xl text-black mt-4 mb-4 font-serif">
              "Check them out—just click below."
            </p>
            <a
              href="#"
              onClick={openModal}
              className="click-link text-red-500 text-lg md:text-xl hover:text-red-600 transition-colors"
            >
              [ Click Here ]
            </a>
          </div>
          <div ref={portfolioTextRef} className="text-black text-lg md:text-xl font-serif">
            PortFoLio
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center">
          <div className="relative">
            <Image
              src={icon}
              alt="3D Character with pink balloons"
              width={290}
              height={290}
              priority
              className="main-image"
            />
          </div>
        </main>

        {/* Footer */}
        <footer className="flex justify-between items-center p-8">
          <div className=" text-black text-sm md:text-base font-jayco bg-[#e8e8e8] px-8 py-2 rounded-3xl">
            HELLO HOW ARE YOU
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className=" text-black hover:text-gray-600 transition-colors bg-[#e8e8e8] py-2 px-2 rounded-full"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4 md:w-6 md:h-6" />
            </a>
            <a
              href="#"
              className="footer-element text-black text-sm md:text-base hover:text-gray-600 transition-colors py-2 px-8 bg-[#e8e8e8] rounded-3xl"
            >
              Email
            </a>
          </div>
        </footer>

        {/* Modal */}
        {isModalOpen && (
          <div
            className={`fixed inset-0 bg-white/40 flex items-center justify-center z-50 modal-backdrop ${
              isModalAnimating ? "hide" : "show"
            }`}
          >
            <div
              className={`bg-white bg-opacity-50 p-8 md:p-12 max-w-5xl w-full h-[85vh] overflow-hidden relative modal-content ${
                isModalAnimating ? "hide" : "show"
              }`}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition-all hover:scale-110"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 h-full">
                <div className="space-y-4 overflow-hidden">
                  {portfolioItems.map((item, index) => (
                    <div key={index} className="group">
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between py-3 border-b border-gray-300 hover:border-gray-400 transition-colors"
                      >
                        <h2 className="text-xl md:text-2xl font-serif text-gray-900 group-hover:text-gray-700 transition-colors">
                          {item.name}
                        </h2>
                        <ArrowRight className="w-4 h-4 text-pink-500 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  ))}
                </div>
                <div className="space-y-4 overflow-hidden">
                  {rightColumnItems.map((item, index) => (
                    <div key={index} className="group">
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between py-3 border-b border-gray-300 hover:border-gray-400 transition-colors"
                      >
                        <h2 className="text-xl md:text-2xl font-serif text-gray-900 group-hover:text-gray-700 transition-colors">
                          {item.name}
                          {item.subtitle && (
                            <span className="ml-1 underline decoration-1 underline-offset-2">{item.subtitle}</span>
                          )}
                        </h2>
                        <ArrowRight className="w-4 h-4 text-pink-500 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
