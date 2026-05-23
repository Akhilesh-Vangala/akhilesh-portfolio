"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronDown,
  Menu,
  X,
  Trophy,
  BookOpen,
  Briefcase,
  Code,
  GraduationCap,
  FlaskConical,
  Send,
} from "lucide-react";

function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
import {
  personalInfo,
  education,
  skills,
  skillTags,
  coreValues,
  research,
  experience,
  hackathons,
  projects,
} from "@/lib/data";

// ─── Helpers ────────────────────────────────────────────────────────────────

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({ icon: Icon, title }: { icon: React.ElementType; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
        <Icon className="w-5 h-5 text-indigo-400" />
      </div>
      <h2 className="text-3xl font-bold text-white">{title}</h2>
      <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/30 to-transparent ml-2" />
    </div>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <span className="text-xs px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-medium">
      {label}
    </span>
  );
}

// ─── Navbar ─────────────────────────────────────────────────────────────────

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Hackathons", href: "#hackathons" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-950/90 backdrop-blur-md border-b border-white/5 shadow-xl shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="font-bold text-white text-lg tracking-tight">
          AV<span className="text-indigo-400">.</span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200 font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-indigo-500/40 text-sm text-indigo-300 hover:bg-indigo-500/10 transition-all"
          >
            <GithubIcon className="w-4 h-4" />
            GitHub
          </a>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-gray-400 hover:text-white"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-gray-950/95 backdrop-blur-md border-b border-white/5 px-4 pb-4"
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-gray-300 hover:text-white text-sm font-medium border-b border-white/5"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden"
    >
      {/* background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-indigo-600/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-violet-600/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-900/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-36 h-36 mx-auto mb-6 rounded-full overflow-hidden border-4 border-indigo-500/40 shadow-2xl shadow-indigo-500/20"
        >
          <Image
            src="/profile.jpg"
            alt="Akhilesh Vangala"
            width={144}
            height={144}
            className="w-full h-full object-cover"
            priority
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-indigo-400 font-medium mb-3 tracking-widest uppercase text-sm"
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight"
        >
          Akhilesh
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl font-semibold text-indigo-400 mb-6"
        >
          Data Scientist &amp; ML Engineer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 max-w-2xl mx-auto mb-10 text-base md:text-lg leading-relaxed"
        >
          {personalInfo.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="px-6 py-3 rounded-full border border-white/10 hover:border-indigo-500/40 text-gray-300 hover:text-white font-semibold transition-all"
          >
            View Projects
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-4"
        >
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-white/10 hover:border-indigo-500/40 text-gray-400 hover:text-indigo-400 transition-all"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-white/10 hover:border-indigo-500/40 text-gray-400 hover:text-indigo-400 transition-all"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-3 rounded-full border border-white/10 hover:border-indigo-500/40 text-gray-400 hover:text-indigo-400 transition-all"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 text-gray-600 hover:text-gray-400 transition-colors"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </motion.a>
    </section>
  );
}

// ─── About ───────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionTitle icon={BookOpen} title="About Me" />
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-10">
          <FadeIn delay={0.1} className="md:col-span-2">
            <div className="bg-white/3 border border-white/8 rounded-2xl p-8 space-y-4">
              <h3 className="text-xl font-bold text-white">Who I Am</h3>
              <p className="text-gray-400 leading-relaxed">
                I&apos;m a Data Science Master&apos;s student at NYU Courant with a 4.0 GPA and a
                passion for building production-ready ML systems. My work spans two active research
                labs — genomic survival modeling at Rory Meyers College of Nursing and ribosomal DNA
                variant analysis at the Hochwagen Lab.
              </p>
              <p className="text-gray-400 leading-relaxed">
                On the engineering side I build end-to-end pipelines: from real-time fraud detection
                with Graph Neural Networks and Kafka, to ICU vital-sign forecasting on MIMIC-III, to
                multimodal 4D scene editing in Blender. I care deeply about reproducibility,
                interpretability, and systems that scale.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Three hackathon runner-up finishes at NYU (Claude, NVIDIA×Dell, Google) trained me
                to prototype fast and ship clean. I&apos;m always looking for hard problems at the
                intersection of ML research and real-world impact.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { val: "4.0", label: "GPA at NYU" },
                  { val: "2", label: "Research Labs" },
                  { val: "12+", label: "Projects" },
                ].map((s) => (
                  <div key={s.label} className="text-center p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/10">
                    <div className="text-2xl font-black text-indigo-400">{s.val}</div>
                    <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-4">
              <div className="bg-white/3 border border-white/8 rounded-2xl p-6">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Core Values</h3>
                <div className="grid grid-cols-2 gap-2">
                  {coreValues.map((cv) => (
                    <div
                      key={cv.title}
                      className="p-3 rounded-lg bg-indigo-500/5 border border-indigo-500/10 hover:border-indigo-500/30 transition-all"
                    >
                      <div className="text-xs font-semibold text-white">{cv.title}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{cv.sub}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/3 border border-white/8 rounded-2xl p-6">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Top Skills</h3>
                <div className="space-y-3">
                  {skills.map((s) => (
                    <div key={s.name}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-300">{s.name}</span>
                        <span className="text-indigo-400">{s.level}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/5">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Skill tags */}
        <FadeIn delay={0.3} className="mt-8">
          <div className="bg-white/3 border border-white/8 rounded-2xl p-6">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Technologies &amp; Tools</h3>
            <div className="flex flex-wrap gap-2">
              {skillTags.map((t) => (
                <Tag key={t} label={t} />
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Education */}
        <FadeIn delay={0.1} className="mt-8">
          <div className="bg-white/3 border border-white/8 rounded-2xl p-8">
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-5 h-5 text-indigo-400" />
              <h3 className="text-lg font-bold text-white">Education</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((e) => (
                <div key={e.institution} className="border-l-2 border-indigo-500/40 pl-4">
                  <div className="text-xs text-indigo-400 font-medium mb-1">{e.period}</div>
                  <div className="font-bold text-white">{e.degree}</div>
                  <div className="text-sm text-gray-400 mt-0.5">{e.institution}</div>
                  <div className="text-sm text-indigo-300 font-medium mt-1">GPA: {e.gpa}</div>
                  <div className="text-xs text-gray-500 mt-2 leading-relaxed">{e.courses}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Research ────────────────────────────────────────────────────────────────

function Research() {
  return (
    <section id="research" className="py-24 px-4 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionTitle icon={FlaskConical} title="Research Experience" />
        </FadeIn>
        <div className="space-y-6">
          {research.map((r, i) => (
            <FadeIn key={r.lab} delay={i * 0.15}>
              <div className="bg-white/3 border border-white/8 rounded-2xl p-8 hover:border-indigo-500/20 transition-all group">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                  <div>
                    <div className="text-xs text-indigo-400 font-semibold uppercase tracking-widest mb-1">
                      {r.period}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {r.role}
                    </h3>
                    <div className="text-gray-400 mt-0.5">{r.lab}</div>
                    <div className="text-sm text-gray-500 italic mt-0.5">{r.advisor}</div>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 font-medium">
                    Active
                  </span>
                </div>
                <ul className="space-y-3 mb-5">
                  {r.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {r.tags.map((t) => (
                    <Tag key={t} label={t} />
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Experience ──────────────────────────────────────────────────────────────

function Experience() {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionTitle icon={Briefcase} title="Work Experience" />
        </FadeIn>
        <div className="space-y-6">
          {experience.map((e, i) => (
            <FadeIn key={e.company} delay={i * 0.15}>
              <div className="bg-white/3 border border-white/8 rounded-2xl p-8 hover:border-indigo-500/20 transition-all group">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                  <div>
                    <div className="text-xs text-indigo-400 font-semibold uppercase tracking-widest mb-1">
                      {e.period}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {e.role}
                    </h3>
                    <div className="text-gray-400 mt-0.5">{e.company}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{e.location}</div>
                  </div>
                </div>
                <ul className="space-y-3 mb-5">
                  {e.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {e.tags.map((t) => (
                    <Tag key={t} label={t} />
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Projects ────────────────────────────────────────────────────────────────

function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionTitle icon={Code} title="Projects" />
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <FadeIn key={p.title} delay={(i % 2) * 0.1}>
              <div className="bg-white/3 border border-white/8 rounded-2xl p-6 h-full flex flex-col hover:border-indigo-500/20 transition-all group">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="font-bold text-white group-hover:text-indigo-300 transition-colors leading-snug">
                    {p.title}
                  </h3>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 p-2 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-all"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">{p.description}</p>
                {p.metrics.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.metrics.map((m) => (
                      <span
                        key={m}
                        className="text-xs px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 font-medium"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <Tag key={t} label={t} />
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.2} className="mt-8 text-center">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:border-indigo-500/40 text-gray-300 hover:text-white font-medium transition-all"
          >
            <GithubIcon className="w-4 h-4" />
            View All on GitHub
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Hackathons ──────────────────────────────────────────────────────────────

function Hackathons() {
  return (
    <section id="hackathons" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionTitle icon={Trophy} title="Hackathons" />
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-6">
          {hackathons.map((h, i) => (
            <FadeIn key={h.name} delay={i * 0.12}>
              <div className="bg-white/3 border border-white/8 rounded-2xl p-6 h-full flex flex-col hover:border-yellow-500/20 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 font-semibold">
                    {h.result}
                  </span>
                  <a href={h.github} target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="w-4 h-4 text-gray-500 hover:text-white transition-colors" />
                  </a>
                </div>
                <h3 className="font-bold text-white group-hover:text-yellow-300 transition-colors mb-1">
                  {h.name}
                </h3>
                <div className="text-xs text-gray-500 mb-3">{h.organizer}</div>
                <div className="text-sm font-semibold text-indigo-400 mb-2">{h.project}</div>
                <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">{h.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {h.tags.map((t) => (
                    <Tag key={t} label={t} />
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ─────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-white/[0.01]">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <SectionTitle icon={Send} title="Get In Touch" />
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-8">
          <FadeIn delay={0.1}>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Contact Information</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                I&apos;m actively looking for research collaborations, ML engineering roles, and
                interesting problems. Feel free to reach out!
              </p>
              <div className="space-y-3 pt-2">
                {[
                  { icon: Mail, label: personalInfo.email, href: `mailto:${personalInfo.email}` },
                  { icon: Phone, label: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                  { icon: MapPin, label: personalInfo.location, href: "#" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/3 border border-white/8 hover:border-indigo-500/30 text-gray-400 hover:text-white transition-all group"
                  >
                    <item.icon className="w-4 h-4 text-indigo-400 group-hover:text-indigo-300" />
                    <span className="text-sm">{item.label}</span>
                  </a>
                ))}
              </div>
              <div className="flex gap-3 pt-2">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 hover:bg-blue-600/20 transition-all text-sm font-medium"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  LinkedIn
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition-all text-sm font-medium"
                >
                  <GithubIcon className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = `mailto:${personalInfo.email}`;
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs text-gray-400 font-medium mb-1.5 uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-white/3 border border-white/8 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 text-sm transition-all"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 font-medium mb-1.5 uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/3 border border-white/8 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 text-sm transition-all"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 font-medium mb-1.5 uppercase tracking-wider">Message</label>
                <textarea
                  rows={4}
                  placeholder="What would you like to discuss?"
                  className="w-full px-4 py-3 rounded-xl bg-white/3 border border-white/8 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 text-sm transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-4 text-center">
      <p className="text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} Akhilesh Vangala. Built with Next.js &amp; Tailwind CSS.
      </p>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
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
