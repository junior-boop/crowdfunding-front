import ProjectCard from "@/components/projectCard";

export default function Project() {
  return (
    <div>
        <div className="text-2xl font-bold font-poppins mb-6">
            Mes Projets
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
