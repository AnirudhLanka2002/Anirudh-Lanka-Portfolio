import Exp from "../app/components/main/Exp";
import Hero from "../app/components/main/Hero";
import Projects from "../app/components/main/Projects";
import Skills from "../app/components/main/skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Projects/>
        <Exp />
      </div>
    </main>
  );
}
