import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"Alexis Gómez | Data & AI Specialist",description:"Portfolio of Alexis Gómez — data science, AI, analytics, automation, finance and public policy."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
