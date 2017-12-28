//
document.addEventListener("DOMContentLoaded", function() {

var index = 0;
var changing_pics = ["jobs.jpg", "front-house.jpg", "hauntedhouse.png"];
var image_start = document.querySelector('.full-banner-image');

// functions
function slideshow() {
	if (index < changing_pics.length) {
        image_start.src = 'images/' + changing_pics[index];
        index += 1;
    }
    else {
        index = 0;
        image_start.src = 'images/' + changing_pics[index];
        index += 1;
    }
    // Should maybe make this setInterval() and swap with slideshow(); call below
}

//function call
setInterval(slideshow, 5000);

});
