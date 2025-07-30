// Team Manager 
class TeamManager {
    constructor() {
        this.modal = null;
        this.isInitialized = false;
        this.teamData = {
            'project-manager': {
                name: 'Sergey Efremov',
                role: 'Project Manager',
                photo: 'https://raw.githubusercontent.com/SerineGit/project-page/refs/heads/main/team/Sergey%20Efremov.jpg',
                details: 'Software QA Engineer. 14+ years experience in QA with Automation and Manual Testing for Web, Client/Server, Cloud Based, Desktop and Mobile Applications. Front and Back-end REST API Testing, CI/CD, code coverage analysis, relational databases End-to-End data tests. AI in QA.',
                skills: ['Project Management', 'Agile/Scrum', 'Team Leadership', 'Strategic Planning', 'Risk Management', 'Stakeholder Communication'],
                experience: '14+ years in project management and QA leadership across various industries',
                achievements: [
                    'Successfully led 14+ major product launches with zero critical post-release bugs',
                    'Improved team productivity by 40% through process optimization and tool implementation',
                    'Implemented Agile methodologies across 5 departments, reducing delivery time by 30%'
                ]
            },
            'qa-lead': {
                name: 'Tatsiana Lentz',
                role: 'QA Lead',
                photo: 'https://raw.githubusercontent.com/SerineGit/project-page/refs/heads/main/team/Tatsiana%20Lentz.jpg',
                details: 'Senior QA professional with deep expertise in test automation frameworks, API testing, and performance optimization. Passionate about building robust testing strategies that ensure exceptional software quality.',
                skills: ['Test Automation', 'API Testing', 'Performance Testing', 'Team Leadership', 'CI/CD', 'Quality Strategy'],
                experience: '4+ years in quality assurance with focus on automation and team leadership',
                achievements: [
                    'Reduced overall testing time by 60% through comprehensive automation framework',
                    'Mentored 10+ junior QA engineers, with 8 received promotions',
                    'Designed testing architecture that caught 95% of bugs before production'
                ]
            },
            'qa-engineer-1': {
                name: 'Anton Buyanovski',
                role: 'QA Engineer',
                photo: 'https://raw.githubusercontent.com/SerineGit/project-page/refs/heads/main/team/Anton%20Buyanovski.jpg',
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
                name: 'Assiya Beribassova',
                role: 'QA Engineer',
                photo: 'https://raw.githubusercontent.com/SerineGit/project-page/refs/heads/main/team/Assiya%20Beribassova.jpg',
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
                name: 'Daria Bataeva',
                role: 'QA Engineer',
                photo: 'https://raw.githubusercontent.com/SerineGit/project-page/refs/heads/main/team/Daria%20Bataeva.jpg',
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
                name: 'Lina Gorelik',
                role: 'QA Engineer',
                photo: 'https://raw.githubusercontent.com/SerineGit/project-page/refs/heads/main/team/Lina%20Gorelik.png',
                details: 'Enthusiastic QA engineer specializing in performance testing and load testing. Committed to ensuring applications perform optimally under various conditions and user loads.',
                skills: ['Performance Testing', 'Load Testing', 'Stress Testing', 'JMeter', 'Performance Monitoring', 'Capacity Planning'],
                experience: '2+ years focused on performance testing and optimization',
                achievements: [
                    'Optimized application performance by 50% through comprehensive load testing',
                    'Created performance testing scenarios for applications handling 100K+ concurrent users',
                    'Identified critical bottlenecks preventing system failures under peak load',
                    'Established performance benchmarks and monitoring alerts for production systems'
                ]
            },
            'qa-engineer-5': {
                name: 'Milana Binaminova',
                role: 'QA Engineer',
                photo: 'https://raw.githubusercontent.com/SerineGit/project-page/refs/heads/main/team/Milana%20Binaminova.png',
                details: 'Experienced QA engineer with expertise in test case design and execution. Specializes in exploratory testing and user acceptance testing with focus on delivering quality software.',
                skills: ['Exploratory Testing', 'Test Case Design', 'User Acceptance Testing', 'Regression Testing', 'Bug Reporting', 'Quality Metrics'],
                experience: '2+ years in quality assurance with focus on manual testing',
                achievements: [
                    'Designed comprehensive test suites for 10+ major product releases',
                    'Reduced critical bug escape rate by 35% through thorough testing processes',
                    'Established quality metrics dashboard for real-time project tracking',
                    'Mentored 3 junior testers on best practices and methodologies'
                ]
            },
            'qa-engineer-6': {
                name: 'Sergeiy Borovich',
                role: 'QA Engineer',
                photo: 'https://raw.githubusercontent.com/SerineGit/project-page/refs/heads/main/team/SERGEIY%20BOROVICH.jpeg',
                details: 'Detail-focused QA engineer with strong analytical skills and expertise in software testing lifecycle. Passionate about ensuring software reliability and user satisfaction.',
                skills: ['Software Testing', 'Test Documentation', 'Defect Management', 'Functional Testing', 'System Testing', 'Quality Assurance'],
                experience: '2+ years in software quality assurance and testing',
                achievements: [
                    'Executed 500+ test cases with 98% accuracy rate',
                    'Improved defect detection efficiency by 25% through systematic testing approach',
                    'Created detailed test reports leading to faster bug resolution',
                    'Contributed to quality improvement initiatives across multiple projects'
                ]
            },
            'qa-engineer-7': {
                name: 'Serine Zargaryan',
                role: 'QA Engineer',
                photo: 'https://raw.githubusercontent.com/SerineGit/project-page/refs/heads/main/team/Serine%20Zargaryan.jpg',
                details: 'Dedicated QA engineer with expertise in automation testing and continuous integration. Focused on implementing efficient testing processes and maintaining high software quality standards.',
                skills: ['Test Automation', 'CI/CD Integration', 'Selenium', 'Test Framework Development', 'Code Quality', 'Agile Testing'],
                experience: '2+ years in test automation and quality engineering',
                achievements: [
                    'Developed automated test framework reducing regression testing time by 50%',
                    'Integrated automated tests into CI/CD pipeline for 5 major projects',
                    'Improved test coverage from 60% to 85% through strategic automation',
                    'Trained team members on automation tools and best practices'
                ]
            },
            'qa-engineer-8': {
                name: 'Viktor Pervushkin',
                role: 'QA Engineer',
                photo: 'https://raw.githubusercontent.com/SerineGit/project-page/refs/heads/main/team/Viktor%20Pervushkin.jpg',
                details: 'Methodical QA engineer specializing in system integration testing and cross-platform compatibility. Committed to delivering robust and reliable software solutions.',
                skills: ['Integration Testing', 'Cross-platform Testing', 'System Testing', 'Compatibility Testing', 'Test Planning', 'Risk Assessment'],
                experience: '2+ years in system testing and integration validation',
                achievements: [
                    'Successfully tested integration points for 12+ complex systems',
                    'Identified and resolved critical compatibility issues across 8 platforms',
                    'Reduced integration-related production issues by 60%',
                    'Developed comprehensive test strategies for multi-system environments'
                ]
            }
        };
    }

    init() {
        if (this.isInitialized) return;

        try {
            this.createModal();
            this.bindEvents();
            this.isInitialized = true;
            console.log('✅ TeamManager initialized');
        } catch (error) {
            console.error('❌ TeamManager init error:', error);
        }
    }

    createModal() {
        if (document.querySelector('#team-modal')) return;

        const modal = document.createElement('div');
        modal.id = 'team-modal';
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content">
                <button class="modal-close">&times;</button>
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
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        this.modal = modal;
    }

    bindEvents() {
        // Team card clicks
        document.querySelectorAll('.team-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.closest('.team-link')) {
                    e.preventDefault();
                    const role = card.getAttribute('data-role');
                    this.showModal(role);
                }
            });

            // Keyboard support
            card.setAttribute('tabindex', '0');
            card.addEventListener('keydown', (e) => {
                if ((e.key === 'Enter' || e.key === ' ') && !e.target.closest('.team-link')) {
                    e.preventDefault();
                    const role = card.getAttribute('data-role');
                    this.showModal(role);
                }
            });
        });

        document.querySelectorAll('.team-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        });

        // Modal close events
        if (this.modal) {
            const closeBtn = this.modal.querySelector('.modal-close');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => this.hideModal());
            }

            this.modal.addEventListener('click', (e) => {
                if (e.target === this.modal) {
                    this.hideModal();
                }
            });
        }

        // Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal?.classList.contains('active')) {
                this.hideModal();
            }
        });
    }

    showModal(role) {
        if (!this.modal || !this.teamData[role]) return;

        const data = this.teamData[role];
        
        // Populate modal
        const modalAvatar = this.modal.querySelector('.modal-avatar');
        modalAvatar.innerHTML = `<img src="${data.photo}" alt="${data.name}" class="modal-avatar-img">`;    
        this.modal.querySelector('.modal-name').textContent = data.name;
        this.modal.querySelector('.modal-role').textContent = data.role;
        this.modal.querySelector('.modal-text').textContent = data.details;
        this.modal.querySelector('.modal-experience').textContent = data.experience;

        // Skills
        const skillsContainer = this.modal.querySelector('.modal-skills');
        skillsContainer.innerHTML = '';
        data.skills.forEach(skill => {
            const tag = document.createElement('span');
            tag.className = 'skill-tag';
            tag.textContent = skill;
            skillsContainer.appendChild(tag);
        });

        // Achievements
        const achievementsList = this.modal.querySelector('.modal-achievements');
        achievementsList.innerHTML = '';
        data.achievements.forEach(achievement => {
            const li = document.createElement('li');
            li.textContent = achievement;
            achievementsList.appendChild(li);
        });

        // Show modal
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Focus management
        setTimeout(() => {
            this.modal.querySelector('.modal-close')?.focus();
        }, 100);
    }

    hideModal() {
        if (!this.modal) return;
        
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    destroy() {
        if (this.modal?.parentNode) {
            this.modal.parentNode.removeChild(this.modal);
        }
        this.modal = null;
        this.isInitialized = false;
        document.body.style.overflow = '';
    }
}

// Calm Particle Swarm - Like bees, birds or fish following mouse
class CalmParticleSwarm {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.particles = [];
        this.mouseX = 300;
        this.mouseY = 250;
        this.animationId = null;
        this.time = 0;
        this.isMouseInside = false;
        this.targetX = 300;
        this.targetY = 250;
    }

    init() {
        this.canvas = document.getElementById('dotShape');
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.setupCanvas();
        this.createParticles();
        this.bindEvents();
        this.animate();
        
        console.log('✅ Calm Particle Swarm initialized');
    }

    setupCanvas() {
        const dpr = window.devicePixelRatio || 1;
        const width = 600;
        const height = 500;
        
        this.canvas.width = width * dpr;
        this.canvas.height = height * dpr;
        
        this.ctx.scale(dpr, dpr);
        this.canvas.style.width = width + 'px';
        this.canvas.style.height = height + 'px';
    }

    createParticles() {
        this.particles = [];
        const centerX = 300;
        const centerY = 250;
        
        // Create fewer particles for calmer effect
        for (let i = 0; i < 45; i++) {
            // Start particles in a loose formation
            const angle = (i / 45) * Math.PI * 2;
            const radius = 40 + Math.random() * 60;
            
            this.particles.push({
                x: centerX + Math.cos(angle) * radius,
                y: centerY + Math.sin(angle) * radius,
                vx: 0,
                vy: 0,
                size: 2 + Math.random() * 3,
                baseSize: 2 + Math.random() * 3,
                opacity: 0.4 + Math.random() * 0.4,
                baseOpacity: 0.4 + Math.random() * 0.4,
                hue: 200 + Math.random() * 160, // Blue to purple range
                phase: Math.random() * Math.PI * 2,
                followStrength: 0.02 + Math.random() * 0.03, // How strongly it follows mouse
                cohesionRadius: 80 + Math.random() * 40, // How close it wants to be to others
                separationRadius: 25 + Math.random() * 15, // Minimum distance from others
                wanderAngle: Math.random() * Math.PI * 2 // For natural wandering
            });
        }
    }

    bindEvents() {
        const heroSection = document.querySelector('.hero');
        if (!heroSection) return;

        heroSection.addEventListener('mousemove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            this.targetX = e.clientX - rect.left;
            this.targetY = e.clientY - rect.top;
            this.isMouseInside = true;
        });

        heroSection.addEventListener('mouseenter', () => {
            this.isMouseInside = true;
        });

        heroSection.addEventListener('mouseleave', () => {
            this.isMouseInside = false;
            // Return to center when mouse leaves
            this.targetX = 300;
            this.targetY = 250;
        });

        // Touch support
        heroSection.addEventListener('touchmove', (e) => {
            e.preventDefault();
            const rect = this.canvas.getBoundingClientRect();
            const touch = e.touches[0];
            this.targetX = touch.clientX - rect.left;
            this.targetY = touch.clientY - rect.top;
            this.isMouseInside = true;
        });

        heroSection.addEventListener('touchend', () => {
            this.isMouseInside = false;
            this.targetX = 300;
            this.targetY = 250;
        });
    }

    animate() {
        this.time += 0.016;
        
        // Smooth mouse following
        this.mouseX += (this.targetX - this.mouseX) * 0.05;
        this.mouseY += (this.targetY - this.mouseY) * 0.05;
        
        // Clear canvas with subtle gradient
        this.ctx.clearRect(0, 0, 600, 500);
        
        // Update particles with flocking behavior
        this.updateParticles();
        
        // Draw subtle connections between nearby particles
        this.drawConnections();
        
        // Draw particles
        this.drawParticles();
        
        this.animationId = requestAnimationFrame(() => this.animate());
    }

    updateParticles() {
        this.particles.forEach((particle, index) => {
            // 1. Seek mouse (attraction)
            const seekX = this.mouseX - particle.x;
            const seekY = this.mouseY - particle.y;
            const seekDistance = Math.sqrt(seekX * seekX + seekY * seekY);
            
            let attractionX = 0;
            let attractionY = 0;
            
            if (seekDistance > 0) {
                attractionX = (seekX / seekDistance) * particle.followStrength;
                attractionY = (seekY / seekDistance) * particle.followStrength;
            }
            
            // 2. Separation (avoid crowding)
            let separationX = 0;
            let separationY = 0;
            let separationCount = 0;
            
            this.particles.forEach((other, otherIndex) => {
                if (index !== otherIndex) {
                    const dx = particle.x - other.x;
                    const dy = particle.y - other.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < particle.separationRadius && distance > 0) {
                        separationX += dx / distance;
                        separationY += dy / distance;
                        separationCount++;
                    }
                }
            });
            
            if (separationCount > 0) {
                separationX = (separationX / separationCount) * 0.01;
                separationY = (separationY / separationCount) * 0.01;
            }
            
            // 3. Cohesion (move toward center of nearby particles)
            let cohesionX = 0;
            let cohesionY = 0;
            let cohesionCount = 0;
            
            this.particles.forEach((other, otherIndex) => {
                if (index !== otherIndex) {
                    const dx = other.x - particle.x;
                    const dy = other.y - particle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < particle.cohesionRadius) {
                        cohesionX += other.x;
                        cohesionY += other.y;
                        cohesionCount++;
                    }
                }
            });
            
            if (cohesionCount > 0) {
                cohesionX = (cohesionX / cohesionCount - particle.x) * 0.005;
                cohesionY = (cohesionY / cohesionCount - particle.y) * 0.005;
            }
            
            // 4. Wander (natural movement)
            particle.wanderAngle += (Math.random() - 0.5) * 0.3;
            const wanderX = Math.cos(particle.wanderAngle) * 0.3;
            const wanderY = Math.sin(particle.wanderAngle) * 0.3;
            
            // Apply forces
            particle.vx += attractionX + separationX + cohesionX + wanderX;
            particle.vy += attractionY + separationY + cohesionY + wanderY;
            
            // Limit velocity for smooth movement
            const maxSpeed = 2;
            const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
            if (speed > maxSpeed) {
                particle.vx = (particle.vx / speed) * maxSpeed;
                particle.vy = (particle.vy / speed) * maxSpeed;
            }
            
            // Apply velocity with damping
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.vx *= 0.95; // Damping
            particle.vy *= 0.95;
            
            // Keep particles within canvas bounds with soft edges
            const margin = 50;
            if (particle.x < margin) particle.vx += 0.1;
            if (particle.x > 600 - margin) particle.vx -= 0.1;
            if (particle.y < margin) particle.vy += 0.1;
            if (particle.y > 500 - margin) particle.vy -= 0.1;
            
            // Subtle size and opacity changes based on movement
            const velocity = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
            particle.size = particle.baseSize + velocity * 0.5;
            particle.opacity = particle.baseOpacity + velocity * 0.1;
            
            // Gentle floating animation
            particle.size += Math.sin(this.time * 2 + particle.phase) * 0.3;
            particle.opacity = Math.max(0.2, Math.min(0.9, particle.opacity + Math.cos(this.time + particle.phase) * 0.1));
        });
    }

    drawConnections() {
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                const maxConnectionDistance = 60;
                if (distance < maxConnectionDistance) {
                    const opacity = (maxConnectionDistance - distance) / maxConnectionDistance * 0.15;
                    
                    this.ctx.strokeStyle = `rgba(120, 200, 255, ${opacity})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                }
            }
        }
    }

    drawParticles() {
        this.particles.forEach(particle => {
            // Create subtle gradient for each particle
            const gradient = this.ctx.createRadialGradient(
                particle.x, particle.y, 0,
                particle.x, particle.y, particle.size * 2
            );
            
            gradient.addColorStop(0, `hsla(${particle.hue}, 60%, 70%, ${particle.opacity})`);
            gradient.addColorStop(0.7, `hsla(${particle.hue}, 50%, 60%, ${particle.opacity * 0.6})`);
            gradient.addColorStop(1, `hsla(${particle.hue}, 40%, 50%, 0)`);
            
            this.ctx.fillStyle = gradient;
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fill();
        });
    }

    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }
}

// Replace the InteractiveDotShape initialization
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Starting calm particle swarm...');
    
    // Initialize Calm Particle Swarm instead of InteractiveDotShape
    const particleSwarm = new CalmParticleSwarm();
    particleSwarm.init();
    
    console.log('✅ Calm particle swarm initialized');
});
