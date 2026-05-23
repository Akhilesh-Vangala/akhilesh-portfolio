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

/* ═══════════════════════════════════════════════════════════ NYU Torch */

function NyuTorch({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Flame outer */}
      <path d="M24 2C20 8 14 12 15 20C16 26 20 29 24 30C28 29 32 26 33 20C34 12 28 8 24 2Z" fill="url(#flameOuter)" />
      {/* Flame inner */}
      <path d="M24 10C22 14 19 17 20 21C21 24 22.5 25.5 24 26C25.5 25.5 27 24 28 21C29 17 26 14 24 10Z" fill="url(#flameInner)" />
      {/* Flame core */}
      <path d="M24 16C23 18 22 20 22.5 22C23 23.5 23.5 24 24 24C24.5 24 25 23.5 25.5 22C26 20 25 18 24 16Z" fill="white" opacity="0.9" />
      {/* Cup top */}
      <path d="M16 30H32L30 38H18L16 30Z" fill="url(#cupGrad)" />
      {/* Cup bottom ring */}
      <rect x="17" y="37" width="14" height="3" rx="1.5" fill="url(#cupGrad)" />
      {/* Handle shaft */}
      <rect x="21.5" y="40" width="5" height="22" rx="2.5" fill="url(#handleGrad)" />
      {/* Base */}
      <rect x="17" y="60" width="14" height="4" rx="2" fill="url(#handleGrad)" />
      {/* Laurel left */}
      <path d="M16 32C12 30 10 26 13 24C15 28 16 30 16 32Z" fill="url(#laurelGrad)" opacity="0.8" />
      <path d="M16 36C11 35 9 31 12 29C14 33 15 35 16 36Z" fill="url(#laurelGrad)" opacity="0.7" />
      {/* Laurel right */}
      <path d="M32 32C36 30 38 26 35 24C33 28 32 30 32 32Z" fill="url(#laurelGrad)" opacity="0.8" />
      <path d="M32 36C37 35 39 31 36 29C34 33 33 35 32 36Z" fill="url(#laurelGrad)" opacity="0.7" />
      <defs>
        <linearGradient id="flameOuter" x1="24" y1="2" x2="24" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f97316" /><stop offset="0.5" stopColor="#ef4444" /><stop offset="1" stopColor="#dc2626" />
        </linearGradient>
        <linearGradient id="flameInner" x1="24" y1="10" x2="24" y2="26" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fbbf24" /><stop offset="1" stopColor="#f97316" />
        </linearGradient>
        <linearGradient id="cupGrad" x1="24" y1="30" x2="24" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#c084fc" /><stop offset="1" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="handleGrad" x1="24" y1="40" x2="24" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#a78bfa" /><stop offset="1" stopColor="#6d28d9" />
        </linearGradient>
        <linearGradient id="laurelGrad" x1="0" y1="0" x2="1" y2="0" gradientUnits="objectBoundingBox">
          <stop stopColor="#86efac" /><stop offset="1" stopColor="#4ade80" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function NyuWordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-black tracking-tight ${className}`}
      style={{ background: "linear-gradient(135deg,#c084fc,#a855f7,#7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
      NYU
    </span>
  );
}

/* ═══════════════════════════════════════════════════════════ SVG Icons */

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

/* ═══════════════════════════════════════════════════════════ Neural Canvas */

function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf: number;
    type Node = { x: number; y: number; vx: number; vy: number; r: number };
    const nodes: Node[] = [];
    const N = 55;

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < N; i++) {
      nodes.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35, r: Math.random() * 1.5 + 0.5 });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 160) {
            const op = (1 - d / 160) * 0.12;
            ctx.strokeStyle = `rgba(99,102,241,${op})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath(); ctx.moveTo(nodes[i].x, nodes[i].y); ctx.lineTo(nodes[j].x, nodes[j].y); ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 3);
        grad.addColorStop(0, "rgba(139,92,246,0.7)"); grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad; ctx.beginPath(); ctx.arc(n.x, n.y, n.r * 3, 0, Math.PI * 2); ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
}

/* ═══════════════════════════════════════════════════════════ Mouse Spotlight */

function MouseSpotlight() {
  const [pos, setPos] = useState({ x: -9999, y: -9999 });
  useEffect(() => {
    const h = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, []);
  return (
    <div className="fixed inset-0 z-0 pointer-events-none transition-none" style={{
      background: `radial-gradient(700px circle at ${pos.x}px ${pos.y}px, rgba(99,102,241,0.055) 0%, transparent 60%)`
    }} />
  );
}

/* ═══════════════════════════════════════════════════════════ Scroll Progress */

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  return <motion.div className="scroll-prog" style={{ scaleX, transformOrigin: "left" }} />;
}

/* ═══════════════════════════════════════════════════════════ Animated Counter */

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [v, setV] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let cur = 0;
    const step = to / 50;
    const id = setInterval(() => {
      cur += step; if (cur >= to) { setV(to); clearInterval(id); } else setV(Math.floor(cur));
    }, 30);
    return () => clearInterval(id);
  }, [inView, to]);
  return <span ref={ref}>{v}{suffix}</span>;
}

/* ═══════════════════════════════════════════════════════════ Typing Effect */

const ROLES = ["Data Scientist", "ML Engineer", "Graduate Researcher", "Bioinformatics Builder", "Deep Learning Engineer"];

function TypedRole() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  const [wait, setWait] = useState(false);
  useEffect(() => {
    if (wait) { const t = setTimeout(() => { setWait(false); setDel(true); }, 2000); return () => clearTimeout(t); }
    const cur = ROLES[idx];
    if (!del) {
      if (text.length < cur.length) { const t = setTimeout(() => setText(cur.slice(0, text.length + 1)), 60); return () => clearTimeout(t); }
      setWait(true);
    } else {
      if (text.length > 0) { const t = setTimeout(() => setText(text.slice(0, -1)), 35); return () => clearTimeout(t); }
      setDel(false); setIdx((i) => (i + 1) % ROLES.length);
    }
  }, [text, del, idx, wait]);
  return <span className="gt-shift font-black">{text}<span className="cur text-indigo-400">|</span></span>;
}

/* ═══════════════════════════════════════════════════════════ 3D Tilt Card */

function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateZ(6px)`;
  }, []);
  const onLeave = useCallback(() => {
    if (ref.current) ref.current.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) translateZ(0px)";
  }, []);
  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
      className={className} style={{ transition: "transform 0.12s ease", transformStyle: "preserve-3d" }}>
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════ Animate Helpers */

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-70px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

function SlideIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════ Section Header */

function SH({ n, icon: Icon, title, sub }: { n: string; icon: React.ElementType; title: string; sub?: string }) {
  return (
    <FadeIn className="mb-16">
      <div className="flex items-start gap-4 mb-4">
        <span className="sec-num leading-none pt-1">{n}</span>
        <div>
          <div className="flex items-center gap-3 mb-1.5">
            <div className="p-2 rounded-xl" style={{ background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.18)" }}>
              <Icon className="w-4 h-4 text-indigo-400" />
            </div>
            <h2 className="text-4xl font-black tracking-tight text-white">{title}</h2>
          </div>
          {sub && <p className="text-sm text-gray-600 ml-12">{sub}</p>}
        </div>
      </div>
      <hr className="sdiv" />
    </FadeIn>
  );
}

/* ═══════════════════════════════════════════════════════════ Navbar */

const NAV = [
  { l: "About", h: "#about" }, { l: "Research", h: "#research" },
  { l: "Experience", h: "#experience" }, { l: "Projects", h: "#projects" },
  { l: "Hackathons", h: "#hackathons" }, { l: "Contact", h: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hov, setHov] = useState("");
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "border-b" : ""}`}
      style={{ background: scrolled ? "rgba(6,6,15,0.85)" : "transparent", backdropFilter: scrolled ? "blur(20px)" : "none", borderColor: "rgba(99,102,241,0.08)" }}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black"
            style={{ background: "linear-gradient(135deg,#6366f1,#a855f7)", boxShadow: "0 0 20px rgba(99,102,241,0.4)" }}>
            AV
          </div>
          <span className="text-sm font-mono text-gray-600 group-hover:text-gray-400 transition-colors">NYU · Data Science</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {NAV.map(({ l, h }) => (
            <a key={h} href={h} onMouseEnter={() => setHov(h)} onMouseLeave={() => setHov("")}
              className="relative px-4 py-2 text-sm font-medium transition-colors duration-200"
              style={{ color: hov === h ? "#a5b4fc" : "rgba(255,255,255,0.4)" }}>
              {l}
              {hov === h && (
                <motion.div layoutId="nul" className="absolute bottom-0 left-4 right-4 h-px bg-indigo-400"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }} />
              )}
            </a>
          ))}
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
            className="ml-3 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold btn-outline">
            <GithubIcon className="w-3.5 h-3.5" />GitHub
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-gray-500 hover:text-white">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-t" style={{ background: "rgba(6,6,15,0.97)", borderColor: "rgba(99,102,241,0.08)" }}>
            {NAV.map(({ l, h }) => (
              <a key={h} href={h} onClick={() => setOpen(false)}
                className="block px-6 py-3.5 text-sm text-gray-400 hover:text-white transition-colors border-b"
                style={{ borderColor: "rgba(255,255,255,0.04)" }}>{l}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

/* ═══════════════════════════════════════════════════════════ Hero */

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute rounded-full pointer-events-none" style={{ width:700, height:700, top:"-20%", right:"-15%", background:"radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)" }} />
        <div className="absolute rounded-full pointer-events-none" style={{ width:600, height:600, bottom:"-15%", left:"-10%", background:"radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)" }} />
      </div>

      <div className="relative z-10 max-w-5xl w-full mx-auto">

        {/* ── NYU Hero Banner ── */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-8 w-fit">
          <div className="flex flex-col items-center gap-4">
            {/* NYU Flag card */}
            <div className="relative flex items-center gap-5 px-6 py-4 rounded-2xl overflow-hidden"
              style={{ background: "rgba(87,6,140,0.12)", border: "1px solid rgba(192,132,252,0.25)", backdropFilter: "blur(16px)" }}>
              {/* Purple glow behind */}
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(168,85,247,0.1) 0%, transparent 70%)" }} />
              {/* Torch */}
              <NyuTorch className="w-10 h-14 relative z-10 float" />
              {/* Text */}
              <div className="relative z-10 text-left">
                <div className="flex items-baseline gap-2">
                  <NyuWordmark className="text-3xl" />
                  <span className="text-white font-black text-lg tracking-tight">Courant</span>
                </div>
                <div className="text-xs text-purple-300 font-medium mt-0.5 tracking-wide">Institute of Mathematical Sciences</div>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-xs font-mono px-2 py-0.5 rounded"
                    style={{ background: "rgba(192,132,252,0.12)", border: "1px solid rgba(192,132,252,0.2)", color: "#e9d5ff" }}>
                    MS Data Science · 2025–2027
                  </span>
                </div>
              </div>
              {/* Right: NYU shield mini */}
              <div className="relative z-10 ml-2 w-10 h-12 flex-shrink-0">
                <svg viewBox="0 0 40 48" fill="none" className="w-full h-full">
                  <path d="M20 2L4 8V26C4 36 12 44 20 46C28 44 36 36 36 26V8L20 2Z" fill="rgba(87,6,140,0.5)" stroke="rgba(192,132,252,0.5)" strokeWidth="1" />
                  <text x="50%" y="58%" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="13" fontWeight="900" fontFamily="system-ui">NYU</text>
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Status pill */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6"
          style={{ background: "rgba(74,222,128,0.07)", border: "1px solid rgba(74,222,128,0.18)", color: "#86efac" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Open to Data Science · ML Engineer · Analyst Roles · New York, NY
        </motion.div>

        {/* Name */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18, duration: 0.7 }}>
          <h1 className="font-black tracking-tighter leading-none text-white mb-2"
            style={{ fontSize: "clamp(3.5rem,11vw,9rem)" }}>
            Akhilesh
          </h1>
          <h1 className="font-black tracking-tighter leading-none mb-6"
            style={{ fontSize: "clamp(3.5rem,11vw,9rem)" }}>
            <span className="gt-indigo glow-indigo">Vangala</span>
          </h1>
        </motion.div>

        {/* Typing */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
          className="text-xl md:text-2xl font-bold mb-6 h-9 flex items-center justify-center">
          <TypedRole />
        </motion.div>

        {/* Subtitle */}
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
          className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed mb-10">
          MS Data Science @ <span className="text-gray-300 font-semibold">NYU Courant</span> ·
          Building ML pipelines, genomic analysis tools, and production AI systems across
          <span className="text-gray-300 font-semibold"> 2 active research labs</span>.
        </motion.p>

        {/* Stats row */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
          className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            { val: 2, suf: "", label: "Research Labs", display: null },
            { val: 12, suf: "+", label: "ML Projects", display: null },
            { val: 3, suf: "×", label: "Hackathon Runner-Up", display: null },
            { val: 54, suf: "", label: "WGS Samples Analyzed", display: null },
          ].map(({ val, suf, label, display }) => (
            <div key={label} className="stat-c flex items-center gap-3">
              <div className="text-left">
                <div className="text-xl font-black text-white leading-none">
                  {display ?? <Counter to={val} suffix={suf} />}
                </div>
                <div className="text-xs text-gray-600 mt-0.5">{label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Floating tech badges */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}
          className="flex flex-wrap justify-center gap-2 mb-10">
          {["PyTorch", "Transformers", "FastAPI", "GNN", "WGS Pipelines", "TensorRT", "RAG", "MIMIC-III"].map((t, i) => (
            <span key={t} className={`chip chip-i ${i % 3 === 0 ? "float" : i % 3 === 1 ? "float2" : "float3"}`}>{t}</span>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.72 }}
          className="flex flex-wrap justify-center gap-3 mb-10">
          <a href="#contact" className="btn-primary px-8 py-3.5 rounded-full text-sm font-bold flex items-center gap-2">
            <Send className="w-4 h-4" />Get In Touch
          </a>
          <a href="#projects" className="btn-outline px-8 py-3.5 rounded-full text-sm font-bold flex items-center gap-2">
            View Projects <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
          className="flex justify-center gap-2">
          {[
            { Icon: LinkedinIcon, href: personalInfo.linkedin, label: "LinkedIn" },
            { Icon: GithubIcon, href: personalInfo.github, label: "GitHub" },
            { Icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all btn-outline">
              <Icon className="w-3.5 h-3.5" />{label}
            </a>
          ))}
        </motion.div>
      </div>

      <motion.a href="#about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
        className="absolute bottom-8 flex flex-col items-center gap-1.5 text-gray-700 hover:text-indigo-400 transition-colors">
        <span className="text-xs font-mono tracking-[0.2em] uppercase">Explore</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.a>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════ About */

function About() {
  return (
    <section id="about" className="relative z-10 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SH n="01" icon={BookOpen} title="About Me" sub="Graduate researcher, ML engineer, systems builder" />
        <div className="grid lg:grid-cols-5 gap-6">

          {/* Bio card */}
          <FadeIn delay={0.1} className="lg:col-span-3">
            <TiltCard className="glass rounded-2xl p-8 h-full">
              <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-3">
                <span className="w-6 h-0.5 rounded" style={{ background: "linear-gradient(90deg,#6366f1,#a855f7)" }} />
                Who I Am
              </h3>
              <div className="space-y-4 text-gray-400 text-sm leading-loose">
                <p>
                  I&apos;m a <span className="text-white font-semibold">Data Science MS student at NYU Courant Institute</span> with
                  working at the intersection of machine learning engineering, genomics, and applied AI.
                </p>
                <p>
                  In the lab, I&apos;m extending genome-wide IBD survival pipelines with <span className="text-white font-semibold">Cox PH mixed-effects models</span> at
                  NYU Rory Meyers, and building strand-aware ribosomal DNA variant detectors analyzing
                  <span className="text-white font-semibold"> 54 WGS samples at 5,000x+ depth</span> at the Hochwagen Lab — resolving
                  a 40× depth-underestimation flaw and increasing variant calls by <span className="text-white font-semibold">67×</span>.
                </p>
                <p>
                  On the engineering side: fraud detection at <span className="text-white font-semibold">94% accuracy with sub-50ms latency</span>,
                  ICU vital sign forecasting on MIMIC-III, and 96.2% mAP underwater debris classification with
                  TensorRT FP16 at 47 FPS. Everything I build is fast, interpretable, and reproducible.
                </p>
                <p>
                  Three hackathon runner-up finishes at NYU and Columbia in the same academic year — Claude Builder, NVIDIA×Dell, and Google.
                </p>
              </div>
              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-3 mt-8">
                {[
                  { v: "67×", s: "more calls" }, { v: "254K", s: "SNPs scanned" }, { v: "528K+", s: "variants detected" }
                ].map(({ v, s }) => (
                  <div key={s} className="text-center py-4 rounded-xl"
                    style={{ background: "rgba(99,102,241,0.05)", border: "1px solid rgba(99,102,241,0.1)" }}>
                    <div className="text-2xl font-black gt-cyan">{v}</div>
                    <div className="text-xs text-gray-600 mt-1">{s}</div>
                  </div>
                ))}
              </div>
            </TiltCard>
          </FadeIn>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-5">
            <FadeIn delay={0.2}>
              <div className="glass rounded-2xl p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-4">Core Proficiencies</p>
                <div className="space-y-3.5">
                  {skills.map((s, i) => (
                    <div key={s.name}>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-gray-300 font-medium">{s.name}</span>
                        <span className="font-mono text-indigo-400">{s.level}%</span>
                      </div>
                      <div className="sbar-track">
                        <motion.div className="sbar-fill" initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }} viewport={{ once: true }}
                          transition={{ duration: 1.1, delay: i * 0.07, ease: "easeOut" }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="glass rounded-2xl p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-4">Identities</p>
                <div className="grid grid-cols-2 gap-2">
                  {coreValues.map((cv) => (
                    <div key={cv.title} className="p-3 rounded-xl transition-all cursor-default"
                      style={{ background: "rgba(99,102,241,0.04)", border: "1px solid rgba(99,102,241,0.08)" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.25)"; (e.currentTarget as HTMLElement).style.background = "rgba(99,102,241,0.08)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.08)"; (e.currentTarget as HTMLElement).style.background = "rgba(99,102,241,0.04)"; }}>
                      <div className="text-xs font-bold text-white">{cv.title}</div>
                      <div className="text-xs text-gray-700 mt-0.5">{cv.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Tech stack */}
        <FadeIn delay={0.15} className="mt-6">
          <div className="glass rounded-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-4">Full Technology Stack</p>
            <div className="flex flex-wrap gap-2">
              {skillTags.map((t) => <span key={t} className="chip chip-i">{t}</span>)}
            </div>
          </div>
        </FadeIn>

        {/* Education */}
        <FadeIn delay={0.2} className="mt-6">
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
            {/* NYU featured card */}
            <div className="relative p-8 overflow-hidden"
              style={{ background: "linear-gradient(135deg, rgba(87,6,140,0.25) 0%, rgba(124,58,237,0.12) 50%, rgba(13,13,35,0.9) 100%)" }}>
              {/* NYU purple glow */}
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)" }} />
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(135deg, rgba(87,6,140,0.1) 0%, transparent 60%)" }} />

              <div className="relative z-10 flex flex-wrap items-start gap-6">
                {/* Torch */}
                <div className="flex-shrink-0">
                  <NyuTorch className="w-12 h-16 float" />
                </div>
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <div className="flex items-baseline gap-2">
                      <NyuWordmark className="text-2xl" />
                      <span className="text-white font-black text-lg">Courant Institute</span>
                    </div>
                    <span className="chip chip-v text-xs">Current</span>
                  </div>
                  <div className="font-bold text-white mb-1">{education[0].degree}</div>
                  <div className="text-xs font-mono text-purple-300 mb-3">{education[0].period}</div>
                  <div className="text-xs text-gray-500 leading-relaxed">{education[0].courses}</div>
                </div>
                {/* NYU shield */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-16">
                    <svg viewBox="0 0 56 64" fill="none" className="w-full h-full">
                      <path d="M28 3L5 11V35C5 50 16 59 28 62C40 59 51 50 51 35V11L28 3Z"
                        fill="rgba(87,6,140,0.4)" stroke="rgba(192,132,252,0.4)" strokeWidth="1.5" />
                      <path d="M28 10L10 16V34C10 46 18 53 28 56C38 53 46 46 46 34V16L28 10Z"
                        fill="rgba(87,6,140,0.3)" />
                      <text x="50%" y="52%" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="11" fontWeight="900" fontFamily="system-ui" letterSpacing="0.5">NYU</text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* GITAM card */}
            <div className="p-8 border-t" style={{ background: "rgba(13,13,35,0.6)", borderColor: "rgba(255,255,255,0.05)" }}>
              <div className="flex flex-wrap items-start gap-6">
                <div className="flex-shrink-0 w-12 h-16 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black"
                    style={{ background: "linear-gradient(135deg,rgba(99,102,241,0.3),rgba(168,85,247,0.2))", border: "1px solid rgba(99,102,241,0.2)", color: "#a5b4fc" }}>
                    GIT
                  </div>
                </div>
                <div className="flex-1">
                  <div className="font-bold text-white mb-0.5">{education[1].degree}</div>
                  <div className="text-sm text-gray-500 mb-1">{education[1].institution}</div>
                  <div className="text-xs font-mono text-indigo-400 mb-2">{education[1].period}</div>
                  <div className="text-xs text-gray-700 leading-relaxed">{education[1].courses}</div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════ Research */

function Research() {
  return (
    <section id="research" className="relative z-10 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SH n="02" icon={FlaskConical} title="Research Experience" sub="Active in 2 NYU labs — genomics, bioinformatics, statistical modeling" />
        {/* NYU Lab banner */}
        <FadeIn delay={0.05} className="mb-10 -mt-6">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl"
            style={{ background: "rgba(87,6,140,0.1)", border: "1px solid rgba(192,132,252,0.18)" }}>
            <NyuTorch className="w-5 h-7" />
            <div className="flex items-center gap-2">
              <NyuWordmark className="text-base" />
              <span className="text-purple-200 text-sm font-semibold">Graduate Research</span>
              <span className="text-gray-600 text-xs">· Rory Meyers College of Nursing &amp; Hochwagen Lab</span>
            </div>
          </div>
        </FadeIn>
        <div className="relative pl-12 space-y-8">
          <div className="tl-line" />
          {research.map((r, i) => (
            <SlideIn key={r.lab} delay={i * 0.12} className="relative">
              <div className="absolute -left-12 top-7 dot-indigo" style={{ transform: "translateX(14px)" }} />
              <TiltCard className="glass grad-border rounded-2xl p-8 group">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded mb-2"
                      style={{ background: "rgba(74,222,128,0.07)", border: "1px solid rgba(74,222,128,0.15)", color: "#86efac" }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      ACTIVE · {r.period}
                    </span>
                    <h3 className="text-xl font-black text-white mt-1 group-hover:gt-indigo transition-all">{r.role}</h3>
                    <div className="text-gray-400 font-medium mt-0.5">{r.lab}</div>
                    <div className="text-sm italic text-gray-600 mt-0.5">{r.advisor}</div>
                  </div>
                  <span className="text-xs text-gray-700 flex items-center gap-1.5"><MapPin className="w-3 h-3" />{r.location}</span>
                </div>
                <ul className="space-y-3.5 mb-6">
                  {r.bullets.map((b, j) => (
                    <li key={j} className="flex gap-4 text-sm text-gray-400 leading-relaxed">
                      <span className="mt-2.5 dot-indigo flex-shrink-0" style={{ width: 6, height: 6, minWidth: 6 }} />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {r.tags.map((t) => <span key={t} className="chip chip-i">{t}</span>)}
                </div>
              </TiltCard>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════ Experience */

function Experience() {
  return (
    <section id="experience" className="relative z-10 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SH n="03" icon={Briefcase} title="Work Experience" sub="Software engineering and applied AI roles" />
        <div className="relative pl-12 space-y-8">
          <div className="tl-line" style={{ background: "linear-gradient(to bottom, transparent, rgba(168,85,247,0.4), transparent)" }} />
          {experience.map((e, i) => (
            <SlideIn key={e.company} delay={i * 0.12} className="relative">
              <div className="absolute -left-12 top-7 dot-violet" style={{ transform: "translateX(14px)" }} />
              <TiltCard className="glass rounded-2xl p-8 group">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                  <div>
                    <div className="text-xs font-mono mb-1 text-violet-400">{e.period}</div>
                    <h3 className="text-xl font-black text-white group-hover:text-violet-300 transition-colors">{e.role}</h3>
                    <div className="text-gray-400 font-medium mt-0.5">{e.company}</div>
                    <div className="text-xs text-gray-700 mt-0.5">{e.location}</div>
                  </div>
                </div>
                <ul className="space-y-3 mb-5">
                  {e.bullets.map((b, j) => (
                    <li key={j} className="flex gap-4 text-sm text-gray-400 leading-relaxed">
                      <span className="mt-2.5 dot-violet flex-shrink-0" style={{ width: 6, height: 6, minWidth: 6 }} />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {e.tags.map((t) => <span key={t} className="chip chip-v">{t}</span>)}
                </div>
              </TiltCard>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════ Projects */

function Projects() {
  return (
    <section id="projects" className="relative z-10 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SH n="04" icon={Code} title="Projects" sub="Production ML systems, research pipelines, deployed applications" />
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <FadeIn key={p.title} delay={(i % 3) * 0.08}>
              <TiltCard className="glass grad-border rounded-2xl overflow-hidden flex flex-col h-full group">
                <div className="ptop" />
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="text-sm font-bold text-white leading-snug group-hover:text-indigo-300 transition-colors">{p.title}</h3>
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                      className="flex-shrink-0 p-1.5 rounded-lg text-gray-700 hover:text-white transition-colors"
                      style={{ background: "rgba(255,255,255,0.04)" }}>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-gray-600 text-xs leading-relaxed flex-1 mb-4">{p.description}</p>
                  {p.metrics.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {p.metrics.map((m) => <span key={m} className="badge-g">{m}</span>)}
                    </div>
                  )}
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => <span key={t} className="chip chip-i">{t}</span>)}
                  </div>
                </div>
              </TiltCard>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.2} className="mt-10 text-center">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold btn-outline">
            <GithubIcon className="w-4 h-4" />View All on GitHub<ExternalLink className="w-3.5 h-3.5" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════ Hackathons */

function Hackathons() {
  return (
    <section id="hackathons" className="relative z-10 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SH n="05" icon={Trophy} title="Hackathons" sub="3 consecutive runner-up finishes at NYU and Columbia" />
        <div className="grid md:grid-cols-3 gap-5">
          {hackathons.map((h, i) => (
            <FadeIn key={h.name} delay={i * 0.1}>
              <TiltCard className="glass glass-amber rounded-2xl p-6 h-full flex flex-col group">
                <div className="flex items-center justify-between mb-5">
                  <span className="chip chip-a flex items-center gap-1.5 text-sm font-black py-1.5 px-3">
                    <Trophy className="w-3 h-3" />{h.result}
                  </span>
                  <a href={h.github} target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="w-4 h-4 text-gray-700 hover:text-white transition-colors" />
                  </a>
                </div>
                <div className="text-xs font-mono text-gray-700 mb-1">{h.organizer}</div>
                <h3 className="font-black text-white text-base mb-1 group-hover:text-amber-300 transition-colors">{h.name}</h3>
                <div className="text-sm font-bold text-amber-400 mb-3">{h.project}</div>
                <p className="text-gray-600 text-xs leading-relaxed flex-1 mb-4">{h.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {h.tags.map((t) => <span key={t} className="chip chip-a">{t}</span>)}
                </div>
              </TiltCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════ Contact */

function Contact() {
  return (
    <section id="contact" className="relative z-10 py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <SH n="06" icon={Send} title="Get In Touch" sub="Research collabs, ML engineering roles, interesting problems" />
        <div className="grid md:grid-cols-2 gap-6">
          <FadeIn delay={0.1}>
            <TiltCard className="glass rounded-2xl p-8 h-full flex flex-col">
              <h3 className="text-xl font-bold text-white mb-3">Let&apos;s build something exceptional</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                I&apos;m always interested in research collaborations, ML engineering challenges,
                and conversations about data science. Reach out anytime.
              </p>
              <div className="space-y-3 flex-1">
                {[
                  { Icon: Mail, label: personalInfo.email, href: `mailto:${personalInfo.email}`, color: "#818cf8" },
                  { Icon: Phone, label: personalInfo.phone, href: `tel:${personalInfo.phone}`, color: "#c4b5fd" },
                  { Icon: MapPin, label: personalInfo.location, href: "#", color: "#86efac" },
                ].map(({ Icon, label, href, color }) => (
                  <a key={label} href={href}
                    className="flex items-center gap-4 p-4 rounded-xl transition-all group"
                    style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${color}40`; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)"; }}>
                    <div className="p-2 rounded-lg flex-shrink-0" style={{ background: `${color}12` }}>
                      <Icon className="w-4 h-4" style={{ color }} />
                    </div>
                    <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{label}</span>
                  </a>
                ))}
              </div>
              <div className="flex gap-2 mt-6">
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all btn-outline">
                  <LinkedinIcon className="w-4 h-4" />LinkedIn
                </a>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all btn-outline">
                  <GithubIcon className="w-4 h-4" />GitHub
                </a>
              </div>
            </TiltCard>
          </FadeIn>

          <FadeIn delay={0.2}>
            <form onSubmit={(e) => { e.preventDefault(); window.location.href = `mailto:${personalInfo.email}`; }}
              className="glass rounded-2xl p-8 space-y-4">
              {[{ l: "Name", t: "text", p: "Your name" }, { l: "Email", t: "email", p: "your@email.com" }].map(({ l, t, p }) => (
                <div key={l}>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-600 mb-2">{l}</label>
                  <input type={t} placeholder={p}
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-700 outline-none transition-all"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                    onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "rgba(99,102,241,0.4)"; }}
                    onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.07)"; }} />
                </div>
              ))}
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-600 mb-2">Message</label>
                <textarea rows={5} placeholder="What would you like to discuss?"
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-700 outline-none transition-all resize-none"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                  onFocus={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = "rgba(99,102,241,0.4)"; }}
                  onBlur={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = "rgba(255,255,255,0.07)"; }} />
              </div>
              <button type="submit"
                className="btn-primary w-full py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />Send Message
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════ Footer */

function Footer() {
  return (
    <footer className="relative z-10 py-10 px-6 border-t text-center"
      style={{ borderColor: "rgba(99,102,241,0.08)" }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded flex items-center justify-center text-xs font-black"
            style={{ background: "linear-gradient(135deg,#6366f1,#a855f7)" }}>AV</div>
          <span className="text-xs text-gray-700 font-mono">Akhilesh Vangala · NYU Data Science</span>
        </div>
        <p className="text-gray-700 text-xs">© {new Date().getFullYear()} · Built with Next.js, Tailwind &amp; Framer Motion</p>
        <div className="flex gap-3">
          {[
            { Icon: LinkedinIcon, href: personalInfo.linkedin },
            { Icon: GithubIcon, href: personalInfo.github },
            { Icon: Mail, href: `mailto:${personalInfo.email}` },
          ].map(({ Icon, href }, i) => (
            <a key={i} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
              className="text-gray-700 hover:text-indigo-400 transition-colors">
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════════ Page */

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <NeuralBackground />
      <MouseSpotlight />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Research />
        <Experience />
        <Projects />
        <Hackathons />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
