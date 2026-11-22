"use client";
import { useState } from "react";
import { X } from "lucide-react";
export default function Gallery({images,title}:{images:string[],title:string}){
 const [open,setOpen]=useState<string|null>(null);
 if(!images?.length) return null;
 return <><div className="gallery">{images.map((src,i)=><button key={src} onClick={()=>setOpen(src)} className="gallery-item"><img src={src} alt={`${title} screenshot ${i+1}`}/></button>)}</div>
 {open&&<div className="lightbox" onClick={()=>setOpen(null)}><button aria-label="Close"><X/></button><img src={open} alt={title}/></div>}</>
}
