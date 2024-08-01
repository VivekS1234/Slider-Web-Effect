let imageContainer = document.querySelector('.child1');
let images = document.querySelector('.child1 .img3');


function imageSlider(){
    document.querySelector('.child2 .fa-heart').addEventListener('click', function(){
        images.style.transform = "translateY(-550px)";
        images.style.transitionDuration = "0.6s";
    })
    document.querySelector('.child2 .fa-thumbs-down').addEventListener('click', function(){
        images.style.transform = "translateY(550px)";
        images.style.transitionDuration = "0.6s";
    })
}
imageSlider()

// git remote add origin https://github.com/VivekS1234/Slider-Web-Effect.git
// git branch -M main
// git push -u origin main