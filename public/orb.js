// document.addEventListener('DOMContentLoaded', function () {
//   const particles = document.querySelectorAll('.c');
//   const strength = 0.1; // Измените силу притяжения по вашему вкусу
//   let mouseX = window.innerWidth / 2;
//   let mouseY = window.innerHeight / 2;
//
//   document.addEventListener('mousemove', function (event) {
//     mouseX = event.clientX;
//     mouseY = event.clientY;
//   });
//
//   function updateParticles() {
//     particles.forEach((particle) => {
//       const rect = particle.getBoundingClientRect();
//       const particleX = rect.left + rect.width / 2;
//       const particleY = rect.top + rect.height / 2;
//
//       const deltaX = mouseX - particleX;
//       const deltaY = mouseY - particleY;
//
//       const angle = Math.atan2(deltaY, deltaX);
//       const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
//
//       const speed = Math.min(strength * distance, 10); // Ограничиваем скорость до 10 пикселей в кадре
//
//       const moveX = speed * Math.cos(angle);
//       const moveY = speed * Math.sin(angle);
//
//       particle.style.transition = 'transform 0.5s ease-out';
//       particle.style.transform = `translate(${moveX}px, ${moveY}px)`;
//     });
//   }
//
//   function resetParticles() {
//     particles.forEach((particle) => {
//       particle.style.transition = 'transform 0.5s ease-out';
//       particle.style.transform = 'translate(0, 0)';
//     });
//   }
//
//   document.addEventListener('mouseenter', resetParticles);
//   document.addEventListener('mouseleave', resetParticles);
//
//   function animate() {
//     updateParticles();
//     requestAnimationFrame(animate);
//   }
//
//   animate();
// });
