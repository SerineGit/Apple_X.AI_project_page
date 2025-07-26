// Particle System
class ParticleSystem {
    constructor() {
        this.container = document.getElementById('particles-container');
        this.particles = [];
        this.particleCount = 50;
        this.init();
    }

    init() {
        for (let i = 0; i < this.particleCount; i++) {
            this.createParticle();
        }
        this.animate();
    }

    createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 4 + 1;
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const opacity = Math.random() * 0.6 + 0.2;
        const animationDuration = Math.random() * 4 + 4;
        const color = Math.random() > 0.5 ? '#00ffff' : '#ff00ff';
        
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.opacity = opacity;
        particle.style.background = color;
        particle.style.animationDuration = animationDuration + 's';
        particle.style.boxShadow = `0 0 ${size * 2}px ${color}`;
        
        this.container.appendChild(particle);
        this.particles.push({
            element: particle,
            x: x,
            y: y,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5
        });
    }

    animate() {
        this.particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            if (particle.x < 0 || particle.x > window.innerWidth) {
                particle.vx *= -1;
            }
            if (particle.y < 0 || particle.y > window.innerHeight) {
                particle.vy *= -1;
            }
            
            particle.element.style.left = particle.x + 'px';
            particle.element.style.top = particle.y + 'px';
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Glitch Text Effect
class GlitchText {
    constructor(element) {
        this.element = element;
        this.text = element.textContent;
        this.glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
        this.isGlitching = false;
    }

    glitch() {
        if (this.isGlitching) return;
        this.isGlitching = true;
        
        const duration = 300;
        const interval = 50;
        let elapsed = 0;
        
        const glitchInterval = setInterval(() => {
            let glitchedText = '';
            for (let i = 0; i < this.text.length; i++) {
                if (Math.random() < 0.1) {
                    glitchedText += this.glitchChars[Math.floor(Math.random() * this.glitchChars.length)];
                } else {
                    glitchedText += this.text[i];
                }
            }
            this.element.textContent = glitchedText;
            
            elapsed += interval;
            if (elapsed >= duration) {
                clearInterval(glitchInterval);
                this.element.textContent = this.text;
                this.isGlitching = false;
            }
        }, interval);
    }
}

// Team Modal System
class TeamModal {
    constructor() {
        this.modal = document.getElementById('team-modal');
        this.closeBtn = document.querySelector('.modal-close');
        this.modalName = document.querySelector('.modal-name');
        this.modalRole = document.querySelector('.modal-role');
        this.modalDetails = document.querySelector('.modal-details');
        this.modalPhoto = document.querySelector('.modal-photo-placeholder');
        
        this.teamData = {
            'project-manager': {
                name: 'Alex Johnson',
                role: 'Project Manager',
                photo: '👨‍💼',
                details: 'Experienced project manager with over 8 years in software development and quality assurance. Leads cross-functional teams and ensures project delivery within scope, time, and budget. Expert in Agile methodologies, risk management, and stakeholder communication. Holds PMP certification and has successfully managed 50+ projects across various industries.'
            },
            'qa-lead': {
                name: 'Sarah Chen',
                role: 'QA Lead',
                photo: '👩‍💻',
                details: 'Senior QA Lead with 6+ years of experience in test automation and quality engineering. Specializes in building robust testing frameworks using Python, Selenium, and modern CI/CD practices. Expert in API testing, performance testing, and security validation. Mentors junior QA engineers and drives testing best practices across the organization.'
            },
            'qa-engineer': {
                name: 'QA Engineer',
                role: 'QA Engineer',
                photo: '👨‍💻',
                details: 'Dedicated QA Engineer focused on ensuring high-quality software delivery through comprehensive testing strategies. Experienced in manual and automated testing, bug tracking, and test case design. Proficient in various testing tools and methodologies including functional, regression, and integration testing. Committed to continuous learning and improving testing processes.'
            }
        };
        
        this.init();
    }

    init() {
        // Add click listeners to team cards
        document.querySelectorAll('.team-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const role = card.dataset.role;
                this.showModal(role, card);
            });
        });

        // Close modal listeners
        this.closeBtn.addEventListener('click', () => this.hideModal());
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) this.hideModal();
        });

        // ESC key to close modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.hideModal();
        });
    }

    showModal(role, cardElement) {
        const data = this.teamData[role];
        if (!data) return;

        // Get specific name from card if it's a QA Engineer
        let displayName = data.name;
        if (role === 'qa-engineer') {
            displayName = cardElement.querySelector('.team-name').textContent;
        }

        this.modalName.textContent = displayName;
        this.modalRole.textContent = data.role;
        this.modalDetails.innerHTML = `<p>${data.details}</p>`;
        this.modalPhoto.textContent = data.photo;

        this.modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Add entrance animation
        setTimeout(() => {
            this.modal.querySelector('.modal-content').style.transform = 'scale(1)';
        }, 10);
    }

    hideModal() {
        this.modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Cyber Button Effects
class CyberButtons {
    constructor() {
        this.init();
    }

    init() {
        // Add hover effects to cyber buttons
        document.querySelectorAll('.cyber-project-btn, .cyber-btn').forEach(btn => {
            btn.addEventListener('mouseenter', (e) => {
                this.createRipple(e);
            });
        });
    }

    createRipple(e) {
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: radial-gradient(circle, rgba(0,255,255,0.6) 0%, transparent 70%);
            border-radius: 50%;
            transform: scale(0);
            animation: rippleEffect 0.6s ease-out;
            pointer-events: none;
            z-index: 1;
        `;

        button.style.position = 'relative';
        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
}

// Scroll Animations
class ScrollAnimations {
    constructor() {
        this.observer = new IntersectionObserver(
            (entries) => this.handleIntersection(entries),
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );
        this.init();
    }

    init() {
        // Observe elements for scroll animations
        document.querySelectorAll('.content-card, .feature-section, .stat-card, .team-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            this.observer.observe(el);
        });
    }

    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                this.observer.unobserve(entry.target);
            }
        });
    }
}

// Matrix Rain Effect (Optional Enhancement)
class MatrixRain {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            opacity: 0.1;
        `;
        document.body.appendChild(this.canvas);
        
        this.resizeCanvas();
        this.init();
        
        window.addEventListener('resize', () => this.resizeCanvas());
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    init() {
        const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        const charArray = chars.split('');
        const fontSize = 14;
        const columns = this.canvas.width / fontSize;
        const drops = Array(Math.floor(columns)).fill(1);

        const draw = () => {
            this.ctx.fillStyle = 'rgba(10, 10, 10, 0.04)';
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

            this.ctx.fillStyle = '#00ffff';
            this.ctx.font = fontSize + 'px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = charArray[Math.floor(Math.random() * charArray.length)];
                this.ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > this.canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        setInterval(draw, 35);
    }
}

// Audio System (Optional)
class AudioSystem {
    constructor() {
        this.sounds = {
            hover: this.createHoverSound(),
            click: this.createClickSound()
        };
        this.init();
    }

    createHoverSound() {
        // Create synthetic hover sound
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        return () => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.1);
            
            gainNode.gain.setValueAtTime(0, audioContext.currentTime);
            gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.01);
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
        };
    }

    createClickSound() {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        return () => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(200, audioContext.currentTime + 0.2);
            
            gainNode.gain.setValueAtTime(0, audioContext.currentTime);
            gainNode.gain.linearRampToValueAtTime(0.2, audioContext.currentTime + 0.01);
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.2);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.2);
        };
    }

    init() {
        // Add hover sounds to interactive elements
        document.querySelectorAll('.nav-link, .team-card, .cyber-project-btn, .cyber-btn').forEach(el => {
            el.addEventListener('mouseenter', () => {
                if (this.sounds.hover) this.sounds.hover();
            });
        });

        // Add click sounds
        document.querySelectorAll('.team-card, .cyber-project-btn, .cyber-btn').forEach(el => {
            el.addEventListener('click', () => {
                if (this.sounds.click) this.sounds.click();
            });
        });
    }
}

// CSS Animation Keyframes
const additionalStyles = `
    @keyframes rippleEffect {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }

    @keyframes dataFlow {
        0% { transform: translateX(-100%) scaleX(0); }
        50% { transform: translateX(0%) scaleX(1); }
        100% { transform: translateX(100%) scaleX(0); }
    }

    .data-stream {
        position: absolute;
        height: 2px;
        background: linear-gradient(90deg, transparent, #00ffff, transparent);
        animation: dataFlow 2s linear infinite;
    }
`;

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add additional styles
    const styleSheet = document.createElement('style');
    styleSheet.textContent = additionalStyles;
    document.head.appendChild(styleSheet);

    // Initialize systems
    new ParticleSystem();
    new TeamModal();
    new CyberButtons();
    new ScrollAnimations();
    
    // Optional enhancements (uncomment to enable)
    // new MatrixRain();
    // new AudioSystem(); // Note: requires user interaction to start

    // Add glitch effect to title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const glitch = new GlitchText(heroTitle);
        setInterval(() => {
            if (Math.random() < 0.1) glitch.glitch();
        }, 2000);
    }

    // Add data streams to cards
    document.querySelectorAll('.content-card').forEach(card => {
        const stream = document.createElement('div');
        stream.className = 'data-stream';
        stream.style.top = Math.random() * 100 + '%';
        stream.style.animationDelay = Math.random() * 2 + 's';
        card.appendChild(stream);
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add typing effect to project overview
    const typeWriter = (element, text, speed = 50) => {
        let i = 0;
        element.textContent = '';
        const timer = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);
    };

    // Observe project overview for typing effect
    const overviewCard = document.querySelector('.overview-card .card-text');
    if (overviewCard) {
        const originalText = overviewCard.textContent;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => typeWriter(overviewCard, originalText, 30), 500);
                    observer.unobserve(entry.target);
                }
            });
        });
        observer.observe(overviewCard);
    }

    console.log('🚀 Cyberpunk Portfolio System Initialized');
});
