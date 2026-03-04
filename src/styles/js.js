

const cursor = document.getElementById('cursor');
const links = document.querySelectorAll("a");
document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
     });
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            const rect = link.getBoundingClientRect();
            const correctheight = rect.height / 2
            cursor.style.width = `${correctheight}px`;
            cursor.style.height = `${rect.height}px`;
            cursor.style.transform = `translate(-50%, -50%) rotate(0deg)`;
            cursor.style.animationPlayState = "paused";
            cursor.style.filter = 'hue-rotate(180deg) saturate(200%) brightness(150%)';
        });
    
        link.addEventListener('mouseleave', () => { 
            cursor.style.height = '48px';
            cursor.style.width = '48px';
            cursor.style.animationPlayState = "running";
            cursor.style.transform = `translate(-50%, -50%)`;

        });
    });

