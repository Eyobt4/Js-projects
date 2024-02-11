$(document).ready(function(){
    // Initialize Owl Carousel
    $("#testimonial-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        dots: true,
        nav: false
    });

    // Google Maps
    function initMap() {
        // Specify coordinates for the map
        var coordinates = {lat: 40.7128, lng: -74.0060}; // Example: New York City coordinates

        // Create a map object and specify the DOM element for display
        var map = new google.maps.Map(document.getElementById('map'), {
            center: coordinates,
            zoom: 12 // Adjust zoom level as needed
        });

        // Create a marker and set its position
        var marker = new google.maps.Marker({
            map: map,
            position: coordinates,
            title: 'Your Location' // Optional: Add a title to the marker
        });
    }
});
