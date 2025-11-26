document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.getElementById('main-house-image');
    const thumbnails = document.querySelectorAll('.thumbnail');
    let currentIndex = 0;
    const slideInterval = 5000; // 5000 milliseconds = 5 seconds

    /**
     * Function to change the slide
     * @param {number} index - The index of the slide to display
     */
    function showSlide(index) {
        // Ensure the index loops back to 0 if it exceeds the number of slides
        if (index >= thumbnails.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = thumbnails.length - 1;
        } else {
            currentIndex = index;
        }

        // 1. Update the main image source using the data-fullsrc of the current thumbnail
        mainImage.src = thumbnails[currentIndex].dataset.fullsrc;

        // 2. Update active class on thumbnails for visual feedback
        // Remove 'active' class from all thumbnails
        thumbnails.forEach(t => t.classList.remove('active'));
        // Add 'active' class to the current thumbnail
        thumbnails[currentIndex].classList.add('active');
    }

    /**
     * Function to advance to the next slide automatically
     */
    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    // Initialize the first slide to ensure the 'active' class is set correctly on load
    showSlide(0);

    // Start the automatic slideshow timer
    // The setInterval function calls 'nextSlide' every 5000ms (5 seconds)
    setInterval(nextSlide, slideInterval);


    // OPTIONAL: Keep manual clicking functional as well
    // If a user clicks a thumbnail, the auto-switch will continue from that new image.
    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            showSlide(index);
            
            // If you want the timer to restart whenever a user clicks an image:
            // clearInterval(intervalId);
            // intervalId = setInterval(nextSlide, slideInterval);
        });
    });

    console.log("Tres Sorella Townhouse website is loaded and automatic slideshow is active!");
});