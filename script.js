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
                details: 'Experienced QA and AI automation engineer with 11+ years of experience in end-to-end software testing, automation frameworks and AI testing solutions. Expert in performance testing, security testing and cross-platform automation using Selenium WebDriver, Postman API and advanced testing tools.',
                skills: ['Selenium WebDriver','Postman API', 'Performance testing', 'Security testing', 'Python/JavaScript', 'SQL/MySQL', 'Cross-browser testing', 'AI testing tools'],
                experience: '11+ years in QA automation, performance testing and AI testing methodologies',
                achievements: [
                    'Development of end-to-end automation frameworks that prevent critical system failures
Software defect detection',
                    'Development of automated REST API testing with 100% coverage using Postman and Swagger',
                    'Implementation of security testing protocols using Mozilla Observatory for web applications
Development of cross-browser testing solutions using BrowserStack for various operating systems',
                    'Development of performance benchmarks using Lighthouse, GTMetrix and SpeedLab tools'
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
                details: 'Engineer with experience in software/hardware testing and a solid foundation in C++ development. Skilled in manual and automated testing, CI/CD integration, and collaborative cross-functional work. Currently developing a personal 2D adventure game in C++ using SFML.',
                skills: ['Test Automation', 'CI/CD Integration', 'Selenium', 'C++', 'Python', 'JavaScript', 'SQL', 'HTML5/CSS3'],
                experience: '3+ years in QA, automation, and C++ development & 5+ in UI/UX Design',
                achievements: [
                    'Developed automated test framework reducing regression testing time by 50%',
                    'Integrated automated tests into CI/CD pipeline for projects',
                    'Improved test coverage from 60% to 85% through strategic automation',
                    'Helped team members on automation tools and best practices'
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

// Rotating 3D Shapes - Following mouse movement
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
        this.currentShape = 'cube'; // 'cube', 'pyramid', 'octahedron', 'dodecahedron'
        this.isTransitioning = false;
        this.shapes = {
            cube: this.getCubeVertices(),
            pyramid: this.getPyramidVertices(),
            octahedron: this.getOctahedronVertices(),
            dodecahedron: this.getDodecahedronVertices()
        };
    }

    init() {
        this.canvas = document.getElementById('dotShape');
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.setupCanvas();
        this.bindEvents();
        this.animate();
        
        console.log('✅ Rotating 3D Shapes initialized');
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

    getCubeVertices() {
        const size = 80;
        return {
            vertices: [
                [-size, -size, -size], [size, -size, -size], [size, size, -size], [-size, size, -size],
                [-size, -size, size], [size, -size, size], [size, size, size], [-size, size, size]
            ],
            edges: [
                [0,1], [1,2], [2,3], [3,0], // Back face
                [4,5], [5,6], [6,7], [7,4], // Front face
                [0,4], [1,5], [2,6], [3,7]  // Connecting edges
            ],
            faces: [
                [0,1,2,3], [4,7,6,5], [0,4,5,1], [2,6,7,3], [0,3,7,4], [1,5,6,2]
            ]
        };
    }

    getPyramidVertices() {
        const size = 100;
        return {
            vertices: [
                [0, -size, 0],           // Top
                [-size, size, -size],    // Base corners
                [size, size, -size],
                [size, size, size],
                [-size, size, size]
            ],
            edges: [
                [0,1], [0,2], [0,3], [0,4], // Top to base
                [1,2], [2,3], [3,4], [4,1]  // Base edges
            ],
            faces: [
                [0,1,2], [0,2,3], [0,3,4], [0,4,1], [1,4,3,2]
            ]
        };
    }

    getOctahedronVertices() {
        const size = 90;
        return {
            vertices: [
                [0, -size, 0],    // Top
                [0, size, 0],     // Bottom
                [-size, 0, 0],    // Left
                [size, 0, 0],     // Right
                [0, 0, -size],    // Back
                [0, 0, size]      // Front
            ],
            edges: [
                [0,2], [0,3], [0,4], [0,5], // Top connections
                [1,2], [1,3], [1,4], [1,5], // Bottom connections
                [2,4], [4,3], [3,5], [5,2]  // Middle ring
            ],
            faces: [
                [0,2,4], [0,4,3], [0,3,5], [0,5,2],
                [1,4,2], [1,3,4], [1,5,3], [1,2,5]
            ]
        };
    }

    getDodecahedronVertices() {
        const phi = (1 + Math.sqrt(5)) / 2; // Golden ratio
        const size = 50;
        
        return {
            vertices: [
                // Cube vertices scaled
                [-size, -size, -size], [size, -size, -size], [size, size, -size], [-size, size, -size],
                [-size, -size, size], [size, -size, size], [size, size, size], [-size, size, size],
                // Rectangle in xy plane
                [0, -size*phi, -size/phi], [0, size*phi, -size/phi], [0, size*phi, size/phi], [0, -size*phi, size/phi],
                // Rectangle in xz plane  
                [-size/phi, 0, -size*phi], [size/phi, 0, -size*phi], [size/phi, 0, size*phi], [-size/phi, 0, size*phi],
                // Rectangle in yz plane
                [-size*phi, -size/phi, 0], [-size*phi, size/phi, 0], [size*phi, size/phi, 0], [size*phi, -size/phi, 0]
            ],
            edges: [
                [0,8], [8,1], [1,13], [13,2], [2,9], [9,3], [3,12], [12,0],
                [4,11], [11,5], [5,14], [14,6], [6,10], [10,7], [7,15], [15,4],
                [0,16], [1,19], [2,18], [3,17], [4,15], [5,19], [6,18], [7,17],
                [8,16], [9,18], [10,18], [11,16], [12,17], [13,19], [14,19], [15,17]
            ],
            faces: [] // Simplified for performance
        };
    }

    bindEvents() {
        const heroSection = document.querySelector('.hero');
        if (!heroSection) return;

        heroSection.addEventListener('mousemove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            this.mouseX = e.clientX - rect.left;
            this.mouseY = e.clientY - rect.top;
            
            // Convert mouse position to rotation angles
            // Map mouse movement to rotation range
            this.targetRotationY = ((this.mouseX - 300) / 300) * Math.PI * 0.6;
            this.targetRotationX = ((this.mouseY - 250) / 250) * Math.PI * 0.4;
        });

        heroSection.addEventListener('mouseleave', () => {
            // Return to neutral position when mouse leaves
            this.targetRotationX = 0;
            this.targetRotationY = 0;
        });

        // Click to change shape
        heroSection.addEventListener('click', (e) => {
            if (e.target.closest('.hero-left') || e.target.closest('.modern-btn')) return;
            this.switchShape();
        });

        // Touch support
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
        const shapeNames = ['cube', 'pyramid', 'octahedron', 'dodecahedron'];
        const currentIndex = shapeNames.indexOf(this.currentShape);
        this.currentShape = shapeNames[(currentIndex + 1) % shapeNames.length];
        
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
        const distance = 400; // Distance from camera
        const scale = distance / (distance + z);
        
        return [
            300 + x * scale, // Center X + projected X
            250 + y * scale  // Center Y + projected Y
        ];
    }

    animate() {
        this.time += 0.016;
        
        // Smooth rotation interpolation
        this.rotationX += (this.targetRotationX - this.rotationX) * 0.08;
        this.rotationY += (this.targetRotationY - this.rotationY) * 0.08;
        
        // Add subtle idle rotation when not moving mouse
        const idleRotation = this.time * 0.3;
        const finalRotX = this.rotationX + Math.sin(idleRotation) * 0.1;
        const finalRotY = this.rotationY + Math.cos(idleRotation * 0.7) * 0.1;
        
        // Clear canvas
        this.ctx.clearRect(0, 0, 600, 500);
        
        // Draw current shape
        this.drawShape(this.shapes[this.currentShape], finalRotX, finalRotY);
        
        // Draw shape name
        this.drawShapeLabel();
        
        this.animationId = requestAnimationFrame(() => this.animate());
    }

    drawShape(shape, rotX, rotY) {
        // Rotate all vertices
        const rotatedVertices = shape.vertices.map(vertex => 
            this.rotatePoint(vertex, rotX, rotY)
        );
        
        // Project to 2D
        const projectedVertices = rotatedVertices.map(vertex => 
            this.projectPoint(vertex)
        );
        
        // Draw faces if available (filled shapes)
        if (shape.faces && shape.faces.length > 0) {
            this.drawFaces(shape.faces, projectedVertices, rotatedVertices);
        }
        
        // Draw edges (wireframe)
        this.drawEdges(shape.edges, projectedVertices, rotatedVertices);
        
        // Draw vertices as dots
        this.drawVertices(projectedVertices, rotatedVertices);
    }

    drawFaces(faces, projectedVertices, rotatedVertices) {
        // Sort faces by average Z depth for proper rendering order
        const facesWithDepth = faces.map(face => {
            const avgZ = face.reduce((sum, vertexIndex) => 
                sum + rotatedVertices[vertexIndex][2], 0) / face.length;
            return { face, avgZ };
        });
        
        facesWithDepth.sort((a, b) => a.avgZ - b.avgZ);
        
        facesWithDepth.forEach(({ face }, index) => {
            this.ctx.beginPath();
            this.ctx.moveTo(projectedVertices[face[0]][0], projectedVertices[face[0]][1]);
            
            for (let i = 1; i < face.length; i++) {
                this.ctx.lineTo(projectedVertices[face[i]][0], projectedVertices[face[i]][1]);
            }
            this.ctx.closePath();
            
            // Subtle face coloring
            const hue = (index * 40 + this.time * 10) % 360;
            this.ctx.fillStyle = `hsla(${hue}, 50%, 60%, 0.1)`;
            this.ctx.fill();
            
            this.ctx.strokeStyle = `hsla(${hue}, 60%, 70%, 0.3)`;
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
        });
    }

    drawEdges(edges, projectedVertices, rotatedVertices) {
        edges.forEach((edge, index) => {
            const [start, end] = edge;
            const startPoint = projectedVertices[start];
            const endPoint = projectedVertices[end];
            
            // Calculate edge depth for coloring
            const avgZ = (rotatedVertices[start][2] + rotatedVertices[end][2]) / 2;
            const depth = (avgZ + 200) / 400; // Normalize depth
            
            this.ctx.beginPath();
            this.ctx.moveTo(startPoint[0], startPoint[1]);
            this.ctx.lineTo(endPoint[0], endPoint[1]);
            
            const hue = 200 + depth * 100;
            const opacity = 0.4 + depth * 0.4;
            this.ctx.strokeStyle = `hsla(${hue}, 70%, 70%, ${opacity})`;
            this.ctx.lineWidth = 2 + depth;
            this.ctx.stroke();
        });
    }

    drawVertices(projectedVertices, rotatedVertices) {
        projectedVertices.forEach((vertex, index) => {
            const [x, y] = vertex;
            const z = rotatedVertices[index][2];
            const depth = (z + 200) / 400;
            const size = 3 + depth * 4;
            
            // Create gradient for vertex
            const gradient = this.ctx.createRadialGradient(x, y, 0, x, y, size * 2);
            const hue = 220 + depth * 80;
            gradient.addColorStop(0, `hsla(${hue}, 80%, 80%, ${0.8 + depth * 0.2})`);
            gradient.addColorStop(1, `hsla(${hue}, 60%, 60%, 0)`);
            
            this.ctx.fillStyle = gradient;
            this.ctx.beginPath();
            this.ctx.arc(x, y, size, 0, Math.PI * 2);
            this.ctx.fill();
        });
    }

    drawShapeLabel() {
        const shapeName = this.currentShape.charAt(0).toUpperCase() + this.currentShape.slice(1);
        
        this.ctx.font = '16px Arial';
        this.ctx.fillStyle = 'rgba(120, 200, 255, 0.7)';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(`${shapeName} (click to change)`, 300, 480);
        
        this.ctx.font = '12px Arial';
        this.ctx.fillStyle = 'rgba(148, 163, 184, 0.6)';
        this.ctx.fillText('Move mouse to rotate', 300, 30);
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
