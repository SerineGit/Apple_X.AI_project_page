// Team Manager 
class TeamManager {
    constructor() {
        this.modal = null;
        this.modalElements = {}; // Cache for modal's inner elements
        this.isInitialized = false;
        this.teamData = {
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
                    'Mentored 10+ junior QA engineers, with 8 received promotions',
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
    }

    /**
     * Initializes the TeamManager. Creates the modal, binds events, and sets the initialized flag.
     */
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

    /**
     * Creates the modal HTML structure and appends it to the body.
     * Caches references to the modal's internal elements for performance.
     */
    createModal() {
        // Check if modal already exists to prevent duplicates
        if (document.querySelector('#team-modal')) {
            this.modal = document.querySelector('#team-modal'); // Assign existing modal
            this.cacheModalElements(); // Cache elements if modal already exists
            return;
        }

        const modal = document.createElement('div');
        modal.id = 'team-modal';
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content">
                <button class="modal-close" aria-label="Close modal">&times;</button>
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
        this.cacheModalElements(); // Cache elements right after creation
    }

    /**
     * Caches references to frequently accessed DOM elements within the modal.
     * This improves performance by reducing repeated DOM queries.
     */
    cacheModalElements() {
        if (!this.modal) return;
        this.modalElements = {
            avatar: this.modal.querySelector('.modal-avatar'),
            name: this.modal.querySelector('.modal-name'),
            role: this.modal.querySelector('.modal-role'),
            details: this.modal.querySelector('.modal-text'),
            experience: this.modal.querySelector('.modal-experience'),
            skillsContainer: this.modal.querySelector('.modal-skills'),
            achievementsList: this.modal.querySelector('.modal-achievements'),
            closeBtn: this.modal.querySelector('.modal-close')
        };
    }

    /**
     * Binds event listeners to team cards and modal controls.
     */
    bindEvents() {
        // Team card clicks 
        document.querySelectorAll('.team-card').forEach(card => {
            card.addEventListener('click', (e) => {
                e.preventDefault();
                const role = card.getAttribute('data-role');
                this.showModal(role);
            });

            // Keyboard support for team cards
            card.setAttribute('tabindex', '0'); // Make cards focusable
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault(); // Prevent default scroll for spacebar
                    const role = card.getAttribute('data-role');
                    this.showModal(role);
                }
            });
        });

        // Modal close events using cached elements and optional chaining
        this.modalElements.closeBtn?.addEventListener('click', () => this.hideModal());

        this.modal?.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.hideModal();
            }
        });

        // Escape key to close modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal?.classList.contains('active')) {
                this.hideModal();
            }
        });
    }

    /**
     * Populates and displays the modal with data for a specific team member.
     * @param {string} role - The role identifier for the team member.
     */
    showModal(role) {
        const data = this.teamData[role];
        if (!this.modal || !data) {
            console.warn(`Attempted to show modal for unknown role or missing modal: ${role}`);
            return;
        }

        // Populate modal using cached elements
        this.modalElements.avatar.textContent = data.avatar;
        this.modalElements.name.textContent = data.name;
        this.modalElements.role.textContent = data.role;
        this.modalElements.details.textContent = data.details;
        this.modalElements.experience.textContent = data.experience;

        // Skills
        this.modalElements.skillsContainer.innerHTML = ''; // Clear previous skills
        data.skills.forEach(skill => {
            const tag = document.createElement('span');
            tag.className = 'skill-tag';
            tag.textContent = skill;
            this.modalElements.skillsContainer.appendChild(tag);
        });

        // Achievements
        this.modalElements.achievementsList.innerHTML = ''; // Clear previous achievements
        data.achievements.forEach(achievement => {
            const li = document.createElement('li');
            li.textContent = achievement;
            this.modalElements.achievementsList.appendChild(li);
        });

        // Show modal and manage body overflow
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling background

        // Focus management: ensure the close button is focused for accessibility
        setTimeout(() => {
            this.modalElements.closeBtn?.focus();
        }, 100);
    }

    /**
     * Hides the modal and restores body scrolling.
     */
    hideModal() {
        if (!this.modal) return;
        
        this.modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }

    /**
     * Cleans up the modal and resets the manager's state.
     */
    destroy() {
        if (this.modal?.parentNode) { // Check if modal exists and has a parent
            this.modal.parentNode.removeChild(this.modal);
        }
        this.modal = null;
        this.modalElements = {}; // Clear cached elements
        this.isInitialized = false;
        document.body.style.overflow = ''; // Ensure body scroll is restored
        console.log('✅ TeamManager destroyed');
    }
}

// Initialize when DOM is ready 
function initApp() {
    try {
        const teamManager = new TeamManager();
        
        teamManager.init();
        
        // Store globally for cleanup (useful for development/debugging)
        window.teamManager = teamManager;
        
        console.log('🚀 App initialized successfully');
        
    } catch (error) {
        console.error('❌ App initialization error:', error);
    }
}

// Safe initialization - checks if DOM is already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp(); // DOM is already loaded
}

// Cleanup on page unload: important for single-page applications or complex scenarios
// For simple static sites, it might not be strictly necessary but is good practice.
window.addEventListener('beforeunload', () => {
    if (window.teamManager) {
        window.teamManager.destroy();
    }
});
