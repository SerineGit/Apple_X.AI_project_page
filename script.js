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

// Interactive Dot Shape Class
class InteractiveDotShape {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.dots = [];
        this.mouseX = 0;
        this.mouseY = 0;
        this.animationId = null;
        this.currentShape = 'brain'; // 'brain' or 'cube'
        this.isTransitioning = false;
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
        const rect = this.canvas.getBoundingClientRect();
        
        this.canvas.width = rect.width * dpr;
        this.canvas.height = rect.height * dpr;
        
        this.ctx.scale(dpr, dpr);
        this.canvas.style.width = rect.width + 'px';
        this.canvas.style.height = rect.height + 'px';
    }

    createDots() {
        this.dots = [];
        const centerX = 250;
        const centerY = 200;
        
        // Create brain-like shape
        for (let i = 0; i < 80; i++) {
            const angle = (i / 80) * Math.PI * 2;
            const radius = 60 + Math.sin(angle * 3) * 20 + Math.cos(angle * 5) * 10;
            
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius * 0.8;
            
            this.dots.push({
                originalX: x,
                originalY: y,
                x: x,
                y: y,
                targetX: x,
                targetY: y,
                size: Math.random() * 3 + 2,
                opacity: Math.random() * 0.5 + 0.5,
                speed: Math.random() * 0.02 + 0.01
            });
        }

        // Add some internal dots for brain complexity
        for (let i = 0; i < 30; i++) {
            const angle = Math.random() * Math.PI * 2;
            const radius = Math.random() * 40;
            
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius * 0.8;
            
            this.dots.push({
                originalX: x,
                originalY: y,
                x: x,
                y: y,
                targetX: x,
                targetY: y,
                size: Math.random() * 2 + 1,
                opacity: Math.random() * 0.3 + 0.3,
                speed: Math.random() * 0.03 + 0.01
            });
        }
    }

    bindEvents() {
        const heroSection = document.querySelector('.hero');
        if (!heroSection) return;

        heroSection.addEventListener('mousemove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            this.mouseX = e.clientX - rect.left;
            this.mouseY = e.clientY - rect.top;
            
            if (!this.isTransitioning) {
                this.morphShape();
            }
        });

        heroSection.addEventListener('mouseleave', () => {
            this.resetShape();
        });

        // Click to change shape
        heroSection.addEventListener('click', (e) => {
            if (e.target.closest('.hero-left') || e.target.closest('.modern-btn')) return;
            this.switchShape();
        });
    }

    morphShape() {
        const centerX = 250;
        const centerY = 200;
        const mouseInfluence = 50;
        
        this.dots.forEach((dot, index) => {
            const dx = this.mouseX - dot.originalX;
            const dy = this.mouseY - dot.originalY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < mouseInfluence) {
                const force = (mouseInfluence - distance) / mouseInfluence;
                const angle = Math.atan2(dy, dx);
                
                if (this.currentShape === 'brain') {
                    // Brain morphs into a more complex neural network
                    dot.targetX = dot.originalX + Math.cos(angle) * force * 30;
                    dot.targetY = dot.originalY + Math.sin(angle) * force * 30;
                } else {
                    // Cube morphs into pyramid
                    const pyramidY = dot.originalY - force * 40;
                    dot.targetX = dot.originalX + (centerX - dot.originalX) * force * 0.3;
                    dot.targetY = pyramidY;
                }
            } else {
                dot.targetX = dot.originalX;
                dot.targetY = dot.originalY;
            }
        });
    }

    switchShape() {
        if (this.isTransitioning) return;
        
        this.isTransitioning = true;
        this.currentShape = this.currentShape === 'brain' ? 'cube' : 'brain';
        
        const centerX = 250;
        const centerY = 200;
        
        this.dots.forEach((dot, index) => {
            if (this.currentShape === 'cube') {
                // Transform to cube
                const layer = Math.floor(index / 20);
                const posInLayer = index % 20;
                const size = 80;
                
                if (layer < 2) {
                    // Front and back faces
                    const x = centerX - size/2 + (posInLayer % 5) * (size/4);
                    const y = centerY - size/2 + Math.floor(posInLayer / 5) * (size/4);
                    const z = layer * 40;
                    
                    dot.targetX = x + z * 0.5;
                    dot.targetY = y - z * 0.3;
                } else {
                    // Connecting edges
                    const progress = (posInLayer / 19);
                    dot.targetX = centerX + Math.cos(progress * Math.PI * 2) * size * 0.6;
                    dot.targetY = centerY + Math.sin(progress * Math.PI * 2) * size * 0.4;
                }
            } else {
                // Transform back to brain
                const angle = (index / this.dots.length) * Math.PI * 2;
                const radius = 60 + Math.sin(angle * 3) * 20 + Math.cos(angle * 5) * 10;
                
                dot.targetX = centerX + Math.cos(angle) * radius;
                dot.targetY = centerY + Math.sin(angle) * radius * 0.8;
            }
        });
        
        setTimeout(() => {
            this.isTransitioning = false;
            this.dots.forEach(dot => {
                dot.originalX = dot.targetX;
                dot.originalY = dot.targetY;
            });
        }, 1000);
    }

    resetShape() {
        this.dots.forEach(dot => {
            dot.targetX = dot.originalX;
            dot.targetY = dot.originalY;
        });
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Update dot positions
        this.dots.forEach(dot => {
            dot.x += (dot.targetX - dot.x) * dot.speed;
            dot.y += (dot.targetY - dot.y) * dot.speed;
            
            // Subtle floating animation
            dot.y += Math.sin(Date.now() * 0.001 + dot.originalX * 0.01) * 0.5;
        });
        
        // Draw connections
        this.ctx.strokeStyle = `rgba(120, 119, 198, 0.15)`;
        this.ctx.lineWidth = 1;
        
        for (let i = 0; i < this.dots.length; i++) {
            for (let j = i + 1; j < this.dots.length; j++) {
                const dx = this.dots[i].x - this.dots[j].x;
                const dy = this.dots[i].y - this.dots[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 50) {
                    const opacity = (50 - distance) / 50 * 0.3;
                    this.ctx.strokeStyle = `rgba(120, 119, 198, ${opacity})`;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.dots[i].x, this.dots[i].y);
                    this.ctx.lineTo(this.dots[j].x, this.dots[j].y);
                    this.ctx.stroke();
                }
            }
        }
        
        // Draw dots
        this.dots.forEach(dot => {
            const gradient = this.ctx.createRadialGradient(
                dot.x, dot.y, 0,
                dot.x, dot.y, dot.size
            );
            gradient.addColorStop(0, `rgba(120, 200, 255, ${dot.opacity})`);
            gradient.addColorStop(0.5, `rgba(120, 119, 198, ${dot.opacity * 0.8})`);
            gradient.addColorStop(1, `rgba(120, 119, 198, 0)`);
            
            this.ctx.fillStyle = gradient;
            this.ctx.beginPath();
            this.ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
            this.ctx.fill();
        });
        
        this.animationId = requestAnimationFrame(() => this.animate());
    }

    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }
}

// Initialize when DOM is ready
function initApp() {
    try {
        const teamManager = new TeamManager();
        teamManager.init();
        
        // Initialize dot shape after a short delay to ensure canvas is ready
        setTimeout(() => {
            const dotShape = new InteractiveDotShape();
            dotShape.init();
            window.dotShape = dotShape;
        }, 100);
        
        // Store globally for cleanup
        window.teamManager = teamManager;
        
        console.log('🚀 App initialized successfully');
        
    } catch (error) {
        console.error('❌ App initialization error:', error);
    }
}

// Safe initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (window.teamManager) {
        window.teamManager.destroy();
    }
    if (window.dotShape) {
        window.dotShape.destroy();
    }
});
