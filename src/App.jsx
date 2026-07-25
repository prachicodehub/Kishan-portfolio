import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  about,
  achievements,
  experience,
  highlights,
  profile,
  projects,
  skills,
  stackMarquee,
} from "./data";
import Avatar3D from "./Avatar3D";
import portrait from "./assets/kishan.jpg";
import "./App.css";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

function App() {
  const [activeProject, setActiveProject] = useState(projects[0].id);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  const selected = projects.find((p) => p.id === activeProject) ?? projects[0];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#achievements", label: "Wins" },
    { href: "#experience", label: "Experience" },
    { href: "#work", label: "Work" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="site">
      <motion.div className="scroll-progress" style={{ scaleX }} />

      <header className="nav">
        <a className="nav-brand" href="#top">
          {profile.name}
        </a>
        <nav className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          className={`nav-toggle ${menuOpen ? "is-open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-atmosphere" aria-hidden="true">
            <div className="hero-glow hero-glow-a" />
            <div className="hero-glow hero-glow-b" />
            <div className="hero-glow hero-glow-c" />
            <div className="hero-grid" />
            <div className="hero-orb" />
            <div className="hero-noise" />
          </div>

          <div className="hero-content">
            <motion.p
              className="hero-role"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
            >
              {profile.role}
              <span className="hero-role-sep">·</span>
              {profile.company}
            </motion.p>

            <motion.h1
              className="hero-name"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
            >
              <span className="hero-name-line">{profile.name.split(" ")[0]}</span>
              <span className="hero-name-line hero-name-accent">
                {profile.name.split(" ").slice(1).join(" ")}
              </span>
            </motion.h1>

            <motion.p
              className="hero-tagline"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              className="hero-actions"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
            >
              <a className="btn btn-primary" href="#work">
                See what I build
              </a>
              <a className="btn btn-ghost" href="#achievements">
                View wins
              </a>
            </motion.div>

            <motion.div
              className="social-row"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={4}
            >
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href={profile.leetcode}
                target="_blank"
                rel="noopener noreferrer"
              >
                LeetCode
              </a>
            </motion.div>
          </div>

          <Avatar3D
            src={portrait}
            alt={`${profile.name} portrait`}
            caption={`${profile.name.split(" ")[0]} · Full Stack · AI/ML`}
          />


        </section>

        <div className="impact-band" aria-label="Key highlights">
          <div className="impact-inner">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                className="impact-item"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeUp}
                custom={i}
              >
                <span className="impact-value">{item.value}</span>
                <span className="impact-label">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[...stackMarquee, ...stackMarquee].map((tech, i) => (
              <span key={`${tech}-${i}`}>{tech}</span>
            ))}
          </div>
        </div>

        <section id="about" className="section about">
          <div className="section-inner">
            <div className="about-layout">
              <motion.div
                className="about-photo"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={portrait}
                  alt={`${profile.name}, Full Stack AI/ML Engineer`}
                />
                <div className="about-photo-glow" aria-hidden="true" />
              </motion.div>

              <div className="about-text">
                <motion.div
                  className="section-heading"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.4 }}
                  variants={fadeUp}
                >
                  <p className="eyebrow">About</p>
                  <h2>Full stack. AI-native. Built for production.</h2>
                </motion.div>

                <div className="about-grid">
                  {about.paragraphs.map((text, i) => (
                    <motion.p
                      key={text}
                      className="about-copy"
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.4 }}
                      variants={fadeUp}
                      custom={i}
                    >
                      {text}
                    </motion.p>
                  ))}
                </div>

                <motion.p
                  className="about-education"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.4 }}
                  variants={fadeUp}
                  custom={2}
                >
                  <span>Education</span>
                  {about.education.degree} · {about.education.school}
                  <em>
                    {about.education.years} · CGPA {about.education.cgpa}
                  </em>
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        <section id="achievements" className="section achievements">
          <div className="section-inner">
            <motion.div
              className="section-heading"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
            >
              <p className="eyebrow">Proof of work</p>
              <h2>Wins, leadership, and national-stage pressure.</h2>
            </motion.div>

            <div className="achieve-grid">
              {achievements.map((item, i) => (
                <motion.article
                  key={item.id}
                  className={`achieve-item ${i === 0 ? "is-featured" : ""}`}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={fadeUp}
                  custom={i}
                >
                  <p className="achieve-badge">{item.badge}</p>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section experience">
          <div className="section-inner">
            <motion.div
              className="section-heading"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
            >
              <p className="eyebrow">Experience</p>
              <h2>AI/ML, full stack, and research — shipped under deadlines.</h2>
            </motion.div>

            <div className="experience-list">
              {experience.map((job, i) => (
                <motion.article
                  key={job.id}
                  className="experience-item"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeUp}
                  custom={i}
                >
                  <div className="experience-meta">
                    <p className="experience-role">{job.role}</p>
                    <p className="experience-company">{job.company}</p>
                    <p className="experience-period">
                      {job.period}
                      <span>· {job.location}</span>
                    </p>
                  </div>
                  <ul className="experience-points">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="section work">
          <div className="section-inner">
            <motion.div
              className="section-heading"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
            >
              <p className="eyebrow">Selected work</p>
              <h2>Products that run in the real world.</h2>
            </motion.div>

            <div className="work-layout">
              <div className="work-list" role="tablist" aria-label="Projects">
                {projects.map((project, i) => (
                  <motion.button
                    key={project.id}
                    role="tab"
                    aria-selected={activeProject === project.id}
                    className={`work-item ${
                      activeProject === project.id ? "is-active" : ""
                    }`}
                    onClick={() => setActiveProject(project.id)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                    custom={i}
                  >
                    <span className="work-index">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="work-item-copy">
                      <span className="work-item-name">{project.name}</span>
                      <span className="work-item-type">{project.type}</span>
                    </span>
                  </motion.button>
                ))}
              </div>

              <motion.article
                key={selected.id}
                className="work-detail"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="work-detail-type">{selected.type}</p>
                <h3>{selected.name}</h3>
                <p className="work-detail-summary">{selected.summary}</p>
                <ul className="work-detail-list">
                  {selected.details.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="work-stack">
                  {selected.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                {selected.url && (
                  <a
                    className="btn btn-primary work-link"
                    href={selected.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {selected.url.includes("github")
                      ? "View on GitHub"
                      : "Link"}
                  </a>
                )}
              </motion.article>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills">
          <div className="section-inner">
            <motion.div
              className="section-heading"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
            >
              <p className="eyebrow">Stack</p>
              <h2>Full stack, Python backends, AI/ML, and cloud.</h2>
            </motion.div>

            <div className="skills-grid">
              {skills.map((group, i) => (
                <motion.div
                  key={group.title}
                  className="skill-block"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeUp}
                  custom={i}
                >
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="section-inner contact-inner">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
            >
              <p className="eyebrow">Contact</p>
              <h2>Ready to build the next hard thing.</h2>
              <p className="contact-copy">
                Open to full stack, backend, and AI/ML roles — product builds,
                agent pipelines, and systems that need to ship.
              </p>
              <div className="contact-actions">
                <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
                <a className="btn btn-ghost" href={`tel:+91${profile.phone}`}>
                  +91 {profile.phone}
                </a>
                <a
                  className="btn btn-ghost"
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="btn btn-ghost"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="footer-social">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={profile.leetcode} target="_blank" rel="noopener noreferrer">
            LeetCode
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
