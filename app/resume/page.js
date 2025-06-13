'use client';

import styles from './page.module.css';
import SkillsWidget from '../components/widgets/SkillsWidget';

export default function Resume() {
  return (
    <>
      <div className="main-stack">
        {/* Profile */}
        <div className="main-content content-card">
          <h2 className={styles.sectionHeader}>Jeremy Voegele</h2>
          <p className={styles.sectionParagraph}>
            IT & Mechanical Systems Technician | U.S. Navy Veteran | Linux & Cloud Enthusiast
          </p>
          <p className={styles.sectionParagraph}>
            Tenacious and resourceful technician with 10 years of honorable U.S. Navy service, currently in the Navy Reserves.
            Proven expertise in Linux systems, Windows Server, Active Directory, and enterprise automation tools.
            Passionate about cloud infrastructure, homelab environments, and building full-stack tools to support technical teams.
            Security+ certified and experienced in hands-on leadership across diverse operational environments.
          </p>
        </div>

        {/* Work Experience */}
        <div className="main-content content-card">
          <h2 className={styles.sectionHeader}>Work Experience</h2>
          <div className={styles.timelineItem}>
            <h4>Dec 2023 – Present: U.S. Navy Reserves – Information Systems Technician</h4>
            <ul className={styles.bulletList}>
              <li>Managed 200+ user accounts via Active Directory with group policy enforcement</li>
              <li>Maintained 300+ workstations and tracked 1,000+ inventory/configuration records</li>
              <li>Performed Windows maintenance: imaging, patching, troubleshooting</li>
              <li>Updated 500+ service records and system logs for readiness/audits</li>
            </ul>

            <h4>Aug 2014 – Dec 2023: U.S. Navy – Aviation Support Equipment Technician</h4>
            <ul className={styles.bulletList}>
              <li>Led 30+ junior personnel, taught licensing classes, ensured QA/safety compliance</li>
              <li>Completed 1,200+ maintenance tasks totaling 1,600+ hours across diesel, hydraulic, and electrical systems</li>
              <li>Operated forklifts/cranes (1,000+ hrs) for 4,000–20,000 lbs equipment</li>
              <li>Supported two overseas deployments and managed 3,000+ inspection records</li>
              <li>Processed $1.2M+ in DoD travel funds using custom MS Access automation</li>
            </ul>
          </div>
        </div>

        {/* Technical Experience */}
        <div className="main-content content-card">
          <h2 className={styles.sectionHeader}>Technical Experience</h2>
          <h4>Homelab Systems Admin</h4>
          <ul className={styles.bulletList}>
            <li>Built GPU-enabled Proxmox cluster for virtual services</li>
            <li>Hosted Stable Diffusion, ChatGPT APIs with GPU acceleration</li>
            <li>Automated backups/cloud sync using Python + RClone</li>
            <li>Tuned 2.5GbE/10GbE networks for max VM throughput</li>
            <li>Developed custom Discord bot with AI microservices</li>
          </ul>
        </div>

        {/* Volunteer */}
        <div className="main-content content-card">
          <h2 className={styles.sectionHeader}>Volunteer IT Work</h2>
          <h4>Volunteer IT Technician</h4>
          <ul className={styles.bulletList}>
            <li>Set up LANs and configured user systems for local orgs</li>
            <li>Performed PC repair, OS installs, file server deployments</li>
            <li>Wrote Python scripts and trained users in best practices</li>
          </ul>
        </div>

        {/* Personal Projects */}
        <div className="main-content content-card">
          <h2 className={styles.sectionHeader}>Personal Projects</h2>

          <h4>Discord Bot (2024–Present)</h4>
          <ul className={styles.bulletList}>
            <li>Built a modular Python bot with AI, image generation, media control</li>
            <li>Integrated ChatGPT and image tools with HTTP + WebSocket</li>
            <li>Designed Discord Views for dynamic upscaling and delete actions</li>
          </ul>

          <h4>Intro to Machine Learning (2022)</h4>
          <ul className={styles.bulletList}>
            <li>Created a 2D self-driving car in PyTorch using neural networks</li>
            <li>Trained via reward loop with forward propagation and loss functions</li>
            <li>Built custom training visualizations</li>
          </ul>
        </div>

        {/* Certifications */}
        <div className="main-content content-card">
          <h2 className={styles.sectionHeader}>Certifications</h2>
          <ul className={styles.bulletList}>
            <li>CompTIA Security+ (Obtained March 2025)</li>
            <li>Network+ (In Progress)</li>
            <li>A+ (In Progress)</li>
          </ul>
        </div>

        {/* Education */}
        <div className="main-content content-card">
          <h2 className={styles.sectionHeader}>Education</h2>
          <ul className={styles.bulletList}>
            <li>Goal: Transfer to San Diego State University – B.S. Computer Science</li>
            <li>Southwestern College (Starting Aug 2025): Associate of Science – Computer Science</li>
            <li>CNATTU – Jacksonville, FL: Shipboard Support Equipment, Maintenance Manager (2017 & 2020)</li>
            <li>CNATTU – Jacksonville, FL: Large Tow Tractor School (2015)</li>
            <li>NATTC – Pensacola, FL: Aviation Support Equipment School (2014–2015)</li>
            <li>Boswell High School – Saginaw, TX: High School Diploma (2014)</li>
          </ul>
        </div>

        {/* Awards */}
        <div className="main-content content-card">
          <h2 className={styles.sectionHeader}>Awards</h2>
          <ul className={styles.bulletList}>
            <li>Good Conduct Medal ×3</li>
            <li>Humanitarian Service Medal ×2</li>
            <li>Navy "E" Ribbon</li>
            <li>Global War on Terrorism Expeditionary Medal</li>
            <li>Sea Service Deployment Ribbon</li>
          </ul>
        </div>
      </div>

      {/* Sidebar */}
      <aside className="sidebar" style={{ position: 'sticky', top: '100px', zIndex: 10 }}>
        <div className="sidebar-content-card">
          <SkillsWidget />
        </div>
      </aside>
    </>
  );
}
