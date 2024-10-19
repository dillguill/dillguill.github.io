import Hero from "./components/Hero";
import Adventure from "./components/Adventure";
// import SkillsShowcase from "./components/SkillsShowcase";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Hero />
      <div className="w-full h-px bg-gray-700 mb-16"></div> {/* Divider */}
      <Adventure />
      <div className="w-full h-px bg-gray-700 mb-16"></div> {/* Divider */}
    </div>
  );
}
