const card = document.querySelector('.card');

card.addEventListener('mousemove', (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const deltaX = x - centerX;
    const deltaY = y - centerY;
    
    const rotateX = deltaY / centerY * 15; // Adjust 15 for more or less tilt
    const rotateY = -deltaX / centerX * 15; // Adjust 15 for more or less tilt
    
    card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
});

card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
});
