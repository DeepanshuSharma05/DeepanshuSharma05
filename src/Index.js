// Custom JavaScript functionality can be added here
document.addEventListener('DOMContentLoaded', function() {
    console.log('Custom JS file loaded.');

    // Example of adding a click event to the "Post Requirement" button
    document.querySelector('.nav-link').addEventListener('click', function() {
        alert('Post Requirement button clicked!');
    });
});