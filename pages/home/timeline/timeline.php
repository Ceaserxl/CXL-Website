<div class="timeline-feed" id="timeline-feed"></div>
<script>
const timelineData = [
  { icon: "💡", title: "Discovered IT Passion", desc: "2010: Found out computers are cooler than people. Started coding, never looked back." },
  { icon: "🎓", title: "Graduation Complete", desc: "2014: Escaped the academic matrix with style." },
  { icon: "⚓", title: "Navy Joined", desc: "2014: Swore in. Adventure initiated. Anchors aweigh!" },
  { icon: "🌊", title: "Deployment", desc: "2018: Tasted saltwater, chaos, and 3 hours of sleep." },
  { icon: "🏁", title: "Left Active Duty", desc: "2023: Freedom patch applied. Honorably discharged." },
  { icon: "🔄", title: "Joined Reserves", desc: "2024: Still kind of in. Just weekends now." },
  { icon: "💻", title: "IT Career Started", desc: "2024: From anchor to admin." },
  { icon: "🔐", title: "Security+ Certified", desc: "2025: Defender of logins. Slayer of weak passwords." }
];

const container = document.getElementById('timeline-feed');

timelineData.forEach((item, index) => {
  const el = document.createElement('div');
  el.className = `timeline-entry expanded`;
  el.style.animationDelay = `${index * 0.3}s`;
  el.innerHTML = `
    <div class="timeline-icon">${item.icon}</div>
    <div class="timeline-text">
      <strong>${item.title}</strong>
      ${item.desc}
    </div>
  `;
  container.appendChild(el);
});
</script>
