import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import Header from "@/components/Header";
import Gallery from "@/components/Gallery";

export function generateStaticParams(){return projects.map(p=>({slug:p.slug}))}
export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params; const p:any=projects.find(x=>x.slug===slug); if(!p) notFound();
 return <main><Header/><article className="project-page shell">
 <Link className="back" href="/#featured"><ArrowLeft size={16}/> Back to portfolio</Link>
 <div className="project-kicker"><span className={`pill ${p.accent}`}>{p.status}</span></div>
 <h1>{p.title}</h1><p className="project-lead">{p.short}</p>
 <div className="project-actions">{Object.entries(p.links||{}).map(([label,url])=><a className="btn ghost" href={url as string} target="_blank" key={label}>{label}<ExternalLink size={15}/></a>)}</div>
 {p.video&&<div className="video-wrap"><iframe src={p.video} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title={`${p.title} video`}/></div>}
 <Gallery images={p.images||[]} title={p.title}/>
 <div className="detail-grid"><section><span className="detail-label">Problem</span><h2>What needed to be solved</h2><p>{p.problem}</p></section><section><span className="detail-label">Approach</span><h2>How I approached it</h2><p>{p.approach}</p></section></div>
 <section className="detail-section"><span className="detail-label">Methodology</span><h2>How the solution works</h2><ol className="method-list">{p.methodology.map((x:string)=><li key={x}>{x}</li>)}</ol></section>
 <section className="detail-section"><span className="detail-label">Results</span><h2>Key outcomes</h2><div className="outcome-grid">{p.impact.map((x:string)=><div className="outcome" key={x}>{x}</div>)}</div></section>
 <section className="detail-section"><span className="detail-label">Stack</span><h2>Tools & technologies</h2><div className="skill-cloud">{p.tools.map((x:string)=><span key={x}>{x}</span>)}</div></section>
 </article><footer className="shell footer"><span>© 2026 Alexis Gómez</span><a href="https://www.linkedin.com/in/alexis-enmanuel-g%C3%B3mez-1340b4173/" target="_blank">LinkedIn</a></footer></main>
}
