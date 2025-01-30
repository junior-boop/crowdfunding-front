import MenuLaterale from "@/components/menuLateral";
import ProjectCard from "@/components/projectCard";

export default function Home() {
  return (
    <div className="flex max-w-[1280px] gap-14 mx-auto">
      <div>
        <MenuLaterale />
      </div>
      <div className="flex-1 lg:grid grid-cols-3 gap-6">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      </div>
    </div>
  );
}
