'use client'

import Image from 'next/image'
import IplDashboardPreview from '@/components/ipl-dashboard-preview'
import { useEffect, useState, type CSSProperties, type ReactNode } from 'react'
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Database,
  Eye,
  MapPin,
  Menu,
  Phone,
  X,
} from 'lucide-react'

const profile = {
  github: 'https://github.com/udayzaware27',
  linkedin: 'https://www.linkedin.com/in/udaykumar-zaware27',
  email: 'mailto:udayzaware09@gmail.com',
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  const leftNavigation = ['About', 'Experience', 'Projects']
  const rightNavigation = ['Skills', 'Education', 'Contact']

  return (
    <header className="site-header">
      <nav id="primary-navigation" className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
        <div className="nav-group nav-group-left">
          {leftNavigation.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>
          ))}
        </div>
        <div className="nav-group nav-group-right">
          {rightNavigation.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>
          ))}
          <a className="nav-resume" href="#contact" onClick={() => setMenuOpen(false)}>Let&apos;s connect <ArrowUpRight aria-hidden="true" /></a>
        </div>
      </nav>
      <a className="brand" href="#home" aria-label="Udaykumar Zaware, home">
        <span className="brand-mark">UZ</span>
        <span className="brand-name">DATA · ANALYTICS · ENGINEERING</span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      <span className="reading-progress" aria-hidden="true" />
    </header>
  )
}

function Hero() {
  return (
    <section className="hero page-wrap" id="home">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-mark" /> COMPUTER ENGINEERING STUDENT</p>
        <h1>Hi, I&apos;m<br /><em>Udaykumar</em><br /><em>Zaware.</em></h1>
        <h2 className="hero-role">Data Analytics <span>·</span> AI-Computer Vision</h2>
        <p className="hero-intro">
          I turn raw data into useful insights, build clear dashboards, and develop hands-on experience with computer vision.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">See my work <ArrowDownRight aria-hidden="true" /></a>
          <a className="button button-outline" href="#contact">Get in touch <ArrowUpRight aria-hidden="true" /></a>
        </div>
      </div>
      <div className="hero-visual-wrap">
        <article className="profile-card">
          <div className="profile-summary">
            <div className="profile-monogram" aria-hidden="true">UZ</div>
            <div className="profile-copy">
              <h2>Udaykumar Zaware</h2>
              <p>Computer Engineering Student</p>
              <span className="profile-location"><MapPin aria-hidden="true" />Pune, India</span>
            </div>
          </div>
          <div className="code-card" aria-label="A snapshot of my work">
            <div className="code-titlebar"><span className="window-dots"><i /><i /><i /></span><span>about-me.js</span><span className="code-titlebar-note">A QUICK INTRO</span></div>
            <pre><code><span className="code-keyword">const</span> profile = {'{'}<br />  name: <span className="code-string">&quot;Udaykumar Zaware&quot;</span>,<br />  location: <span className="code-string">&quot;Pune, India&quot;</span>,<br />  technologies: [<br />    <span className="code-string">&quot;SQL&quot;</span>, <span className="code-string">&quot;Power BI&quot;</span>, <span className="code-string">&quot;Python&quot;</span>,<br />    <span className="code-string">&quot;Excel&quot;</span>, <span className="code-string">&quot;YOLO&quot;</span>, <span className="code-string">&quot;Power Query&quot;</span><br />  ]<br />{'}'}</code></pre>
          </div>
          <div className="profile-links">
            <a href={profile.github} target="_blank" rel="noreferrer"><span>GitHub</span><ArrowUpRight aria-hidden="true" /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn</span><ArrowUpRight aria-hidden="true" /></a>
          </div>
        </article>
      </div>
      <a className="hero-scroll" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown aria-hidden="true" /></a>
      <span className="hero-index">PORTFOLIO <b>·</b> 2026</span>
    </section>
  )
}

function SectionHeading({ index, label, title, detail }: { index: string; label: string; title: ReactNode; detail?: string }) {
  return (
    <div className="section-heading reveal-item">
      <div className="section-label"><span>{index}</span><i />{label}</div>
      <div className="section-heading-row"><h2>{title}</h2>{detail && <p>{detail}</p>}</div>
    </div>
  )
}

const focusAreas = [
  { icon: <Database aria-hidden="true" />, title: 'Analytics & BI', text: 'Clean, query, and shape data into dashboards and clear business takeaways.' },
  { icon: <Eye aria-hidden="true" />, title: 'Computer Vision', text: 'Build hands-on experience with image annotation, object detection, tracking, and counting using computer-vision tools.' }
]

function About() {
  return (
    <section className="about section-space page-wrap" id="about">
      <SectionHeading index="01" label="A BIT ABOUT ME" title={<>Curiosity, <em>put to work.</em></>} detail="I like the part where a messy problem starts to become clear." />
      <div className="about-grid">
        <div className="about-copy reveal-item">
          <p className="about-lede">The interesting work often happens between the data and the decision.</p>
          <p>I&apos;m studying Computer Engineering at Modern Education Society&apos;s Wadia College of Engineering in Pune. I&apos;m drawn to practical problems: asking better questions of a dataset, making an analysis easier to understand, and exploring how computer vision can be applied in practice.</p>
          <p>That curiosity currently takes me from SQL and Power BI to Python-based computer vision work with YOLO and Roboflow.</p>
          <a className="inline-link" href="#experience">See what I&apos;m learning <ArrowRight aria-hidden="true" /></a>
        </div>
        <div className="focus-list">
          {focusAreas.map((area, index) => (
            <article className="focus-card reveal-item" key={area.title} style={{ '--stagger': `${index * 100}ms` } as CSSProperties}>
              <span className="focus-number">0{index + 1}</span>
              <span className="focus-icon">{area.icon}</span>
              <div><h3>{area.title}</h3><p>{area.text}</p></div>
              <ArrowUpRight className="focus-arrow" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const projects = [
  {
    number: '01', category: 'DATA ANALYTICS', title: 'Sales dashboard, end to end',
    description: 'A start-to-finish Excel project that takes raw sales data through Power Query cleanup and transformation, then presents the prepared data in an interactive dashboard.',
    approach: 'The workflow moves from source data to cleaned tables, then to pivot-based summaries and an interactive view. The emphasis is on a repeatable transformation process and readable reporting—not on unverified business impact.',
    tools: ['Excel', 'Power Query', 'Pivot Tables'], href: 'https://github.com/udayzaware27/EXCEL-End-To-End-Dashboard', art: 'sales',
  },
  {
    number: '02', category: 'SQL / DATA MODELLING', title: 'Online bookstore analysis',
    description: 'A PostgreSQL case study exploring a bookstore schema built around customers, books, and orders, with SQL queries that connect records across related tables.',
    approach: 'The analysis uses joins and relational structure to inspect order and customer data. It demonstrates query design against connected tables; no sales lift or customer behavior conclusions are claimed beyond the repository analysis.',
    tools: ['PostgreSQL', 'SQL', 'Joins'], href: 'https://github.com/udayzaware27/SQL_Online_Bookstore_Analysis', art: 'database',
  },
  {
    number: '03', category: 'BUSINESS INTELLIGENCE', title: 'IPL data, made explorable',
    description: 'A Power BI dashboard project that organizes IPL season, team, player, and toss-related data into an explorable visual summary.',
    approach: 'The project focuses on shaping the tournament data into report views and measures for comparison. Its charts are exploratory summaries, not predictive claims about match outcomes.',
    tools: ['Power BI', 'DAX', 'Data visualization'], href: 'https://github.com/udayzaware27/IPL-Data-Analysis-PowerBI', art: 'ipl',
  },
  {
    number: '04', category: 'COMPUTER VISION', title: 'VisionFit-AI',
    description: 'A computer-vision fitness trainer concept exploring pose-based exercise recognition, repetition counting, and form feedback with YOLO-Pose.',
    approach: 'The prototype direction connects pose detection to exercise-specific tracking logic. Form assessment is presented as a project goal, not as a clinically validated coaching system.',
    tools: ['Python', 'YOLO-Pose'], href: 'https://github.com/udayzaware27/VisionFit-AI', art: 'vision',
  },
]

const projectVisuals: Record<string, { src: string; label: string }> = {
  sales: { src: '/project-images/sales-analytics.png', label: 'EXCEL · SALES ANALYTICS' },
  database: { src: '/project-images/bookstore-sql.png', label: 'POSTGRESQL · BOOKSTORE' },
  vision: { src: '/project-images/vision-fitness.png', label: 'POSE TRACKING · YOLO-POSE' },
}

function ProjectArtwork({ type }: { type: string }) {
  if (type === 'ipl') {
    return (
      <div className="project-art project-art-ipl">
        <IplDashboardPreview />
      </div>
    )
  }

  const visual = projectVisuals[type]

  return (
    <div className="project-art" aria-hidden="true">
      <Image src={visual.src} alt="" fill sizes="(max-width: 760px) 100vw, 50vw" className="project-photo" />
      <span className="project-art-label">{visual.label}</span>
    </div>
  )
}

function Projects() {
  return (
    <section className="projects section-space" id="projects">
      <div className="page-wrap">
        <SectionHeading index="02" label="SELECTED PROJECTS" title={<>Small questions.<br /><em>Useful answers.</em></>} detail="A few things I&apos;ve built while learning analytics, databases, BI, and vision." />
        <div className="project-list">
          {projects.map((project, index) => (
            <article className="project-card reveal-item" key={project.number} style={{ '--stagger': `${index * 80}ms` } as CSSProperties}>
              <ProjectArtwork type={project.art} />
              <div className="project-copy">
                <div className="project-meta"><span>{project.number} / 04</span><span>{project.category}</span></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="project-approach"><span>PROCESS NOTE</span>{project.approach}</p>
                <div className="tag-list">{project.tools.map(tool => <span key={tool}>{tool}</span>)}</div>
                <a className="project-link" href={project.href} target="_blank" rel="noreferrer">View project on GitHub <ArrowUpRight aria-hidden="true" /></a>
              </div>
            </article>
          ))}
        </div>
        <a className="all-projects-link" href={profile.github} target="_blank" rel="noreferrer">More experiments on GitHub <ArrowUpRight aria-hidden="true" /></a>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="experience section-space page-wrap" id="experience">
      <SectionHeading index="03" label="LEARNING IN PRACTICE" title={<>A first step into <em>AI.</em></>} detail="Hands-on computer vision experience at AI Unika Technologies." />
      <article className="experience-card reveal-item">
        <div className="experience-date">MAY 2026 <span>—</span> PRESENT</div>
        <div className="experience-main">
          <p className="experience-kicker">AI INTERNSHIP <span className="status-dot" /> PUNE, INDIA</p>
          <h3>AI Intern <span>at</span><br />AI Unika Technologies</h3>
          <p className="experience-description">Building practical experience with computer vision workflows—from preparing image datasets to exploring detection and tracking tasks.</p>
          <div className="experience-details"><span><Check aria-hidden="true" /> Image annotation & dataset preparation</span><span><Check aria-hidden="true" /> Object detection, masking & counting</span><span><Check aria-hidden="true" /> Python, YOLO & Roboflow</span></div>
        </div>
        <span className="experience-index">FIELD<br />NOTE 01</span>
      </article>
    </section>
  )
}

const skillGroups = [
  { name: 'Data & SQL', items: ['SQL', 'PostgreSQL', 'Joins', 'Data cleaning'] },
  { name: 'Excel & data prep', items: ['Excel', 'Power Query', 'Pivot tables', 'Data transformation', 'Dataset preparation'] },
  { name: 'Business intelligence', items: ['Power BI', 'DAX', 'Dashboards', 'Data visualization'] },
  { name: 'Python & data', items: ['Python', 'Data processing', 'Scripting'] },
  { name: 'Computer vision', items: ['YOLO', 'Roboflow', 'Image annotation', 'Object detection', 'Object tracking', 'Masking & counting', 'Model training', 'Model testing'] },
  { name: 'Tools & workflow', items: ['Git', 'GitHub', 'pgAdmin', 'VS Code'] },
]

function Skills() {
  return (
    <section className="skills section-space" id="skills">
      <div className="page-wrap">
        <SectionHeading index="04" label="TOOLS I REACH FOR" title={<>A growing <em>toolkit.</em></>} detail="Grouped by the kind of work I use them for—not by an arbitrary skill score." />
        <div className="skill-grid">
          {skillGroups.map((group, index) => (
            <article className="skill-card reveal-item" key={group.name} style={{ '--stagger': `${index * 90}ms` } as CSSProperties}>
              <span className="skill-index">0{index + 1} <i>—</i> {String(skillGroups.length).padStart(2, '0')}</span>
              <h3>{group.name}</h3>
              <div className="tag-list">{group.items.map(item => <span key={item}>{item}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const certifications = ['SQL (PostgreSQL) Mastery', 'Power Query Mastery', 'Advanced Excel Mastery', 'Git & GitHub — Master Version Control']

function Education() {
  return (
    <section className="education section-space page-wrap" id="education">
      <SectionHeading index="05" label="EDUCATION & COURSES" title={<>Learning is the <em>long game.</em></>} />
      <div className="education-grid">
        <div className="education-list">
          <article className="education-item reveal-item"><span className="education-years">2023 — 2027</span><div><span className="education-type">BACHELOR OF ENGINEERING</span><h3>Computer Engineering</h3><p>Modern Education Society&apos;s Wadia College of Engineering, Pune</p><small>Savitribai Phule Pune University</small></div></article>
          <article className="education-item reveal-item"><span className="education-years">2023</span><div><span className="education-type">HIGHER SECONDARY · SCIENCE (PCM)</span><h3>Kondiram Sadashiv Kshirsagar Junior College (Arts)</h3><p>Bhigwan, Maharashtra</p></div></article>
        </div>
        <div className="cert-list reveal-item"><div className="cert-heading"><span>COMPLETED COURSES</span><span>04</span></div>{certifications.map((item, index) => <div className="cert-item" key={item}><span>0{index + 1}</span><p>{item}</p><Check aria-hidden="true" /></div>)}<small>ScholarHat · 2025</small></div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact section-space" id="contact">
      <div className="page-wrap contact-inner">
        <div className="contact-copy reveal-item"><p className="section-label"><span>06</span><i /> SAY HELLO</p><h2>Have a good<br />question? <em>Let&apos;s talk.</em></h2><p>I&apos;m open to conversations about data, practical AI, internships, and projects worth learning from.</p><a className="button button-primary" href={profile.email}>Write me an email <ArrowUpRight aria-hidden="true" /></a></div>
        <div className="contact-links reveal-item"><a href="tel:+918446511746"><span>PHONE</span><b>+91 84465 11746</b><Phone aria-hidden="true" /></a><a href={profile.email}><span>EMAIL</span><b>udayzaware09@gmail.com</b><ArrowUpRight aria-hidden="true" /></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><span>LINKEDIN</span><b>Connect professionally</b><ArrowUpRight aria-hidden="true" /></a><a href={profile.github} target="_blank" rel="noreferrer"><span>GITHUB</span><b>See what I&apos;m building</b><ArrowUpRight aria-hidden="true" /></a><div className="contact-location"><span className="status-dot" /> PUNE, MAHARASHTRA, INDIA</div></div>
      </div>
    </section>
  )
}

function Footer() {
  return <footer className="site-footer page-wrap"><a className="brand" href="#home"><span className="brand-mark">uz<span>.</span></span><span className="brand-name">UDAYKUMAR Zaware</span></a><p>Built with curiosity in Pune, India.</p><a className="back-top" href="#home">BACK TO TOP <ArrowUpRight aria-hidden="true" /></a><small>© {new Date().getFullYear()} Udaykumar Zaware</small></footer>
}

export default function Portfolio() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('.reveal-item')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reducedMotion || !('IntersectionObserver' in window)) return

    targets.forEach(target => target.classList.add('reveal-ready'))
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -28px 0px' })

    targets.forEach(target => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    let frame = 0
    function updateProgress() {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight
        const progress = scrollable > 0 ? window.scrollY / scrollable : 0
        document.documentElement.style.setProperty('--page-progress', `${progress * 100}%`)
      })
    }

    window.addEventListener('scroll', updateProgress, { passive: true })
    updateProgress()
    return () => {
      window.removeEventListener('scroll', updateProgress)
      cancelAnimationFrame(frame)
    }
  }, [])

  return <><Header /><main><Hero /><About /><Projects /><Experience /><Skills /><Education /><Contact /></main><Footer /></>
}
