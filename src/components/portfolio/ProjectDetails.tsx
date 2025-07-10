"use client";

import { Details } from "@/constants";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function ProjectDetails() {
  const { id } = useParams<{
    id: string;
  }>();
  const project = Details.find((p) => p.id.toString() === id);

  if (!project) {
    return <div className="p-8 text-white">Project not found.</div>;
  }

  return (
    <div className="lg:p-8 p-6 mt-20 text-white">
      <h1 className="text-3xl font-bold mb-6">{project.title}</h1>

      <div className="mb-8 grid gap-8 lg:grid-cols-3">
        <div>
          <ul className="text-slate-500">
            {project.services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Problem</h5>
          <p>{project.problem}</p>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Solution</h5>
          <p>{project.solution}</p>
        </div>
      </div>

      <Image
        src={project.image}
        alt={project.title}
        className="rounded-xl w-full mb-6"
        quality={100}
      />
    </div>
  );
}
