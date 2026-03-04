const cursor = document.getElementById('cursor');
const cursorInner = document.getElementById('cursor-inner');
const links = document.querySelectorAll('a, .sidebar');
document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
     });
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            const rect = link.getBoundingClientRect();
            cursor.style.width = `${rect.width}px`;
            cursor.style.height = `${rect.height}px`;
            
            cursorInner.style.animation = '';
            cursorInner.style.transform = 'rotate(0deg)';
            cursor.style.filter = 'brightness(60%)';
        });
    
        link.addEventListener('mouseleave', () => { 
            cursor.style.height = '48px';
            cursor.style.width = '48px';

            cursorInner.style.transform = 'rotate(0deg)';
            cursorInner.style.animation = 'spin 1.5s linear infinite';

        });
    });

