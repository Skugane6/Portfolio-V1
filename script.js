// Get the name element
const nameElement = document.querySelector('.typing-animation');

// Get the text content of the name element
const name = nameElement.textContent;

// Clear the existing content
nameElement.textContent = '';

// Function to add each letter with delay
function typeWriter(text, i) {
    if (i < text.length) {
        nameElement.textContent += text.charAt(i);
        i++;
        setTimeout(function() {
            typeWriter(text, i);
        }, 100); // Adjust typing speed here
    }
}

// Start typing animation
typeWriter(name, 0);


// Get the description element
const descriptionElement = document.querySelector('#description');

// Get the description text content
const description = descriptionElement.textContent;

// Clear the existing content
descriptionElement.textContent = '';

// Function to add each letter with delay
function typeWriterDescription(text, i, element) {
    if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(function() {
            typeWriterDescription(text, i, element);
        }, 50); // Adjust typing speed here
    }
}

// Start typing animation for description
typeWriterDescription(description, 0, descriptionElement);


particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: ['#9932CC', '#4B0082', '#FFFFFF','#4B0082'],
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 12,
            random: true,
            anim: {
                enable: true,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: false
        },
        move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

