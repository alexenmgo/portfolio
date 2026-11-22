import { Github, Linkedin, ArrowUpRight, Download, BadgeCheck } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Header from "@/components/Header";

const sections=[
 {key:"featured",eyebrow:"Selected Work",title:"Featured Projects",intro:"The projects that best represent my work across AI, machine learning, fintech, quantitative research and compliance technology."},
 {key:"internal",eyebrow:"Tools & Automation",title:"Internal Tools",intro:"Operational tools and business-intelligence products created to simplify recurring work and make decision-making clearer."},
 {key:"research",eyebrow:"Data Science & Policy",title:"Research",intro:"Applied research combining quantitative analysis, machine learning, economics and public policy."}
];
const experience=[
 ["Data Specialist - AI, Analytics & Compliance","CCI Puesto de Bolsa","May 2025 - Present","Build and lead data, AI, analytics and automation solutions for compliance monitoring, document intelligence, decision support and internal operations."],
 ["Python & Data Analytics Teaching Assistant","KDI School of Public Policy and Management","May 2024 - Dec 2024","Supported graduate students from 30+ countries in Python programming, data analysis and applied problem solving."],
 ["Data Analyst - Economic & Tax Studies","DGII","Oct 2020 - Aug 2023","Analyzed tax revenue, taxpayer behavior and economic indicators using SQL, R, Excel and Power BI for institutional and fiscal-policy reporting."]
];
const skills=["Python","SQL","BigQuery","R","pandas","NumPy","scikit-learn","LightGBM","XGBoost","SHAP","LLMs","NLP","Vertex AI","APIs","Function Calling","Power BI","Looker Studio","Tableau","Excel","Google Apps Script","AppSheet","Power Automate","GCP","Cloud Run","Docker","GitHub Actions"];

export default function Home(){return <main><Header/>
<section className="hero shell" id="top"><div className="eyebrow">DATA · AI · ECONOMICS · AUTOMATION</div><h1>Alexis Gómez</h1><h2>Data & AI Specialist · Economist</h2><p className="lead">I build practical data, machine learning and AI systems that connect technical rigor with real business, financial and public-policy problems.</p><div className="actions"><a className="btn" href="#featured">Explore my work <ArrowUpRight size={17}/></a><a className="btn ghost" href="/documents/Alexis_Gomez_CV.pdf" target="_blank">Download CV <Download size={17}/></a><a className="btn ghost" href="https://github.com/alexenmgo" target="_blank">GitHub <Github size={17}/></a><a className="btn ghost" href="https://www.linkedin.com/in/alexis-enmanuel-g%C3%B3mez-1340b4173/" target="_blank">LinkedIn <Linkedin size={17}/></a></div>
<div className="metrics"><div><b>4+</b><span>Years of experience</span></div><div><b>{projects.length}</b><span>Portfolio projects</span></div><div><b>2</b><span>Master's degrees</span></div><div><b>3</b><span>Core domains: Data, AI, Economics</span></div></div></section>

<section className="section shell"><div className="section-head"><span>About</span><h2>From economic analysis to intelligent systems.</h2></div><div className="about-grid"><p className="big-copy">Economist and data professional working across financial services, machine learning, generative AI, business intelligence, automation and public policy.</p><p className="muted">My work ranges from quantitative decision engines and document-intelligence workflows to dashboards, internal apps and applied research. I focus on solutions that are reliable, auditable and useful in real operations.</p></div></section>

{sections.map(s=><section className="section shell" id={s.key} key={s.key}><div className="section-head"><span>{s.eyebrow}</span><div><h2>{s.title}</h2><p className="section-intro">{s.intro}</p></div></div><div className="projects-grid">{projects.filter(p=>p.section===s.key).map((p,i)=><ProjectCard key={p.slug} project={p} index={i}/>)}</div></section>)}

<section className="section shell" id="experience"><div className="section-head"><span>Career</span><h2>Experience</h2></div><div className="timeline">{experience.map(x=><div className="timeline-row" key={x[0]}><div className="period">{x[2]}</div><div><h3>{x[0]}</h3><div className="company">{x[1]}</div><p>{x[3]}</p></div></div>)}</div></section>

<section className="section shell" id="skills"><div className="section-head"><span>Toolkit</span><h2>Skills & Technologies</h2></div><div className="skill-cloud">{skills.map(x=><span key={x}>{x}</span>)}</div></section>

<section className="section shell" id="education"><div className="section-head"><span>Background</span><h2>Education & Certifications</h2></div><div className="edu-grid">
<div className="edu-card"><h3>Master of Public Policy</h3><p>KDI School · South Korea · 2024</p><small>KOICA Scholarship · International Development · Trade & Industrial Policy</small></div>
<div className="edu-card"><h3>M.Sc. Data Science</h3><p>INTEC · Dominican Republic · 2023</p></div>
<div className="edu-card"><h3>B.A. Economics, Cum Laude</h3><p>INTEC · Dominican Republic · 2020</p></div>
<a className="edu-card cert" href="/certificates/aws-ai-practitioner.webp" target="_blank"><BadgeCheck/><div><h3>AWS Certified AI Practitioner</h3><p>Amazon Web Services · 2026–2029</p><small>View certificate →</small></div></a>
<a className="edu-card cert" href="/certificates/fuse-ai-ml.webp" target="_blank"><BadgeCheck/><div><h3>Microdegree™ in AI & Machine Learning</h3><p>Fusemachines · 2021</p><small>View certificate →</small></div></a>
<div className="edu-card"><h3>Executive Program in Finance</h3><p>BARNA Management School · 2025–2026</p></div>
</div></section>

<section className="cta shell"><div><span>Let's connect</span><h2>Open to data, AI, analytics and international opportunities.</h2></div><div className="actions"><a className="btn" href="https://www.linkedin.com/in/alexis-enmanuel-g%C3%B3mez-1340b4173/" target="_blank"><Linkedin size={17}/> Contact me</a><a className="btn ghost" href="/documents/Alexis_Gomez_CV.pdf" target="_blank"><Download size={17}/> CV</a></div></section>
<footer className="shell footer"><span>© 2026 Alexis Gómez</span><span>Santo Domingo, Dominican Republic</span></footer>
</main>}
