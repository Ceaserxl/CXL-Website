<div class="card-section text-white">
  <h4 class="mb-3 text-center">Service Status</h4>
  <div id="status-list">Loading...</div>
</div>

<script>
function updateStatus() {
  fetch('includes/status/status-update.php')  // ✅ Correctly points to backend
    .then(res => res.json())
    .then(services => {
      const container = document.getElementById('status-list');
      container.innerHTML = '';
      services.forEach(s => {
        const badgeClass = s.status === 'online' ? 'bg-success' : 'bg-danger';
        container.innerHTML += `
          <div class='d-flex align-items-center justify-content-between mb-2'>
            <div class='d-flex align-items-center'>
              <img src='images/${s.icon}' alt='${s.name}' width='28' height='28' class='me-2'>
              <strong>${s.name}</strong>
            </div>
            <span class='badge ${badgeClass}'>${s.status.charAt(0).toUpperCase() + s.status.slice(1)}</span>
          </div>
        `;
      });
    })
    .catch(err => {
      document.getElementById('status-list').innerHTML = '<p style="color: red;">Error: ' + err.message + '</p>';
    });
}

updateStatus();
setInterval(updateStatus, 5000);
</script>
