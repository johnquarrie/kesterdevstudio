import ProjectDetails from "@/components/portfolio/ProjectDetails";

export default function Page({ params }: { params: { id: string } }) {
  return <ProjectDetails id={params.id} />;
}

