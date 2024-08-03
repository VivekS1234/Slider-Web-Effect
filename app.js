let tl = gsap.timeline();

let icon1 = document.querySelector('.fa-fire')
let icon2 = document.querySelector('.fa-thumbs-down')
// let image2 = document.querySelector('.image2')

function imageSlider(){
    icon1.addEventListener('click', function(){
        gsap.to('.image2',{
            scale: 1.2,
            y: "-200px",
            opacity: 0,
            duration: 1,
        })
        gsap.from('.image2',{
            scale:1,
            duration: 1,
            delay: 1.3
        })
    })
    icon2.addEventListener('click', function(){
        gsap.to('.image2',{
            scale: 1.1,
            y: "250px",
            opacity: 0,
            duration: 1,
        })
        gsap.from('.image2',{
            scale:1,
            duration: 1,
            delay: 1.3
        })
    })
}
imageSlider();