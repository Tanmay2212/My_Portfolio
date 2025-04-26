// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
});

// Project Data (Simplified)
const projects = [
    {
        title: "Movie Review System",
        description: "A movie rating and review platform built with Django and MySQL.",
        tech: ["Python", "Django", "MySQL"],
        github: "https://github.com/Tanmay2212/-Movie-Review-System-.git",
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        featured: true
    },
    {
        title: "multi_shop_sales_analysis",
        description: "Multi-Shop managing and analysis",
        tech: ["Python", "OpenCV", "NumPy"],
        github: "https://github.com/Tanmay2212/multi_shop_sales_analysis.git",
        image: "https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        featured: true
    },
    {
        title: "Digital Election System",
        description: "A secure voting platform with voter authentication and real-time counting.",
        tech: ["Python", "MySQL"],
        github: "https://github.com/Tanmay2212/Election-system.git",
        image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        featured: true
    },
    {
        title: "Python Snake Game",
        description: "Classic snake game with dynamic difficulty and score tracking.",
        tech: ["Python", "Pygame"],
        github: "https://github.com/Tanmay2212/snake_game.git",
        image: "https://images.unsplash.com/photo-1628277613967-6abca504d0ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Text To Speech Converter",
        description: "An intelligent TTS application supporting multiple languages.",
        tech: ["Python", "pyttsx3"],
        github: "https://github.com/Tanmay2212/Text_To_Speech.git",
        image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Pharmacy Inventory System",
        description: "Manage pharmacy purchases, sales, inventory, and reports easily.",
        tech: ["Python", "Django", "MySQL"],
        github: "https://github.com/Tanmay2212/Pharmacy_inventoryMgt.git",
        image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        featured: true
    }
];

// Auto-icon generator based on tech stack
function getIconForTech(tech) {
    const iconMap = {
        "Python": { class: "fab fa-python", color: "text-blue-500" },
        "Django": { class: "fab fa-django", color: "text-green-500" },
        "HTML": { class: "fab fa-html5", color: "text-orange-500" },
        "CSS": { class: "fab fa-css3-alt", color: "text-blue-400" },
        "JavaScript": { class: "fab fa-js", color: "text-yellow-400" },
        "MySQL": { class: "fas fa-database", color: "text-blue-400" },
        "SQLite": { class: "fas fa-database", color: "text-green-400" },
        "OpenCV": { class: "fas fa-camera", color: "text-purple-400" },
        "NumPy": { class: "fas fa-brain", color: "text-yellow-400" },
        "Pygame": { class: "fas fa-gamepad", color: "text-red-400" },
        "pyttsx3": { class: "fas fa-volume-up", color: "text-yellow-400" },
        "API": { class: "fas fa-cloud", color: "text-indigo-400" }
    };
    return iconMap[tech] || null;
}
function getPrimaryTechColor(project) {
    if (project.tech.includes("Python")) return "bg-blue-50";
    if (project.tech.includes("Django")) return "bg-green-50";
    if (project.tech.includes("JavaScript")) return "bg-yellow-50";
    if (project.tech.includes("HTML")) return "bg-orange-50";
    if (project.tech.includes("CSS")) return "bg-cyan-50";
    if (project.tech.includes("MySQL")) return "bg-gray-100";
    if (project.tech.includes("OpenCV")) return "bg-purple-50";
    return "bg-slate-100"; // default soft gray
}

// Project card creation function
function createProjectCard(project, index) {
    const bgColor = getPrimaryTechColor(project);

    return `
        <div class="project-card ${bgColor} backdrop-blur-sm rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-xl"
             data-aos="fade-up" data-aos-delay="${index * 100}">
            <div class="p-8 flex flex-col justify-between h-full">
                <div>
                    <h3 class="text-2xl font-bold text-stone-800 mb-4">${project.title}</h3>
                    <div class="flex space-x-2 mb-4">
                        ${project.tech.map(tech => {
                            const icon = getIconForTech(tech);
                            return icon ? `<i class="${icon.class} ${icon.color} text-lg"></i>` : '';
                        }).join('')}
                    </div>
                    <p class="text-stone-600 mb-6">${project.description}</p>
                </div>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.tech.map(tech => `
                        <span class="px-3 py-1 bg-slate-700/50 backdrop-blur-sm rounded-full text-sm text-emerald-600">${tech}</span>
                    `).join('')}
                </div>
                <div class="flex gap-2 mt-auto">
                    <a href="${project.github}" target="_blank" 
                       class="flex-1 inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                        <i class="fab fa-github mr-2"></i> View Source
                    </a>
                    ${project.demoLink ? `
                        <a href="${project.demoLink}" target="_blank" 
                           class="flex-1 inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                            <i class="fas fa-external-link-alt mr-2"></i> Live Demo
                        </a>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
}




// Populate projects on page load
function populateProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) {
        console.error('Projects grid element not found!');
        return;
    }

    projectsGrid.innerHTML = projects.map(createProjectCard).join('');
}

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

// Scroll progress bar
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

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', () => {
    populateProjects();
    addScrollProgressBar();
});
