<div class="timeline-feed" id="timeline-feed"></div>

<style>
.timeline-feed {
  max-width: 700px;
  margin: 60px auto;
  font-family: 'Segoe UI', sans-serif;
}

.timeline-entry {
  display: flex;
  align-items: center;
  background: #121212;
  border-left: 6px solid gold;
  padding: 16px;
  margin-bottom: 20px;
  border-radius: 8px;
  opacity: 0;
  transform: scale(0.8) translateX(-30px);
  animation: bounceIn 0.6s ease forwards;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.timeline-entry:hover {
  transform: scale(1.03);
  box-shadow: 0 0 20px #ffd70099;
}

.timeline-icon {
  width: 48px;
  height: 48px;
  margin-right: 16px;
  border-radius: 8px;
  background: #007bff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
  flex-shrink: 0;
  box-shadow: 0 0 12px rgba(0,123,255,0.6);
  transition: transform 0.5s ease;
}

.timeline-entry:hover .timeline-icon {
  transform: rotate(360deg) scale(1.2);
}

.timeline-text {
  color: #fff;
  transition: max-height 0.3s ease;
  overflow: hidden;
}
.timeline-text strong {
  color: gold;
  display: block;
  margin-bottom: 4px;
}

.timeline-entry.expanded .timeline-text {
  max-height: 500px;
}
.timeline-entry.collapsed .timeline-text {
  max-height: 24px;
}

@keyframes bounceIn {
  to {
    opacity: 1;
    transform: scale(1) translateX(0);
  }
}
</style>

<script>
const timelineData = [
  { icon: "💡", title: "Discovered IT Passion", desc: "2010: Found out computers are cooler than people. Started coding, never looked back." },
  { icon: "🎓", title: "Graduation Complete", desc: "2014: Escaped the academic matrix with style." },
  { icon: "⚓", title: "Navy Joined", desc: "2014: Swore in. Adventure initiated. Anchors aweigh!" },
  { icon: "🌊", title: "Deployment", desc: "2018: Tasted saltwater, chaos, and 3 hours of sleep." },
  { icon: "🏁", title: "Left Active Duty", desc: "2024: Freedom patch applied. Honorably discharged." },
  { icon: "🔄", title: "Joined Reserves", desc: "2024: Still kind of in. Just weekends now." },
  { icon: "💻", title: "IT Career Started", desc: "2024: From anchor to admin." },
  { icon: "🔐", title: "Security+ Certified", desc: "2025: Defender of logins. Slayer of weak passwords." }
];

const container = document.getElementById('timeline-feed');

timelineData.forEach((item, index) => {
  const el = document.createElement('div');
  el.className = `timeline-entry collapsed`;
  el.style.animationDelay = `${index * 0.3}s`;
  el.innerHTML = `
    <div class="timeline-icon">${item.icon}</div>
    <div class="timeline-text">
      <strong>${item.title}</strong>
      ${item.desc}
    </div>
  `;
  el.addEventListener('click', () => {
    el.classList.toggle('expanded');
    el.classList.toggle('collapsed');
  });
  container.appendChild(el);
});
</script>
