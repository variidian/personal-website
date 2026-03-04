//javascript to make a cursor go spinny and resize upon hover
const cursor = document.getElementById('cursor');
const cursorInner = document.getElementById('cursor-inner');
const links = document.querySelectorAll('a, .sidebar');

document.addEventListener('mousemove', (event) => {
    //find pos of cursor
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    //set fake div cursor to actual cursor position
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
     });
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            const rect = link.getBoundingClientRect();
            //resize cursor to match object size
            cursor.style.width = `${rect.width}px`;
            cursor.style.height = `${rect.height}px`;
            //reset to no animation + set rotation + colour change
            cursorInner.style.animation = '';
            cursorInner.style.transform = 'rotate(0deg)';
            cursor.style.filter = 'brightness(60%)';
        });
    
        link.addEventListener('mouseleave', () => { 
            //reset cursor size
            cursor.style.height = '48px';
            cursor.style.width = '48px';
            //start animation + reset colour
            cursorInner.style.animation = 'spin 1.5s linear infinite';
            cursor.style.filter = '';

        });
    });

