'use client';

import styles from './page.module.css';

export default function Resume() {
  return (
    <>
      <div className="main-stack">
        <div className="main-content content-card">
          <h1 className={styles.pageTitle}>Resume</h1>

          {/* Summary Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionHeader}>Summary</h2>
            <p className={styles.sectionParagraph}>
              U.S. Navy veteran and IT specialist with expertise in Linux systems, cloud infrastructure, and full-stack development. Passionate about solving complex technical challenges and continuously learning.
            </p>
          </section>

          {/* Skills Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionHeader}>Skills</h2>
            <ul className={styles.skillList}>
              <li>Linux Administration</li>
              <li>Cloud Platforms (AWS, Azure)</li>
              <li>Networking & Security</li>
              <li>Full Stack Development (React, Node.js, PHP)</li>
              <li>Automation & Scripting (Bash, Python)</li>
            </ul>
          </section>

          {/* Experience Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionHeader}>Experience</h2>
            <h4 className={styles.jobTitle}>U.S. Navy — IT Specialist</h4>
            <p className={styles.jobDate}>2015 - 2025</p>
            <p className={styles.sectionParagraph}>
              Managed complex IT infrastructure in mission-critical environments. Implemented security protocols, maintained servers, and provided technical support to over 500 users.
            </p>
          </section>

          {/* Education Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionHeader}>Education</h2>
            <h4 className={styles.degree}>Bachelor of Science — Information Technology</h4>
            <p className={styles.jobDate}>Somewhere University, 2025 (Expected)</p>
          </section>
        </div>
      </div>

      <aside className="sidebar">
        <div className="sidebar-content-card">
          <h3 className={styles.sectionHeader}>Resume Sidebar</h3>
          <h4 className={styles.sidebarTitle}>Dummy Widget</h4>
          <p className={styles.sidebarText}>
            This is a placeholder for future sidebar widgets like certifications, languages, or contact info.
          </p>
        </div>
      </aside>
    </>
  );
}
