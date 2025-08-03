import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

// async function getData() {
//   try {
//     const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);
//     if (!res.ok) throw new Error('Failed to fetch');
//     const data = await res.json();
//     return data.filter(item => item?.cover_image).sort(() => Math.random() - 0.5);
//   } catch (error) {
//     console.error('Blog fetch error:', error);
//     return [];
//   }
// }


export default async function Home() {
  // const blogs = await getData();

  return (
    <div suppressHydrationWarning >
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      {/* <Blog blogs={blogs} /> */}
      <ContactSection />
    </div>
  )
};