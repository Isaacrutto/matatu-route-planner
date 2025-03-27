fetch('http://localhost:3000/routes')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('routes-container');
    data.forEach(route => {
      const div = document.createElement('div');
      div.classList.add('route-card');
      div.innerHTML = `<h3>${route.origin} to ${route.destination}</h3><p>Fare: KES ${route.fare}</p>`;
      container.appendChild(div);
    });
  });
  const searchInput = document.getElementById('search');
  searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      document.querySelectorAll('.route-card').forEach(card => {
          const text = card.innerText.toLowerCase();
          card.style.display = text.includes(searchTerm) ? '' : 'none';
      });
  });
  