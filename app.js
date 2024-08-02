let tl = gsap.timeline();

let icon1 = document.querySelector('.fa-fire')
// let image2 = document.querySelector('.image2')

function imageSlider(){
    icon1.addEventListener('click', function(){
        gsap.to('.image2',{
            scale: 1.2,
            opacity: 0,
            duration: 1,
        })
    })
}
imageSlider();