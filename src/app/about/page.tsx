import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'

export default function About() {
  return (
    <div className="font-base">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">About</h1>

      <div className="mb-10 text-base sm:text-lg">
        <p>
          Hi, my name is Murilo. I&apos;m a machine learning engineer. From Brazil, living in Belgium. Currently working at
          <a href="https://dataroots.io/" target="_blank" rel="noopener noreferrer">dataroots</a>. When not behind the computer, I enjoy playing soccer, traveling, spending time with friends and family.
        </p>
      </div>

      <Skills />

      <Experience />
    </div>
  )
}
