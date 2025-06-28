document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const closeBtn = document.querySelector('.modal-close');

    // Modal functionality
    document.querySelectorAll('.gallery-image').forEach(img => {
        img.addEventListener('click', function () {
            modal.style.display = 'flex';
            modalImage.src = this.src;
            modalImage.alt = this.alt;
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });

    // Close modal
    closeBtn.addEventListener('click', function (e) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside image
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});