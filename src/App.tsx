/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, ArrowRight, Database, Cpu, School, Briefcase, ChevronDown, Waves, RefreshCw, Activity, Mail, Phone, Github, Linkedin, Orbit } from 'lucide-react';
import {
  PROJECTS,
  EDUCATION_STORY,
  CURRENT_DEGREE,
  EXPERIENCE,
  CONTACT_MAILTO,
  CONTACT_PHONE_TEL,
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_GITHUB_URL,
  CONTACT_LINKEDIN_URL,
  UCDBC_LINKTREE_URL,
} from './constants';

type Page = 'about' | 'education' | 'projects' | 'dragon-boat';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('about');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToProjects = () => {
    setCurrentPage('projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToDragonBoat = () => {
    setCurrentPage('dragon-boat');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage onViewProjects={goToProjects} onViewDragonBoat={goToDragonBoat} />;
      case 'education':
        return <EducationPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'dragon-boat':
        return <DragonBoatPage />;
      default:
        return <AboutPage onViewProjects={goToProjects} onViewDragonBoat={goToDragonBoat} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-on-surface selection:bg-primary/30">
      {/* Navigation */}
      <nav className={`fixed top-0 z-50 w-full flex justify-between items-center px-8 py-4 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
        <div 
          className="font-body font-bold tracking-tighter text-primary text-xl cursor-pointer"
          onClick={() => setCurrentPage('about')}
        >
          Andy Chen
        </div>
        
        <div className="hidden md:flex items-center gap-12 font-body font-medium text-lg tracking-tight">
          <button 
            onClick={() => setCurrentPage('about')}
            className={`transition-colors ${currentPage === 'about' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface hover:text-primary'}`}
          >
            About
          </button>
          <button
            onClick={() => setCurrentPage('education')}
            className={`transition-colors ${currentPage === 'education' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface hover:text-primary'}`}
          >
            Education
          </button>
          <button
            onClick={() => setCurrentPage('projects')}
            className={`transition-colors ${currentPage === 'projects' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface hover:text-primary'}`}
          >
            Projects
          </button>
          <button 
            onClick={() => setCurrentPage('dragon-boat')}
            className={`transition-colors ${currentPage === 'dragon-boat' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface hover:text-primary'}`}
          >
            Dragon Boat
          </button>
          <a
            href="/SWE_Resume_AndyChen.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-on-surface hover:text-primary transition-colors"
          >
            Resume
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-white/5 transition-all text-primary">
            <Terminal size={20} />
          </button>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        <motion.main
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {renderPage()}
        </motion.main>
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-[#131313] py-12 flex flex-col md:flex-row justify-between items-center px-12 w-full border-t border-white/5">
        <div className="font-body uppercase tracking-widest text-xs text-on-surface/60 mb-6 md:mb-0">
          © 2024 Andy Chen
        </div>
        <div className="flex gap-12 font-body uppercase tracking-widest text-xs">
          <a href={CONTACT_GITHUB_URL} target="_blank" rel="noreferrer" className="text-on-surface/60 hover:text-primary transition-colors">GitHub</a>
          <a href={CONTACT_LINKEDIN_URL} target="_blank" rel="noreferrer" className="text-on-surface/60 hover:text-primary transition-colors">LinkedIn</a>
          <a href={CONTACT_MAILTO} className="text-on-surface/60 hover:text-primary transition-colors">Email</a>
          <a href={`tel:${CONTACT_PHONE_TEL}`} className="text-on-surface/60 hover:text-primary transition-colors">Phone</a>
        </div>
        <div className="mt-6 md:mt-0 font-body uppercase tracking-widest text-[10px] text-on-surface/30">
          React · Vite · Tailwind
        </div>
      </footer>
    </div>
  );
}

function CuteStarfield({ className = '' }: { className?: string }) {
  const stars = useMemo(
    () =>
      Array.from({ length: 52 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 2.2 + 0.8,
        duration: 2.4 + Math.random() * 3.2,
        delay: Math.random() * 4.5,
      })),
    []
  );

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden>
      {stars.map((s) => (
        <span
          key={s.id}
          className="cute-star"
          style={
            {
              left: s.left,
              top: s.top,
              width: s.size,
              height: s.size,
              '--twinkle-duration': `${s.duration}s`,
              '--twinkle-delay': `${s.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

type AboutPageProps = {
  onViewProjects: () => void;
  onViewDragonBoat: () => void;
};

function AboutPage({ onViewProjects, onViewDragonBoat }: AboutPageProps) {
  const contactSectionRef = useRef<HTMLElement>(null);

  const scrollToContact = useCallback(() => {
    contactSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <>
      {/* Hero — cute outer space landing */}
      <section className="relative min-h-screen flex flex-col justify-center items-start px-8 md:px-24 overflow-hidden pt-20 cosmic-cute-bg">
        <div className="absolute inset-0 z-0 opacity-35">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdO_Jcjc73aUzwESDBqDaI-nbXJKHCltOMEHqltzclsMqQxJ0hg8Xxxhbsa6mcCp1F7PAgzPGjdNfitmnnYPSkGS8XQnD0YDAT-4BMy_RP49r-2vNvcRrGRzpIls1pvnNBFflO4GFn8auRfvd394ogh3aazIv7nRU8FDTkvSU78XHisawg6-9cAiUzFg7tFsndS6ZLbBOhV9CJ18VRC7RjNMsCEBd6OygMOXD13BOGLkSWkYqp1YYAK15H4G7gaUDyhYX2azSKFW9Z"
            alt=""
            className="w-full h-full object-cover mix-blend-screen"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-transparent to-background" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-space-depth/10" />
        </div>
        <CuteStarfield className="z-[1]" />

        <div className="relative z-10 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-4 py-2 text-sm text-on-surface mb-8"
          >
            <Orbit className="text-primary shrink-0" size={18} aria-hidden />
            <span className="font-body tracking-wide">Hello, visitor — welcome to my site.</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="font-display font-bold text-5xl md:text-7xl tracking-tight leading-[1.05] mb-6 text-on-surface"
          >
            Andy Chen
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="font-body text-lg md:text-xl text-on-surface-variant leading-relaxed mb-6"
          >
            A bit about me: I&apos;m a 4th year Computer Science, Mathematics, and Physics student at the University of Toronto.
            I also dragon boat for one of UofT&apos;s teams,{' '}
            <button
              type="button"
              onClick={onViewDragonBoat}
              className="text-primary underline decoration-primary/50 decoration-2 underline-offset-4 hover:brightness-110 transition-all font-semibold"
            >
              NDUC
            </button>
            !
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.42 }}
            className="font-mono text-lg md:text-xl text-primary/85 mb-8 tracking-wide"
          >
            Zeep Zorp Zoup.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="rounded-2xl border border-white/10 bg-background/50 backdrop-blur-md p-6 md:p-8 mb-10"
          >
            <p className="font-body text-base md:text-lg text-on-surface-variant leading-relaxed">
              For whatever reason you stumbled across this site — whether you&apos;re a recruiter, my friend, or anyone else —{' '}
              <span className="text-on-surface">welcome!</span> Grab some snacks and a cup of coffee while I tell you a bit more
              about me.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.58 }}
            className="flex flex-wrap gap-4"
          >
            <button
              type="button"
              onClick={onViewProjects}
              className="rounded-full bg-primary text-on-primary-container px-8 py-3.5 font-body font-bold shadow-[0_0_24px_rgba(29,233,182,0.35)] hover:shadow-[0_0_32px_rgba(29,233,182,0.5)] transition-all"
            >
              Explore my projects
            </button>
            <button
              type="button"
              onClick={scrollToContact}
              className="inline-flex items-center justify-center rounded-full border-2 border-outline/30 text-on-surface px-8 py-3.5 font-body font-bold bg-surface-container hover:border-primary/40 hover:bg-surface-container-low transition-all"
            >
              Say hi!
            </button>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-outline animate-bounce" aria-hidden>
          <ChevronDown size={28} />
        </div>
      </section>

      {/* Featured Work */}
      <section className="bg-surface-container-low py-32 px-8 md:px-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" aria-hidden />
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-20 relative z-10">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-3 block">Featured</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-on-surface tracking-tight">Things I&apos;ve built &amp; led</h2>
          </div>
          <div className="hidden md:block h-px bg-outline/20 flex-grow mx-8 mb-4" />
          <button
            type="button"
            onClick={onViewProjects}
            className="font-body text-primary uppercase tracking-widest text-sm hover:underline self-start md:self-auto"
          >
            See the full list →
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id}
              className={`${project.isLarge ? 'md:col-span-2' : project.isWide ? 'md:col-span-2' : ''} group relative overflow-hidden bg-surface-container`}
            >
              {project.image ? (
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
                    referrerPolicy="no-referrer"
                  />
                  <div className="p-12 absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background to-transparent pointer-events-none">
                    <h3 className="text-3xl font-headline font-semibold mb-2 text-primary tracking-tight">{project.title}</h3>
                    <p className="font-body text-on-surface-variant max-w-md">{project.description}</p>
                  </div>
                </div>
              ) : (
                <div className="p-8 h-full flex flex-col justify-between">
                  <div className="mb-8">
                    {project.icon === 'database' ? <Database className="text-primary mb-6" size={40} /> : <Cpu className="text-primary mb-6" size={40} />}
                    <h3 className="text-2xl font-headline font-semibold mb-4 tracking-tight">{project.title}</h3>
                    <p className="font-body text-sm text-on-surface-variant">{project.description}</p>
                  </div>
                  <div className="flex justify-between items-center pt-8 border-t border-white/5">
                    <span className="font-body text-xs uppercase text-on-surface/50">{project.category}</span>
                    <ArrowRight className="text-primary group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-36 md:py-48 px-8 text-center bg-background relative overflow-hidden cosmic-cute-bg">
        <CuteStarfield className="opacity-40 z-0" />
        <div className="absolute inset-0 spacetime-grid opacity-15 pointer-events-none z-0" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-display font-bold text-4xl md:text-6xl mb-6 text-on-surface leading-tight tracking-tight">
            Let&apos;s <span className="text-primary">talk</span>
          </h2>
          <p className="font-body text-lg md:text-xl text-on-surface-variant mb-10 leading-relaxed">
            Recruiters, collaborators, or anyone curious — send a message and I&apos;ll get back to you.
          </p>
          <button
            type="button"
            onClick={scrollToContact}
            className="inline-flex items-center justify-center rounded-full bg-tertiary text-on-tertiary px-10 py-4 font-body font-bold text-base md:text-lg hover:opacity-90 transition-opacity tracking-wide uppercase shadow-[0_0_24px_rgba(56,189,248,0.2)]"
          >
            Contact
          </button>
        </div>
      </section>

      {/* Contact — scroll target for “Say hi!” / “Say Hello” */}
      <section
        ref={contactSectionRef}
        id="contact"
        aria-labelledby="contact-heading"
        className="scroll-mt-28 py-24 md:py-32 px-8 md:px-24 bg-[#131313] border-t border-outline/15"
      >
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-body text-xs uppercase tracking-[0.35em] text-primary mb-4 block">Contact</span>
          <h2 id="contact-heading" className="font-display font-bold text-4xl md:text-5xl text-on-surface mb-4 tracking-tight">
            Get in touch
          </h2>
          <p className="font-body text-on-surface-variant text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Email, phone, or socials — whatever you prefer.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <a
              href={CONTACT_MAILTO}
              className="group flex items-start gap-4 p-6 bg-surface-container border border-white/5 hover:border-primary/30 transition-colors rounded-sm"
            >
              <Mail className="text-primary shrink-0 mt-0.5" size={22} aria-hidden />
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-on-surface/50 block mb-1">Email</span>
                <span className="font-body text-on-surface group-hover:text-primary transition-colors">{CONTACT_EMAIL}</span>
              </div>
            </a>
            <a
              href={`tel:${CONTACT_PHONE_TEL}`}
              className="group flex items-start gap-4 p-6 bg-surface-container border border-white/5 hover:border-primary/30 transition-colors rounded-sm"
            >
              <Phone className="text-primary shrink-0 mt-0.5" size={22} aria-hidden />
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-on-surface/50 block mb-1">Phone</span>
                <span className="font-body text-on-surface group-hover:text-primary transition-colors">{CONTACT_PHONE_DISPLAY}</span>
              </div>
            </a>
            <a
              href={CONTACT_GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-4 p-6 bg-surface-container border border-white/5 hover:border-primary/30 transition-colors rounded-sm"
            >
              <Github className="text-primary shrink-0 mt-0.5" size={22} aria-hidden />
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-on-surface/50 block mb-1">GitHub</span>
                <span className="font-body text-on-surface group-hover:text-primary transition-colors">Code &amp; projects</span>
                <span className="font-mono text-xs text-on-surface-variant/60 mt-1 block">github.com/perplop</span>
              </div>
            </a>
            <a
              href={CONTACT_LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-4 p-6 bg-surface-container border border-white/5 hover:border-primary/30 transition-colors rounded-sm"
            >
              <Linkedin className="text-primary shrink-0 mt-0.5" size={22} aria-hidden />
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-on-surface/50 block mb-1">LinkedIn</span>
                <span className="font-body text-on-surface group-hover:text-primary transition-colors break-all">linkedin.com/in/andycbsci</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function EducationPage() {
  return (
    <div className="pt-28 md:pt-32 spacetime-grid min-h-screen pb-24">
      <section className="px-8 md:px-24 mb-16 md:mb-20">
        <span className="font-mono text-primary text-sm tracking-[0.3em] uppercase mb-4 block">Education</span>
        <h1 className="font-display font-bold text-4xl md:text-7xl leading-tight mb-8 text-on-surface tracking-tight">
          IB, UTM, then <span className="text-primary">St. George</span>
        </h1>
        <p className="text-lg md:text-xl text-on-surface-variant max-w-3xl leading-relaxed">
          My path to Honours Computer Science, Mathematics, and Physics started with the IB Diploma, a first year at UTM, and a
          transfer downtown after that — same degree, new campus and community.
        </p>
      </section>

      <section className="px-8 md:px-24 mb-20 md:mb-28 space-y-6 md:space-y-8">
        {EDUCATION_STORY.map((block) => (
          <article
            key={block.id}
            className="rounded-2xl border border-white/10 bg-surface-container-low/90 backdrop-blur-sm p-8 md:p-10"
          >
            <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase">{block.period}</span>
            <h2 className="font-headline font-semibold text-2xl md:text-4xl mt-2 mb-4 text-on-surface tracking-tight">{block.title}</h2>
            <p className="font-body text-on-surface-variant leading-relaxed max-w-3xl text-base md:text-lg">{block.body}</p>
          </article>
        ))}
      </section>

      <section className="px-8 md:px-24 mb-20 md:mb-28">
        <div className="max-w-4xl rounded-2xl border border-primary/35 bg-surface-container p-8 md:p-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
              <School className="text-primary" size={22} aria-hidden />
            </div>
            <div>
              <span className="font-mono text-primary text-xs tracking-widest uppercase">{CURRENT_DEGREE.period}</span>
              <h2 className="text-xl md:text-2xl font-bold mt-1 text-on-surface">{CURRENT_DEGREE.institution}</h2>
              <p className="text-on-surface-variant font-mono text-sm mt-2 uppercase tracking-tight">{CURRENT_DEGREE.degree}</p>
            </div>
          </div>
          <p className="text-on-surface-variant/90 leading-relaxed pl-0 md:pl-16">{CURRENT_DEGREE.description}</p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-8 md:px-24 bg-[#0e0e0e] border-t border-white/5">
        <h2 className="font-display font-bold text-3xl md:text-4xl mb-12 md:mb-16 text-center text-on-surface tracking-tight">Experience</h2>
        <div className="max-w-4xl mx-auto relative pl-10 md:pl-12 border-l border-outline/20 space-y-16 md:space-y-24">
          {EXPERIENCE.map((item, idx) => (
            <div key={idx} className="relative">
              <div className="absolute -left-[41px] md:-left-[53px] top-0 w-9 h-9 md:w-10 md:h-10 bg-background flex items-center justify-center border border-outline/20 rounded-sm">
                <Briefcase className="text-tertiary" size={16} />
              </div>
              <div>
                <span className="font-mono text-tertiary text-xs tracking-widest mb-2 block">{item.period}</span>
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-on-surface">{item.role}</h3>
                <p className="text-on-surface-variant mb-3 uppercase tracking-tighter font-mono text-sm">{item.company}</p>
                <p className="text-on-surface-variant/75 max-w-xl leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function ProjectsPage() {
  return (
    <div className="pt-32 spacetime-grid min-h-screen pb-24">
      <section className="px-8 md:px-24 mb-20 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-8">
          <span className="font-mono text-primary text-sm tracking-[0.3em] uppercase mb-4 block">Projects</span>
          <h1 className="font-display font-bold text-5xl md:text-8xl leading-tight mb-8 text-on-surface tracking-tight">
            Things I&apos;ve <span className="text-primary">shipped</span> &amp; led
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            Software, machine learning, and community work — hackathons, coursework-adjacent builds, and club leadership.
          </p>
        </div>
        <div className="md:col-span-4 flex items-end justify-end">
          <div className="border-l-2 border-primary pl-6 py-2">
            <span className="block font-mono text-xs text-outline mb-2">FOCUS</span>
            <span className="block text-primary text-lg">
              Software engineering &amp;
              <br />
              ML systems
            </span>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-24 px-8 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <h3 className="font-display font-bold text-3xl mb-12 text-on-surface tracking-tight">Skill stack</h3>
            <div className="space-y-8">
              <div>
                <span className="text-on-tertiary bg-tertiary/10 px-2 py-1 uppercase tracking-widest text-[10px] mb-4 inline-block font-mono">
                  Languages
                </span>
                <ul className="space-y-4 font-mono text-lg">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary" />
                    Python
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary" />
                    TypeScript
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary" />
                    Java
                  </li>
                  <li className="flex items-center gap-3 text-on-surface-variant/70">
                    <span className="w-2 h-2 bg-primary" />
                    C++
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-surface-container p-8 border-b-2 border-primary">
                <h4 className="font-mono text-primary mb-4 text-sm tracking-widest">SOFTWARE ENGINEERING</h4>
                <p className="text-on-surface-variant leading-relaxed">
                  Building full-stack applications with TypeScript, modular backend design, and production-oriented data workflows.
                </p>
              </div>
              <div className="bg-surface-container p-8 border-b-2 border-tertiary">
                <h4 className="font-mono text-tertiary mb-4 text-sm tracking-widest">MACHINE LEARNING</h4>
                <p className="text-on-surface-variant leading-relaxed">
                  Developing computer vision and LLM-powered systems for real-time inference, study automation, and data-driven
                  experimentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 md:px-24 py-20 md:py-28">
        <h2 className="font-display font-bold text-3xl md:text-5xl mb-4 text-on-surface tracking-tight">Selected work</h2>
        <p className="text-on-surface-variant mb-12 max-w-2xl">Same highlights as on the home page — in one grid.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className={`${project.isLarge ? 'md:col-span-2' : project.isWide ? 'md:col-span-2' : ''} group relative overflow-hidden rounded-lg bg-surface-container border border-white/5`}
            >
              {project.image ? (
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
                    referrerPolicy="no-referrer"
                  />
                  <div className="p-8 md:p-12 absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background to-transparent pointer-events-none">
                    <h3 className="text-2xl md:text-3xl font-headline font-semibold mb-2 text-primary tracking-tight">{project.title}</h3>
                    <p className="font-body text-on-surface-variant max-w-md text-sm md:text-base">{project.description}</p>
                  </div>
                </div>
              ) : (
                <div className="p-8 h-full flex flex-col justify-between min-h-[220px]">
                  <div className="mb-8">
                    {project.icon === 'database' ? (
                      <Database className="text-primary mb-6" size={40} />
                    ) : (
                      <Cpu className="text-primary mb-6" size={40} />
                    )}
                    <h3 className="text-2xl font-headline font-semibold mb-4 tracking-tight">{project.title}</h3>
                    <p className="font-body text-sm text-on-surface-variant">{project.description}</p>
                  </div>
                  <div className="flex justify-between items-center pt-8 border-t border-white/5">
                    <span className="font-body text-xs uppercase text-on-surface/50">{project.category}</span>
                    <ArrowRight className="text-primary group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function DragonBoatPage() {
  return (
    <div className="pt-24 min-h-screen overflow-hidden relative">
      <div className="absolute inset-0 spacetime-grid -z-10 opacity-30"></div>
      
      <section className="relative px-8 md:px-24 pt-20 pb-40 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7 z-10">
          <span className="font-body text-xs uppercase tracking-[0.3em] text-on-tertiary bg-tertiary/10 px-3 py-1 mb-6 inline-block">On the water</span>
          <h1 className="font-display font-bold text-7xl md:text-9xl text-on-surface leading-tight mb-8 tracking-tight">
            NDUC <br />
            <span className="text-primary">New Dragons.</span>
          </h1>
          <p className="font-body text-xl text-on-surface-variant max-w-xl leading-relaxed">
            Connecting the synchronous power of the NDUC (New Dragons University College) crew with the systematic efficiency of clean architecture. Dragon boat racing is more than a sport; it is a live execution of coordinated data streams.
          </p>
          <div className="mt-12">
            <button className="bg-primary text-on-primary-container px-10 py-4 font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_20px_rgba(29,233,182,0.4)] transition-all">
              View Season Stats
            </button>
          </div>
        </div>
        <div className="md:col-span-5 relative mt-12 md:mt-0">
          <div className="relative w-full aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSEZeJc0NlnHEbLHSwNzCL-a8XiUt_aHNdsXyz-5lTosh4KuSEwJmasjkn-2FRPuGpaI_jT_Uj7-KJlVTO4s60q87kaSyVM1muZTGTr3UPhwTcYVg4THFAw5-d1TZn3HqMXHw7UhqQMnX00mG5o15dDG5U528-9FXJiOXvjuLTYxV7pHz-I1Rb2raynmIo6Zj6QEifhH4zFpcZ4SqCGkaHfmImratajWl82XCHAPzrhNgATV80JaeUZTrHcrE5PtQl33-5zoXVydW4" 
              alt="Dragon Boat"
              className="object-cover w-full h-full"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-0 right-0 p-6 bg-background/80 backdrop-blur-sm">
              <span className="font-body text-primary text-4xl font-bold">01</span>
            </div>
          </div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-surface-container -z-10 border-l border-b border-primary/20"></div>
        </div>
      </section>

      <section className="bg-surface-container-low py-32 px-8 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <h2 className="font-display font-bold text-5xl text-on-surface max-w-md tracking-tight">The Mechanics of Momentum</h2>
            <div className="h-px bg-outline/20 flex-grow mx-8 hidden md:block mb-4 opacity-30"></div>
            <span className="font-body text-on-surface-variant text-sm tracking-tighter">REF: DB-ARCH_2024</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group relative bg-background p-10 border-t-2 border-primary/50 transition-all hover:bg-surface-container">
              <Waves className="text-primary mb-8" size={40} />
              <h3 className="font-body font-bold text-2xl mb-4 text-on-surface">Hydrodynamic Latency</h3>
              <p className="text-on-surface-variant leading-relaxed">Reducing drag through optimized stroke angles, mirroring the process of minimizing network latency in distributed systems.</p>
            </div>
            <div className="group relative bg-background p-10 border-t-2 border-tertiary/50 transition-all hover:bg-surface-container">
              <RefreshCw className="text-tertiary mb-8" size={40} />
              <h3 className="font-body font-bold text-2xl mb-4 text-on-surface">Clock Synchronization</h3>
              <p className="text-on-surface-variant leading-relaxed">The drum acts as our master clock. Total synchronization is required across all 20 nodes to prevent catastrophic force decay.</p>
            </div>
            <div className="group relative bg-background p-10 border-t-2 border-primary/50 transition-all hover:bg-surface-container">
              <Activity className="text-primary mb-8" size={40} />
              <h3 className="font-body font-bold text-2xl mb-4 text-on-surface">Telemetry & Flow</h3>
              <p className="text-on-surface-variant leading-relaxed">Analyzing heart rate variability and lactic thresholds against stroke frequency to find the 'peak flow' state.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-8 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div>
            <span className="font-body text-primary uppercase text-xs tracking-[0.4em] mb-4 block">Seasonal Analytics</span>
            <h2 className="font-display font-bold text-5xl mb-12 tracking-tight">Performance Benchmarks</h2>
            <div className="space-y-16">
              {[
                { label: 'Stroke Rate', value: '82', unit: 'SPM', color: 'bg-primary' },
                { label: 'Peak Force', value: '1.4', unit: 'KN', color: 'bg-tertiary' },
                { label: 'Team Sync Index', value: '98.4', unit: '%', color: 'bg-primary' }
              ].map((stat, idx) => (
                <div key={idx} className="border-b border-outline/20 pb-6">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="font-body text-lg uppercase tracking-widest">{stat.label}</span>
                    <span className="font-display font-bold text-4xl text-primary">{stat.value} <span className="text-sm font-body font-medium uppercase text-on-surface-variant">{stat.unit}</span></span>
                  </div>
                  <div className="w-full h-1 bg-surface-container">
                    <div className={`${stat.color} h-full`} style={{ width: `${parseFloat(stat.value) > 100 ? 100 : stat.value}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-surface-container p-12 ink-wash relative">
            <Terminal className="absolute top-4 right-4 text-primary/20" size={64} />
            <code className="block font-mono text-sm text-on-surface-variant leading-relaxed">
              <span className="text-primary">// Paddle Synchronization Logic</span><br />
              <span className="text-tertiary">function</span> <span className="text-on-surface">executeStroke</span>(team, drumBeat) {'{'}<br />
              &nbsp;&nbsp;team.forEach(paddler =&gt; {'{'}<br />
              &nbsp;&nbsp;&nbsp;&nbsp;paddler.catch(drumBeat.timestamp);<br />
              &nbsp;&nbsp;&nbsp;&nbsp;paddler.pull(MAX_FORCE);<br />
              &nbsp;&nbsp;&nbsp;&nbsp;paddler.exit();<br />
              &nbsp;&nbsp;&nbsp;&nbsp;paddler.recover();<br />
              &nbsp;&nbsp;{'}'});<br />
              {'}'}<br /><br />
              <span className="text-primary">// Constant validation</span><br />
              <span className="text-on-surface">const rhythm = 1 / (drumBeat.frequency);</span><br />
              <span className="text-on-surface">assert(team.syncIndex &gt; 0.95);</span>
            </code>
            <div className="mt-12 pt-12 border-t border-outline/20">
              <h5 className="font-body uppercase text-xs text-primary mb-4 tracking-widest">Next Competition</h5>
              <p className="font-display font-semibold text-3xl tracking-tight">Vancouver International Dragon Boat Festival</p>
              <p className="font-body text-on-surface-variant mt-2">June 2025 • False Creek</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-40 text-center relative px-8">
        <h2 className="font-display font-bold text-6xl md:text-8xl mb-12 opacity-90 tracking-tight">Join the Rhythm.</h2>
        <a
          href={UCDBC_LINKTREE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border-2 border-primary text-primary px-12 py-4 font-bold uppercase tracking-widest hover:bg-primary hover:text-on-primary-container transition-all"
        >
          Reach Out
        </a>
      </section>
    </div>
  );
}
