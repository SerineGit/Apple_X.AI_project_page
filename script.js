// Team Manager 

class TeamManager {

    constructor() {

        this.modal = null;

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

                e.preventDefault();

                const role = card.getAttribute('data-role');

                this.showModal(role);

            });



            // Keyboard support

            card.setAttribute('tabindex', '0');

            card.addEventListener('keydown', (e) => {

                if (e.key === 'Enter' || e.key === ' ') {

                    e.preventDefault();

                    const role = card.getAttribute('data-role');

                    this.showModal(role);

                }

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

        this.modal.querySelector('.modal-avatar').textContent = data.avatar;

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





// Initialize when DOM is ready

function initApp() {

    try {

        const teamManager = new TeamManager();

        

        teamManager.init();

        

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

});
