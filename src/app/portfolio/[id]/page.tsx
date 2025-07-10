// app/portfolio/[id]/page.tsx

import Image from "next/image";

interface Project {
  _id: string;
  title: string;
  description: string;
  tags: string[];
  category: string;
  images: string[];
  problem?: string;
  solution?: string;
}

// Generate static params for all portfolio items
export async function generateStaticParams() {
  try {
    const res = await fetch("https://file-uploads-server.onrender.com/uploads");
    const response = await res.json();

    // The API returns { data: Upload[] } structure
    const projects = response.data;

    if (!Array.isArray(projects)) {
      console.error("Expected projects array but got:", typeof projects);
      return [];
    }

    return projects.map((project: Project) => ({
      id: project._id,
    }));
  } catch (error) {
    console.error("Error fetching projects for static generation:", error);
    return [];
  }
}

// Fetch project data at build time
async function getProject(id: string): Promise<Project | null> {
  try {
    const res = await fetch(
      `https://file-uploads-server.onrender.com/uploads/${id}`
    );
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching project:", error);
    return null;
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = await getProject(id);

  if (!project) {
    return <div className="p-8 text-white">Project not found.</div>;
  }

  return (
    <div className="lg:p-8 p-6 mt-20 text-white">
      <h1 className="text-3xl font-bold mb-6">{project.title}</h1>

      <div className="mb-8 grid gap-8 lg:grid-cols-3">
        <div>
          <h5 className="font-semibold mb-2">Category</h5>
          <p className="text-slate-500">{project.category}</p>
          <h5 className="font-semibold mt-4 mb-2">Tags</h5>
          <p className="text-slate-500">{project.tags.join(", ")}</p>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Problem</h5>
          <p>{project.problem || "No problem specified."}</p>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Solution</h5>
          <p>{project.solution || "No solution specified."}</p>
        </div>
      </div>

      {project.images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`${project.title} - Image ${index + 1}`}
          width={1200}
          height={800}
          className="rounded-xl w-full mb-6"
          quality={100}
        />
      ))}
    </div>
  );
}
