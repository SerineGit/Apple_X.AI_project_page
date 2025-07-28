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

// Team Card Click Interactions with Modal
function initTeamInteractions() {
    const teamCards = document.querySelectorAll('.profile-card');
    const modalOverlay = document.createElement('div');
    modalOverlay.id = 'modal-overlay';
    modalOverlay.className = 'modal-overlay';
    modalOverlay.innerHTML = `
        <div class="modal-content">
            <button class="modal-close">×</button>
            <div class="modal-body">
                <div class="modal-header">
                    <div class="modal-avatar"></div>
                    <h2 class="modal-name"></h2>
                    <p class="modal-role"></p>
                </div>
                <div class="modal-details">
                    <p class="modal-text"></p>
                    <h3 class="modal-section-title">Experience</h3>
                    <p class="modal-experience"></p>
                    <h3 class="modal-section-title">Skills</h3>
                    <div class="modal-skills"></div>
                    <h3 class="modal-section-title">Achievements</h3>
                    <ul class="modal-achievements"></ul>
                </div>
                <div class="modal-social-links">
                    <a href="#" class="modal-social-link github-link" title="GitHub">
                        <svg viewBox="0 0 16 16" width="24" height="24">
                            <path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                    </a>
                    <a href="#" class="modal-social-link linkedin-link" title="LinkedIn">
                        <svg viewBox="0 0 24 24" width="24" height="24">
                            <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modalOverlay);

    const modalClose = document.querySelector('.modal-close');
    const modalAvatar = document.querySelector('.modal-avatar');
    const modalName = document.querySelector('.modal-name');
    const modalRole = document.querySelector('.modal-role');
    const modalText = document.querySelector('.modal-text');
    const modalExperience = document.querySelector('.modal-experience');
    const modalSkills = document.querySelector('.modal-skills');
    const modalAchievements = document.querySelector('.modal-achievements');
    
    // Team member data
    const teamData = {
        'project-manager': {
            name: 'Alex Johnson',
            role: 'Project Manager',
            avatar: '👨‍💼',
            details: 'Experienced project manager with 8+ years in QA leadership. Specializes in agile methodologies, team coordination, and strategic planning for complex software testing projects.',
            skills: ['Project Management', 'Agile/Scrum', 'Team Leadership', 'Strategic Planning'],
            experience: '8+ years in project management and QA leadership',
            achievements: [
                'Led 15+ successful product launches',
                'Improved team productivity by 40%',
                'Implemented Agile processes across 5 departments'
            ]
        },
        'qa-lead': {
            name: 'Sarah Chen',
            role: 'QA Lead',
            avatar: '👩‍💻',
            details: 'Senior QA professional with expertise in test automation frameworks, API testing, and performance optimization. Leads the technical direction of our testing initiatives.',
            skills: ['Test Automation', 'API Testing', 'Performance Testing', 'Team Leadership'],
            experience: '6+ years in quality assurance and test automation',
            achievements: [
                'Reduced testing time by 60% through automation',
                'Built comprehensive CI/CD testing pipeline',
                'Mentored 10+ junior QA engineers'
            ]
        },
        'qa-engineer-1': {
            name: 'Mike Rodriguez',
            role: 'Senior QA Engineer',
            avatar: '👨‍💻',
            details: 'Dedicated QA engineer focused on ensuring software quality through comprehensive testing strategies, including functional, regression, and integration testing.',
            skills: ['Manual Testing', 'Automation Testing', 'Bug Tracking', 'Test Planning'],
            experience: '4+ years in software quality assurance',
            achievements: [
                'Discovered 200+ critical bugs',
                'Improved test coverage by 35%',
                'Created comprehensive test documentation'
            ]
        },
        'qa-engineer-2': {
            name: 'Lisa Wang',
            role: 'QA Engineer',
            avatar: '👩‍💻',
            details: 'Detail-oriented QA engineer with strong expertise in mobile and web application testing. Passionate about delivering high-quality user experiences.',
            skills: ['Mobile Testing', 'Web Testing', 'Cross-browser Testing', 'Usability Testing'],
            experience: '3+ years in mobile and web testing',
            achievements: [
                'Led mobile app testing for 8 major releases',
                'Implemented cross-browser testing strategy',
                'Reduced user-reported bugs by 45%'
            ]
        },
        'qa-engineer-3': {
            name: 'David Kim',
            role: 'QA Engineer',
            avatar: '👨‍💻',
            details: 'Versatile QA engineer with experience in both backend and frontend testing. Strong background in API testing and database validation.',
            skills: ['API Testing', 'Database Testing', 'Security Testing', 'Backend Testing'],
            experience: '3+ years in full-stack testing',
            achievements: [
                'Automated 150+ API test cases',
                'Identified 50+ security vulnerabilities',
                'Built robust data validation framework'
            ]
        },
        'qa-engineer-4': {
            name: 'Jennifer Brown',
            role: 'QA Engineer',
            avatar: '👩‍💻',
            details: 'Enthusiastic QA engineer specializing in performance testing and load testing. Committed to ensuring applications perform optimally under various conditions.',
            skills: ['Performance Testing', 'Load Testing', 'Stress Testing', 'JMeter'],
            experience: '2+ years in performance testing',
            achievements: [
                'Optimized application performance by 50%',
                'Created comprehensive load testing scenarios',
                'Identified critical bottlenecks under heavy load'
            ]
        }
    };
    
    teamCards.forEach(card => {
        card.addEventListener('click', () => {
            const role = card.getAttribute('data-role');
            const data = teamData[role];
            
            if (data) {
                // Fill modal with data
                modalAvatar.textContent = data.avatar;
                modalName.textContent = data.name;
                modalRole.textContent = data.role;
                modalText.textContent = data.details;
                modalExperience.textContent = data.experience;
                
                // Clear previous skills and achievements
                modalSkills.innerHTML = '';
                modalAchievements.innerHTML = '';
                
                // Add skills
                data.skills.forEach(skill => {
                    const skillTag = document.createElement('div');
                    skillTag.className = 'skill-tag';
                    skillTag.textContent = skill;
                    modalSkills.appendChild(skillTag);
                });
                
                // Add achievements
                data.achievements.forEach(achievement => {
                    const li = document.createElement('li');
                    li.textContent = achievement;
                    modalAchievements.appendChild(li);
                });
                
                // Show modal
                modalOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Close modal
    modalClose.addEventListener('click', () => {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Close modal when clicking outside
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Close modal with ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
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
            
            // Get target section from href
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                // Add click effect
                link.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    link.style.transform = '';
                }, 150);
                
                // Scroll to section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Show notification
                const linkText = link.textContent.trim();
                showNotification(`Navigating to ${linkText}`);
            }
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
    const cards = document.querySelectorAll('.info-card, .stat-card, .glitch-card');
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
            
            // Add loading effect
            btn.style.opacity = '0.7';
            btn.style.pointerEvents = 'none';
            
            setTimeout(() => {
                btn.style.opacity = '1';
                btn.style.pointerEvents = '';
            }, 1000);
            
            // Show notification
            showNotification(`Loading ${btnText}...`);
            
            // Simulate loading (in a real app, this would navigate to the project)
            setTimeout(() => {
                showNotification(`${btnText} is currently under development 🚧`);
            }, 1500);
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
            menuBtn.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                menuBtn.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.5)';
                menuBtn.style.transform = '';
            }, 1000);
            
            showNotification('Opening architecture menu...');
            
            // In a real app, this would open a modal with architecture diagram
            setTimeout(() => {
                showNotification('Architecture visualization is coming soon!');
            }, 2000);
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
        // ESC key - remove any notifications or close modal
        if (e.key === 'Escape') {
            const notification = document.querySelector('.notification');
            if (notification) {
                notification.remove();
            }
            
            const modal = document.querySelector('.modal-overlay.active');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
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
