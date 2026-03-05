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

    function fade() {
        const cells = document.getElementsByClassName("cell");
        for (let i = 0; i < cells.length; i++) {
            cells[i].style.animationName = "hover";
            cells[i].style.animationPlayState = 'running';
            cells[i].style.animationDuration = "2s";
        }
    }    
    function reset() {
        const cells = document.getElementsByClassName("cell");
        for (let i = 0; i < cells.length; i++) {
            cells[i].style.animationName = "none";
            void cells[i].offsetWidth; // force reflow
            cells[i].style.animationName = "hover";
            cells[i].style.animationPlayState = "paused";
            cells[i].style.animationDuration = "0.3s";
        }
    }
    setInterval(() => {
        fade();
        setTimeout(reset, 2000);
    }, 15000);