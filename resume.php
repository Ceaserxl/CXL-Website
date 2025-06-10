<?php
$isRoot = isset($_SERVER['SCRIPT_NAME']) && basename($_SERVER['SCRIPT_NAME']) === 'resume.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Jeremy Voegele Resume</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="style.css" />
  <link rel="icon" href="images/default_avatar.png" type="image/x-icon" />
  <style>
    .fade-in {
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.6s ease-out;
    }
    .fade-in.visible {
      opacity: 1;
      transform: translateY(0);
    }
    .resume-section {
      margin-bottom: 2.5rem;
    }
    .timeline-line {
      border-left: 3px solid #0d6efd;
      padding-left: 1rem;
    }
    .timeline-item {
      margin-bottom: 1.5rem;
    }
  </style>
</head>
<body>

<?php include './includes/nav.php'; ?>

<div class="alert alert-warning text-center rounded-0 mb-4">
  📄 Resume — Auto-generated and animated from uploaded data.
</div>

<div id="mainContent" class="container my-5">
  <div class="row justify-content-center">
    <div class="col-md-10">

      <div class="card-section fade-in resume-section">
        <h2>Jeremy Voegele</h2>
        <p class="text-muted">IT & Mechanical Systems Technician | Navy Veteran | Linux & Cloud Enthusiast</p>
        <p>Results-driven technician with 10 years of U.S. Navy service. Skilled in Linux systems, networking, virtualization, automation, and user support. Security+ certified with proven leadership and project experience.</p>
      </div>

      <div class="card-section fade-in resume-section">
        <h4>Skills</h4>
        <ul>
          <li>Linux (Ubuntu, Debian), Windows Server, Active Directory</li>
          <li>DNS, DHCP, VPN, VLANs, subnetting, firewalls</li>
          <li>AWS, Proxmox, VMware</li>
          <li>Python, Bash, VB, Microsoft Access</li>
          <li>C#, MySQL, database backup/restore</li>
          <li>Security+, access control, system hardening</li>
          <li>Git, Docker, RClone, OBS, Medal.tv</li>
          <li>Forklift & heavy equipment operations</li>
        </ul>
      </div>

      <div class="card-section fade-in resume-section">
        <h4>Work Experience</h4>
        <div class="timeline-line">
          <div class="timeline-item">
            <strong>Dec 2023 – Present:</strong> U.S. Navy Reserves – Info Systems Technician (Secret Clearance)<br>
            <ul>
              <li>Managed 200+ user accounts via Active Directory</li>
              <li>Maintained 300+ workstations; tracked 1,000+ inventory configs</li>
              <li>Performed system imaging, patching, and hardware repair</li>
              <li>Handled 500+ service records and logs</li>
            </ul>
          </div>
          <div class="timeline-item">
            <strong>Aug 2014 – Dec 2023:</strong> U.S. Navy – Aviation Support Equipment Technician<br>
            <ul>
              <li>Led 30+ personnel across multiple work centers</li>
              <li>Completed 1,200 maintenance jobs (1,600+ hours)</li>
              <li>Logged 1,000+ hours with forklifts and heavy equipment</li>
              <li>Managed 3,000+ maintenance/inspection records</li>
              <li>Processed $1.2M+ in DoD travel funds via Access automation</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card-section fade-in resume-section">
        <h4>Projects & Volunteer</h4>
        <ul>
          <li><strong>Homelab Admin:</strong> Built GPU-enabled Proxmox cluster, automated cloud syncs, hosted Stable Diffusion and ChatGPT APIs</li>
          <li><strong>Discord Bot:</strong> Multi-service bot with AI/media control, using Python, WebSockets, and custom views</li>
          <li><strong>Intro to ML:</strong> 2D car simulation using PyTorch and neural networks</li>
          <li><strong>Volunteer IT:</strong> LAN setup, OS imaging, scripting, PC repair</li>
        </ul>
      </div>

      <div class="card-section fade-in resume-section">
        <h4>Certifications</h4>
        <ul>
          <li>CompTIA Security+ (March 2025)</li>
          <li>Network+ (in progress)</li>
          <li>A+ (in progress)</li>
        </ul>
      </div>

      <div class="card-section fade-in resume-section">
        <h4>Education</h4>
        <ul>
          <li><strong>Southwestern College (Starting Aug 2025):</strong> AS – Computer Science</li>
          <li>Plan: Transfer to San Diego State University for BS – Computer Science</li>
          <li>Military Schools: Maintenance Manager, Tow Tractor School, Aviation Support</li>
          <li>Boswell High School – Saginaw, TX (2014)</li>
        </ul>
      </div>

      <div class="card-section fade-in resume-section">
        <h4>Awards</h4>
        <ul>
          <li>Good Conduct Medal ×3</li>
          <li>Humanitarian Service Medal ×2</li>
          <li>Navy "E" Ribbon</li>
          <li>Global War on Terrorism Expeditionary Medal</li>
          <li>Sea Service Deployment Ribbon</li>
        </ul>
      </div>

      <div class="card-section fade-in resume-section">
        <h4>Contact</h4>
        <p>Email: you@example.com</p>
        <p>GitHub: <a href="https://github.com/yourusername" target="_blank">github.com/yourusername</a></p>
      </div>

    </div>
  </div>
</div>

<?php include './includes/socials.php'; ?>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
<script>
  window.addEventListener('load', () => {
    document.querySelectorAll('.fade-in').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 200);
    });
  });
</script>
</body>
</html>
