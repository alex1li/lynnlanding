/* Chris Sciavolino (cds253@cornell.edu) */
document.addEventListener("DOMContentLoaded", function() {
    // initialize Muuri grid system
    var grid = new Muuri('.grid', {
        layout: {
            fillGaps: true,
            horizontal: false,
            alignRight: false,
            alignBottom: false,
            rounding: true
        }
    });

    const GRID_ITEMS = document.querySelectorAll(".grid-image");
    const DETAIL_VIEW = document.querySelector(".image-selection-wrapper");
    const EXIT_BUTTON = document.querySelector(".js-close-button");
    const SELECTED_IMAGE = document.querySelector(".js-selected-image");

    // all grid items trigger the detail view
    for (let i = 0; i < GRID_ITEMS.length; i++) {
        GRID_ITEMS[i].addEventListener('click', () => {

            var newSource = GRID_ITEMS[i].src;
            SELECTED_IMAGE.src = newSource;
            //console.log("Ran event listener with " + newSource);

            DETAIL_VIEW.classList.toggle("hidden-section");
        });
    }

    // exit button closes detail view
    EXIT_BUTTON.addEventListener('click', () => {
        DETAIL_VIEW.classList.toggle("hidden-section");
    });
});
