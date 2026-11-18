'use client'

import { useEffect, useState, type CSSProperties, type ReactNode } from 'react'
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Check,
  Database,
  Eye,
  Menu,
  X,
} from 'lucide-react'

const profile = {
  github: 'https://github.com/udayzaware27',
  linkedin: 'https://www.linkedin.com/in/udaykumar-zaware27',
  email: 'mailto:udayzaware09@gmail.com',
}

const navigation = ['About', 'Projects', 'Experience', 'Skills', 'Education', 'Contact']

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Udaykumar Zaware, home">
        <span className="brand-mark">uz<span>.</span></span>
        <span className="brand-name">UDAYKUMAR Zaware</span>
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
      <nav id="primary-navigation" className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
        {navigation.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
            {item}
          </a>
        ))}
        <a className="nav-resume" href="/resume.pdf" download="Udaykumar_Zaware_Resume.pdf">
          Resume <ArrowUpRight aria-hidden="true" />
        </a>
      </nav>
      <span className="reading-progress" aria-hidden="true" />
    </header>
  )
}

function SignalArtwork() {
  return (
    <div className="signal-art" aria-hidden="true">
      <div className="art-caption"><span>FIELD NOTES / 01</span><span>PUNE · INDIA</span></div>
      <div className="signal-grid">
        <div className="signal-axis signal-axis-x" />
        <div className="signal-axis signal-axis-y" />
        <div className="signal-curve signal-curve-a" />
        <div className="signal-curve signal-curve-b" />
        <div className="signal-curve signal-curve-c" />
        <span className="signal-point point-a" />
        <span className="signal-point point-b" />
        <span className="signal-point point-c" />
        <span className="signal-coordinate coordinate-a">OBSERVE</span>
        <span className="signal-coordinate coordinate-b">REFINE</span>
        <span className="signal-coordinate coordinate-c">BUILD</span>
        <div className="signal-center"><Braces aria-hidden="true" /><span>DATA → DECISIONS</span></div>
      </div>
      <div className="art-footer"><span>ANALYTICS</span><i /><span>APPLIED AI</span><i /><span>COMPUTER VISION</span></div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero page-wrap" id="home">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-mark" /> COMPUTER ENGINEERING STUDENT <span className="eyebrow-divider">/</span> PUNE, INDIA</p>
        <h1>Make data<br />make <em>sense.</em></h1>
        <p className="hero-intro">
          I&apos;m Udaykumar — an engineer-in-training who turns raw information into useful insights and explores practical AI, one thoughtful build at a time.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">See selected work <ArrowDownRight aria-hidden="true" /></a>
          <a className="button button-text" href="/resume.pdf" download="Udaykumar_Zaware_Resume.pdf">Download résumé <ArrowDown aria-hidden="true" /></a>
        </div>
        <div className="hero-proof" aria-label="Areas of focus">
          <span>01 <b>Analytics</b></span><span>02 <b>Applied AI</b></span><span>03 <b>Computer vision</b></span>
        </div>
      </div>
      <div className="hero-visual-wrap"><SignalArtwork /></div>
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
  { icon: <Braces aria-hidden="true" />, title: 'Applied AI', text: 'Learn by building: prepare data, test models, and understand how the pieces fit.' },
  { icon: <Eye aria-hidden="true" />, title: 'Computer vision', text: 'Explore image annotation, object detection, tracking, and counting workflows.' },
]

function About() {
  return (
    <section className="about section-space page-wrap" id="about">
      <SectionHeading index="01" label="A BIT ABOUT ME" title={<>Curiosity, <em>put to work.</em></>} detail="I like the part where a messy problem starts to become clear." />
      <div className="about-grid">
        <div className="about-copy reveal-item">
          <p className="about-lede">The interesting work often happens between the data and the decision.</p>
          <p>I&apos;m studying Computer Engineering at Modern Education Society&apos;s Wadia College of Engineering in Pune. I&apos;m drawn to practical problems: asking better questions of a dataset, making an analysis easier to understand, and figuring out what an AI workflow can really do.</p>
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
    description: 'A start-to-finish Excel project: transform raw sales data in Power Query, then make the results easy to explore.',
    tools: ['Excel', 'Power Query', 'Pivot Tables'], href: 'https://github.com/udayzaware27/EXCEL-End-To-End-Dashboard', art: 'sales',
  },
  {
    number: '02', category: 'SQL / DATA MODELLING', title: 'Online bookstore analysis',
    description: 'A relational database analysis of bookstore customers, orders, and books—using SQL to answer questions across connected tables.',
    tools: ['PostgreSQL', 'SQL', 'Joins'], href: 'https://github.com/udayzaware27/SQL_Online_Bookstore_Analysis', art: 'database',
  },
  {
    number: '03', category: 'BUSINESS INTELLIGENCE', title: 'IPL data, made explorable',
    description: 'A Power BI dashboard exploring IPL seasons, team and player performance, and patterns around toss decisions.',
    tools: ['Power BI', 'DAX', 'Data visualization'], href: 'https://github.com/udayzaware27/IPL-Data-Analysis-PowerBI', art: 'ipl',
  },
  {
    number: '04', category: 'COMPUTER VISION', title: 'VisionFit-AI',
    description: 'An AI fitness trainer concept using YOLO-Pose for exercise recognition, repetition counting, and form assessment.',
    tools: ['Python', 'YOLO-Pose'], href: 'https://github.com/udayzaware27/VisionFit-AI', art: 'vision',
  },
]

function ProjectArtwork({ type }: { type: string }) {
  if (type === 'database') {
    return <div className="project-art project-art-database" aria-hidden="true"><div className="db-line db-line-one" /><div className="db-line db-line-two" /><div className="schema-node schema-books"><b>BOOKS</b><span>title · genre</span></div><div className="schema-node schema-orders"><b>ORDERS</b><span>book · customer</span></div><div className="schema-node schema-customers"><b>CUSTOMERS</b><span>name · city</span></div><div className="art-stamp">RELATIONAL<br />MODEL</div></div>
  }
  if (type === 'vision') {
    return <div className="project-art project-art-vision" aria-hidden="true"><div className="vision-scan" /><span className="vision-target target-one"><i>POSE / TRACK</i></span><span className="vision-target target-two"><i>DETECTION</i></span><span className="vision-cross cross-one">+</span><span className="vision-cross cross-two">+</span><span className="art-corner-label">FRAME 01 <b>·</b> INFERENCE</span></div>
  }
  const bars = type === 'ipl' ? [34, 64, 46, 82, 59, 94, 68, 77, 52, 88, 41, 71] : [42, 58, 34, 72, 49, 84, 61, 92, 57, 76, 48, 67]
  return <div className={`project-art project-art-${type}`} aria-hidden="true"><div className="chart-topline"><span>{type === 'ipl' ? 'SEASON / PERFORMANCE' : 'SOURCE → TRANSFORM → INSIGHT'}</span><span>{type === 'ipl' ? 'IPL' : 'EXCEL'}</span></div><div className="chart-grid"><div className="chart-guide guide-one" /><div className="chart-guide guide-two" /><div className="chart-bars">{bars.map((height, index) => <span key={index} style={{ '--bar-height': `${height}%`, '--bar-index': index } as CSSProperties} />)}</div><div className="chart-baseline"><span>{type === 'ipl' ? 'SEASONS' : 'MONTHLY VIEW'}</span><span>{type === 'ipl' ? 'TEAMS' : 'SALES'}</span></div></div><div className="art-footnote">{type === 'ipl' ? 'DASHBOARD STUDY' : 'POWER QUERY WORKFLOW'} <ArrowUpRight /></div></div>
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
  { name: 'Data analysis', items: ['SQL', 'PostgreSQL', 'Excel', 'Power Query', 'Data cleaning'] },
  { name: 'Business intelligence', items: ['Power BI', 'DAX', 'Pivot tables', 'Dashboards', 'Data visualization'] },
  { name: 'Computer vision', items: ['Python', 'YOLO', 'Roboflow', 'Image annotation', 'Object tracking'] },
  { name: 'Tools & workflow', items: ['Git', 'GitHub', 'pgAdmin', 'VS Code', 'Dataset preparation'] },
]

function Skills() {
  return (
    <section className="skills section-space" id="skills">
      <div className="page-wrap">
        <SectionHeading index="04" label="TOOLS I REACH FOR" title={<>A growing <em>toolkit.</em></>} detail="Grouped by the kind of work I use them for—not by an arbitrary skill score." />
        <div className="skill-grid">
          {skillGroups.map((group, index) => (
            <article className="skill-card reveal-item" key={group.name} style={{ '--stagger': `${index * 90}ms` } as CSSProperties}>
              <span className="skill-index">0{index + 1} <i>—</i> 04</span>
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
        <div className="contact-links reveal-item"><a href={profile.email}><span>EMAIL</span><b>udayzaware09@gmail.com</b><ArrowUpRight aria-hidden="true" /></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><span>LINKEDIN</span><b>Connect professionally</b><ArrowUpRight aria-hidden="true" /></a><a href={profile.github} target="_blank" rel="noreferrer"><span>GITHUB</span><b>See what I&apos;m building</b><ArrowUpRight aria-hidden="true" /></a><div className="contact-location"><span className="status-dot" /> PUNE, MAHARASHTRA, INDIA</div></div>
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
