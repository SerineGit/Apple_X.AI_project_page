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

// Enhanced Rotating 3D Shapes - Sci-Fi Edition
class Rotating3DShapes {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.mouseX = 300;
        this.mouseY = 250;
        this.targetRotationX = 0;
        this.targetRotationY = 0;
        this.rotationX = 0;
        this.rotationY = 0;
        this.animationId = null;
        this.time = 0;
        this.currentShape = 'apple'; // 'apple', 'brain', 'airplane', 'blackhole'
        this.isTransitioning = false;
        this.particles = [];
        this.shapes = {
            apple: this.getAppleVertices(),
            brain: this.getBrainVertices(),
            airplane: this.getAirplaneVertices(),
            blackhole: this.getBlackHoleVertices()
        };
    }

    init() {
        this.canvas = document.getElementById('dotShape');
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.setupCanvas();
        this.bindEvents();
        this.initParticles();
        this.animate();
        
        console.log('✅ Enhanced Sci-Fi 3D Shapes initialized');
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

    initParticles() {
        this.particles = [];
        for (let i = 0; i < 50; i++) {
            this.particles.push({
                x: Math.random() * 600,
                y: Math.random() * 500,
                z: Math.random() * 400 - 200,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                vz: (Math.random() - 0.5) * 0.5,
                life: Math.random(),
                maxLife: 1 + Math.random() * 2
            });
        }
    }

    getAppleVertices() {
        const vertices = [];
        const edges = [];
        const faces = [];
        
        // Apple body - more detailed sphere with bite
        const segments = 24;
        const rings = 16;
        const radius = 70;
        
        // Generate apple body vertices
        for (let ring = 0; ring <= rings; ring++) {
            const phi = (ring / rings) * Math.PI;
            const y = -Math.cos(phi) * radius;
            const ringRadius = Math.sin(phi) * radius;
            
            for (let seg = 0; seg <= segments; seg++) {
                const theta = (seg / segments) * Math.PI * 2;
                let x = Math.cos(theta) * ringRadius;
                let z = Math.sin(theta) * ringRadius;
                
                // Create bite effect on one side
                if (x > 20 && z > -30 && z < 30) {
                    const biteDepth = Math.pow((x - 20) / 50, 2) * 40;
                    const biteWidth = Math.pow(1 - Math.abs(z) / 30, 2);
                    x -= biteDepth * biteWidth;
                }
                
                // Apple shape modification (more oval)
                y *= 1.1;
                if (y > 0) y *= 0.8; // Narrow top
                
                vertices.push([x, y, z]);
            }
        }
        
        // Apple stem
        vertices.push([0, -radius * 1.2, 0]);
        vertices.push([-3, -radius * 1.4, 0]);
        vertices.push([3, -radius * 1.4, 0]);
        
        // Leaf vertices
        vertices.push([8, -radius * 1.3, -5]);
        vertices.push([15, -radius * 1.25, -8]);
        vertices.push([12, -radius * 1.35, -3]);
        
        // Generate edges for wireframe
        for (let ring = 0; ring < rings; ring++) {
            for (let seg = 0; seg < segments; seg++) {
                const current = ring * (segments + 1) + seg;
                const next = current + segments + 1;
                
                // Horizontal edges
                edges.push([current, current + 1]);
                // Vertical edges
                if (ring < rings) {
                    edges.push([current, next]);
                }
            }
        }
        
        // Stem and leaf edges
        const stemStart = vertices.length - 6;
        edges.push([stemStart, stemStart + 1]);
        edges.push([stemStart, stemStart + 2]);
        edges.push([stemStart + 3, stemStart + 4]);
        edges.push([stemStart + 4, stemStart + 5]);
        edges.push([stemStart + 5, stemStart + 3]);
        
        return { vertices, edges, faces, type: 'apple' };
    }

    getBrainVertices() {
        const vertices = [];
        const edges = [];
        const faces = [];
        
        // Brain hemispheres with wrinkles
        const segments = 20;
        const rings = 12;
        const radius = 80;
        
        // Left hemisphere
        for (let ring = 0; ring <= rings; ring++) {
            const phi = (ring / rings) * Math.PI;
            let y = -Math.cos(phi) * radius * 0.8;
            const ringRadius = Math.sin(phi) * radius;
            
            for (let seg = 0; seg <= segments / 2; seg++) {
                const theta = (seg / segments) * Math.PI * 2;
                let x = Math.cos(theta) * ringRadius - 15;
                let z = Math.sin(theta) * ringRadius;
                
                // Add brain wrinkles/folds
                const wrinkle1 = Math.sin(theta * 3) * Math.sin(phi * 4) * 8;
                const wrinkle2 = Math.sin(theta * 5) * Math.sin(phi * 2) * 5;
                const noise = Math.sin(x * 0.1) * Math.sin(y * 0.1) * Math.sin(z * 0.1) * 3;
                
                x += wrinkle1 + noise;
                y += wrinkle2;
                z += wrinkle1 * 0.5;
                
                vertices.push([x, y, z]);
            }
        }
        
        // Right hemisphere
        for (let ring = 0; ring <= rings; ring++) {
            const phi = (ring / rings) * Math.PI;
            let y = -Math.cos(phi) * radius * 0.8;
            const ringRadius = Math.sin(phi) * radius;
            
            for (let seg = segments / 2; seg <= segments; seg++) {
                const theta = (seg / segments) * Math.PI * 2;
                let x = Math.cos(theta) * ringRadius + 15;
                let z = Math.sin(theta) * ringRadius;
                
                // Add brain wrinkles/folds
                const wrinkle1 = Math.sin(theta * 3) * Math.sin(phi * 4) * 8;
                const wrinkle2 = Math.sin(theta * 5) * Math.sin(phi * 2) * 5;
                const noise = Math.sin(x * 0.1) * Math.sin(y * 0.1) * Math.sin(z * 0.1) * 3;
                
                x += wrinkle1 + noise;
                y += wrinkle2;
                z += wrinkle1 * 0.5;
                
                vertices.push([x, y, z]);
            }
        }
        
        // Brain stem
        for (let i = 0; i < 8; i++) {
            const t = i / 7;
            vertices.push([0, radius * 0.8 + t * 40, Math.sin(t * Math.PI) * 10]);
        }
        
        // Generate complex edge network
        const totalRingVertices = (segments / 2 + 1) + (segments / 2 + 1);
        for (let ring = 0; ring < rings; ring++) {
            for (let seg = 0; seg < totalRingVertices - 1; seg++) {
                const current = ring * totalRingVertices + seg;
                edges.push([current, current + 1]);
                if (ring < rings - 1) {
                    edges.push([current, current + totalRingVertices]);
                }
            }
        }
        
        // Brain hemisphere connection
        for (let i = 0; i < rings; i++) {
            const leftSide = i * totalRingVertices + segments / 2;
            const rightSide = i * totalRingVertices + segments / 2 + 1;
            edges.push([leftSide, rightSide]);
        }
        
        return { vertices, edges, faces, type: 'brain' };
    }

    getAirplaneVertices() {
        const vertices = [];
        const edges = [];
        const faces = [];
        
        // Fuselage (body)
        const fuselageLength = 160;
        const fuselagePoints = 20;
        
        for (let i = 0; i < fuselagePoints; i++) {
            const t = i / (fuselagePoints - 1);
            const x = (t - 0.5) * fuselageLength;
            
            // Fuselage profile (more realistic)
            let radius;
            if (t < 0.1) radius = t * 10 * 15; // Nose
            else if (t < 0.7) radius = 15 - (t - 0.1) * 5; // Body narrowing
            else radius = (1 - t) * 30; // Tail
            
            // Create circular cross-sections
            const segments = 8;
            for (let seg = 0; seg < segments; seg++) {
                const theta = (seg / segments) * Math.PI * 2;
                const y = Math.cos(theta) * radius;
                const z = Math.sin(theta) * radius;
                vertices.push([x, y, z]);
            }
        }
        
        // Wings (main)
        const wingSpan = 120;
        const wingChord = 40;
        const wingPoints = 12;
        
        // Left wing
        for (let i = 0; i < wingPoints; i++) {
            const t = i / (wingPoints - 1);
            const y = -wingSpan / 2 * (0.2 + t * 0.8);
            const x = Math.sin(t * Math.PI * 0.5) * wingChord - 20;
            const z = Math.sin(t * Math.PI) * 8; // Wing dihedral
            
            vertices.push([x, y, z]);
            vertices.push([x - wingChord * 0.8, y, z + 3]); // Wing trailing edge
        }
        
        // Right wing (mirror)
        for (let i = 0; i < wingPoints; i++) {
            const t = i / (wingPoints - 1);
            const y = wingSpan / 2 * (0.2 + t * 0.8);
            const x = Math.sin(t * Math.PI * 0.5) * wingChord - 20;
            const z = Math.sin(t * Math.PI) * 8;
            
            vertices.push([x, y, z]);
            vertices.push([x - wingChord * 0.8, y, z + 3]);
        }
        
        // Tail wings
        const tailY = [-30, 30];
        tailY.forEach(yPos => {
            vertices.push([60, yPos, 0]);
            vertices.push([80, yPos * 0.7, 5]);
            vertices.push([75, yPos * 0.5, 8]);
        });
        
        // Vertical tail
        for (let i = 0; i < 6; i++) {
            const z = i * 8;
            vertices.push([70, 0, z]);
            vertices.push([85, 0, z + 5]);
        }
        
        // Engines (simplified)
        vertices.push([-10, -40, -15]);
        vertices.push([10, -40, -15]);
        vertices.push([-10, 40, -15]);
        vertices.push([10, 40, -15]);
        
        // Generate edges for airplane structure
        const fuselageVertices = fuselagePoints * 8;
        
        // Fuselage edges
        for (let i = 0; i < fuselagePoints - 1; i++) {
            for (let seg = 0; seg < 8; seg++) {
                const current = i * 8 + seg;
                const next = current + 8;
                const nextSeg = (seg + 1) % 8;
                
                edges.push([current, current + nextSeg]); // Around
                edges.push([current, next]); // Along
            }
        }
        
        // Wing edges
        const wingStart = fuselageVertices;
        for (let wing = 0; wing < 2; wing++) {
            const offset = wingStart + wing * wingPoints * 2;
            for (let i = 0; i < wingPoints - 1; i++) {
                const current = offset + i * 2;
                edges.push([current, current + 2]); // Leading edge
                edges.push([current + 1, current + 3]); // Trailing edge
                edges.push([current, current + 1]); // Chord
            }
        }
        
        return { vertices, edges, faces, type: 'airplane' };
    }

    getBlackHoleVertices() {
        const vertices = [];
        const edges = [];
        const faces = [];
        
        // Event horizon (central sphere)
        const horizonRadius = 30;
        const horizonSegments = 16;
        const horizonRings = 8;
        
        for (let ring = 0; ring <= horizonRings; ring++) {
            const phi = (ring / horizonRings) * Math.PI;
            const y = -Math.cos(phi) * horizonRadius;
            const ringRadius = Math.sin(phi) * horizonRadius;
            
            for (let seg = 0; seg <= horizonSegments; seg++) {
                const theta = (seg / horizonSegments) * Math.PI * 2;
                const x = Math.cos(theta) * ringRadius;
                const z = Math.sin(theta) * ringRadius;
                vertices.push([x, y, z]);
            }
        }
        
        // Accretion disk (multiple rings)
        const diskRings = 8;
        const diskSegments = 32;
        
        for (let ring = 0; ring < diskRings; ring++) {
            const diskRadius = 50 + ring * 15;
            const diskHeight = Math.sin(ring * 0.5) * 8;
            
            for (let seg = 0; seg <= diskSegments; seg++) {
                const theta = (seg / diskSegments) * Math.PI * 2;
                const x = Math.cos(theta) * diskRadius;
                const z = Math.sin(theta) * diskRadius;
                
                // Add spiral distortion
                const spiral = ring * 0.3 + this.time * 0.5;
                const distortedTheta = theta + spiral;
                const distortedRadius = diskRadius + Math.sin(distortedTheta * 3) * 5;
                
                vertices.push([
                    Math.cos(distortedTheta) * distortedRadius,
                    diskHeight * Math.sin(theta * 4),
                    Math.sin(distortedTheta) * distortedRadius
                ]);
            }
        }
        
        // Gravitational lensing points (outer distortion)
        const lensingPoints = 24;
        for (let i = 0; i < lensingPoints; i++) {
            const theta = (i / lensingPoints) * Math.PI * 2;
            const phi = Math.sin(i * 0.7) * 0.5;
            const radius = 120 + Math.sin(i * 1.3) * 20;
            
            const x = Math.cos(theta) * Math.cos(phi) * radius;
            const y = Math.sin(phi) * radius;
            const z = Math.sin(theta) * Math.cos(phi) * radius;
            
            vertices.push([x, y, z]);
        }
        
        // Relativistic jets
        for (let jet = 0; jet < 2; jet++) {
            const direction = jet === 0 ? 1 : -1;
            for (let i = 0; i < 8; i++) {
                const t = i / 7;
                const jetRadius = (1 - t) * 8 + 2;
                const jetLength = direction * (50 + t * 100);
                
                for (let seg = 0; seg < 6; seg++) {
                    const theta = (seg / 6) * Math.PI * 2;
                    const x = Math.cos(theta) * jetRadius;
                    const z = Math.sin(theta) * jetRadius;
                    vertices.push([x, jetLength, z]);
                }
            }
        }
        
        // Generate edges for black hole structure
        // Event horizon edges
        const horizonVertices = (horizonSegments + 1) * (horizonRings + 1);
        for (let ring = 0; ring < horizonRings; ring++) {
            for (let seg = 0; seg < horizonSegments; seg++) {
                const current = ring * (horizonSegments + 1) + seg;
                const next = current + horizonSegments + 1;
                
                edges.push([current, current + 1]);
                edges.push([current, next]);
            }
        }
        
        // Accretion disk edges
        const diskStart = horizonVertices;
        for (let ring = 0; ring < diskRings; ring++) {
            const ringStart = diskStart + ring * (diskSegments + 1);
            for (let seg = 0; seg < diskSegments; seg++) {
                edges.push([ringStart + seg, ringStart + seg + 1]);
                if (ring < diskRings - 1) {
                    edges.push([ringStart + seg, ringStart + seg + diskSegments + 1]);
                }
            }
        }
        
        // Lensing effect edges
        const lensingStart = diskStart + diskRings * (diskSegments + 1);
        for (let i = 0; i < lensingPoints - 1; i++) {
            edges.push([lensingStart + i, lensingStart + i + 1]);
        }
        edges.push([lensingStart + lensingPoints - 1, lensingStart]); // Close the loop
        
        return { vertices, edges, faces, type: 'blackhole' };
    }

    bindEvents() {
        const heroSection = document.querySelector('.hero');
        if (!heroSection) return;

        heroSection.addEventListener('mousemove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            this.mouseX = e.clientX - rect.left;
            this.mouseY = e.clientY - rect.top;
            
            this.targetRotationY = ((this.mouseX - 300) / 300) * Math.PI * 0.6;
            this.targetRotationX = ((this.mouseY - 250) / 250) * Math.PI * 0.4;
        });

        heroSection.addEventListener('mouseleave', () => {
            this.targetRotationX = 0;
            this.targetRotationY = 0;
        });

        heroSection.addEventListener('click', (e) => {
            if (e.target.closest('.hero-left') || e.target.closest('.modern-btn')) return;
            this.switchShape();
        });

        heroSection.addEventListener('touchmove', (e) => {
            e.preventDefault();
            const rect = this.canvas.getBoundingClientRect();
            const touch = e.touches[0];
            this.mouseX = touch.clientX - rect.left;
            this.mouseY = touch.clientY - rect.top;
            
            this.targetRotationY = ((this.mouseX - 300) / 300) * Math.PI * 0.6;
            this.targetRotationX = ((this.mouseY - 250) / 250) * Math.PI * 0.4;
        });

        heroSection.addEventListener('touchend', () => {
            this.targetRotationX = 0;
            this.targetRotationY = 0;
        });
    }

    switchShape() {
        if (this.isTransitioning) return;
        
        this.isTransitioning = true;
        const shapeNames = ['apple', 'brain', 'airplane', 'blackhole'];
        const currentIndex = shapeNames.indexOf(this.currentShape);
        this.currentShape = shapeNames[(currentIndex + 1) % shapeNames.length];
        
        // Reset particles for new shape
        this.initParticles();
        
        setTimeout(() => {
            this.isTransitioning = false;
        }, 800);
    }

    rotatePoint(point, rotX, rotY, rotZ = 0) {
        let [x, y, z] = point;
        
        // Rotate around X axis
        let cosX = Math.cos(rotX);
        let sinX = Math.sin(rotX);
        let newY = y * cosX - z * sinX;
        let newZ = y * sinX + z * cosX;
        y = newY;
        z = newZ;
        
        // Rotate around Y axis
        let cosY = Math.cos(rotY);
        let sinY = Math.sin(rotY);
        let newX = x * cosY + z * sinY;
        newZ = -x * sinY + z * cosY;
        x = newX;
        z = newZ;
        
        // Rotate around Z axis
        let cosZ = Math.cos(rotZ);
        let sinZ = Math.sin(rotZ);
        newX = x * cosZ - y * sinZ;
        newY = x * sinZ + y * cosZ;
        
        return [newX, newY, newZ];
    }

    projectPoint(point) {
        const [x, y, z] = point;
        const distance = 400;
        const scale = distance / (distance + z);
        
        return [
            300 + x * scale,
            250 + y * scale
        ];
    }

    updateParticles() {
        this.particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.z += particle.vz;
            particle.life += 0.01;
            
            // Wrap around screen
            if (particle.x < 0) particle.x = 600;
            if (particle.x > 600) particle.x = 0;
            if (particle.y < 0) particle.y = 500;
            if (particle.y > 500) particle.y = 0;
            
            // Reset particle if life exceeded
            if (particle.life > particle.maxLife) {
                particle.x = Math.random() * 600;
                particle.y = Math.random() * 500;
                particle.z = Math.random() * 400 - 200;
                particle.life = 0;
            }
        });
    }

    drawParticles() {
        this.particles.forEach(particle => {
            const projected = this.projectPoint([particle.x - 300, particle.y - 250, particle.z]);
            const alpha = 1 - (particle.life / particle.maxLife);
            const size = 1 + alpha * 2;
            
            this.ctx.fillStyle = `rgba(120, 200, 255, ${alpha * 0.3})`;
            this.ctx.beginPath();
            this.ctx.arc(projected[0], projected[1], size, 0, Math.PI * 2);
            this.ctx.fill();
        });
    }

    animate() {
        this.time += 0.016;
        
        this.rotationX += (this.targetRotationX - this.rotationX) * 0.08;
        this.rotationY += (this.targetRotationY - this.rotationY) * 0.08;
        
        const idleRotation = this.time * 0.3;
        const finalRotX = this.rotationX + Math.sin(idleRotation) * 0.1;
        const finalRotY = this.rotationY + Math.cos(idleRotation * 0.7) * 0.1;
        
        // Clear canvas with sci-fi background
        this.ctx.fillStyle = 'rgba(15, 23, 42, 0.1)';
        this.ctx.fillRect(0, 0, 600, 500);
        
        // Update and draw particles
        this.updateParticles();
        this.drawParticles();
        
        // Draw current shape
        this.drawShape(this.shapes[this.currentShape], finalRotX, finalRotY);
        
        // Draw shape name with sci-fi styling
        this.drawShapeLabel();
        
        this.animationId = requestAnimationFrame(() => this.animate());
    }

    drawShape(shape, rotX, rotY) {
        const rotatedVertices = shape.vertices.map(vertex => 
            this.rotatePoint(vertex, rotX, rotY)
        );
        
        const projectedVertices = rotatedVertices.map(vertex => 
            this.projectPoint(vertex)
        );
        
        // Shape-specific rendering
        if (shape.type === 'blackhole') {
            this.drawBlackHoleEffects(projectedVertices, rotatedVertices);
        }
        
        this.drawEdges(shape.edges, projectedVertices, rotatedVertices, shape.type);
        this.drawVertices(projectedVertices, rotatedVertices, shape.type);
    }

    drawBlackHoleEffects(projectedVertices, rotatedVertices) {
        // Draw gravitational lensing effect
        const gradient = this.ctx.createRadialGradient(300, 250, 0, 300, 250, 150);
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0.8)');
        gradient.addColorStop(0.3, 'rgba(50, 0, 100, 0.4)');
        gradient.addColorStop(0.7, 'rgba(120, 50, 200, 0.2)');
        gradient.addColorStop(1, 'rgba(120, 200, 255, 0.1)');
        
        this.ctx.fillStyle = gradient;
        this.ctx.beginPath();
        this.ctx.arc(300, 250, 50, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Draw accretion disk glow
        for (let i = 0; i < 3; i++) {
            const glowGradient = this.ctx.createRadialGradient(300, 250, 50 + i * 30, 300, 250, 120 + i * 30);
            glowGradient.addColorStop(0, `rgba(255, 100, 0, ${0.3 - i * 0.1})`);
            glowGradient.addColorStop(1, 'rgba(255, 200, 0, 0)');
            
            this.ctx.fillStyle = glowGradient;
            this.ctx.beginPath();
            this.ctx.arc(300, 250, 120 + i * 30, 0, Math.PI * 2);
            this.ctx.fill();
        }
    }

    drawEdges(edges, projectedVertices, rotatedVertices, shapeType) {
        edges.forEach((edge, index) => {
            const [start, end] = edge;
            if (!projectedVertices[start] || !projectedVertices[end]) return;
            
            const startPoint = projectedVertices[start];
            const endPoint = projectedVertices[end];
            
            const avgZ = (rotatedVertices[start][2] + rotatedVertices[end][2]) / 2;
            const depth = (avgZ + 200) / 400;
            
            this.ctx.beginPath();
            this.ctx.moveTo(startPoint[0], startPoint[1]);
            this.ctx.lineTo(endPoint[0], endPoint[1]);
            
            // Shape-specific coloring
            let hue, opacity, lineWidth;
            switch (shapeType) {
                case 'apple':
                    hue = 120 + depth * 60; // Green to red
                    opacity = 0.6 + depth * 0.4;
                    lineWidth = 1.5 + depth;
                    break;
                case 'brain':
                    hue = 300 + depth * 60; // Purple/pink
                    opacity = 0.5 + depth * 0.5;
                    lineWidth = 1 + depth * 2;
                    break;
                case 'airplane':
                    hue = 200 + depth * 40; // Blue/cyan
                    opacity = 0.7 + depth * 0.3;
                    lineWidth = 2 + depth;
                    break;
                case 'blackhole':
                    hue = depth > 0.5 ? 60 : 280; // Orange/purple
                    opacity = 0.4 + depth * 0.6;
                    lineWidth = 1.5 + depth * 1.5;
                    break;
                default:
                    hue = 200 + depth * 100;
                    opacity = 0.4 + depth * 0.4;
                    lineWidth = 2 + depth;
            }
            
            this.ctx.strokeStyle = `hsla(${hue}, 70%, 70%, ${opacity})`;
            this.ctx.lineWidth = lineWidth;
            this.ctx.stroke();
            
            // Add glow effect for sci-fi look
            this.ctx.shadowColor = `hsla(${hue}, 80%, 60%, 0.5)`;
            this.ctx.shadowBlur = 3;
            this.ctx.stroke();
            this.ctx.shadowBlur = 0;
        });
    }

    drawVertices(projectedVertices, rotatedVertices, shapeType) {
        projectedVertices.forEach((vertex, index) => {
            if (!vertex) return;
            
            const [x, y] = vertex;
            const z = rotatedVertices[index][2];
            const depth = (z + 200) / 400;
            
            // Shape-specific vertex styling
            let size, hue, intensity;
            switch (shapeType) {
                case 'apple':
                    size = 2 + depth * 3;
                    hue = index < 50 ? 120 : 0; // Green stem/leaf, red apple
                    intensity = 0.8 + depth * 0.2;
                    break;
                case 'brain':
                    size = 1.5 + depth * 2.5;
                    hue = 300 + Math.sin(index * 0.1) * 30; // Pink/purple variations
                    intensity = 0.7 + depth * 0.3;
                    break;
                case 'airplane':
                    size = 2.5 + depth * 3.5;
                    hue = 200 + depth * 50; // Blue to cyan
                    intensity = 0.9 + depth * 0.1;
                    break;
                case 'blackhole':
                    size = depth > 0.6 ? 4 + depth * 4 : 1 + depth * 2;
                    hue = depth > 0.5 ? 45 : 270; // Orange for outer, purple for inner
                    intensity = depth > 0.3 ? 1 : 0.3 + depth;
                    break;
                default:
                    size = 3 + depth * 4;
                    hue = 220 + depth * 80;
                    intensity = 0.8 + depth * 0.2;
            }
            
            // Create advanced gradient for each vertex
            const gradient = this.ctx.createRadialGradient(x, y, 0, x, y, size * 2.5);
            gradient.addColorStop(0, `hsla(${hue}, 80%, 80%, ${intensity})`);
            gradient.addColorStop(0.5, `hsla(${hue}, 70%, 60%, ${intensity * 0.7})`);
            gradient.addColorStop(1, `hsla(${hue}, 60%, 40%, 0)`);
            
            this.ctx.fillStyle = gradient;
            this.ctx.beginPath();
            this.ctx.arc(x, y, size, 0, Math.PI * 2);
            this.ctx.fill();
            
            // Add pulsing effect for key vertices
            if (shapeType === 'blackhole' && depth < 0.3) {
                const pulse = Math.sin(this.time * 3 + index * 0.1) * 0.3 + 0.7;
                this.ctx.fillStyle = `hsla(270, 90%, 90%, ${pulse * 0.5})`;
                this.ctx.beginPath();
                this.ctx.arc(x, y, size * pulse, 0, Math.PI * 2);
                this.ctx.fill();
            }
            
            // Special effects for brain neurons
            if (shapeType === 'brain' && Math.random() > 0.95) {
                this.ctx.fillStyle = `hsla(${hue + 60}, 100%, 80%, 0.8)`;
                this.ctx.beginPath();
                this.ctx.arc(x, y, size * 1.5, 0, Math.PI * 2);
                this.ctx.fill();
            }
        });
    }

    drawShapeLabel() {
        const shapeNames = {
            apple: 'Apple Logo',
            brain: 'Neural Network',
            airplane: 'Stealth Fighter',
            blackhole: 'Event Horizon'
        };
        
        const shapeName = shapeNames[this.currentShape];
        
        // Main title with sci-fi glow
        this.ctx.font = 'bold 18px "Courier New", monospace';
        this.ctx.textAlign = 'center';
        
        // Glow effect
        this.ctx.shadowColor = 'rgba(120, 200, 255, 0.8)';
        this.ctx.shadowBlur = 10;
        this.ctx.fillStyle = 'rgba(120, 200, 255, 0.9)';
        this.ctx.fillText(`[${shapeName}]`, 300, 480);
        
        // Reset shadow
        this.ctx.shadowBlur = 0;
        
        // Subtitle
        this.ctx.font = '12px "Courier New", monospace';
        this.ctx.fillStyle = 'rgba(148, 163, 184, 0.7)';
        this.ctx.fillText('> CLICK TO MORPH < MOUSE TO ROTATE', 300, 35);
        
        // Scan line effect
        const scanY = (this.time * 100) % 500;
        this.ctx.strokeStyle = 'rgba(0, 255, 100, 0.3)';
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.moveTo(0, scanY);
        this.ctx.lineTo(600, scanY);
        this.ctx.stroke();
        
        // Corner brackets (sci-fi UI)
        this.ctx.strokeStyle = 'rgba(120, 200, 255, 0.5)';
        this.ctx.lineWidth = 2;
        const cornerSize = 20;
        
        // Top-left
        this.ctx.beginPath();
        this.ctx.moveTo(20, 20 + cornerSize);
        this.ctx.lineTo(20, 20);
        this.ctx.lineTo(20 + cornerSize, 20);
        this.ctx.stroke();
        
        // Top-right
        this.ctx.beginPath();
        this.ctx.moveTo(580 - cornerSize, 20);
        this.ctx.lineTo(580, 20);
        this.ctx.lineTo(580, 20 + cornerSize);
        this.ctx.stroke();
        
        // Bottom-left
        this.ctx.beginPath();
        this.ctx.moveTo(20, 480 - cornerSize);
        this.ctx.lineTo(20, 480);
        this.ctx.lineTo(20 + cornerSize, 480);
        this.ctx.stroke();
        
        // Bottom-right
        this.ctx.beginPath();
        this.ctx.moveTo(580 - cornerSize, 480);
        this.ctx.lineTo(580, 480);
        this.ctx.lineTo(580, 480 - cornerSize);
        this.ctx.stroke();
        
        // Data readout (sci-fi style)
        this.ctx.font = '10px "Courier New", monospace';
        this.ctx.fillStyle = 'rgba(0, 255, 100, 0.6)';
        this.ctx.textAlign = 'left';
        
        const vertices = this.shapes[this.currentShape].vertices.length;
        const edges = this.shapes[this.currentShape].edges.length;
        
        this.ctx.fillText(`VERTICES: ${vertices}`, 30, 460);
        this.ctx.fillText(`EDGES: ${edges}`, 30, 445);
        this.ctx.fillText(`ROTATION: [${this.rotationX.toFixed(2)}, ${this.rotationY.toFixed(2)}]`, 30, 430);
        
        // Time display
        this.ctx.textAlign = 'right';
        this.ctx.fillText(`TIME: ${this.time.toFixed(1)}s`, 570, 460);
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
    
    // Initialize Rotating 3D Shapes
    const rotating3D = new Rotating3DShapes();
    rotating3D.init();
    
    console.log('✅ Application initialized successfully');
});
