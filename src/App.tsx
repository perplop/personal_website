/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, ArrowRight, Database, Cpu, School, Briefcase, ChevronDown, Github, Linkedin, Mail, Waves, RefreshCw, Activity } from 'lucide-react';
import { PROJECTS, EDUCATION, EXPERIENCE } from './constants';

type Page = 'about' | 'projects' | 'dragon-boat';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('about');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'dragon-boat':
        return <DragonBoatPage />;
      default:
        return <AboutPage />;
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
        
        <div className="hidden md:flex items-center gap-12 font-headline italic text-lg">
          <button 
            onClick={() => setCurrentPage('about')}
            className={`transition-colors ${currentPage === 'about' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface hover:text-primary'}`}
          >
            About
          </button>
          <button 
            onClick={() => setCurrentPage('projects')}
            className={`transition-colors ${currentPage === 'projects' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface hover:text-primary'}`}
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
          <button className="text-on-surface hover:text-primary transition-colors">Resume</button>
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
          <a href="#" className="text-on-surface/60 hover:text-primary transition-colors">GitHub</a>
          <a href="#" className="text-on-surface/60 hover:text-primary transition-colors">LinkedIn</a>
          <a href="#" className="text-on-surface/60 hover:text-primary transition-colors">Email</a>
        </div>
        <div className="mt-6 md:mt-0 font-body uppercase tracking-widest text-[10px] text-on-surface/30">
          Engineered for the Digital Frontier
        </div>
      </footer>
    </div>
  );
}

function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-start px-8 md:px-24 overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdO_Jcjc73aUzwESDBqDaI-nbXJKHCltOMEHqltzclsMqQxJ0hg8Xxxhbsa6mcCp1F7PAgzPGjdNfitmnnYPSkGS8XQnD0YDAT-4BMy_RP49r-2vNvcRrGRzpIls1pvnNBFflO4GFn8auRfvd394ogh3aazIv7nRU8FDTkvSU78XHisawg6-9cAiUzFg7tFsndS6ZLbBOhV9CJ18VRC7RjNMsCEBd6OygMOXD13BOGLkSWkYqp1YYAK15H4G7gaUDyhYX2azSKFW9Z" 
            alt="Black Hole"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-6 block"
          >
            Physics, Computer Science, and Mathematics
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-display font-semibold text-5xl md:text-7xl tracking-tight leading-none mb-8 text-on-surface uppercase"
          >
            Andy Chen
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed"
          >
            "If you can't explain it to a six-year-old, you don't understand it yourself."
            <span className="text-primary/90 text-lg block mt-3 font-headline italic">— Albert Einstein</span>
            <span className="text-on-surface-variant/50 text-sm block mt-1 italic font-body">(except I'm also the six-year-old in this quote)</span>
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex flex-wrap gap-8"
          >
            <button className="bg-primary text-on-primary-container px-8 py-4 font-body font-bold hover:shadow-[0_0_20px_rgba(29,233,182,0.4)] transition-all">
              VIEW PROJECTS
            </button>
            <button className="border border-outline/20 text-on-surface px-8 py-4 font-body font-bold hover:bg-white/5 transition-all">
              CONTACT ME
            </button>
          </motion.div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-8 md:px-24 spacetime-grid relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-5 relative">
            <h2 className="font-display font-black uppercase text-5xl md:text-6xl text-tertiary leading-tight sticky top-32">
              A Focus in Foundation
            </h2>
            <div className="mt-8 font-body text-on-tertiary text-sm tracking-widest uppercase bg-tertiary/5 inline-block py-2 px-4 border-l-2 border-on-tertiary">
              Core Philosophy
            </div>
          </div>
          <div className="md:col-span-7 flex flex-col gap-16">
            <p className="text-2xl md:text-3xl font-body leading-relaxed text-on-surface-variant">
              I believe that having a solid <span className="text-primary">foundation</span> in concepts allows you to solve any complex problem. This is why I think it is so important for computer scientists especially to have a solid math background.
            </p>
            <div className="bg-surface-container-low p-12 ink-wash border-l border-primary/20">
              <h3 className="font-display font-bold uppercase text-2xl mb-4 text-on-surface">Mathematical Rigor</h3>
              <p className="font-body text-on-surface-variant leading-relaxed mb-6">
                By grounding technical work in mathematical principles, we ensure that systems are not just functional, but fundamentally sound. Rigor is the bridge between theory and execution.
              </p>
              <div className="flex gap-4">
                {['SCALABILITY', 'PRECISION', 'RIGOR'].map(tag => (
                  <span key={tag} className="text-xs font-body text-primary border border-primary/20 px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="bg-surface-container-low py-32 px-8 md:px-24">
        <div className="flex justify-between items-end mb-20">
          <h2 className="font-headline italic text-5xl md:text-6xl">Featured Work</h2>
          <div className="hidden md:block h-px bg-outline/20 flex-grow mx-12 mb-4"></div>
          <a href="#" className="font-body text-primary uppercase tracking-widest text-sm hover:underline">View All / Index</a>
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
                    <h3 className="text-3xl font-headline italic mb-2 text-primary">{project.title}</h3>
                    <p className="font-body text-on-surface-variant max-w-md">{project.description}</p>
                  </div>
                </div>
              ) : (
                <div className="p-8 h-full flex flex-col justify-between">
                  <div className="mb-8">
                    {project.icon === 'database' ? <Database className="text-primary mb-6" size={40} /> : <Cpu className="text-primary mb-6" size={40} />}
                    <h3 className="text-2xl font-headline italic mb-4">{project.title}</h3>
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
      <section className="py-48 px-8 text-center bg-background relative overflow-hidden">
        <div className="absolute inset-0 spacetime-grid opacity-20 pointer-events-none"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-display font-black uppercase text-6xl mb-8">Let’s solve <span className="text-primary">complex problems</span> together.</h2>
          <p className="font-body text-xl text-on-surface-variant mb-12">Currently open for collaboration on high-impact technical projects and research initiatives.</p>
          <button className="bg-tertiary text-on-tertiary px-12 py-5 font-body font-bold text-lg hover:opacity-90 transition-opacity tracking-widest uppercase">
            Say Hello
          </button>
        </div>
      </section>
    </>
  );
}

function ProjectsPage() {
  return (
    <div className="pt-32 spacetime-grid min-h-screen">
      <section className="px-8 md:px-24 mb-32 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-8">
          <span className="font-mono text-primary text-sm tracking-[0.3em] uppercase mb-4 block">Selected Works 2024</span>
          <h1 className="font-headline text-6xl md:text-8xl italic leading-tight mb-8">
            Bridging <span className="text-on-surface">Cognition</span> & <span className="text-primary">Computational</span> Rigor.
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            A portfolio of foundational explorations and technical architectures grounded in mathematical rigor and modern data engineering.
          </p>
        </div>
        <div className="md:col-span-4 flex items-end justify-end">
          <div className="border-l-2 border-primary pl-6 py-2">
            <span className="block font-mono text-xs text-outline mb-2">CURRENT FOCUS</span>
            <span className="block text-primary text-lg">Distributed Systems &<br />Deep Learning Architectures</span>
          </div>
        </div>
      </section>

      {/* Skill Stack */}
      <section className="bg-surface-container-low py-24 px-8 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <h3 className="font-headline italic text-3xl mb-12 text-on-surface">Skill Stack</h3>
            <div className="space-y-8">
              <div>
                <span className="text-on-tertiary bg-tertiary/10 px-2 py-1 uppercase tracking-widest text-[10px] mb-4 inline-block font-mono">Languages</span>
                <ul className="space-y-4 font-mono text-lg">
                  <li className="flex items-center gap-3"><span className="w-2 h-2 bg-primary"></span> Python</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 bg-primary"></span> Rust</li>
                  <li className="flex items-center gap-3 text-on-surface-variant/40"><span className="w-2 h-2 bg-outline"></span> C++</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-surface-container p-8 border-b-2 border-primary">
                <h4 className="font-mono text-primary mb-4 text-sm tracking-widest">DATA ENGINEERING</h4>
                <p className="text-on-surface-variant leading-relaxed">High-throughput pipeline architecture using Apache Spark, Kafka, and custom Rust-based extractors for real-time telemetry processing.</p>
              </div>
              <div className="bg-surface-container p-8 border-b-2 border-tertiary">
                <h4 className="font-mono text-tertiary mb-4 text-sm tracking-widest">MACHINE LEARNING</h4>
                <p className="text-on-surface-variant leading-relaxed">Development of custom neural layers for sequence modeling and historical document digitization using transformer architectures.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Projects */}
      <section className="px-8 md:px-24 py-32 space-y-48">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <span className="font-mono text-primary text-xs tracking-widest mb-4 block">PROJECT_01</span>
            <h2 className="font-headline text-5xl italic mb-6">The Schrödinger Engine</h2>
            <p className="text-on-surface-variant mb-8 leading-relaxed italic">
              A quantum-inspired simulation framework built in Rust, designed to handle multi-state probability distributions in high-frequency trading environments.
            </p>
            <div className="flex gap-4">
              <button className="bg-primary text-on-primary-container px-6 py-3 font-mono text-sm uppercase tracking-widest transition-all hover:opacity-90">
                View Source
              </button>
              <button className="border border-outline text-on-surface px-6 py-3 font-mono text-sm uppercase tracking-widest hover:bg-white/5">
                Documentation
              </button>
            </div>
          </div>
          <div className="md:col-span-7 order-1 md:order-2">
            <div className="aspect-video bg-surface-container-highest relative overflow-hidden">
              <div className="absolute inset-0 opacity-40 spacetime-grid"></div>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkRBkvu88qZmyLR2jL3zuRZauaY_liK4_cctl5kMHoUP5v3LGpK8oAGkpzKQNSacgn86ZI3nMUTsmjSp-gytmL1U18DFfcClvkDNTK4mt0-YS0Uy8DnwS1dQxYOlfyHQZDtQTbO-Jo9WMOif7bS1c9aNoFr7aRYs_MnHL_VVp0fvc9KIgvBUyd5CmJi53d87AkZ6DPGzHvDtPFcyPl6wSiGkNuw0ZTeIpOICjoEFSC0baBw-AwDF-WTOVzL-KuAiWYvAxnJ8xvpKms" 
                alt="Quantum Simulation"
                className="w-full h-full object-cover mix-blend-luminosity opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 right-4 font-mono text-[10px] text-primary/40">ENV_STABLE_V2.0.4</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <div className="aspect-[4/3] bg-surface-container-low relative group cursor-crosshair overflow-hidden">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGsBt_cxY-NN_BjQTtzRqJavNSYyWR6Jfjol-j2BDR3lH20SmDyTX8EHrOTaGPYL17QTdMuSOT3_aZE-uVwqBa-j7NkwEePs7EO1EAMEbRjY534Xl6UMLsweHaZLtyWIZgb59gUSfM0kJHiezLGQeHMrZG0akmqTSB5DgO9N132OBRlq31aHPQwKbds50nDhjLU4he9k5sPdh9J_dDUdNHuYqd1u3TFQy5eFMs8a003Vteppl7RwNSJO7LBh3xBtUbBZYv71CPEj7p" 
                alt="Neural Calligraphy"
                className="w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
            </div>
          </div>
          <div className="md:col-span-5">
            <span className="font-mono text-tertiary text-xs tracking-widest mb-4 block">PROJECT_02 // CULTURAL</span>
            <h2 className="font-headline text-5xl italic mb-6">Neural Calligraphy Analysis</h2>
            <p className="text-on-surface-variant mb-8 leading-relaxed">
              Applying computer vision to decode the rhythmic velocity of ancient scripts. This project translates brush pressure and stroke order into quantifiable spectral data.
            </p>
            <button className="bg-tertiary text-on-tertiary px-6 py-3 font-mono text-sm uppercase tracking-widest transition-all hover:opacity-90">
              Read Manuscript
            </button>
          </div>
        </div>
      </section>

      {/* Foundations */}
      <section className="py-32 px-8 md:px-24 bg-[#0e0e0e]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-4xl italic mb-16 text-center">Foundations</h2>
          <div className="relative pl-12 border-l border-outline/20 space-y-24">
            {EDUCATION.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[53px] top-0 w-10 h-10 bg-background flex items-center justify-center border border-outline/20">
                  <School className="text-primary" size={16} />
                </div>
                <div>
                  <span className="font-mono text-primary text-xs tracking-widest mb-2 block">{item.period}</span>
                  <h3 className="text-2xl font-bold mb-2">{item.institution}</h3>
                  <p className="text-on-surface-variant mb-4 uppercase tracking-tighter font-mono text-sm">{item.degree}</p>
                  <p className="text-on-surface-variant/70 max-w-xl">{item.description}</p>
                </div>
              </div>
            ))}
            {EXPERIENCE.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[53px] top-0 w-10 h-10 bg-background flex items-center justify-center border border-outline/20">
                  <Briefcase className="text-tertiary" size={16} />
                </div>
                <div>
                  <span className="font-mono text-tertiary text-xs tracking-widest mb-2 block">{item.period}</span>
                  <h3 className="text-2xl font-bold mb-2">{item.role}</h3>
                  <p className="text-on-surface-variant mb-4 uppercase tracking-tighter font-mono text-sm">{item.company}</p>
                  <p className="text-on-surface-variant/70 max-w-xl">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
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
          <span className="font-body text-xs uppercase tracking-[0.3em] text-on-tertiary bg-tertiary/10 px-3 py-1 mb-6 inline-block">Foundational Mechanics</span>
          <h1 className="font-headline italic text-7xl md:text-9xl text-on-surface leading-tight mb-8">
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
            <h2 className="font-headline text-5xl italic text-on-surface max-w-md">The Mechanics of Momentum</h2>
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
            <h2 className="font-headline text-5xl italic mb-12">Performance Benchmarks</h2>
            <div className="space-y-16">
              {[
                { label: 'Stroke Rate', value: '82', unit: 'SPM', color: 'bg-primary' },
                { label: 'Peak Force', value: '1.4', unit: 'KN', color: 'bg-tertiary' },
                { label: 'Team Sync Index', value: '98.4', unit: '%', color: 'bg-primary' }
              ].map((stat, idx) => (
                <div key={idx} className="border-b border-outline/20 pb-6">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="font-body text-lg uppercase tracking-widest">{stat.label}</span>
                    <span className="font-headline italic text-4xl text-primary">{stat.value} <span className="text-sm font-body not-italic uppercase text-on-surface-variant">{stat.unit}</span></span>
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
              <p className="font-headline text-3xl italic">Vancouver International Dragon Boat Festival</p>
              <p className="font-body text-on-surface-variant mt-2">June 2025 • False Creek</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-40 text-center relative px-8">
        <h2 className="font-headline text-6xl md:text-8xl italic mb-12 opacity-80">Join the Rhythm.</h2>
        <button className="border-2 border-primary text-primary px-12 py-4 font-bold uppercase tracking-widest hover:bg-primary hover:text-on-primary-container transition-all">
          Reach Out
        </button>
      </section>
    </div>
  );
}
