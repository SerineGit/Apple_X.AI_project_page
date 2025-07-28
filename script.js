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

// Team Card Click Interactions
function initTeamInteractions() {
    const teamCards = document.querySelectorAll('.profile-card');
    
    // Team member data
    const teamData = {
        'project-manager': {
            name: 'Alex Johnson',
            role: 'Project Manager',
            details: 'Experienced project manager with 8+ years in QA leadership. Specializes in agile methodologies, team coordination, and strategic planning for complex software testing projects.',
            skills: ['Project Management', 'Agile/Scrum', 'Team Leadership', 'Strategic Planning']
        },
        'qa-lead': {
            name: 'Sarah Chen',
            role: 'QA Lead',
            details: 'Senior QA professional with expertise in test automation frameworks, API testing, and performance optimization. Leads the technical direction of our testing initiatives.',
            skills: ['Test Automation', 'API Testing', 'Performance Testing', 'Team Leadership']
        },
        'qa-engineer': {
            name: 'QA Engineer',
            role: 'QA Engineer',
            details: 'Dedicated QA engineer focused on ensuring software quality through comprehensive testing strategies, including functional, regression, and integration testing.',
            skills: ['Manual Testing', 'Automation Testing', 'Bug Tracking', 'Test Planning']
        }
    };
    
    teamCards.forEach(card => {
        card.addEventListener('click', () => {
            const role = card.getAttribute('data-role');
            const data = teamData[role];
            
            if (data) {
                // Create a simple alert or console log for now
                // You can replace this with a custom modal later
                const message = `
${data.name}
${data.role}

${data.details}

Skills: ${data.skills.join(', ')}
                `;
                
                // For now, we'll use console.log and a simple visual feedback
                console.log(message);
                
                // Add visual feedback
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.transform = '';
                }, 200);
                
                // You could also show this in a toast notification
                showNotification(`Clicked on ${data.name} - ${data.role}`);
            }
        });
        
        // Add hover effects
        card.addEventListener('mouseenter', () => {
            const profileName = card.querySelector('.profile-name');
            if (profileName) {
                profileName.style.textShadow = '0 0 15px var(--primary-color)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const profileName = card.querySelector('.profile-name');
            if (profileName) {
                profileName.style.textShadow = '';
            }
        });
    });
}

// Simple notification system
function showNotification(message) {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(0, 242, 234, 0.9);
        color: #0d0d0d;
        padding: 15px 20px;
        border-radius: 10px;
        font-family: 'Courier New', monospace;
        font-weight: bold;
        z-index: 10000;
        box-shadow: 0 0 20px rgba(0, 242, 234, 0.5);
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
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
            
            // Show notification for navigation
            const linkText = link.textContent.trim();
            showNotification(`Navigating to ${linkText}`);
            
            console.log('Navigate to:', linkText);
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
    
    // Observe content cards and team cards
    const cards = document.querySelectorAll('.content-card, .stat-card, .glitch-card');
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
            
            // Show notification
            showNotification(`Loading ${btnText}...`);
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
                menuBtn.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.5)';
            }, 1000);
            
            showNotification('Opening architecture menu...');
            console.log('Opening architecture menu...');
        });
    }
}

// Add typing effect to hero title
function initTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;
    
    const spans = heroTitle.querySelectorAll('span');
    spans.forEach((span, index) => {
        span.style.opacity = '0';
        span.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            span.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            span.style.opacity = '1';
            span.style.transform = 'translateY(0)';
        }, index * 300);
    });
}

// Enhanced avatar interactions
function initAvatarEffects() {
    const avatars = document.querySelectorAll('.profile-avatar');
    
    avatars.forEach(avatar => {
        avatar.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent card click
            
            // Add special click effect
            avatar.style.transform = 'translateX(-50%) scale(1.2) rotate(360deg)';
            avatar.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            
            setTimeout(() => {
                avatar.style.transform = 'translateX(-50%) scale(1)';
                avatar.style.transition = 'all 0.5s ease-in-out';
            }, 600);
            
            showNotification('Avatar clicked! 🤖');
        });
    });
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

// Add keyboard navigation support
function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // ESC key - remove any notifications
        if (e.key === 'Escape') {
            const notification = document.querySelector('.notification');
            if (notification) {
                notification.remove();
            }
        }
        
        // Space or Enter on focused glitch buttons
        if ((e.key === ' ' || e.key === 'Enter') && e.target.classList.contains('glitch-btn')) {
            e.preventDefault();
            e.target.click();
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    initTeamInteractions();
    initSmoothScrolling();
    initGlitchEffects();
    initScrollAnimations();
    initProjectButtons();
    initMenuButton();
    initTypingEffect();
    initAvatarEffects();
    initKeyboardNavigation();
    optimizeForDevice();
    
    console.log('Apple & X.AI Project initialized successfully! 🚀');
});

// Handle window resize
window.addEventListener('resize', () => {
    optimizeForDevice();
});

// Add some Easter eggs
function initEasterEggs() {
    let clickCount = 0;
    const logo = document.querySelector('.logo-section');
    
    if (logo) {
        logo.addEventListener('click', () => {
            clickCount++;
            
            if (clickCount === 5) {
                showNotification('🎉 Easter egg found! You discovered the secret!');
                
                // Add rainbow effect to the page
                document.body.style.animation = 'rainbow 2s ease-in-out';
                
                setTimeout(() => {
                    document.body.style.animation = '';
                    clickCount = 0;
                }, 2000);
            }
        });
    }
}

// Rainbow animation for easter egg
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        25% { filter: hue-rotate(90deg); }
        50% { filter: hue-rotate(180deg); }
        75% { filter: hue-rotate(270deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Initialize easter eggs after DOM load
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initEasterEggs, 1000);
});
