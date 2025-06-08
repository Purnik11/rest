
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('section');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
    
      navLinks.forEach(l => l.classList.remove('active'));
      sections.forEach(s => s.classList.remove('active'));

      
      link.classList.add('active');
      const sectionId = link.id.replace('nav-', '');
      document.getElementById(sectionId).classList.add('active');
    });
  });
});
