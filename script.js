document.addEventListener('DOMContentLoaded', function() {
    // Get modal elements
    const modal = document.getElementById('memberModal');
    const modalPhoto = document.getElementById('modalPhoto');
    const modalName = document.getElementById('modalName');
    const modalRole = document.getElementById('modalRole');
    const modalActions = document.getElementById('modalActions');
    const closeModal = document.querySelector('.close');
    
    // Get all team members
    const teamMembers = document.querySelectorAll('.team-member');
    
    // Add click event listeners to team members
    teamMembers.forEach(member => {
        member.addEventListener('click', function() {
            // Get data from the clicked member
            const name = this.getAttribute('data-name');
            const role = this.getAttribute('data-role');
            const photo = this.getAttribute('data-photo');
            const actions = this.getAttribute('data-actions');
            
            // Populate modal with member data
            modalName.textContent = name;
            modalRole.textContent = role;
            modalPhoto.src = photo;
            modalPhoto.alt = name;
            modalActions.textContent = actions;
            
            // Show modal
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
        
        // Add hover effects
        member.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
        });
        
        member.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Close modal when clicking the X button
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    });
    
    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    });
    
    // Add smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
    
    // Add floating animation to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
    });
    
    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.card, .feature-column, .team-member');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // Add typing effect to main title
    const mainTitle = document.querySelector('.main-title');
    if (mainTitle) {
        const text = mainTitle.textContent;
        mainTitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                mainTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }
    
    // Add particle effect on mouse move
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Create occasional particle
        if (Math.random() < 0.1) {
            createParticle(mouseX, mouseY);
        }
    });
    
    function createParticle(x, y) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: linear-gradient(45deg, #00d4ff, #00ff88);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            left: ${x}px;
            top: ${y}px;
            animation: particleFloat 2s ease-out forwards;
        `;
        
        document.body.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 2000);
    }
    
    // Add CSS for particle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes particleFloat {
            0% {
                opacity: 1;
                transform: translate(0, 0) scale(1);
            }
            100% {
                opacity: 0;
                transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(0);
            }
        }
        
        @keyframes fade-in {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .fade-in {
            animation: fade-in 0.6s ease-out forwards;
        }
        
        .animate-in {
            animation: fade-in 0.6s ease-out forwards;
        }
        
        /* Additional hover effects */
        .card {
            position: relative;
            overflow: hidden;
        }
        
        .card::after {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(
                45deg,
                transparent,
                rgba(0, 212, 255, 0.1),
                transparent
            );
            transform: rotate(45deg);
            transition: all 0.5s;
            opacity: 0;
        }
        
        .card:hover::after {
            animation: shimmer 1.5s ease-in-out;
        }
        
        @keyframes shimmer {
            0% {
                transform: translateX(-100%) translateY(-100%) rotate(45deg);
                opacity: 0;
            }
            50% {
                opacity: 1;
            }
            100% {
                transform: translateX(100%) translateY(100%) rotate(45deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Add loading screen fade out
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease-in';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
    
    // Add scroll progress indicator
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #00d4ff, #00ff88);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
});
