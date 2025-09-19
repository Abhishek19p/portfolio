import React, { useEffect, useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { motion, useAnimation, useScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Head from "next/head";
import { Shield, Search, Network, Terminal, Eye, Lock, Code, Server, Activity, Bug, Database, Target, FileSearch } from "lucide-react";

function FadeInSection({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants}>
      {children}
    </motion.div>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) setShowTopBtn(true);
      else setShowTopBtn(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const experience = [
    {
      role: "Cybersecurity Analyst — Digital Forensics Expert",
      company: "Mahen Technologies Pvt. Ltd",
      date: "Sept 2024 – Aug 2025",
      bullets: [
        "Performed forensic acquisition, evidence preservation, and analysis while maintaining chain of custody.",
        "Investigated file systems, memory, and network traffic using Autopsy, Wireshark, and Nmap.",
        "Authored detailed forensic reports to support incident response and compliance.",
      ],
    },
  ];

  const projects = [
    {
      title: "SOC Analyst (TryHackMe)",
      desc: "Simulated SOC workflows: log monitoring in Splunk, alert triage, and threat hunting mapped to MITRE ATT&CK.",
      tags: ["SIEM", "Incident Response"],
      link: "https://tryhackme.com/",
    },
    {
      title: "Web App VAPT",
      desc: "Tested applications against OWASP Top 10 using Burp Suite, manual exploitation, and vulnerability validation.",
      tags: ["OWASP", "Pentesting"],
      link: "#",
    },
  ];

  const skills = [
    { name: "Penetration Testing", icon: <Shield className="w-10 h-10 text-mint-400 mb-4" />, category: "Security" },
    { name: "Vulnerability Assessment", icon: <Search className="w-10 h-10 text-mint-400 mb-4" />, category: "Security" },
    { name: "Network Security", icon: <Network className="w-10 h-10 text-mint-400 mb-4" />, category: "Networking" },
    { name: "Ethical Hacking", icon: <Terminal className="w-10 h-10 text-mint-400 mb-4" />, category: "Security" },
    { name: "Security Analysis", icon: <Eye className="w-10 h-10 text-mint-400 mb-4" />, category: "Analysis" },
    { name: "Incident Response", icon: <Lock className="w-10 h-10 text-mint-400 mb-4" />, category: "Security" },
    { name: "Python Scripting", icon: <Code className="w-10 h-10 text-mint-400 mb-4" />, category: "Programming" },
    { name: "Linux Administration", icon: <Server className="w-10 h-10 text-mint-400 mb-4" />, category: "Systems" },
  ];

  const tools = [
    { name: "Wireshark", icon: <Activity className="w-10 h-10 text-mint-400 mb-4" />, desc: "Used Wireshark for packet capture analysis and network troubleshooting" },
    { name: "Nmap", icon: <Search className="w-10 h-10 text-mint-400 mb-4" />, desc: "Performed network discovery and security auditing with Nmap scanning" },
    { name: "Burp Suite", icon: <Bug className="w-10 h-10 text-mint-400 mb-4" />, desc: "Conducted web application security testing using Burp Suite proxy" },
    { name: "Splunk", icon: <Database className="w-10 h-10 text-mint-400 mb-4" />, desc: "Analyzed security logs and created dashboards for threat detection" },
    { name: "Metasploit", icon: <Target className="w-10 h-10 text-mint-400 mb-4" />, desc: "Executed penetration testing and vulnerability exploitation frameworks" },
    { name: "Autopsy", icon: <FileSearch className="w-10 h-10 text-mint-400 mb-4" />, desc: "Performed digital forensics, evidence recovery, and timeline analysis using Autopsy" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100 scroll-smooth">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet" />
      </Head>

      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-cyan-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between sticky top-0 bg-gray-900/70 backdrop-blur-md z-40">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight">Abhishek Pandey</h1>
          <p className="text-sm text-gray-400">Cybersecurity Analyst | Digital Forensics & SOC</p>
        </div>
        <nav className="hidden md:flex space-x-6 text-sm text-gray-300">
          <a href="#about" className="hover:text-emerald-400">About</a>
          <a href="#skills" className="hover:text-emerald-400">Skills</a>
          <a href="#tools" className="hover:text-emerald-400">Tools</a>
          <a href="#experience" className="hover:text-emerald-400">Experience</a>
          <a href="#projects" className="hover:text-emerald-400">Projects</a>
          <a href="#contact" className="hover:text-emerald-400">Contact</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        {/* Hero */}
<section className="flex flex-col items-center justify-center text-center min-h-screen">
  <motion.div
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
      Learning every day. Defending with passion. Growing into cybersecurity.
    </h2>

    <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
      I’m an aspiring cybersecurity professional focused on SOC operations, digital forensics, and incident response. 
      My goal: to learn quickly, contribute to security teams, and build resilience against threats.
    </p>

    {/* Animated Buttons */}
    <motion.div
      className="mt-8 flex gap-4 justify-center"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.2, duration: 0.6 },
        },
      }}
    >
      {[
        {
          label: "Email Me",
          href: "mailto:abhi.pandey0219@gmail.com",
          className: "px-5 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-lg text-white text-sm shadow-lg",
        },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/abhishek-pandey-7a2b931a3/",
          className: "px-5 py-2 border border-gray-700 hover:border-emerald-400 rounded-lg text-sm",
        },
        {
          label: "Resume",
          href: "/resume.pdf",
          className: "px-5 py-2 border border-gray-700 hover:border-emerald-400 rounded-lg text-sm",
        },
      ].map((btn, i) => (
        <motion.a
          key={i}
          href={btn.href}
          target={btn.href.startsWith("http") ? "_blank" : "_self"}
          rel="noreferrer"
          className={btn.className}
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          {btn.label}
        </motion.a>
      ))}
    </motion.div>
  </motion.div>
</section>

        {/* About */}
        <FadeInSection>
          <section id="about" className="mt-16 bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold">About Me</h3>
            <p className="mt-4 text-gray-300">I specialize in digital forensics, SOC monitoring, and incident response. From analyzing anomalies in Splunk logs to preserving evidence from compromised systems, I combine investigative skills with hands-on technical expertise. My focus is on actionable reporting, guided by frameworks like NIST and MITRE ATT&CK.</p>
          </section>
        </FadeInSection>

        {/* Skills */}
        <FadeInSection>
          <section id="skills" className="mt-16">
            <h3 className="text-2xl font-semibold text-center mb-10">Technical Skills</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-emerald-500 hover:shadow-lg transition"
                >
                  {skill.icon}
                  <h4 className="font-semibold text-white text-center">{skill.name}</h4>
                  <span className="mt-2 px-3 py-1 text-xs bg-gray-800 rounded-full text-gray-300">
                    {skill.category}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </FadeInSection>

        {/* Tools */}
        <FadeInSection>
          <section id="tools" className="mt-16">
            <h3 className="text-2xl font-semibold text-center mb-10">Cybersecurity Tools</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex flex-col items-center text-center p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-emerald-500 hover:shadow-lg transition"
                >
                  {tool.icon}
                  <h4 className="font-semibold text-white">{tool.name}</h4>
                  <p className="mt-2 text-sm text-gray-400">{tool.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeInSection>

        {/* Experience */}
        <FadeInSection>
          <section id="experience" className="mt-16 bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold">Experience</h3>
            {experience.map((exp) => (
              <div key={exp.role} className="mt-6">
                <h4 className="text-lg font-bold">{exp.role}</h4>
                <p className="text-sm text-gray-400">{exp.company} • {exp.date}</p>
                <ul className="mt-3 ml-6 list-disc text-gray-300 space-y-1">
                  {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            ))}
          </section>
        </FadeInSection>

        {/* Projects */}
        <FadeInSection>
          <section id="projects" className="mt-16">
            <h3 className="text-2xl font-semibold text-center mb-10">Projects & Labs</h3>
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              {projects.map((p) => (
                <a key={p.title} href={p.link} target="_blank" rel="noreferrer" className="block p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:shadow-lg hover:border-emerald-500 border border-transparent transition">
                  <h4 className="font-semibold text-lg">{p.title}</h4>
                  <p className="mt-2 text-sm text-gray-400">{p.desc}</p>
                  <div className="mt-3 flex gap-2 flex-wrap">
                    {p.tags.map((t) => <span key={t} className="text-xs bg-emerald-600/30 px-2 py-1 rounded-md text-emerald-300">{t}</span>)}
                  </div>
                </a>
              ))}
            </div>
          </section>
        </FadeInSection>

        {/* Education & Certifications */}
        <FadeInSection>
          <section className="mt-16 grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold">Education</h3>
              <p className="mt-4 font-medium">Master’s in Information Technology</p>
              <p className="text-sm text-gray-400">Sies College, Mumbai • 2023–2025</p>
              <p className="mt-4 font-medium">Bachelor’s in Information Technology</p>
              <p className="text-sm text-gray-400">Kirti M. Doongursee College, Mumbai • 2020–2023</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold">Certifications</h3>
              <p className="mt-4 font-medium">Cisco Networking Academy – Introduction to Cybersecurity</p>
              <p className="text-sm text-gray-400">July 2025</p>
            </div>
          </section>
        </FadeInSection>

        {/* Contact */}
        <FadeInSection>
          <section id="contact" className="mt-16 bg-gradient-to-r from-emerald-600 to-cyan-500 p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold">Let’s secure the future together</h3>
            <p className="mt-3 text-gray-100">I’m open to SOC, incident response, and forensics roles. Reach out for collaborations or interviews.</p>
            <div className="mt-6 flex justify-center gap-4">
              <a href="mailto:abhi.pandey0219@gmail.com" className="px-5 py-2 bg-black/30 rounded-lg text-sm hover:bg-black/50">Email</a>
              <a href="tel:+917718089020" className="px-5 py-2 bg-black/30 rounded-lg text-sm hover:bg-black/50">Call</a>
            </div>
          </section>
        </FadeInSection>

        <footer className="mt-16 text-center text-xs text-gray-500">© {new Date().getFullYear()} Abhishek Pandey </footer>
      </main>

      {/* Back to Top Button */}
      {showTopBtn && (
        <button       
        >
          ↑
        </button>
      )}
    </div>
  );
}
