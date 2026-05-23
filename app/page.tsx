"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useInView, AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
  Mail, MapPin, ChevronDown, Menu, X, Trophy,
  BookOpen, Briefcase, Code, GraduationCap,
  Download, ArrowUpRight, ExternalLink, Dna,
  Brain, Activity, Waves, ScanLine, Globe2, Mic2,
  Building2, Stethoscope, ShieldCheck, Server, Cpu,
  Sparkles,
} from "lucide-react";
import {
  personalInfo, education, skillColumns, allExperience,
  allProjects, hackathonBadges,
} from "@/lib/data";

/* ═══════════════════════════════════════════════
   ICONS
   ═══════════════════════════════════════════════ */

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

/* Map iconKey → Lucide icon */
const ICONS: Record<string, React.ElementType> = {
  shield: ShieldCheck,
  activity: Activity,
  waves: Waves,
  scan: ScanLine,
  globe: Globe2,
  mic: Mic2,
  building: Building2,
  stethoscope: Stethoscope,
  brain: Brain,
  code: Code,
  server: Server,
  cpu: Cpu,
};

/* ═══════════════════════════════════════════════
   UTILITIES
   ═══════════════════════════════════════════════ */

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  return <motion.div className="scroll-prog" style={{ scaleX, transformOrigin: "left" }} />;
}

function NeuralBackground() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext("2d"); if (!ctx) return;
    let raf: number;
    type N = { x: number; y: number; vx: number; vy: number };
    const nodes: N[] = [];
    const resize = () => { c.width = window.innerWidth; c.height = window.innerHeight; };
    resize(); window.addEventListener("resize", resize);
    for (let i = 0; i < 60; i++) nodes.push({ x: Math.random() * c.width, y: Math.random() * c.height, vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3 });
    const draw = () => {
      ctx.clearRect(0, 0, c.width, c.height);
      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > c.width) n.vx *= -1;
        if (n.y < 0 || n.y > c.height) n.vy *= -1;
      }
      for (let i = 0; i < nodes.length; i++) for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 165) { ctx.strokeStyle = `rgba(99,102,241,${(1 - d / 165) * 0.07})`; ctx.lineWidth = 0.8; ctx.beginPath(); ctx.moveTo(nodes[i].x, nodes[i].y); ctx.lineTo(nodes[j].x, nodes[j].y); ctx.stroke(); }
      }
      for (const n of nodes) { ctx.beginPath(); ctx.arc(n.x, n.y, 1.5, 0, Math.PI * 2); ctx.fillStyle = "rgba(99,102,241,0.22)"; ctx.fill(); }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} className="fixed inset-0 z-0 pointer-events-none" />;
}

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const io = useInView(ref, { once: true, margin: "-70px" });
  return <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={io ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>{children}</motion.div>;
}
function SlideIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const io = useInView(ref, { once: true, margin: "-60px" });
  return <motion.div ref={ref} initial={{ opacity: 0, x: -20 }} animate={io ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>{children}</motion.div>;
}

function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 4.5}deg) rotateX(${-y * 4.5}deg) translateZ(4px)`;
  }, []);
  const onLeave = useCallback(() => { if (ref.current) ref.current.style.transform = ""; }, []);
  return <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className={className} style={{ transition: "transform 0.12s ease", transformStyle: "preserve-3d" }}>{children}</div>;
}

/* Section header — no numbers */
function SH({ icon: Icon, title, sub }: { icon: React.ElementType; title: string; sub?: string }) {
  return (
    <FadeIn className="mb-12">
      <div className="flex items-center gap-3 mb-4">
        <div className="icon-badge" style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", width: 44, height: 44 }}>
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-4xl font-black tracking-tight text-slate-900 leading-none">{title}</h2>
          {sub && <p className="text-sm text-slate-500 mt-1.5">{sub}</p>}
        </div>
      </div>
      <hr className="sdiv" />
    </FadeIn>
  );
}

/* ═══════════════════════════════════════════════
   NAVBAR
   ═══════════════════════════════════════════════ */
const NAV = [
  { l: "About", h: "#about" },
  { l: "Experience", h: "#experience" },
  { l: "Projects", h: "#projects" },
  { l: "Contact", h: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(241,245,249,0.95)" : "rgba(241,245,249,0.6)",
        backdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid #e2e8f0" : "1px solid transparent",
        boxShadow: scrolled ? "0 1px 20px rgba(15,23,42,0.07)" : "none",
      }}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black text-white"
            style={{ background: "linear-gradient(135deg,#6366f1,#8b5cf6)", boxShadow: "0 4px 16px rgba(99,102,241,0.4)" }}>AV</div>
          <span className="text-sm font-bold text-slate-800">Akhilesh Vangala</span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          {NAV.map(({ l, h }) => (
            <a key={h} href={h} className="px-4 py-2 text-sm font-medium rounded-lg transition-all text-slate-500 hover:text-indigo-600 hover:bg-indigo-50">{l}</a>
          ))}
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
            className="ml-1 p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-all">
            <GithubIcon className="w-4 h-4" />
          </a>
          <a href="/resume.pdf" download className="ml-2 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold btn-primary">
            <Download className="w-3.5 h-3.5" />Resume
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-slate-500">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl">
            {NAV.map(({ l, h }) => (
              <a key={h} href={h} onClick={() => setOpen(false)}
                className="block px-6 py-3.5 text-sm text-slate-500 hover:text-slate-900 hover:bg-slate-50 border-b border-slate-100">{l}</a>
            ))}
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
              className="block px-6 py-3.5 text-sm text-slate-500 hover:text-slate-900 hover:bg-slate-50 border-b border-slate-100">GitHub</a>
            <a href="/resume.pdf" download className="block px-6 py-3.5 text-sm font-bold text-indigo-600 hover:bg-indigo-50">Download Resume</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

/* ═══════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════ */
function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden" style={{ background: "#f1f5f9" }}>
      {/* Background layers */}
      <div className="line-grid absolute inset-0 opacity-90" />
      <div className="dot-grid absolute inset-0 opacity-50" />
      <div className="blob1 absolute" style={{ width: 540, height: 540, top: "-15%", right: "-8%" }} />
      <div className="blob2 absolute" style={{ width: 460, height: 460, bottom: "-12%", left: "-8%" }} />
      <div className="blob3 absolute" style={{ width: 320, height: 320, top: "40%", left: "55%" }} />

      <div className="relative z-10 max-w-4xl w-full mx-auto">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-8 bg-emerald-50 border border-emerald-200 text-emerald-700">
          <span className="pulse-green" />
          Open to Data Science · ML Engineer · Analyst Roles · New York, NY
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.65 }}
          className="font-black tracking-tighter text-slate-900 mb-3 leading-none glow-ring"
          style={{ fontSize: "clamp(3rem,9vw,6.5rem)" }}>
          Akhilesh Vangala
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-lg md:text-xl font-bold mb-5 gt-shift">
          Data Scientist &amp; ML Engineer&nbsp;·&nbsp;NYU MS Data Science&nbsp;·&nbsp;GPA 4.0
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="text-slate-500 max-w-2xl mx-auto text-base leading-relaxed mb-8">
          Building predictive models, large-scale data pipelines, and behavioral analytics systems.
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.38 }}
          className="flex flex-wrap justify-center gap-2 mb-10">
          {["Python", "PyTorch", "SQL", "PySpark", "Graph Neural Networks"].map(t => (
            <span key={t} className="chip chip-i text-sm font-semibold px-4 py-1.5">{t}</span>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
          className="flex flex-wrap justify-center gap-3">
          <a href="/resume.pdf" download className="btn-primary flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold">
            <Download className="w-4 h-4" />Download Resume
          </a>
          <a href="#projects" className="btn-outline flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold">
            View Projects<ArrowUpRight className="w-4 h-4" />
          </a>
          <a href="#contact" className="flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors">
            Get In Touch
          </a>
        </motion.div>
      </div>

      <motion.a href="#about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
        className="absolute bottom-8 flex flex-col items-center gap-1 text-slate-400 hover:text-indigo-500 transition-colors">
        <span className="text-xs font-mono tracking-widest uppercase">Explore</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.a>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   ABOUT
   ═══════════════════════════════════════════════ */
function About() {
  return (
    <section id="about" className="relative z-10 py-28 px-6 sec-alt">
      <div className="max-w-6xl mx-auto">
        <SH icon={BookOpen} title="About Me" />

        <div className="grid lg:grid-cols-3 gap-5">
          {/* Bio card */}
          <FadeIn delay={0.1} className="lg:col-span-2">
            <TiltCard className="card rounded-2xl p-8 h-full">
              {/* Currently banner */}
              <div className="flex items-start gap-3 mb-6 p-4 rounded-xl border"
                style={{ background: "linear-gradient(135deg,#eef2ff,#f5f3ff)", borderColor: "#c7d2fe" }}>
                <span className="pulse-green mt-1.5 flex-shrink-0" />
                <p className="text-sm font-medium leading-relaxed" style={{ color: "#3730a3" }}>
                  <span className="font-black">Currently:</span> Extending the HiFiMAP survival analysis pipeline at NYU · Building rDNA variant detection tools at Hochwagen Lab.
                </p>
              </div>
              <div className="flex items-center gap-2 mb-5">
                <div className="accent-bar w-10" />
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-500">Background</span>
              </div>
              <div className="space-y-4 text-slate-500 text-sm leading-loose">
                <p>I&apos;m a Data Science MS student at <span className="text-slate-800 font-semibold">NYU Courant Institute</span>, working at the intersection of ML engineering, genomics, and applied AI. I run two active research threads: extending genome-wide IBD survival mapping with Cox PH mixed-effects models, and building strand-aware ribosomal DNA variant detectors on 54 WGS samples at 5,000x+ depth — resolving a 40× underestimation flaw and increasing variant calls <span className="text-slate-800 font-semibold">67×</span>.</p>
                <p>On the engineering side, I build systems end-to-end. Fraud detection at <span className="text-slate-800 font-semibold">94% accuracy with sub-50ms latency</span> over 500K+ daily transactions. ICU vital sign forecasting on <span className="text-slate-800 font-semibold">MIMIC-III</span> with temporal SHAP interpretability. <span className="text-slate-800 font-semibold">96.2% mAP</span> debris classification deployed with TensorRT FP16 at 47 FPS. Every system I build is fast, explainable, and reproducible.</p>
                <p>Three hackathon runner-up finishes in a single academic year at NYU and Columbia. The common thread: prototyping fast, iterating on evidence, and shipping something that works under pressure.</p>
              </div>
            </TiltCard>
          </FadeIn>

          {/* Education card */}
          <FadeIn delay={0.2}>
            <div className="card rounded-2xl overflow-hidden h-full flex flex-col">
              <div className="flex items-center gap-2 px-6 pt-5 pb-3 border-b border-slate-100">
                <div className="icon-badge" style={{ background: "linear-gradient(135deg,#6366f1,#8b5cf6)", width: 32, height: 32, borderRadius: 10 }}>
                  <GraduationCap className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Education</h3>
              </div>
              {education.map((e, i) => (
                <div key={e.institution} className={`p-6 flex-1 ${i === 0 ? "border-b border-slate-100" : ""}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full" style={{ background: i === 0 ? "#6366f1" : "#8b5cf6" }} />
                    <span className="text-xs font-mono text-slate-400">{e.period}</span>
                  </div>
                  <div className="font-black text-slate-900 text-sm leading-snug mb-1">{e.degree}</div>
                  <div className="text-xs font-semibold text-indigo-500 mb-2">{e.institution}</div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200 mb-3">
                    <Sparkles className="w-3 h-3 text-emerald-600" />
                    <span className="text-xs font-black text-emerald-700">GPA {e.gpa}</span>
                  </div>
                  <div className="text-xs text-slate-400 leading-relaxed">{e.courses}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Skills 3-column grid */}
        <FadeIn delay={0.2} className="mt-5">
          <div className="card rounded-2xl p-7">
            <div className="flex items-center gap-3 mb-7">
              <div className="accent-bar w-8" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-indigo-500">Technical Skills</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {skillColumns.map(col => {
                const ColIcon = ICONS[col.iconKey] ?? Code;
                return (
                  <div key={col.label} className="skill-col">
                    <div className="flex items-center gap-2.5 mb-4">
                      <div className="icon-badge" style={{ background: "linear-gradient(135deg,#6366f1,#8b5cf6)", width: 32, height: 32, borderRadius: 10 }}>
                        <ColIcon className="w-4 h-4" />
                      </div>
                      <div className="text-sm font-black text-slate-800">{col.label}</div>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {col.items.map(item => <span key={item} className="chip chip-i">{item}</span>)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   RESEARCH & EXPERIENCE
   ═══════════════════════════════════════════════ */
function Experience() {
  return (
    <section id="experience" className="relative z-10 py-28 px-6" style={{ background: "#f1f5f9" }}>
      <div className="max-w-6xl mx-auto">
        <SH icon={Briefcase} title="Research & Experience" sub="Two active NYU research labs · Production engineering" />

        <div className="relative pl-12 space-y-6">
          <div className="tl-line" />
          {allExperience.map((e, i) => (
            <SlideIn key={e.org + e.role} delay={i * 0.1} className="relative">
              <div className="absolute -left-12 top-8" style={{ transform: "translateX(13px)" }}>
                {e.type === "research" ? <div className="dot-i" /> : <div className="dot-w" />}
              </div>
              <TiltCard className="card rounded-2xl overflow-hidden group">
                <div className="proj-strip" style={{ background: e.type === "research"
                  ? "linear-gradient(90deg,#6366f1,#8b5cf6,#ec4899)"
                  : "linear-gradient(90deg,#94a3b8,#64748b)" }} />
                <div className="p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                    <div>
                      {e.type === "research" && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 mb-2">
                          <span className="pulse-green" />ACTIVE · {e.period}
                        </span>
                      )}
                      {e.type === "work" && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-500 mb-2">
                          {e.period}
                        </span>
                      )}
                      <h3 className="text-xl font-black text-slate-900 mt-1 group-hover:text-indigo-600 transition-colors">{e.role}</h3>
                      <div className="text-slate-600 font-semibold mt-0.5">{e.org}</div>
                      {e.advisor && <div className="text-sm italic text-slate-400">{e.advisor}</div>}
                      <div className="text-xs text-slate-400 mt-1 flex items-center gap-1"><MapPin className="w-3 h-3" />{e.location}</div>
                    </div>
                    <div className="icon-badge icon-badge-lg" style={{
                      background: e.type === "research"
                        ? "linear-gradient(135deg,#6366f1,#8b5cf6)"
                        : "linear-gradient(135deg,#64748b,#475569)",
                    }}>
                      {e.type === "research" ? <Dna className="w-6 h-6" /> : <Briefcase className="w-6 h-6" />}
                    </div>
                  </div>
                  <ul className="space-y-3 mb-5">
                    {e.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-sm text-slate-500 leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: e.type === "research" ? "#6366f1" : "#94a3b8" }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {e.tags.map(t => <span key={t} className={`chip ${e.type === "research" ? "chip-i" : "chip-s"}`}>{t}</span>)}
                  </div>
                </div>
              </TiltCard>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   PROJECT CARD
   ═══════════════════════════════════════════════ */
function ProjectCard({ p }: { p: typeof allProjects[0] }) {
  const PIcon = ICONS[p.iconKey] ?? Code;
  return (
    <TiltCard className="card rounded-2xl overflow-hidden flex flex-col h-full group">
      <div className="proj-strip" style={{ background: `linear-gradient(90deg,${p.color.from},${p.color.to})` }} />
      <div className="p-6 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-start gap-3">
            <div className="icon-badge" style={{ background: `linear-gradient(135deg,${p.color.from},${p.color.to})` }}>
              <PIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-black text-slate-900 leading-snug group-hover:text-indigo-600 transition-colors">{p.title}</h3>
              <span className="inline-flex items-center gap-1 mt-1 text-xs font-bold"
                style={{ color: p.color.text }}>
                {p.domain}
              </span>
            </div>
          </div>
          <div className="flex gap-1 flex-shrink-0">
            {p.demo && (
              <a href={p.demo} target="_blank" rel="noopener noreferrer"
                className="p-1.5 rounded-lg hover:bg-indigo-50 text-indigo-400 transition-colors" title="Live Demo">
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {p.github && (
              <a href={p.github} target="_blank" rel="noopener noreferrer"
                className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors" title="GitHub">
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-xs text-slate-600 leading-relaxed flex-1 mb-4">{p.description}</p>

        {/* Metrics */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {p.metrics.map(m => <span key={m} className="badge-g">{m}</span>)}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {p.tags.map(t => (
            <span key={t} className="chip"
              style={{ background: p.color.bg, color: p.color.text, border: `1px solid ${p.color.border}` }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </TiltCard>
  );
}

/* ═══════════════════════════════════════════════
   PROJECTS
   ═══════════════════════════════════════════════ */
function Projects() {
  const featured = allProjects.filter(p => p.featured);
  const more = allProjects.filter(p => !p.featured);
  return (
    <section id="projects" className="relative z-10 py-28 px-6 sec-alt">
      <div className="max-w-6xl mx-auto">
        <SH icon={Code} title="Projects" sub="All 8 projects — impact first, then how" />

        {/* Featured */}
        <div className="mb-5">
          <div className="flex items-center gap-3 mb-5">
            <div className="accent-bar w-8" />
            <span className="text-xs font-black uppercase tracking-widest text-indigo-500">Featured Work</span>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {featured.map((p, i) => (
              <FadeIn key={p.id} delay={(i % 2) * 0.08}>
                <ProjectCard p={p} />
              </FadeIn>
            ))}
          </div>
        </div>

        {/* More */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-5 mt-10">
            <div className="accent-bar w-8" />
            <span className="text-xs font-black uppercase tracking-widest text-indigo-500">More Projects</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {more.map((p, i) => (
              <FadeIn key={p.id} delay={i * 0.07}>
                <ProjectCard p={p} />
              </FadeIn>
            ))}
          </div>
          <div className="mt-5 flex justify-end">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-semibold text-indigo-500 hover:text-indigo-700 transition-colors">
              <GithubIcon className="w-4 h-4" />View all repositories on GitHub<ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Hackathons subsection */}
        <FadeIn delay={0.05}>
          <div className="flex items-center gap-3 mb-5">
            <div className="icon-badge" style={{ background: "linear-gradient(135deg,#f59e0b,#d97706)", width: 32, height: 32, borderRadius: 10 }}>
              <Trophy className="w-4 h-4" />
            </div>
            <span className="text-xs font-black uppercase tracking-widest text-amber-700">Hackathons — 3× Runner-Up</span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {hackathonBadges.map(h => (
              <a key={h.name} href={h.repo} target="_blank" rel="noopener noreferrer"
                className="card rounded-2xl p-5 flex items-start gap-4 group">
                <div className="trophy-ring">
                  <Trophy className="w-6 h-6 text-amber-600" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-black text-slate-900 group-hover:text-indigo-600 transition-colors">{h.project}</div>
                  <div className="text-xs font-bold mt-0.5"
                    style={{ background: `linear-gradient(135deg,${h.color.from},${h.color.to})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    {h.name}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5 font-medium">{h.org}</div>
                  <div className="text-xs text-slate-500 mt-2 leading-relaxed">{h.desc}</div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-indigo-500 transition-colors" />
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   CONTACT
   ═══════════════════════════════════════════════ */
function Contact() {
  return (
    <section id="contact" className="relative z-10 py-28 px-6 overflow-hidden" style={{ background: "#f1f5f9" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob1 absolute" style={{ width: 500, height: 500, top: "20%", left: "50%", transform: "translateX(-50%)" }} />
      </div>
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <SH icon={Mail} title="Get In Touch" />

        <FadeIn delay={0.1}>
          <p className="text-slate-500 text-base leading-relaxed mb-12 max-w-xl mx-auto">
            Open to research collaborations, data science and ML engineering roles, and interesting conversations.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`mailto:${personalInfo.email}`}
              className="flex items-center justify-center gap-3 px-8 py-5 rounded-2xl card hover:border-indigo-200 group transition-all">
              <div className="icon-badge" style={{ background: "linear-gradient(135deg,#6366f1,#8b5cf6)" }}>
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs text-slate-400 font-medium">Email</div>
                <div className="text-sm font-bold text-slate-800">{personalInfo.email}</div>
              </div>
            </a>

            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-5 rounded-2xl card hover:border-blue-200 group transition-all">
              <div className="icon-badge" style={{ background: "linear-gradient(135deg,#0a66c2,#0077b5)" }}>
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs text-slate-400 font-medium">LinkedIn</div>
                <div className="text-sm font-bold text-slate-800">akhilesh-nyu</div>
              </div>
            </a>

            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-5 rounded-2xl card hover:border-slate-300 group transition-all">
              <div className="icon-badge" style={{ background: "linear-gradient(135deg,#1e293b,#0f172a)" }}>
                <GithubIcon className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs text-slate-400 font-medium">GitHub</div>
                <div className="text-sm font-bold text-slate-800">Akhilesh-Vangala</div>
              </div>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="relative z-10 py-8 px-6 border-t border-slate-200" style={{ background: "#f1f5f9" }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded text-xs font-black text-white flex items-center justify-center" style={{ background: "linear-gradient(135deg,#6366f1,#8b5cf6)" }}>AV</div>
          <span className="text-xs text-slate-400 font-mono">Akhilesh Vangala · NYU Courant</span>
        </div>
        <p className="text-slate-300 text-xs">© {new Date().getFullYear()} · Next.js · Tailwind · Framer Motion</p>
        <div className="flex gap-3">
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-indigo-500 transition-colors">
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-indigo-500 transition-colors">
            <GithubIcon className="w-4 h-4" />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="text-slate-300 hover:text-indigo-500 transition-colors">
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <NeuralBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
