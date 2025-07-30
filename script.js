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

// Interactive Dot Shape Class - Improved Version
class InteractiveDotShape {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.dots = [];
        this.mouseX = 0;
        this.mouseY = 0;
        this.animationId = null;
        this.currentShape = 'brain'; // 'brain', 'cube', 'wave', 'spiral'
        this.isTransitioning = false;
        this.mouseInfluence = 120; // Increased mouse influence radius
        this.time = 0;
        this.isMouseInside = false;
    }

    init() {
        this.canvas = document.getElementById('dotShape');
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.setupCanvas();
        this.createDots();
        this.bindEvents();
        this.animate();
        
        console.log('✅ Interactive Dot Shape initialized');
    }

    setupCanvas() {
        const dpr = window.devicePixelRatio || 1;
        
        // Increase canvas size for better visibility
        const width = 600;
        const height = 500;
        
        this.canvas.width = width * dpr;
        this.canvas.height = height * dpr;
        
        this.ctx.scale(dpr, dpr);
        this.canvas.style.width = width + 'px';
        this.canvas.style.height = height + 'px';
    }

    createDots() {
        this.dots = [];
        const centerX = 300; // Center of enlarged canvas
        const centerY = 250;
        
        // Create more dots for more interesting effect
        for (let i = 0; i < 120; i++) {
            const angle = (i / 120) * Math.PI * 2;
            const radius = 80 + Math.sin(angle * 4) * 30 + Math.cos(angle * 6) * 15;
            
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius * 0.9;
            
            this.dots.push({
                originalX: x,
                originalY: y,
                x: x,
                y: y,
                targetX: x,
                targetY: y,
                size: Math.random() * 4 + 2,
                opacity: Math.random() * 0.6 + 0.4,
                speed: Math.random() * 0.08 + 0.02,
                phase: Math.random() * Math.PI * 2,
                originalRadius: radius,
                originalAngle: angle
            });
        }

        // Add internal dots for volume effect
        for (let i = 0; i < 60; i++) {
            const angle = Math.random() * Math.PI * 2;
            const radius = Math.random() * 60;
            
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius * 0.9;
            
            this.dots.push({
                originalX: x,
                originalY: y,
                x: x,
                y: y,
                targetX: x,
                targetY: y,
                size: Math.random() * 3 + 1,
                opacity: Math.random() * 0.4 + 0.2,
                speed: Math.random() * 0.06 + 0.01,
                phase: Math.random() * Math.PI * 2,
                originalRadius: radius,
                originalAngle: angle
            });
        }

        // Add orbital dots
        for (let i = 0; i < 40; i++) {
            const angle = (i / 40) * Math.PI * 2;
            const radius = 120 + Math.sin(angle * 2) * 20;
            
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius * 0.7;
            
            this.dots.push({
                originalX: x,
                originalY: y,
                x: x,
                y: y,
                targetX: x,
                targetY: y,
                size: Math.random() * 2 + 1,
                opacity: Math.random() * 0.3 + 0.1,
                speed: Math.random() * 0.04 + 0.01,
                phase: Math.random() * Math.PI * 2,
                originalRadius: radius,
                originalAngle: angle,
                isOrbital: true
            });
        }
    }

    bindEvents() {
        const heroSection = document.querySelector('.hero');
        if (!heroSection) return;

        // Mouse movement - main interactivity
        heroSection.addEventListener('mousemove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            this.mouseX = e.clientX - rect.left;
            this.mouseY = e.clientY - rect.top;
            this.isMouseInside = true;
            
            // Immediately react to mouse movement
            this.morphShape();
        });

        heroSection.addEventListener('mouseenter', () => {
            this.isMouseInside = true;
        });

        heroSection.addEventListener('mouseleave', () => {
            this.isMouseInside = false;
            this.resetShape();
        });

        // Click to change shape
        heroSection.addEventListener('click', (e) => {
            if (e.target.closest('.hero-left') || e.target.closest('.modern-btn')) return;
            this.switchShape();
        });

        // Add touch support for mobile devices
        heroSection.addEventListener('touchmove', (e) => {
            e.preventDefault();
            const rect = this.canvas.getBoundingClientRect();
            const touch = e.touches[0];
            this.mouseX = touch.clientX - rect.left;
            this.mouseY = touch.clientY - rect.top;
            this.isMouseInside = true;
            this.morphShape();
        });

        heroSection.addEventListener('touchend', () => {
            this.isMouseInside = false;
            this.resetShape();
        });
    }

    morphShape() {
        const centerX = 300;
        const centerY = 250;
        
        this.dots.forEach((dot, index) => {
            const dx = this.mouseX - dot.originalX;
            const dy = this.mouseY - dot.originalY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < this.mouseInfluence) {
                const force = (this.mouseInfluence - distance) / this.mouseInfluence;
                const angle = Math.atan2(dy, dx);
                
                // More pronounced mouse reaction
                const pushDistance = force * 60;
                const pullDistance = force * 30;
                
                if (this.currentShape === 'brain') {
                    // Brain transforms into neural network
                    dot.targetX = dot.originalX + Math.cos(angle) * pushDistance;
                    dot.targetY = dot.originalY + Math.sin(angle) * pushDistance;
                    
                    // Add rotational effect
                    const rotationForce = force * 0.5;
                    const perpAngle = angle + Math.PI / 2;
                    dot.targetX += Math.cos(perpAngle) * rotationForce * 20;
                    dot.targetY += Math.sin(perpAngle) * rotationForce * 20;
                    
                } else if (this.currentShape === 'cube') {
                    // Cube transforms into pyramid
                    const pyramidY = dot.originalY - force * 50;
                    dot.targetX = dot.originalX + (centerX - dot.originalX) * force * 0.4;
                    dot.targetY = pyramidY;
                    
                } else if (this.currentShape === 'wave') {
                    // Wave reacts to mouse
                    dot.targetX = dot.originalX + Math.cos(angle) * pushDistance;
                    dot.targetY = dot.originalY + Math.sin(angle + Math.PI/4) * pushDistance;
                    
                } else if (this.currentShape === 'spiral') {
                    // Spiral curls more strongly
                    const spiralAngle = angle + force * Math.PI;
                    dot.targetX = dot.originalX + Math.cos(spiralAngle) * pushDistance;
                    dot.targetY = dot.originalY + Math.sin(spiralAngle) * pushDistance;
                }
                
                // Change size and opacity of dots under cursor
                dot.size = (dot.size || 2) + force * 3;
                dot.opacity = Math.min(1, (dot.opacity || 0.5) + force * 0.5);
                
            } else {
                dot.targetX = dot.originalX;
                dot.targetY = dot.originalY;
                // Restore original size
                dot.size = Math.max(1, (dot.size || 2) - 0.1);
            }
        });
    }

    switchShape() {
        if (this.isTransitioning) return;
        
        this.isTransitioning = true;
        const shapes = ['brain', 'cube', 'wave', 'spiral'];
        const currentIndex = shapes.indexOf(this.currentShape);
        this.currentShape = shapes[(currentIndex + 1) % shapes.length];
        
        const centerX = 300;
        const centerY = 250;
        
        this.dots.forEach((dot, index) => {
            switch (this.currentShape) {
                case 'cube':
                    this.transformToCube(dot, index, centerX, centerY);
                    break;
                case 'wave':
                    this.transformToWave(dot, index, centerX, centerY);
                    break;
                case 'spiral':
                    this.transformToSpiral(dot, index, centerX, centerY);
                    break;
                default: // brain
                    this.transformToBrain(dot, index, centerX, centerY);
                    break;
            }
        });
        
        setTimeout(() => {
            this.isTransitioning = false;
            this.dots.forEach(dot => {
                dot.originalX = dot.targetX;
                dot.originalY = dot.targetY;
            });
        }, 1500);
    }

    transformToCube(dot, index, centerX, centerY) {
        const layer = Math.floor(index / 30);
        const posInLayer = index % 30;
        const size = 120;
        
        if (layer < 3) {
            const x = centerX - size/2 + (posInLayer % 6) * (size/5);
            const y = centerY - size/2 + Math.floor(posInLayer / 6) * (size/5);
            const z = layer * 30;
            
            dot.targetX = x + z * 0.6;
            dot.targetY = y - z * 0.4;
        } else {
            const progress = posInLayer / 29;
            dot.targetX = centerX + Math.cos(progress * Math.PI * 2) * size * 0.7;
            dot.targetY = centerY + Math.sin(progress * Math.PI * 2) * size * 0.5;
        }
    }

    transformToWave(dot, index, centerX, centerY) {
        const progress = index / this.dots.length;
        const waveX = centerX - 150 + progress * 300;
        const waveY = centerY + Math.sin(progress * Math.PI * 4) * 60 + Math.cos(progress * Math.PI * 6) * 20;
        
        dot.targetX = waveX;
        dot.targetY = waveY;
    }

    transformToSpiral(dot, index, centerX, centerY) {
        const progress = index / this.dots.length;
        const angle = progress * Math.PI * 8;
        const radius = progress * 100 + 20;
        
        dot.targetX = centerX + Math.cos(angle) * radius;
        dot.targetY = centerY + Math.sin(angle) * radius * 0.8;
    }

    transformToBrain(dot, index, centerX, centerY) {
        const angle = (index / this.dots.length) * Math.PI * 2;
        const radius = 80 + Math.sin(angle * 4) * 30 + Math.cos(angle * 6) * 15;
        
        dot.targetX = centerX + Math.cos(angle) * radius;
        dot.targetY = centerY + Math.sin(angle) * radius * 0.9;
    }

    resetShape() {
        this.dots.forEach(dot => {
            dot.targetX = dot.originalX;
            dot.targetY = dot.originalY;
        });
    }

    animate() {
        this.time += 0.016;
        
        // Очищаем canvas с градиентным фоном
        const gradient = this.ctx.createRadialGradient(300, 250, 0, 300, 250, 300);
        gradient.addColorStop(0, 'rgba(15, 23, 42, 0.02)');
        gradient.addColorStop(1, 'rgba(15, 23, 42, 0)');
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Update dot positions
        this.dots.forEach((dot, index) => {
            // Smooth movement to target
            dot.x += (dot.targetX - dot.x) * dot.speed;
            dot.y += (dot.targetY - dot.y) * dot.speed;
            
            // Add organic movement
            const floatAmplitude = dot.isOrbital ? 1 : 2;
            dot.x += Math.sin(this.time * 0.5 + dot.phase) * floatAmplitude;
            dot.y += Math.cos(this.time * 0.3 + dot.phase * 1.5) * floatAmplitude;
            
            // Size pulsation
            const sizePulse = Math.sin(this.time + dot.phase) * 0.5;
            dot.currentSize = (dot.size || 2) + sizePulse;
        });
        
        // Draw connections with improved logic
        this.drawConnections();
        
        // Draw dots with enhanced effects
        this.drawDots();
        
        this.animationId = requestAnimationFrame(() => this.animate());
    }

    drawConnections() {
        for (let i = 0; i < this.dots.length; i++) {
            for (let j = i + 1; j < this.dots.length; j++) {
                const dx = this.dots[i].x - this.dots[j].x;
                const dy = this.dots[i].y - this.dots[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                const maxDistance = 80;
                if (distance < maxDistance) {
                    const opacity = (maxDistance - distance) / maxDistance * 0.4;
                    
                    // Dynamic connection colors
                    const hue = (this.time * 10 + distance) % 360;
                    this.ctx.strokeStyle = `hsla(${hue}, 60%, 70%, ${opacity})`;
                    this.ctx.lineWidth = opacity * 2;
                    
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.dots[i].x, this.dots[i].y);
                    this.ctx.lineTo(this.dots[j].x, this.dots[j].y);
                    this.ctx.stroke();
                }
            }
        }
    }

    drawDots() {
        this.dots.forEach((dot, index) => {
            // Create radial gradient for each dot
            const gradient = this.ctx.createRadialGradient(
                dot.x, dot.y, 0,
                dot.x, dot.y, dot.currentSize * 2
            );
            
            // Dynamic dot colors
            const hue = (this.time * 5 + index * 10) % 360;
            const saturation = this.isMouseInside ? 80 : 60;
            const lightness = 60 + Math.sin(this.time + index) * 20;
            
            gradient.addColorStop(0, `hsla(${hue}, ${saturation}%, ${lightness}%, ${dot.opacity})`);
            gradient.addColorStop(0.7, `hsla(${hue}, ${saturation}%, ${lightness - 20}%, ${dot.opacity * 0.6})`);
            gradient.addColorStop(1, `hsla(${hue}, ${saturation}%, ${lightness - 40}%, 0)`);
            
            this.ctx.fillStyle = gradient;
            this.ctx.beginPath();
            this.ctx.arc(dot.x, dot.y, dot.currentSize, 0, Math.PI * 2);
            this.ctx.fill();
            
            // Add glow for large dots
            if (dot.currentSize > 3) {
                this.ctx.shadowColor = `hsla(${hue}, ${saturation}%, ${lightness}%, 0.5)`;
                this.ctx.shadowBlur = dot.currentSize * 2;
                this.ctx.beginPath();
                this.ctx.arc(dot.x, dot.y, dot.currentSize * 0.5, 0, Math.PI * 2);
                this.ctx.fill();
                this.ctx.shadowBlur = 0;
            }
        });
    }

    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Starting application initialization...');
    
    // Initialize TeamManager
    const teamManager = new TeamManager();
    teamManager.init();
    
    // Initialize Interactive Dot Shape
    const dotShape = new InteractiveDotShape();
    dotShape.init();
    
    console.log('✅ Application initialized successfully');
});
