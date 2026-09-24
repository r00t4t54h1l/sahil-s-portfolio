import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { WorkExperience } from "@/components/WorkExperience";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#110720] text-white">
      <Header />
      <Hero />
      <Experience />
      <WorkExperience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
