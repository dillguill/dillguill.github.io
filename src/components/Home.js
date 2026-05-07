import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const words = [
  { id: 'w0', lang: 'English' },
  { id: 'w1', lang: 'Español' },
  { id: 'w2', lang: 'Français' },
  { id: 'w3', lang: 'Deutsch' },
  { id: 'w4', lang: '日本語' },
  { id: 'w5', lang: 'العربية' },
  { id: 'w6', lang: '普通话' },
  { id: 'w7', lang: 'Italiano' },
  { id: 'w8', lang: '한국어' },
  { id: 'w9', lang: 'Русский' },
];

const Home = ({ projectsData }) => {
  const [cur, setCur] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCur((prev) => (prev + 1) % words.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  const getWordClass = (index) => {
    if (!mounted) return '';
    if (index === cur) return 'on';
    return '';
  };

  const recentProjects = projectsData?.slice(0, 4) || [];
  const getProjectTags = (project) => {
    if (project.tech && Array.isArray(project.tech)) {
      return project.tech.slice(0, 3).join(' · ');
    }
    return '';
  };

  return (
    <div className="scroll-host" id="sh">
      <div className="section" id="s0">
        <div className="rule-h" style={{ top: '108px' }}></div>
        <div className="coord-tl">
          <div>X_000 / Y_000</div>
          <div>BUILD 2026.05.XX</div>
        </div>
        <div className="coord-tr">
          <div>29.7604° N · 95.3698° W</div>
          <div>HOUSTON TX</div>
        </div>
        <div className="sec-content">
          <div className="section-label">
            <span className="idx-rule"></span>
            <span>[ 000 ]&nbsp;&nbsp;HOME</span>
          </div>
          <div className="hero-text-wrap">
            <span className={`hero-text ${getWordClass(0)}`} id="w0">Welcome</span>
            <span className={`hero-text ${getWordClass(1)}`} id="w1">Bienvenido</span>
            <span className={`hero-text ${getWordClass(2)}`} id="w2">Bienvenue</span>
            <span className={`hero-text ${getWordClass(3)}`} id="w3">Willkommen</span>
            <span className={`hero-text ${getWordClass(4)}`} id="w4">ようこそ</span>
            <span className={`hero-text ${getWordClass(5)}`} id="w5">مرحباً</span>
            <span className={`hero-text ${getWordClass(6)}`} id="w6">欢迎</span>
            <span className={`hero-text ${getWordClass(7)}`} id="w7">Benvenuto</span>
            <span className={`hero-text ${getWordClass(8)}`} id="w8">환영합니다</span>
            <span className={`hero-text ${getWordClass(9)}`} id="w9">Добро</span>
          </div>
          <div className="meta-row">
            <span className="lang-id">{words[cur]?.lang || 'English'}</span>
            <span className="pitch">Full-stack · AI · Cloud</span>
          </div>
        </div>
      </div>

      {/* SECTION 1: ABOUT */}
      <div className="section" id="s1">
        <div className="rule-h" style={{ top: '108px' }}></div>
        <div className="coord-tl">
          <div>X_000 / Y_001</div>
        </div>
        <div className="coord-tr">
          <div>Full-stack Developer</div>
        </div>
        {/* Content in upper area */}
        <div className="prev-top">
          <div className="about-grid">
            <div className="about-item">Based<span className="about-val">Houston, TX</span></div>
            <div className="about-item">Focus<span className="about-val">Full-Stack / AI</span></div>
            <div className="about-item">Certified<span className="about-val">AWS · IBM</span></div>
            <div className="about-item">Stack<span className="about-val">React · Django · Node.js</span></div>
          </div>
        </div>
        {/* Title at bottom-left, link at bottom-right */}
        <div className="sec-content">
          <div className="section-label">
            <span className="idx-rule"></span>
            <span>[ 001 ]&nbsp;&nbsp;ABOUT</span>
          </div>
          <div className="hero-text-wrap hero-wrap-name">
            <span className="hero-text on" style={{ fontSize: '86px', whiteSpace: 'normal', lineHeight: 1 }}>Dillon Guillory</span>
          </div>
          <div className="meta-row">
            <Link href="/about" className="prev-link">View profile →</Link>
          </div>
        </div>
      </div>

      {/* SECTION 2: PROJECTS */}
      <div className="section" id="s2">
        <div className="rule-h" style={{ top: '108px' }}></div>
        <div className="coord-tl"><div>X_000 / Y_002</div></div>
        <div className="coord-tr"><div>Selected Work</div></div>
        {/* Content in upper area - dynamic projects */}
        <div className="prev-top">
          <div className="proj-list">
            {recentProjects.length > 0 ? (
              recentProjects.map((project) => (
                <div className="proj-item" key={project.id}>
                  <span className="proj-name">{project.title}</span>
                  <span className="proj-tech">{getProjectTags(project)}</span>
                </div>
              ))
            ) : (
              <>
                <div className="proj-item">
                  <span className="proj-name">HomeLab</span>
                  <span className="proj-tech">Docker · Tailscale · Ollama</span>
                </div>
                <div className="proj-item">
                  <span className="proj-name">Portfolio</span>
                  <span className="proj-tech">Next.js · Tailwind · MDX</span>
                </div>
                <div className="proj-item">
                  <span className="proj-name">Obsidian URL → Wikilinks</span>
                  <span className="proj-tech">Python</span>
                </div>
                <div className="proj-item">
                  <span className="proj-name">DG Athlete</span>
                  <span className="proj-tech">WordPress · PHP · SEO</span>
                </div>
              </>
            )}
          </div>
        </div>
        {/* Title at bottom-left, link at bottom-right */}
        <div className="sec-content">
          <div className="section-label">
            <span className="idx-rule"></span>
            <span>[ 002 ]&nbsp;&nbsp;PROJECTS</span>
          </div>
          <div className="hero-text-wrap hero-wrap-section">
            <span className="hero-text on" style={{ fontSize: '86px' }}>Work</span>
          </div>
          <div className="meta-row">
            <Link href="/projects" className="prev-link">View all →</Link>
          </div>
        </div>
      </div>

      {/* SECTION 3: RESUME */}
      <div className="section" id="s3">
        <div className="rule-h" style={{ top: '108px' }}></div>
        <div className="coord-tl"><div>X_000 / Y_003</div></div>
        <div className="coord-tr"><div>Experience</div></div>
        {/* Content in upper area */}
        <div className="prev-top">
          <div className="resume-rows">
            <div className="res-row">
              <span className="res-co">AI / LLM Engineering</span>
              <span className="res-role">Pipelines · RAG · Inference</span>
            </div>
            <div className="res-row">
              <span className="res-co">Cloud Infrastructure</span>
              <span className="res-role">AWS · Docker · CI/CD</span>
            </div>
            <div className="res-row">
              <span className="res-co">Ecommerce</span>
              <span className="res-role">WordPress · PHP · Analytics</span>
            </div>
            <div className="res-row">
              <span className="res-co">Self-hosted Homelab</span>
              <span className="res-role">M4 Mac Mini · Tailscale · Caddy</span>
            </div>
          </div>
        </div>
        {/* Title at bottom-left, link at bottom-right */}
        <div className="sec-content">
          <div className="section-label">
            <span className="idx-rule"></span>
            <span>[ 003 ]&nbsp;&nbsp;RESUME</span>
          </div>
          <div className="hero-text-wrap hero-wrap-section">
            <span className="hero-text on" style={{ fontSize: '86px' }}>Experience</span>
          </div>
          <div className="meta-row">
            <Link href="/resume" className="prev-link">View full resume →</Link>
          </div>
        </div>
      </div>

      {/* PROGRESS RAIL */}
      <div className="progress-rail">
        <div className="tick-group" id="ticks">
          <div className="tick-item" data-sec="0">
            <span className="tick-label">Home</span>
            <span className="tick-mark"></span>
            <span className="tick-num">00</span>
          </div>
          <div className="tick-item" data-sec="1">
            <span className="tick-label">About</span>
            <span className="tick-mark"></span>
            <span className="tick-num">01</span>
          </div>
          <div className="tick-item" data-sec="2">
            <span className="tick-label">Projects</span>
            <span className="tick-mark"></span>
            <span className="tick-num">02</span>
          </div>
          <div className="tick-item" data-sec="3">
            <span className="tick-label">Resume</span>
            <span className="tick-mark"></span>
            <span className="tick-num">03</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;