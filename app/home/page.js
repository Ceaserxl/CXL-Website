'use client';

import Image from 'next/image';
import GitHubWidget from '../components/widgets/GitHubWidget';
import DiscordWidget from '../components/widgets/DiscordWidget';
import ServiceStatusWidget from '../components/widgets/ServiceStatusWidget';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      {/* Main Content (Stacked Sections) */}
      <div className="main-stack">
        <div className="main-content content-card">
          <div className={styles.heroContainer}>
            <div className={styles.heroAvatar}>
              <Image
                src="/images/profile_pic.jpg"
                alt="Profile Picture"
                width={200}
                height={200}
                priority
              />
            </div>

            <div className={styles.heroText}>
              <h2>Jeremy Voegele</h2>
              <p>IT Specialist | Developer | Veteran</p>
            </div>
          </div>

          <p className={styles.sectionParagraph}>
            Welcome to my personal portfolio. I'm a U.S. Navy veteran and IT specialist with a passion for Linux systems,
            cloud infrastructure, and full-stack development.
          </p>
        </div>

        <div className="main-content content-card">
        <h2 className={styles.sectionHeader}>Timeline</h2>
        <div className={styles.timelineFeed}>
            <div className={styles.timelineEntry} style={{ animationDelay: '0s' }}>
            <div className={styles.timelineIcon}>💡</div>
            <div className={styles.timelineText}>
                <strong>Discovered IT Passion</strong><br />
                2010: Found out computers are cooler than people. Started coding, never looked back.
            </div>
            </div>

            <div className={styles.timelineEntry} style={{ animationDelay: '0.3s' }}>
            <div className={styles.timelineIcon}>🎓</div>
            <div className={styles.timelineText}>
                <strong>Graduation Complete</strong><br />
                2014: Escaped the academic matrix with style.
            </div>
            </div>

            <div className={styles.timelineEntry} style={{ animationDelay: '0.6s' }}>
            <div className={styles.timelineIcon}>⚓</div>
            <div className={styles.timelineText}>
                <strong>Navy Joined</strong><br />
                2014: Swore in. Adventure initiated. Anchors aweigh!
            </div>
            </div>

            <div className={styles.timelineEntry} style={{ animationDelay: '0.9s' }}>
            <div className={styles.timelineIcon}>🌊</div>
            <div className={styles.timelineText}>
                <strong>Deployment</strong><br />
                2018: Tasted saltwater, chaos, and 3 hours of sleep.
            </div>
            </div>

            <div className={styles.timelineEntry} style={{ animationDelay: '1.2s' }}>
            <div className={styles.timelineIcon}>🏁</div>
            <div className={styles.timelineText}>
                <strong>Left Active Duty</strong><br />
                2023: Freedom patch applied. Honorably discharged.
            </div>
            </div>

            <div className={styles.timelineEntry} style={{ animationDelay: '1.5s' }}>
            <div className={styles.timelineIcon}>🔄</div>
            <div className={styles.timelineText}>
                <strong>Joined Reserves</strong><br />
                2024: Still kind of in. Just weekends now.
            </div>
            </div>

            <div className={styles.timelineEntry} style={{ animationDelay: '1.8s' }}>
            <div className={styles.timelineIcon}>💻</div>
            <div className={styles.timelineText}>
                <strong>IT Career Started</strong><br />
                2024: From anchor to admin.
            </div>
            </div>

            <div className={styles.timelineEntry} style={{ animationDelay: '2.1s' }}>
            <div className={styles.timelineIcon}>🔐</div>
            <div className={styles.timelineText}>
                <strong>Security+ Certified</strong><br />
                2025: Defender of logins. Slayer of weak passwords.
            </div>
            </div>
        </div>
        </div>

      </div>

      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-content-card">
          <GitHubWidget />
        </div>
        <div className="sidebar-content-card">
          <DiscordWidget />
        </div>
        <div className="sidebar-content-card">
          <ServiceStatusWidget />
        </div>
      </aside>
    </>
  );
}
