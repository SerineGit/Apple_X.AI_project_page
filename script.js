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
                target
