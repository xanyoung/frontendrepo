const parallax_items = document.querySelectorAll('.parallaxel')

function parallax(event) {
    parallax_items.forEach(parallaxel => {
        let speed = parallaxel.getAttribute('data-speed');
        parallaxel.style.transform = `translate(${event.clientX*speed/1000}px, ${event.clientY*speed/1000}px)`
    });
}

document.addEventListener('mousemove', parallax)