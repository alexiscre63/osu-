const container = document.getElementById('triangles');

for (let i = 0; i < 40; i++) {
  const t = document.createElement('div');
  const size = 40 + Math.random() * 160;

  t.className = 'triangle';
  t.style.width = size + 'px';
  t.style.height = size * 0.87 + 'px';
  t.style.left = Math.random() * 100 + '%';
  t.style.animationDuration = 20 + Math.random() * 40 + 's';
  t.style.animationDelay = -Math.random() * 60 + 's';
  t.style.opacity = 0.4 + Math.random() * 0.6;

  container.appendChild(t);
}