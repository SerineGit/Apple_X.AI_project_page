   // Team member modal functionality
        const modal = document.getElementById('memberModal');
        const modalPhoto = document.getElementById('modalPhoto');
        const modalName = document.getElementById('modalName');
        const modalRole = document.getElementById('modalRole');
        const modalActions = document.getElementById('modalActions');
        const closeBtn = document.querySelector('.close');

        // Add click event to all team members
        document.querySelectorAll('.team-member').forEach(member => {
            member.addEventListener('click', () => {
                const name = member.getAttribute('data-name');
                const role = member.getAttribute('data-role');
                const photo = member.getAttribute('data-photo');
                const actions = member.getAttribute('data-actions');

                modalName.textContent = name;
                modalRole.textContent = role;
                modalPhoto.src = photo;
                modalActions.textContent = actions;

                modal.style.display = 'block';
            });
        });

        // Close modal functionality
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        // Add smooth scroll behavior
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

        // Add intersection observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all cards and feature columns
        document.querySelectorAll('.card, .feature-column, .stat-item').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
