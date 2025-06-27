document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('image-gallery');
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const closeBtn = document.querySelector('.modal-close');

    // Modal functionality
    document.querySelectorAll('.gallery-image').forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'flex';
            modalImage.src = this.src;
            modalImage.alt = this.alt;
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });

    // Close modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Drag-to-pan functionality
    let isDragging = false;
    let startX, scrollLeft;

    gallery.addEventListener('mousedown', function(e) {
        isDragging = true;
        startX = e.pageX - gallery.offsetLeft;
        scrollLeft = gallery.scrollLeft;
        gallery.style.cursor = 'grabbing';
    });

    gallery.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - gallery.offsetLeft;
        const walk = (x - startX) * 2; // Adjust drag speed
        gallery.scrollLeft = scrollLeft - walk;
    });

    gallery.addEventListener('mouseup', function() {
        isDragging = false;
        gallery.style.cursor = 'grab';
    });

    gallery.addEventListener('mouseleave', function() {
        isDragging = false;
        gallery.style.cursor = 'grab';
    });

    // Touch support for mobile
    gallery.addEventListener('touchstart', function(e) {
        isDragging = true;
        startX = e.touches[0].pageX - gallery.offsetLeft;
        scrollLeft = gallery.scrollLeft;
    });

    gallery.addEventListener('touchmove', function(e) {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.touches[0].pageX - gallery.offsetLeft;
        const walk = (x - startX) * 2;
        gallery.scrollLeft = scrollLeft - walk;
    });

    gallery.addEventListener('touchend', function() {
        isDragging = false;
    });
});