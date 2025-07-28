// Modern Team Card Interactions - Исправленная версия
class TeamInteractionManager {
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
        if (this.isInitialized) {
            console.warn('TeamInteractionManager already initialized');
            return;
        }

        try {
            this.createModal();
            this.bindTeamCardEvents();
            this.bindModalEvents();
            this.bindKeyboardEvents();
            this.isInitialized = true;
            console.log('✅ TeamInteractionManager initialized successfully');
        } catch (error) {
            console.error('❌ Error initializing TeamInteractionManager:', error);
        }
    }

    createModal() {
        // Проверяем, существует ли уже модальное окно
        if (document.querySelector('#team-modal-overlay')) {
            return;
        }

        const modalOverlay = document.createElement('div');
        modalOverlay.id = 'team-modal-overlay';
        modalOverlay.className = 'modal-overlay';
        modalOverlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(10px);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 10000;
        `;

        modalOverlay.innerHTML = `
            <div class="modal-content" style="
                background: rgba(15, 20, 25, 0.95);
                border: 1px solid rgba(120, 119, 198, 0.3);
                border-radius: 20px;
                padding: 2rem;
                max-width: 600px;
                width: 90%;
                max-height: 80vh;
                overflow-y: auto;
                position: relative;
                transform: scale(0.8);
                transition: transform 0.3s ease;
            ">
                <button class="modal-close" style="
                    position: absolute;
                    top: 1rem;
                    right: 1rem;
                    background: none;
                    border: none;
                    color: #7877c6;
                    font-size: 2rem;
                    cursor: pointer;
                    z-index: 1;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    transition: all 0.3s ease;
                " onmouseover="this.style.background='rgba(120, 119, 198, 0.2)'" 
                   onmouseout="this.style.background='none'">&times;</button>
                
                <div class="modal-body">
                    <div class="modal-header" style="text-align: center; margin-bottom: 2rem;">
                        <div class="modal-avatar" style="
                            font-size: 4rem;
                            margin-bottom: 1rem;
                            display: block;
                        "></div>
                        <h2 class="modal-name" style="
                            color: #ffffff;
                            margin: 0 0 0.5rem 0;
                            font-size: 1.8rem;
                            font-weight: 600;
                        "></h2>
                        <p class="modal-role" style="
                            color: #7877c6;
                            margin: 0;
                            font-size: 1.1rem;
                            font-weight: 500;
                        "></p>
                    </div>
                    
                    <div class="modal-details">
                        <p class="modal-text" style="
                            color: #e2e8f0;
                            line-height: 1.6;
                            margin-bottom: 2rem;
                        "></p>
                        
                        <h3 class="modal-section-title" style="
                            color: #7877c6;
                            font-size: 1.2rem;
                            margin: 1.5rem 0 1rem 0;
                            font-weight: 600;
                        ">Experience</h3>
                        <p class="modal-experience" style="
                            color: #e2e8f0;
                            line-height: 1.6;
                            margin-bottom: 1.5rem;
                        "></p>
                        
                        <h3 class="modal-section-title" style="
                            color: #7877c6;
                            font-size: 1.2rem;
                            margin: 1.5rem 0 1rem 0;
                            font-weight: 600;
                        ">Skills</h3>
                        <div class="modal-skills" style="
                            display: flex;
                            flex-wrap: wrap;
                            gap: 0.5rem;
                            margin-bottom: 1.5rem;
                        "></div>
                        
                        <h3 class="modal-section-title" style="
                            color: #7877c6;
                            font-size: 1.2rem;
                            margin: 1.5rem 0 1rem 0;
                            font-weight: 600;
                        ">Achievements</h3>
                        <ul class="modal-achievements" style="
                            color: #e2e8f0;
                            line-height: 1.6;
                            padding-left: 1.2rem;
                        "></ul>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modalOverlay);
        this.modal = modalOverlay;
    }

    bindTeamCardEvents() {
        const teamCards = document.querySelectorAll('.team-card');
        
        teamCards.forEach(card => {
            // Удаляем старые обработчики, если они есть
            const newCard = card.cloneNode(true);
            card.parentNode.replaceChild(newCard, card);
            
            newCard.addEventListener('click', (e) => {
                e.preventDefault();
                const role = newCard.getAttribute('data-role');
                this.showModal(role);
            });

            // Добавляем поддержку клавиатуры
            newCard.setAttribute('tabindex', '0');
            newCard.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const role = newCard.getAttribute('data-role');
                    this.showModal(role);
                }
            });
        });
    }

    showModal(role) {
        if (!this.modal || !this.teamData[role]) {
            console.error('Modal not found or invalid role:', role);
            return;
        }

        const data = this.teamData[role];
        
        try {
            // Заполняем модальное окно данными
            this.populateModal(data);
            
            // Показываем модальное окно
            this.modal.style.opacity = '1';
            this.modal.style.visibility = 'visible';
            
            const modalContent = this.modal.querySelector('.modal-content');
            if (modalContent) {
                modalContent.style.transform = 'scale(1)';
            }
            
            // Блокируем скролл страницы
            document.body.style.overflow = 'hidden';
            
            // Фокус на кнопке закрытия для доступности
            const closeBtn = this.modal.querySelector('.modal-close');
            if (closeBtn) {
                setTimeout(() => closeBtn.focus(), 100);
            }
            
        } catch (error) {
            console.error('Error showing modal:', error);
            this.hideModal();
        }
    }

    populateModal(data) {
        const elements = {
            avatar: this.modal.querySelector('.modal-avatar'),
            name: this.modal.querySelector('.modal-name'),
            role: this.modal.querySelector('.modal-role'),
            text: this.modal.querySelector('.modal-text'),
            experience: this.modal.querySelector('.modal-experience'),
            skills: this.modal.querySelector('.modal-skills'),
            achievements: this.modal.querySelector('.modal-achievements')
        };

        // Проверяем наличие всех элементов
        for (const [key, element] of Object.entries(elements)) {
            if (!element) {
                throw new Error(`Modal element not found: ${key}`);
            }
        }

        // Заполняем текстовые поля
        elements.avatar.textContent = data.avatar;
        elements.name.textContent = data.name;
        elements.role.textContent = data.role;
        elements.text.textContent = data.details;
        elements.experience.textContent = data.experience;

        // Очищаем и заполняем навыки
        elements.skills.innerHTML = '';
        data.skills.forEach(skill => {
            const skillTag = document.createElement('span');
            skillTag.textContent = skill;
            skillTag.style.cssText = `
                background: rgba(120, 119, 198, 0.2);
                color: #7877c6;
                padding: 0.4rem 0.8rem;
                border-radius: 20px;
                font-size: 0.9rem;
                font-weight: 500;
                border: 1px solid rgba(120, 119, 198, 0.3);
            `;
            elements.skills.appendChild(skillTag);
        });

        // Очищаем и заполняем достижения
        elements.achievements.innerHTML = '';
        data.achievements.forEach(achievement => {
            const li = document.createElement('li');
            li.textContent = achievement;
            li.style.marginBottom = '0.5rem';
            elements.achievements.appendChild(li);
        });
    }

    hideModal() {
        if (!this.modal) return;

        this.modal.style.opacity = '0';
        this.modal.style.visibility = 'hidden';
        
        const modalContent = this.modal.querySelector('.modal-content');
        if (modalContent) {
            modalContent.style.transform = 'scale(0.8)';
        }
        
        // Восстанавливаем скролл страницы
        document.body.style.overflow = '';
    }

    bindModalEvents() {
        if (!this.modal) return;

        const closeBtn = this.modal.querySelector('.modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.hideModal());
        }

        // Закрытие при клике вне модального окна
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.hideModal();
            }
        });
    }

    bindKeyboardEvents() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal && this.modal.style.visibility === 'visible') {
                this.hideModal();
            }
        });
    }

    destroy() {
        if (this.modal && this.modal.parentNode) {
            this.modal.parentNode.removeChild(this.modal);
        }
        this.modal = null;
        this.isInitialized = false;
        document.body.style.overflow = '';
    }
}

// Система уведомлений
class NotificationManager {
    constructor() {
        this.notifications = new Set();
    }

    show(message, type = 'info', duration = 3000) {
        // Создаем уведомление
        const notification = document.createElement('div');
        notification.className = 'notification';
        
        const colors = {
            success: 'rgba(34, 197, 94, 0.9)',
            error: 'rgba(239, 68, 68, 0.9)',
            warning: 'rgba(245, 158, 11, 0.9)',
            info: 'rgba(59, 130, 246, 0.9)'
        };

        notification.style.cssText = `
            position: fixed;
            top: 2rem;
            right: 2rem;
            background: ${colors[type] || colors.info};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            font-weight: 500;
            z-index: 10001;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
            word-wrap: break-word;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        `;
        
        notification.textContent = message;
        
        // Удаляем предыдущие уведомления
        this.notifications.forEach(n => {
            if (n.parentNode) {
                n.style.transform = 'translateX(100%)';
                setTimeout(() => n.remove(), 300);
            }
        });
        this.notifications.clear();
        
        document.body.appendChild(notification);
        this.notifications.add(notification);
        
        // Показываем уведомление
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Автоматически убираем уведомление
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    notification.remove();
                    this.notifications.delete(notification);
                }, 300);
            }
        }, duration);
        
        return notification;
    }
}

// Глобальные экземпляры
let teamManager;
let notificationManager;

// Инициализация при загрузке DOM
function initializeApp() {
    try {
        teamManager = new TeamInteractionManager();
        notificationManager = new NotificationManager();
        
        teamManager.init();
        
        // Показываем приветственное уведомление
        setTimeout(() => {
            notificationManager.show('Welcome to Apple & X.AI Project! ✨', 'success');
        }, 1000);
        
        console.log('🚀 Application initialized successfully!');
        
    } catch (error) {
        console.error('❌ Error initializing application:', error);
    }
}

// Функция для безопасной инициализации
function safeInit() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeApp);
    } else {
        initializeApp();
    }
}

// Экспорт для использования в других модулях
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { TeamInteractionManager, NotificationManager };
}

// Инициализируем приложение
safeInit();

// Очистка при выгрузке страницы
window.addEventListener('beforeunload', () => {
    if (teamManager) {
        teamManager.destroy();
    }
});
