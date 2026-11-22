import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, index }: { project: any; index: number }) {
  return <article className="project-card">
    {project.images?.[0] && <Link className="card-media" href={`/projects/${project.slug}`}>
      <img src={project.images[0]} alt={`${project.title} preview`} />
    </Link>}
    <div className="card-body">
      <div className="card-meta"><span>{String(index+1).padStart(2,"0")}</span><span className={`pill ${project.accent}`}>{project.status}</span></div>
      <h3>{project.title}</h3>
      <p>{project.short}</p>
      <div className="tags">{project.tools.slice(0,6).map((t:string)=><span key={t}>{t}</span>)}</div>
      <Link className="view-link" href={`/projects/${project.slug}`}>View project <ArrowUpRight size={16}/></Link>
    </div>
  </article>
}
