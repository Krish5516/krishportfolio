"use client"
import { useEffect } from "react";
import { HoverEffect } from "../../../components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Languages :",
    description: "PHP, C/C++ Language, Java,  Python",
  },
  {
    title: "Frontend Technology :",
    description: "HTML, CSS, JavaScript",
  },
  {
    title: "Libraries / Frameworks :",
    description: "MySQL, Pandas, NumPy,OpenCV, JDBC ",
  },
  {
    title: "Backend Technology :",
    description: "PHP, Codeigniter, ASP.NET",
  },
  {
    title: "Other Tools / Technology",
    description: "Git, GitHUB, VS Code, CodeBlocks, Vercel",
  },
];
