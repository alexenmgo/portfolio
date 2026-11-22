import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata={
  title:"Alexis Gómez | Data & AI Specialist",
  description:"Portfolio of Alexis Gómez - data science, AI, analytics, automation, finance and public policy."
};

const themeScript = `
(function(){
  try {
    var saved = localStorage.getItem('portfolio-theme');
    document.documentElement.dataset.theme = saved === 'light' ? 'light' : 'dark';
  } catch (e) {
    document.documentElement.dataset.theme = 'dark';
  }
})();`;

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en" suppressHydrationWarning>
    <head><script dangerouslySetInnerHTML={{__html:themeScript}} /></head>
    <body>{children}</body>
  </html>
}
