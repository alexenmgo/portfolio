import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header(){
  return <header className="topbar">
    <div className="shell nav">
      <Link className="brand" href="/">AG</Link>
      <nav>
        <Link href="/#featured">Projects</Link>
        <Link href="/#experience">Experience</Link>
        <Link href="/#skills">Skills</Link>
        <Link href="/#education">Education</Link>
      </nav>
      <div className="nav-actions">
        <ThemeToggle />
        <a className="btn ghost small" href="mailto:alexisgop@kdis.ac.kr">Contact</a>
      </div>
    </div>
  </header>
}
