var box = document.getElementById('box');


var viewWidth = window.innerWidth;
var viewHeight = window.innerHeight;


// Updates the viewport height and width dynamically
window.addEventListener("resize", function(event) {
    viewWidth = window.innerWidth;
    viewHeight = window.innerHeight;
});

box.addEventListener('mouseover', function(event) {
    var boxRect = box.getBoundingClientRect();
    var newX = Math.floor((Math.random() * viewWidth) + 1 - boxRect.width);
    var newY = Math.floor((Math.random() * viewHeight) + 1 - boxRect.height);

    if (newX < 0) {
        newX = 0;
    } if(newY < 0) {
        newY = 0;
    }

    box.style.top = newY + "px";
    box.style.left = newX + "px";
})