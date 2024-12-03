// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    once: true
});

// Project Data
const projects = [
    {
        title: "Movie Review System",
        description: "A comprehensive movie review platform built with Django. Features include user authentication, movie ratings, reviews, watchlists, and personalized recommendations. Users can rate movies, write detailed reviews, and get suggestions based on their preferences.",
        tech: ["Python", "HTML", "CSS", "JavaScript", "SQLite"],
        github: "https://github.com/Tanmay2212/-Movie-Review-System-.git",
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        icons: [
            { class: "fab fa-python", color: "text-blue-500" },
            { class: "fas fa-database", color: "text-green-400" }
        ],
        featured: true,
        demoLink: null // Add demo link if available
    },
    {
        title: "Color Detection System",
        description: "An OpenCV-based application that detects and identifies colors in real-time. Users can click on any pixel in an image to get its RGB values and color name. Perfect for designers and digital artists needing precise color information.",
        tech: ["Python", "OpenCV", "NumPy", "Pandas"],
        github: "https://github.com/Tanmay2212/Color_Detection.git",
        image: "https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        icons: [
            { class: "fab fa-python", color: "text-blue-500" },
            { class: "fas fa-camera", color: "text-purple-400" },
            { class: "fas fa-brain", color: "text-yellow-400" }
        ],
        featured: true
    },
    {
        title: "Digital Election System",
        description: "A secure digital voting platform with features like voter authentication, real-time vote counting, and result analysis. Implements robust security measures to ensure vote integrity and prevent tampering.",
        tech: ["Python", "MySQL", "HTML", "CSS", "JavaScript"],
        github: "https://github.com/Tanmay2212/Election-system.git",
        image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        icons: [
            { class: "fab fa-python", color: "text-blue-500" },
            { class: "fas fa-database", color: "text-blue-400" }
        ],
        featured: true
    },
    {
        title: "Python Snake Game",
        description: "A modern implementation of the classic Snake game using Pygame. Features include dynamic difficulty levels, score tracking, power-ups, and smooth controls. Perfect demonstration of game development concepts in Python.",
        tech: ["Python", "Pygame", "Object-Oriented Programming"],
        github: "https://github.com/Tanmay2212/snake_game.git",
        image: "https://images.unsplash.com/photo-1628277613967-6abca504d0ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        icons: [
            { class: "fab fa-python", color: "text-blue-500" },
            { class: "fas fa-gamepad", color: "text-red-400" }
        ]
    },
    {
        title: "Text To Speech Converter",
        description: "An intelligent text-to-speech application that converts written text into natural-sounding speech. Supports multiple languages and voice modulation options for enhanced accessibility and user experience.",
        tech: ["Python", "pyttsx3", "Speech Recognition"],
        github: "https://github.com/Tanmay2212/Text_To_Speech.git",
        image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        icons: [
            { class: "fab fa-python", color: "text-blue-500" },
            { class: "fas fa-volume-up", color: "text-yellow-400" }
        ]
    },
    {
        title: "Pharmacy Inventory System",
        description: "Pharmacy inventory management system with integrated frontend and backend, offering features like purchase, sale, inventory viewing, Excel import, and inventory export.",
        tech: ["Python", "Django", "MySQL", "Pandas", "Data Analytics"],
        github: "https://github.com/Tanmay2212/Pharmacy_inventoryMgt.git",
        image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        icons: [
            { class: "fab fa-python", color: "text-blue-500" },
            { class: "fab fa-django", color: "text-green-500" },
            { class: "fas fa-database", color: "text-blue-400" },
            { class: "fas fa-chart-line", color: "text-blue-400" }
        ]
    }
];

// Enhanced project card creation with modern design
function createProjectCard(project, index) {
    return `
        <div class="project-card bg-slate-800/90 backdrop-blur-sm rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-xl"
             data-aos="fade-up" data-aos-delay="${index * 100}">
            <div class="relative group">
                <img src="${project.image}" alt="${project.title}" 
                     class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div class="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex gap-2">
                        <a href="${project.github}" target="_blank" 
                           class="inline-flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex-1 justify-center">
                            <i class="fab fa-github mr-2"></i>
                            <span>View Source</span>
                        </a>
                        ${project.demoLink ? `
                            <a href="${project.demoLink}" target="_blank" 
                               class="inline-flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                                <i class="fas fa-external-link-alt mr-2"></i>
                                <span>Live Demo</span>
                            </a>
                        ` : ''}
                    </div>
                </div>
                ${project.featured ? '<div class="absolute top-2 right-2 bg-emerald-500 text-xs px-2 py-1 rounded-full">Featured</div>' : ''}
            </div>
            <div class="p-6">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-xl font-bold text-emerald-400">${project.title}</h3>
                    <div class="flex space-x-2">
                        ${project.icons.map(icon => `
                            <i class="${icon.class} ${icon.color} transform hover:scale-110 transition-transform"></i>
                        `).join('')}
                    </div>
                </div>
                <p class="text-gray-400 mb-4 line-clamp-3 hover:line-clamp-none transition-all duration-300">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.tech.map(tech => `
                        <span class="px-3 py-1 bg-slate-700/50 backdrop-blur-sm rounded-full text-sm text-emerald-300">${tech}</span>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// Populate Projects
function populateProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    
    // Debug log
    console.log('Populating projects...', projectsGrid);
    
    if (!projectsGrid) {
        console.error('Projects grid element not found!');
        return;
    }
    
    let projectsHTML = '';
    
    projects.forEach((project, index) => {
        projectsHTML += createProjectCard(project, index);
    });
    
    projectsGrid.innerHTML = projectsHTML;
    
    // Debug log
    console.log('Projects populated:', projectsHTML.length);
}

// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuLinks = mobileMenu.getElementsByTagName('a');

    function toggleMobileMenu() {
        mobileMenu.classList.toggle('menu-open');
        document.body.classList.toggle('overflow-hidden');
    }

    function closeMobileMenu() {
        mobileMenu.classList.remove('menu-open');
        document.body.classList.remove('overflow-hidden');
    }

    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    closeMenuBtn.addEventListener('click', closeMobileMenu);

    // Close mobile menu when clicking a link
    Array.from(mobileMenuLinks).forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (mobileMenu.classList.contains('menu-open') && 
            !mobileMenu.contains(e.target) && 
            !mobileMenuBtn.contains(e.target)) {
            closeMobileMenu();
        }
    });

    // Prevent body scrolling when menu is open
    mobileMenu.addEventListener('touchmove', (e) => {
        e.preventDefault();
    }, { passive: false });
});

// Contact Form Handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Show loading state
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    submitButton.innerHTML = 'Sending...';
    submitButton.disabled = true;

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Send email using EmailJS
    emailjs.send('service_id', 'template_id', {
        from_name: name,
        reply_to: email,
        message: message,
        to_email: 'tanmaysharma2000k@gmail.com'
    })
    .then(() => {
        // Show success message
        alert('Message sent successfully!');
        // Reset form
        contactForm.reset();
    })
    .catch((error) => {
        // Show error message
        alert('Failed to send message. Please try again.');
        console.error('EmailJS Error:', error);
    })
    .finally(() => {
        // Restore button state
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
    });
});

// Add scroll progress indicator
function addScrollProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.className = 'fixed top-0 left-0 h-1 bg-emerald-500 z-50 transition-all duration-200';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing...');
    populateProjects();
    addScrollProgressBar();
    
    // Enhanced AOS initialization
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-out-cubic'
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll event listener for navbar
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 0) {
        nav.classList.add('shadow-lg');
    } else {
        nav.classList.remove('shadow-lg');
    }
}); 