// Particle Animation
function createParticles() {
    const container = document.getElementById('particles-container');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random size
        const size = Math.random() * 4 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Random animation delay
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        
        container.appendChild(particle);
    }
}

// Team Modal Functionality
function initTeamModal() {
    const modal = document.getElementById('team-modal');
    const teamCards = document.querySelectorAll('.team-card');
    const closeBtn = document.querySelector('.modal-close');
    
    // Team member data
    const teamData = {
        'project-manager': {
            name: 'Alex Johnson',
            role: 'Project Manager',
            details: 'Experienced project manager with 8+ years in QA leadership. Specializes in agile methodologies, team coordination, and strategic planning for complex software testing projects.'
        },
        'qa-lead': {
            name: 'Sarah Chen',
            role: 'QA Lead',
            details: 'Senior QA professional with expertise in test automation frameworks, API testing, and performance optimization. Leads the technical direction of our testing initiatives.'
        },
        'qa-engineer': {
            name: 'QA Engineer',
            role: 'QA Engineer',
            details: 'Dedicated QA engineer focused on ensuring software quality through comprehensive testing strategies, including functional, regression, and integration testing.'
        }
    };
    
    teamCards.forEach(card => {
        card.addEventListener('click', () => {
            const role = card.getAttribute('data-role');
            const data = teamData[role];
            
            if (data) {
                document.querySelector('.modal-name').textContent = data.name;
                document.querySelector('.modal-role').textContent = data.role;
                document.querySelector('.modal-details p').textContent = data.details;
                
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Close modal
    closeBtn.addEventListener('click', closeModal);
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Add click effect
            link.style.transform = 'scale(0.95)';
            setTimeout(() => {
                link.style.transform = '';
            }, 150);
            
            // You can add actual navigation logic here
            console.log('Navigate to:', link.textContent);
        });
    });
}

// Add Glitch Effect to Buttons on Load
function initGlitchEffects() {
    const glitchBtns = document.querySelectorAll('.glitch-btn');
    
    glitchBtns.forEach(btn => {
        // Add random glitch animation on page load
        setTimeout(() => {
            btn.style.animation = 'glitch-anim 0.3s ease-out';
            setTimeout(() => {
                btn.style.animation = '';
            }, 300);
        }, Math.random() * 2000);
    });
}

// Intersection Observer for Animation Triggers
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe content cards
    const cards = document.querySelectorAll('.content-card, .stat-card, .team-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Project Button Interactions
function initProjectButtons() {
    const projectBtns = document.querySelectorAll('.project-btn');
    
    projectBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Add special effect for project buttons
            const btnText = btn.querySelector('.btn-text').textContent;
            console.log('Opening project:', btnText);
            
            // Add loading effect
            btn.style.opacity = '0.7';
            setTimeout(() => {
                btn.style.opacity = '1';
            }, 500);
        });
    });
}

// Menu Button Special Effect
function initMenuButton() {
    const menuBtn = document.querySelector('.menu-btn');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Add special cyber effect
            menuBtn.style.boxShadow = '0 0 50px #00ffff, 0 0 100px #ff00ff';
            
            setTimeout(() => {
                menuBtn.style.boxShadow = '';
            }, 1000);
            
            console.log('Opening architecture menu...');
        });
    }
}

// Performance optimization - Reduce particles on mobile
function optimizeForDevice() {
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // Reduce particle count
        const particles = document.querySelectorAll('.particle');
        particles.forEach((particle, index) => {
            if (index > 20) {
                particle.remove();
            }
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    initTeamModal();
    initSmoothScrolling();
    initGlitchEffects();
    initScrollAnimations();
    initProjectButtons();
    initMenuButton();
    optimizeForDevice();
    
    console.log('Apple & X.AI Project initialized successfully! 🚀');
});

// Handle window resize
window.addEventListener('resize', () => {
    optimizeForDevice();
});
