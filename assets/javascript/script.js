// Get all popup buttons
var popupButtons = document.querySelectorAll('.popup-btn');

// Add click event listener to each popup button
popupButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var popupId = this.getAttribute('data-popup'); // Get the popup id from data attribute
        var popup = document.getElementById(popupId); // Get the corresponding popup
        popup.style.display = 'block'; // Show the popup
    });
});

// Get all close buttons
var closeButtons = document.querySelectorAll('.close-btn');

// Add click event listener to each close button
closeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var popup = this.closest('.popup-container'); // Get the closest popup container
        popup.style.display = 'none'; // Hide the popup
    });
});

// Hide the popup when clicking outside of the popup content
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('popup-container')) {
        event.target.style.display = 'none';
    }
});
