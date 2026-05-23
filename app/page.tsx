"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useInView, AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
  Mail, Phone, MapPin, ExternalLink, ChevronDown,
  Menu, X, Trophy, BookOpen, Briefcase, Code,
  GraduationCap, FlaskConical, Send, ArrowUpRight,
} from "lucide-react";
import {
  personalInfo, education, skills, skillTags,
  coreValues, research, experience, hackathons, projects,
} from "@/lib/data";

/* ══════════════════════════════════════════ SVG Icons */
function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}
function LinkedinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/* ══════════════════════════════════════════ Neural Canvas (light mode) */
function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext("2d"); if (!ctx) return;
    let raf: number;
    type Node = { x: number; y: number; vx: number; vy: number; r: number };
    const nodes: Node[] = [];
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize(); window.addEventListener("resize", resize);
    for (let i = 0; i < 50; i++) {
      nodes.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: (Math.random()-.5)*.3, vy: (Math.random()-.5)*.3, r: Math.random()*1.5+0.5 });
    }
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i+1; j < nodes.length; j++) {
          const dx = nodes[i].x-nodes[j].x, dy = nodes[i].y-nodes[j].y;
          const d = Math.sqrt(dx*dx+dy*dy);
          if (d < 160) {
            ctx.strokeStyle = `rgba(99,102,241,${(1-d/160)*0.07})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath(); ctx.moveTo(nodes[i].x,nodes[i].y); ctx.lineTo(nodes[j].x,nodes[j].y); ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI*2);
        ctx.fillStyle = "rgba(99,102,241,0.2)"; ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
}

/* ══════════════════════════════════════════ Mouse Spotlight */
function MouseSpotlight() {
  const [pos, setPos] = useState({ x: -9999, y: -9999 });
  useEffect(() => {
    const h = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, []);
  return (
    <div className="fixed inset-0 z-0 pointer-events-none" style={{
      background: `radial-gradient(500px circle at ${pos.x}px ${pos.y}px, rgba(99,102,241,0.04) 0%, transparent 60%)`
    }} />
  );
}

/* ══════════════════════════════════════════ Scroll Progress */
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  return <motion.div className="scroll-prog" style={{ scaleX, transformOrigin: "left" }} />;
}

/* ══════════════════════════════════════════ Counter */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [v, setV] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let cur = 0; const step = to/50;
    const id = setInterval(() => { cur+=step; if(cur>=to){setV(to);clearInterval(id);}else setV(Math.floor(cur)); }, 28);
    return () => clearInterval(id);
  }, [inView, to]);
  return <span ref={ref}>{v}{suffix}</span>;
}

/* ══════════════════════════════════════════ Typing */
const ROLES = ["Data Scientist","ML Engineer","Graduate Researcher","Bioinformatics Builder","Deep Learning Engineer"];
function TypedRole() {
  const [idx,setIdx] = useState(0);
  const [text,setText] = useState("");
  const [del,setDel] = useState(false);
  const [wait,setWait] = useState(false);
  useEffect(() => {
    if(wait){const t=setTimeout(()=>{setWait(false);setDel(true);},2000);return()=>clearTimeout(t);}
    const cur=ROLES[idx];
    if(!del){
      if(text.length<cur.length){const t=setTimeout(()=>setText(cur.slice(0,text.length+1)),60);return()=>clearTimeout(t);}
      setWait(true);
    }else{
      if(text.length>0){const t=setTimeout(()=>setText(text.slice(0,-1)),35);return()=>clearTimeout(t);}
      setDel(false);setIdx(i=>(i+1)%ROLES.length);
    }
  },[text,del,idx,wait]);
  return <span className="gt-shift font-black">{text}<span className="cur text-indigo-500">|</span></span>;
}

/* ══════════════════════════════════════════ 3D Tilt */
function TiltCard({ children, className="" }: { children:React.ReactNode; className?:string }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el=ref.current; if(!el) return;
    const r=el.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-0.5, y=(e.clientY-r.top)/r.height-0.5;
    el.style.transform=`perspective(900px) rotateY(${x*6}deg) rotateX(${-y*6}deg) translateZ(4px)`;
  },[]);
  const onLeave = useCallback(()=>{ if(ref.current) ref.current.style.transform="perspective(900px) rotateY(0) rotateX(0) translateZ(0)"; },[]);
  return <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className={className} style={{transition:"transform 0.12s ease",transformStyle:"preserve-3d"}}>{children}</div>;
}

/* ══════════════════════════════════════════ Animate helpers */
function FadeIn({ children, delay=0, className="" }: { children:React.ReactNode; delay?:number; className?:string }) {
  const ref=useRef(null); const inView=useInView(ref,{once:true,margin:"-70px"});
  return <motion.div ref={ref} initial={{opacity:0,y:28}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.65,delay,ease:[0.22,1,0.36,1]}} className={className}>{children}</motion.div>;
}
function SlideIn({ children, delay=0, className="" }: { children:React.ReactNode; delay?:number; className?:string }) {
  const ref=useRef(null); const inView=useInView(ref,{once:true,margin:"-60px"});
  return <motion.div ref={ref} initial={{opacity:0,x:-24}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.6,delay,ease:[0.22,1,0.36,1]}} className={className}>{children}</motion.div>;
}

/* ══════════════════════════════════════════ Section Header */
function SH({ n, icon:Icon, title, sub }: { n:string; icon:React.ElementType; title:string; sub?:string }) {
  return (
    <FadeIn className="mb-14">
      <div className="flex items-start gap-4 mb-4">
        <span className="sec-num leading-none pt-1">{n}</span>
        <div>
          <div className="flex items-center gap-3 mb-1.5">
            <div className="p-2 rounded-xl bg-indigo-50 border border-indigo-100">
              <Icon className="w-4 h-4 text-indigo-500" />
            </div>
            <h2 className="text-4xl font-black tracking-tight text-slate-900">{title}</h2>
          </div>
          {sub && <p className="text-sm text-slate-400 ml-12">{sub}</p>}
        </div>
      </div>
      <hr className="sdiv" />
    </FadeIn>
  );
}

/* ══════════════════════════════════════════ Navbar */
const NAV = [{l:"About",h:"#about"},{l:"Research",h:"#research"},{l:"Experience",h:"#experience"},{l:"Projects",h:"#projects"},{l:"Hackathons",h:"#hackathons"},{l:"Contact",h:"#contact"}];

function Navbar() {
  const [scrolled,setScrolled]=useState(false);
  const [open,setOpen]=useState(false);
  const [hov,setHov]=useState("");
  useEffect(()=>{ const f=()=>setScrolled(window.scrollY>50); window.addEventListener("scroll",f); return()=>window.removeEventListener("scroll",f); },[]);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ background: scrolled?"rgba(255,255,255,0.92)":"rgba(255,255,255,0.7)", backdropFilter:"blur(20px)", borderBottom: scrolled?"1px solid #f1f5f9":"1px solid transparent", boxShadow: scrolled?"0 1px 20px rgba(0,0,0,0.05)":"none" }}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black text-white"
            style={{background:"linear-gradient(135deg,#6366f1,#8b5cf6)",boxShadow:"0 2px 12px rgba(99,102,241,0.3)"}}>AV</div>
          <span className="text-xs font-mono text-slate-400 group-hover:text-slate-600 transition-colors">Data Scientist &amp; ML Engineer</span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          {NAV.map(({l,h})=>(
            <a key={h} href={h} onMouseEnter={()=>setHov(h)} onMouseLeave={()=>setHov("")}
              className="relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg"
              style={{color:hov===h?"#6366f1":"#64748b",background:hov===h?"#eef2ff":"transparent"}}>
              {l}
            </a>
          ))}
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
            className="ml-3 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold btn-outline border border-slate-200">
            <GithubIcon className="w-3.5 h-3.5"/>GitHub
          </a>
        </div>
        <button onClick={()=>setOpen(!open)} className="md:hidden p-2 text-slate-400 hover:text-slate-700">
          {open?<X className="w-5 h-5"/>:<Menu className="w-5 h-5"/>}
        </button>
      </div>
      <AnimatePresence>
        {open&&(
          <motion.div initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}} exit={{opacity:0,height:0}}
            className="md:hidden overflow-hidden border-t border-slate-100 bg-white">
            {NAV.map(({l,h})=>(
              <a key={h} href={h} onClick={()=>setOpen(false)}
                className="block px-6 py-3.5 text-sm text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors border-b border-slate-50">
                {l}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

/* ══════════════════════════════════════════ Hero */
function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-white">
      <div className="dot-grid absolute inset-0 opacity-60" />
      {/* Soft gradient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute rounded-full" style={{width:700,height:700,top:"-20%",right:"-15%",background:"radial-gradient(circle,rgba(99,102,241,0.07) 0%,transparent 70%)"}}/>
        <div className="absolute rounded-full" style={{width:600,height:600,bottom:"-15%",left:"-10%",background:"radial-gradient(circle,rgba(168,85,247,0.06) 0%,transparent 70%)"}}/>
      </div>

      <div className="relative z-10 max-w-5xl w-full mx-auto">
        {/* Status pill */}
        <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.1}}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6 bg-emerald-50 border border-emerald-200 text-emerald-700">
          <span className="pulse-green"/>
          Open to Data Science · ML Engineer · Analyst Roles · New York, NY
        </motion.div>

        {/* Name */}
        <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{delay:0.18,duration:0.7}}>
          <h1 className="font-black tracking-tighter leading-none text-slate-900 mb-2" style={{fontSize:"clamp(3.5rem,11vw,9rem)"}}>
            Akhilesh
          </h1>
          <h1 className="font-black tracking-tighter leading-none mb-6" style={{fontSize:"clamp(3.5rem,11vw,9rem)"}}>
            <span className="gt-main">Vangala</span>
          </h1>
        </motion.div>

        {/* Typing */}
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.35}}
          className="text-xl md:text-2xl font-bold mb-6 h-9 flex items-center justify-center">
          <TypedRole/>
        </motion.div>

        {/* Subtitle */}
        <motion.p initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:0.45}}
          className="text-slate-500 max-w-xl mx-auto text-base leading-relaxed mb-10">
          MS Data Science @ <span className="text-slate-800 font-semibold">NYU Courant Institute</span> ·
          Building ML pipelines, genomic analysis tools, and production AI systems across
          <span className="text-slate-800 font-semibold"> 2 active research labs</span>.
        </motion.p>

        {/* Stats */}
        <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:0.55}}
          className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            {val:2,suf:"",label:"Research Labs"},
            {val:12,suf:"+",label:"ML Projects"},
            {val:3,suf:"×",label:"Hackathon Runner-Up"},
            {val:54,suf:"",label:"WGS Samples Analyzed"},
          ].map(({val,suf,label})=>(
            <div key={label} className="stat-c flex items-center gap-3">
              <div>
                <div className="text-xl font-black gt-main leading-none"><Counter to={val} suffix={suf}/></div>
                <div className="text-xs text-slate-400 mt-0.5">{label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Floating tech badges */}
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.62}}
          className="flex flex-wrap justify-center gap-2 mb-10">
          {["PyTorch","Transformers","FastAPI","GNN","WGS Pipelines","TensorRT","RAG","MIMIC-III"].map((t,i)=>(
            <span key={t} className={`chip chip-i ${i%3===0?"float":i%3===1?"float2":"float3"}`}>{t}</span>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:0.7}}
          className="flex flex-wrap justify-center gap-3 mb-10">
          <a href="#contact" className="btn-primary px-8 py-3.5 rounded-full text-sm font-bold flex items-center gap-2">
            <Send className="w-4 h-4"/>Get In Touch
          </a>
          <a href="#projects" className="btn-outline px-8 py-3.5 rounded-full text-sm font-bold flex items-center gap-2 border">
            View Projects<ArrowUpRight className="w-4 h-4"/>
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.8}}
          className="flex justify-center gap-2">
          {[{Icon:LinkedinIcon,href:personalInfo.linkedin,label:"LinkedIn"},{Icon:GithubIcon,href:personalInfo.github,label:"GitHub"},{Icon:Mail,href:`mailto:${personalInfo.email}`,label:"Email"}].map(({Icon,href,label})=>(
            <a key={label} href={href} target={href.startsWith("http")?"_blank":undefined} rel="noopener noreferrer"
              className="btn-outline flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border border-slate-200">
              <Icon className="w-3.5 h-3.5"/>{label}
            </a>
          ))}
        </motion.div>
      </div>

      <motion.a href="#about" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1}}
        className="absolute bottom-8 flex flex-col items-center gap-1.5 text-slate-300 hover:text-indigo-400 transition-colors">
        <span className="text-xs font-mono tracking-[0.2em] uppercase">Explore</span>
        <ChevronDown className="w-4 h-4 animate-bounce"/>
      </motion.a>
    </section>
  );
}

/* ══════════════════════════════════════════ About */
function About() {
  return (
    <section id="about" className="relative z-10 py-28 px-6 sec-alt">
      <div className="max-w-7xl mx-auto">
        <SH n="01" icon={BookOpen} title="About Me" sub="Graduate researcher, ML engineer, systems builder"/>
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Bio */}
          <FadeIn delay={0.1} className="lg:col-span-3">
            <TiltCard className="card rounded-2xl p-8 h-full">
              <h3 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-3">
                <span className="w-6 h-0.5 rounded" style={{background:"linear-gradient(90deg,#6366f1,#8b5cf6)"}}/>Who I Am
              </h3>
              <div className="space-y-4 text-slate-500 text-sm leading-loose">
                <p>I&apos;m a <span className="text-slate-800 font-semibold">Data Science MS student at NYU Courant Institute</span>, working at the intersection of ML engineering, genomics, and production AI systems.</p>
                <p>In the lab, I extend genome-wide IBD survival pipelines using <span className="text-slate-800 font-semibold">Cox PH mixed-effects models</span>, and build strand-aware ribosomal DNA variant detectors analyzing <span className="text-slate-800 font-semibold">54 WGS samples at 5,000x+ depth</span> — resolving a 40× depth-underestimation flaw and increasing calls by <span className="text-slate-800 font-semibold">67×</span>.</p>
                <p>On the engineering side: fraud detection at <span className="text-slate-800 font-semibold">94% accuracy with sub-50ms latency</span>, ICU forecasting on MIMIC-III, and 96.2% mAP debris classification with TensorRT FP16 at 47 FPS.</p>
                <p>Three hackathon runner-up finishes in one academic year — Claude Builder, NVIDIA×Dell, and Google at NYU and Columbia.</p>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-8">
                {[{v:"67×",s:"more variant calls"},{v:"254K",s:"SNPs scanned"},{v:"528K+",s:"variants detected"}].map(({v,s})=>(
                  <div key={s} className="text-center py-4 rounded-xl bg-indigo-50 border border-indigo-100">
                    <div className="text-2xl font-black gt-main">{v}</div>
                    <div className="text-xs text-slate-400 mt-1">{s}</div>
                  </div>
                ))}
              </div>
            </TiltCard>
          </FadeIn>

          <div className="lg:col-span-2 space-y-5">
            <FadeIn delay={0.2}>
              <div className="card rounded-2xl p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-4">Core Proficiencies</p>
                <div className="space-y-3.5">
                  {skills.map((s,i)=>(
                    <div key={s.name}>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-slate-600 font-medium">{s.name}</span>
                        <span className="font-mono text-indigo-500">{s.level}%</span>
                      </div>
                      <div className="sbar-track">
                        <motion.div className="sbar-fill" initial={{width:0}} whileInView={{width:`${s.level}%`}} viewport={{once:true}} transition={{duration:1.1,delay:i*0.07,ease:"easeOut"}}/>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="card rounded-2xl p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-4">Identities</p>
                <div className="grid grid-cols-2 gap-2">
                  {coreValues.map((cv)=>(
                    <div key={cv.title} className="p-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-indigo-50 hover:border-indigo-100 transition-all cursor-default">
                      <div className="text-xs font-bold text-slate-800">{cv.title}</div>
                      <div className="text-xs text-slate-400 mt-0.5">{cv.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Tech stack */}
        <FadeIn delay={0.15} className="mt-6">
          <div className="card rounded-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-4">Full Technology Stack</p>
            <div className="flex flex-wrap gap-2">
              {skillTags.map(t=><span key={t} className="chip chip-i">{t}</span>)}
            </div>
          </div>
        </FadeIn>

        {/* Education */}
        <FadeIn delay={0.2} className="mt-6">
          <div className="card rounded-2xl overflow-hidden">
            <div className="flex items-center gap-3 px-8 pt-6 pb-4 border-b border-slate-100">
              <GraduationCap className="w-5 h-5 text-indigo-500"/>
              <h3 className="text-lg font-bold text-slate-900">Education</h3>
            </div>
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
              {education.map((e,i)=>(
                <div key={e.institution} className="p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full" style={{background:i===0?"#6366f1":"#8b5cf6"}}/>
                    <span className="text-xs font-mono text-slate-400">{e.period}</span>
                  </div>
                  <div className="font-bold text-slate-900 mb-0.5">{e.degree}</div>
                  <div className="text-sm text-slate-500 mb-3">{e.institution}</div>
                  <div className="text-xs text-slate-400 leading-relaxed">{e.courses}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════ Research */
function Research() {
  return (
    <section id="research" className="relative z-10 py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <SH n="02" icon={FlaskConical} title="Research Experience" sub="Active in 2 labs — genomics, bioinformatics, statistical modeling"/>
        <div className="relative pl-12 space-y-6">
          <div className="tl-line"/>
          {research.map((r,i)=>(
            <SlideIn key={r.lab} delay={i*0.12} className="relative">
              <div className="absolute -left-12 top-7 dot-i" style={{transform:"translateX(14px)"}}/>
              <TiltCard className="card rounded-2xl p-8 group">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 mb-2">
                      <span className="pulse-green"/>ACTIVE · {r.period}
                    </span>
                    <h3 className="text-xl font-black text-slate-900 mt-1 group-hover:text-indigo-600 transition-colors">{r.role}</h3>
                    <div className="text-slate-500 font-medium mt-0.5">{r.lab}</div>
                    <div className="text-sm italic text-slate-400 mt-0.5">{r.advisor}</div>
                  </div>
                  <span className="text-xs text-slate-400 flex items-center gap-1.5"><MapPin className="w-3 h-3"/>{r.location}</span>
                </div>
                <ul className="space-y-3 mb-5">
                  {r.bullets.map((b,j)=>(
                    <li key={j} className="flex gap-3 text-sm text-slate-500 leading-relaxed">
                      <span className="mt-2 dot-i flex-shrink-0" style={{width:6,height:6,minWidth:6,boxShadow:"none",background:"#6366f1"}}/>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {r.tags.map(t=><span key={t} className="chip chip-i">{t}</span>)}
                </div>
              </TiltCard>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════ Experience */
function Experience() {
  return (
    <section id="experience" className="relative z-10 py-28 px-6 sec-alt">
      <div className="max-w-7xl mx-auto">
        <SH n="03" icon={Briefcase} title="Work Experience" sub="Software engineering and applied AI roles"/>
        <div className="relative pl-12 space-y-6">
          <div className="tl-line" style={{background:"linear-gradient(to bottom,transparent,#ddd6fe 20%,#ddd6fe 80%,transparent)"}}/>
          {experience.map((e,i)=>(
            <SlideIn key={e.company} delay={i*0.12} className="relative">
              <div className="absolute -left-12 top-7 dot-v" style={{transform:"translateX(14px)"}}/>
              <TiltCard className="card rounded-2xl p-8 group">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="text-xs font-mono text-violet-500 mb-1">{e.period}</div>
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-violet-600 transition-colors">{e.role}</h3>
                    <div className="text-slate-500 font-medium mt-0.5">{e.company}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{e.location}</div>
                  </div>
                </div>
                <ul className="space-y-2.5 mb-4">
                  {e.bullets.map((b,j)=>(
                    <li key={j} className="flex gap-3 text-sm text-slate-500 leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0"/>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {e.tags.map(t=><span key={t} className="chip chip-v">{t}</span>)}
                </div>
              </TiltCard>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════ Projects */
function Projects() {
  return (
    <section id="projects" className="relative z-10 py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <SH n="04" icon={Code} title="Projects" sub="Production ML systems, research pipelines, deployed applications"/>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {projects.map((p,i)=>(
            <FadeIn key={p.title} delay={(i%3)*0.08}>
              <TiltCard className="card rounded-2xl overflow-hidden flex flex-col h-full group">
                <div className="ptop"/>
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-indigo-600 transition-colors">{p.title}</h3>
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                      className="flex-shrink-0 p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all">
                      <ArrowUpRight className="w-4 h-4"/>
                    </a>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed flex-1 mb-4">{p.description}</p>
                  {p.metrics.length>0&&(
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {p.metrics.map(m=><span key={m} className="badge-g">{m}</span>)}
                    </div>
                  )}
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map(t=><span key={t} className="chip chip-i">{t}</span>)}
                  </div>
                </div>
              </TiltCard>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.2} className="mt-10 text-center">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border border-slate-200">
            <GithubIcon className="w-4 h-4"/>View All on GitHub<ExternalLink className="w-3.5 h-3.5"/>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════ Hackathons */
function Hackathons() {
  return (
    <section id="hackathons" className="relative z-10 py-28 px-6 sec-alt">
      <div className="max-w-7xl mx-auto">
        <SH n="05" icon={Trophy} title="Hackathons" sub="3 consecutive runner-up finishes at NYU and Columbia"/>
        <div className="grid md:grid-cols-3 gap-5">
          {hackathons.map((h,i)=>(
            <FadeIn key={h.name} delay={i*0.1}>
              <TiltCard className="card rounded-2xl p-6 h-full flex flex-col group">
                <div className="flex items-center justify-between mb-4">
                  <span className="chip chip-a flex items-center gap-1.5 text-xs font-black py-1.5 px-3">
                    <Trophy className="w-3 h-3"/>{h.result}
                  </span>
                  <a href={h.github} target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="w-4 h-4 text-slate-300 hover:text-slate-700 transition-colors"/>
                  </a>
                </div>
                <div className="text-xs font-mono text-slate-400 mb-1">{h.organizer}</div>
                <h3 className="font-black text-slate-900 text-base mb-1 group-hover:text-amber-600 transition-colors">{h.name}</h3>
                <div className="text-sm font-bold text-amber-500 mb-3">{h.project}</div>
                <p className="text-slate-400 text-xs leading-relaxed flex-1 mb-4">{h.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {h.tags.map(t=><span key={t} className="chip chip-a">{t}</span>)}
                </div>
              </TiltCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════ Contact */
function Contact() {
  return (
    <section id="contact" className="relative z-10 py-28 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <SH n="06" icon={Send} title="Get In Touch" sub="Research collabs, ML engineering roles, interesting problems"/>
        <div className="grid md:grid-cols-2 gap-6">
          <FadeIn delay={0.1}>
            <TiltCard className="card rounded-2xl p-8 h-full flex flex-col">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Let&apos;s build something exceptional</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">Open to research collaborations, ML engineering challenges, and conversations about data science. Reach out anytime.</p>
              <div className="space-y-3 flex-1">
                {[
                  {Icon:Mail,label:personalInfo.email,href:`mailto:${personalInfo.email}`,bg:"bg-indigo-50",color:"text-indigo-500"},
                  {Icon:Phone,label:personalInfo.phone,href:`tel:${personalInfo.phone}`,bg:"bg-violet-50",color:"text-violet-500"},
                  {Icon:MapPin,label:personalInfo.location,href:"#",bg:"bg-emerald-50",color:"text-emerald-500"},
                ].map(({Icon,label,href,bg,color})=>(
                  <a key={label} href={href} className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50 transition-all group">
                    <div className={`p-2 rounded-lg ${bg}`}><Icon className={`w-4 h-4 ${color}`}/></div>
                    <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">{label}</span>
                  </a>
                ))}
              </div>
              <div className="flex gap-2 mt-6">
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                  className="btn-outline flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border border-slate-200">
                  <LinkedinIcon className="w-4 h-4"/>LinkedIn
                </a>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                  className="btn-outline flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border border-slate-200">
                  <GithubIcon className="w-4 h-4"/>GitHub
                </a>
              </div>
            </TiltCard>
          </FadeIn>
          <FadeIn delay={0.2}>
            <form onSubmit={e=>{e.preventDefault();window.location.href=`mailto:${personalInfo.email}`;}} className="card rounded-2xl p-8 space-y-5">
              {[{l:"Name",t:"text",p:"Your name"},{l:"Email",t:"email",p:"your@email.com"}].map(({l,t,p})=>(
                <div key={l}>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">{l}</label>
                  <input type={t} placeholder={p} className="inp"/>
                </div>
              ))}
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Message</label>
                <textarea rows={5} placeholder="What would you like to discuss?" className="inp" style={{resize:"none"}}/>
              </div>
              <button type="submit" className="btn-primary w-full py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2">
                <Send className="w-4 h-4"/>Send Message
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════ Footer */
function Footer() {
  return (
    <footer className="relative z-10 py-10 px-6 border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded flex items-center justify-center text-xs font-black text-white" style={{background:"linear-gradient(135deg,#6366f1,#8b5cf6)"}}>AV</div>
          <span className="text-xs text-slate-400 font-mono">Akhilesh Vangala · NYU Courant · Data Science</span>
        </div>
        <p className="text-slate-300 text-xs">© {new Date().getFullYear()} · Built with Next.js, Tailwind &amp; Framer Motion</p>
        <div className="flex gap-3">
          {[{Icon:LinkedinIcon,href:personalInfo.linkedin},{Icon:GithubIcon,href:personalInfo.github},{Icon:Mail,href:`mailto:${personalInfo.email}`}].map(({Icon,href},i)=>(
            <a key={i} href={href} target={href.startsWith("http")?"_blank":undefined} rel="noopener noreferrer"
              className="text-slate-300 hover:text-indigo-500 transition-colors"><Icon className="w-4 h-4"/></a>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* ══════════════════════════════════════════ Page */
export default function Home() {
  return (
    <>
      <ScrollProgress/>
      <NeuralBackground/>
      <MouseSpotlight/>
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Research/>
        <Experience/>
        <Projects/>
        <Hackathons/>
        <Contact/>
      </main>
      <Footer/>
    </>
  );
}
