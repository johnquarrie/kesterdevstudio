"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useParams } from "next/navigation";

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

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get<{ data: Project }>(
          `https://file-uploads-server.onrender.com/uploads/${id}`
        );
        setProject(res.data.data);
      } catch (err: unknown) {
        console.error(err);
        setError("❌ Failed to fetch project details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) return <div className="p-8 text-white">Loading project...</div>;

  if (error)
    return (
      <div className="p-8 text-red-500">{error || "Project not found."}</div>
    );

  if (!project) return <div className="p-8 text-white">Project not found.</div>;

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

      {project.images[0] && (
        <Image
          src={project.images[0]}
          alt={project.title}
          width={1200}
          height={800}
          className="rounded-xl w-full mb-6"
          quality={100}
        />
      )}
      {project?.images && project.images.length > 1 && (
        <Image
          src={project.images[1]}
          alt={project.title}
          width={1200}
          height={800}
          className="rounded-xl w-full mb-6"
          quality={100}
        />
      )}
      {project?.images && project.images.length > 1 && (
        <Image
          src={project.images[2]}
          alt={project.title}
          width={1200}
          height={800}
          className="rounded-xl w-full mb-6"
          quality={100}
        />
      )}
      {project?.images && project.images.length > 1 && (
        <Image
          src={project.images[3]}
          alt={project.title}
          width={1200}
          height={800}
          className="rounded-xl w-full mb-6"
          quality={100}
        />
      )}
    </div>
  );
}
