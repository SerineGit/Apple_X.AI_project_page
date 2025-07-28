// Modern Team Card Interactions with Modal
function initTeamInteractions() {
    const teamCards = document.querySelectorAll('.team-card');
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
    
    // Enhanced team member data
    const teamData = {
        'project-manager': {
            name: 'Alex Johnson',
            role: 'Project Manager',
            avatar: '👨‍💼',
            details: 'Experienced project manager with 8+ years in QA leadership and agile methodologies. Specializes in coordinating cross-functional teams and delivering high-quality software products on time and within budget.',
            skills: ['Project Management', 'Agile/Scrum', 'Team Leadership', 'Strategic Planning', 'Risk Management', 'Stakeholder Communication'],
            experience: '8+ years in project management and QA leadership across various industries',
            achievements: [
                'Successfully led 15+ major product launches with zero critical post-release bugs',
                'Improved team productivity by 40% through process optimization and tool implementation',
                'Implemented Agile methodologies across 5 departments, reducing delivery time by 30%',
                'Managed budgets exceeding $2M while maintaining 95% on-time delivery rate'
            ]
        },
        'qa-lead': {
            name: 'Sarah Chen',
            role: 'QA Lead',
            avatar: '👩‍💻',
            details: 'Senior QA professional with deep expertise in test automation frameworks, API testing, and performance optimization. Passionate about building robust testing strategies that ensure exceptional software quality.',
            skills: ['Test Automation', 'API Testing', 'Performance Testing', 'Team Leadership', 'CI/CD', 'Quality Strategy'],
            experience: '6+ years in quality assurance with focus on automation and team leadership',
            achievements: [
                'Reduced overall testing time by 60% through comprehensive automation framework',
                'Built end-to-end CI/CD testing pipeline handling 500+ daily deployments',
                'Mentored 10+ junior QA engineers, with 8 receiving promotions',
                'Designed testing architecture that caught 95% of bugs before production'
            ]
        },
        'qa-engineer-1': {
            name: 'Mike Rodriguez',
            role: 'Senior QA Engineer',
            avatar: '👨‍💻',
            details: 'Dedicated senior QA engineer with expertise in comprehensive testing strategies. Specializes in functional, regression, and integration testing with a keen eye for detail and user experience.',
            skills: ['Manual Testing', 'Automation Testing', 'Bug Analysis', 'Test Planning', 'User Experience Testing', 'Documentation'],
            experience: '4+ years in software quality assurance with focus on comprehensive testing',
            achievements: [
                'Discovered and documented 200+ critical bugs preventing major production issues',
                'Improved test coverage by 35% through systematic test case design',
                'Created comprehensive testing documentation adopted company-wide',
                'Reduced customer-reported bugs by 45% through thorough pre-release testing'
            ]
        },
        'qa-engineer-2': {
            name: 'Lisa Wang',
            role: 'QA Engineer',
            avatar: '👩‍💻',
            details: 'Detail-oriented QA engineer with strong expertise in mobile and web application testing. Passionate about delivering exceptional user experiences through comprehensive quality assurance.',
            skills: ['Mobile Testing', 'Web Testing', 'Cross-browser Testing', 'Usability Testing', 'Responsive Design Testing', 'Accessibility Testing'],
            experience: '3+ years specializing in mobile and web application testing',
            achievements: [
                'Led mobile app testing for 8 major releases across iOS and Android platforms',
                'Implemented comprehensive cross-browser testing strategy covering 15+ browsers',
                'Reduced user-reported mobile bugs by 45% through device-specific testing',
                'Established accessibility testing standards ensuring WCAG 2.1 compliance'
            ]
        },
        'qa-engineer-3': {
            name: 'David Kim',
            role: 'QA Engineer',
            avatar: '👨‍💻',
            details: 'Versatile QA engineer with comprehensive experience in both backend and frontend testing. Strong background in API testing, database validation, and security testing.',
            skills: ['API Testing', 'Database Testing', 'Security Testing', 'Backend Testing', 'Integration Testing', 'Performance Analysis'],
            experience: '3+ years in full-stack quality assurance and testing',
            achievements: [
                'Automated 150+ API test cases reducing manual testing effort by 70%',
                'Identified and helped resolve 50+ security vulnerabilities before production',
                'Built robust data validation framework used across multiple projects',
                'Improved API response time by 30% through performance testing insights'
            ]
        },
        'qa-engineer-4': {
            name: 'Jennifer Brown',
            role: 'QA Engineer',
            avatar: '👩‍💻',
            details: 'Enthusiastic QA engineer specializing in performance testing and load testing. Committed to ensuring applications perform optimally under various conditions and user loads.',
            skills: ['Performance Testing', 'Load Testing', 'Stress Testing', 'JMeter', 'Performance Monitoring', 'Capacity Planning'],
            experience: '2+ years focused on performance testing and optimization',
            achievements: [
                'Optimized application performance by 50% through comprehensive load testing',
                'Created performance testing scenarios for applications handling 100K+ concurrent users',
                'Identified critical bottlenecks preventing system failures under peak load',
                'Established performance benchmarks and monitoring alerts for production systems'
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
                
                // Show modal with animation
                modalOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
                
                // Add entrance animation
                setTimeout(() => {
                    modalAvatar.style.animation = 'gentle-pulse 2s ease-in-out infinite';
                }, 300);
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

// Enhanced notification system
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Add type-specific styling
    if (type === 'success') {
        notification.style.background = 'rgba(34, 197, 94, 0.9)';
    } else if (type === 'error') {
        notification.style.background = 'rgba(239, 68, 68, 0.9)';
    } else if (type === 'warning') {
        notification.style.background = 'rgba(245, 158, 11, 0.9)';
    }
    
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
            
            // Get target section from href or simulate navigation
            const linkText = link.textContent.trim();
            
            // Add click effect
            link.style.transform = 'scale(0.95)';
            setTimeout(() => {
                link.style.transform = '';
            }, 150);
            
            // Show notification based on link
            showNotification(`Navigating to ${linkText}`, 'info');
            
            // Simulate different pages
            setTimeout(() => {
                if (linkText === 'HOME') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else if (linkText === 'GALLERY') {
                    showNotification('Gallery coming soon! 🎨', 'warning');
                } else if (linkText === 'ABOUT US') {
                    const teamSection = document.querySelector('.team');
                    if (teamSection) {
                        teamSection.scrollIntoView({ behavior: 'smooth' });
                    }
                } else if (linkText === 'FAQ') {
                    showNotification('FAQ section is under development 📝', 'warning');
                } else if (linkText === 'JOIN US') {
                    showNotification('Ready to join our team? Contact us! 🚀', 'success');
                }
            }, 500);
        });
    });
}

// Add Modern Glitch Effect to Buttons
function initModernEffects() {
    const modernBtns = document.querySelectorAll('.modern-btn');
    
    modernBtns.forEach(btn => {
        // Add random subtle animation on page load
        setTimeout(() => {
            btn.style.animation = 'subtle-glitch 0.2s ease-out';
            setTimeout(() => {
                btn.style.animation = '';
            }, 200);
        }, Math.random() * 3000);
        
        // Enhanced hover effects
        btn.addEventListener('mouseenter', () => {
            const btnText = btn.querySelector('.btn-text');
            if (btnText) {
                btnText.style.animation = 'subtle-glitch 0.3s ease-out';
                setTimeout(() => {
                    btnText.style.animation = '';
                }, 300);
            }
        });
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
                
                // Add stagger effect for cards in the same container
                const siblings = Array.from(entry.target.parentElement.children);
                const index = siblings.indexOf(entry.target);
                entry.target.style.transitionDelay = `${index * 0.1}s`;
            }
        });
    }, observerOptions);
    
    // Observe content cards and team cards
    const cards = document.querySelectorAll('.glass-card, .stat-card, .team-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(card);
    });
}

// Project Button Interactions
function initProjectButtons() {
    const projectBtns = document.querySelectorAll('.project-card');
    
    projectBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            const btnText = btn.querySelector('.btn-text').textContent;
            
            // Add loading effect
            btn.style.opacity = '0.7';
            btn.style.pointerEvents = 'none';
            btn.style.transform = 'scale(0.98)';
            
            // Show loading notification
            showNotification(`Loading ${btnText}...`, 'info');
            
            setTimeout(() => {
                btn.style.opacity = '1';
                btn.style.pointerEvents = '';
                btn.style.transform = '';
            }, 1500);
            
            // Simulate project loading
            setTimeout(() => {
                showNotification(`${btnText} is currently under development 🚧`, 'warning');
            }, 2000);
        });
    });
}

// Enhanced Menu Button Effect
function initMenuButton() {
    const menuBtn = document.querySelector('.menu-btn');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Add special effect
            menuBtn.style.transform = 'scale(0.95)';
            menuBtn.style.boxShadow = '0 0 30px rgba(120, 119, 198, 0.4), 0 0 60px rgba(120, 200, 255, 0.2)';
            
            setTimeout(() => {
                menuBtn.style.transform = '';
                menuBtn.style.boxShadow = '';
            }, 1000);
            
            showNotification('Opening architecture menu...', 'info');
            
            // Simulate architecture menu
            setTimeout(() => {
                showNotification('Interactive architecture visualization coming soon! 🏗️', 'success');
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
            span.style.transition = 'opacity 1s cubic-bezier(0.4, 0, 0.2, 1), transform 1s cubic-bezier(0.4, 0, 0.2, 1)';
            span.style.opacity = '1';
            span.style.transform = 'translateY(0)';
        }, index * 300 + 500); // Delay start by 500ms
    });
}

// Enhanced avatar interactions
function initAvatarEffects() {
    const avatars = document.querySelectorAll('.team-avatar');
    
    avatars.forEach(avatar => {
        avatar.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent card click
            
            // Add special click effect
            const avatarImage = avatar.querySelector('.avatar-image');
            avatarImage.style.transform = 'scale(1.2) rotate(360deg)';
            avatarImage.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            
            setTimeout(() => {
                avatarImage.style.transform = 'scale(1)';
                avatarImage.style.transition = 'all 0.3s ease';
            }, 800);
            
            showNotification('Team member avatar clicked! 🤖', 'info');
        });
        
        // Add hover effect
        avatar.addEventListener('mouseenter', () => {
            const avatarGlow = avatar.querySelector('.avatar-glow');
            if (avatarGlow) {
                avatarGlow.style.opacity = '0.8';
            }
        });
        
        avatar.addEventListener('mouseleave', () => {
            const avatarGlow = avatar.querySelector('.avatar-glow');
            if (avatarGlow) {
                avatarGlow.style.opacity = '0';
            }
        });
    });
}

// Android character interactions
function initAndroidInteractions() {
    const androidCharacter = document.querySelector('.android-character');
    const androidMain = document.querySelector('.android-main');
    
    if (androidCharacter) {
        let clickCount = 0;
        
        androidCharacter.addEventListener('click', () => {
            clickCount++;
            
            // Different effects based on click count
            if (clickCount === 1) {
                showNotification('Hello! I\'m your AI assistant 🤖', 'info');
            } else if (clickCount === 3) {
                showNotification('Keep clicking for a surprise! ✨', 'warning');
            } else if (clickCount === 5) {
                showNotification('🎉 Easter egg activated! Welcome to the future!', 'success');
                
                // Add rainbow effect
                document.body.style.filter = 'hue-rotate(0deg)';
                let hue = 0;
                const rainbow = setInterval(() => {
                    hue += 10;
                    document.body.style.filter = `hue-rotate(${hue}deg)`;
                    if (hue >= 360) {
                        clearInterval(rainbow);
                        document.body.style.filter = '';
                        clickCount = 0;
                    }
                }, 50);
            } else {
                showNotification(`Click ${clickCount}/5 🎯`, 'info');
            }
        });
    }
    
    if (androidMain) {
        // Add parallax effect on mouse move
        document.addEventListener('mousemove', (e) => {
            const rect = androidMain.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const deltaX = (e.clientX - centerX) / window.innerWidth;
            const deltaY = (e.clientY - centerY) / window.innerHeight;
            
            androidMain.style.transform = `translate(${deltaX * 20}px, ${deltaY * 20}px) rotate(${deltaX * 5}deg)`;
        });
    }
}

// Card hover effects
function initCardEffects() {
    const glassCards = document.querySelectorAll('.glass-card');
    
    glassCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Add subtle particle effect
            createCardParticles(card);
        });
    });
}

function createCardParticles(card) {
    const particles = [];
    const particleCount = 5;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(120, 119, 198, 0.6);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
        `;
        
        const rect = card.getBoundingClientRect();
        particle.style.left = (rect.left + Math.random() * rect.width) + 'px';
        particle.style.top = (rect.top + Math.random() * rect.height) + 'px';
        
        document.body.appendChild(particle);
        particles.push(particle);
        
        // Animate particle
        const animation = particle.animate([
            { transform: 'translateY(0px)', opacity: 1 },
            { transform: 'translateY(-30px)', opacity: 0 }
        ], {
            duration: 1000,
            easing: 'ease-out'
        });
        
        animation.addEventListener('finish', () => {
            particle.remove();
        });
    }
}

// Performance optimization
function optimizeForDevice() {
    const isMobile = window.innerWidth <= 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (isMobile || prefersReducedMotion) {
        // Disable heavy animations on mobile or for users who prefer reduced motion
        const style = document.createElement('style');
        style.textContent = `
            .android-main { animation: none !important; }
            .effect-ring { animation: none !important; }
            .floating-icon { animation: none !important; }
            .android-glow { animation: none !important; }
        `;
        document.head.appendChild(style);
    }
}

// Keyboard navigation support
function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // ESC key - close modals and notifications
        if (e.key === 'Escape') {
            const notification = document.querySelector('.notification');
            if (notification) {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => notification.remove(), 300);
            }
            
            const modal = document.querySelector('.modal-overlay.active');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
        
        // Space or Enter on focused buttons
        if ((e.key === ' ' || e.key === 'Enter') && e.target.classList.contains('modern-btn')) {
            e.preventDefault();
            e.target.click();
        }
        
        // Arrow keys for card navigation
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            const focusableCards = document.querySelectorAll('.team-card, .glass-card');
            const currentIndex = Array.from(focusableCards).indexOf(document.activeElement);
            
            if (currentIndex !== -1) {
                e.preventDefault();
                const nextIndex = e.key === 'ArrowRight' 
                    ? (currentIndex + 1) % focusableCards.length
                    : (currentIndex - 1 + focusableCards.length) % focusableCards.length;
                
                focusableCards[nextIndex].focus();
            }
        }
    });
    
    // Make cards focusable
    const cards = document.querySelectorAll('.team-card, .glass-card');
    cards.forEach(card => {
        card.setAttribute('tabindex', '0');
        card.style.outline = 'none';
        
        card.addEventListener('focus', () => {
            card.style.transform = 'translateY(-8px)';
            card.style.boxShadow = '0 20px 40px rgba(120, 119, 198, 0.2)';
        });
        
        card.addEventListener('blur', () => {
            card.style.transform = '';
            card.style.boxShadow = '';
        });
    });
}

// Add loading screen effect
function initLoadingScreen() {
    const loadingScreen = document.createElement('div');
    loadingScreen.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #0f1419;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        transition: opacity 0.5s ease;
    `;
    
    loadingScreen.innerHTML = `
        <div style="text-align: center;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">🤖</div>
            <div style="color: #7877c6; font-size: 1.2rem; font-weight: 600;">Loading Apple & X.AI Project...</div>
        </div>
    `;
    
    document.body.appendChild(loadingScreen);
    
    // Hide loading screen after 1 second
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.remove();
        }, 500);
    }, 1000);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add a loading delay for better UX
    setTimeout(() => {
        initTeamInteractions();
        initSmoothScrolling();
        initModernEffects();
        initScrollAnimations();
        initProjectButtons();
        initMenuButton();
        initTypingEffect();
        initAvatarEffects();
        initAndroidInteractions();
        initCardEffects();
        initKeyboardNavigation();
        optimizeForDevice();
        
        console.log('🚀 Modern Apple & X.AI Project initialized successfully!');
        showNotification('Welcome to Apple & X.AI Project! ✨', 'success');
    }, 500);
});

// Handle window resize
window.addEventListener('resize', () => {
    optimizeForDevice();
});

// Handle scroll for header effect
let lastScrollY = window.scrollY;
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const currentScrollY = window.scrollY;
    
    if (header) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        // Add blur effect based on scroll
        const blurAmount = Math.min(currentScrollY / 10, 20);
        header.style.backdropFilter = `blur(${20 + blurAmount}px)`;
    }
    
    lastScrollY = currentScrollY;
});

// Initialize loading screen immediately
initLoadingScreen();
