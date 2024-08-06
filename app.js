let tl = gsap.timeline();

let icon1 = document.querySelector('.fa-fire')
let icon2 = document.querySelector('.fa-thumbs-down')

let clickCount = 0;

function imageSlider() {
  icon1.addEventListener('click', function() {
    if (clickCount === 0) {
      gsap.to('.image2', {
        scale: 1.5,
        y: "-850px",
        opacity: 0, 
        duration: 1.2
      });
      gsap.to('.image2', {
        scale: 1,
        y: "0px",
        duration: 1,
        delay: 1.2
      });

      clickCount++; 

      icon1.removeEventListener('click', imageSlider);
    }
  });

  icon2.addEventListener('click', function(){
    if (clickCount === 0) {
      gsap.to('.image2', {
        scale: 1,
        y: "850px",
        opacity: 0, 
        duration: 1.2
      });
      gsap.to('.image2', {
        scale: 1,
        y: "0px",
        duration: 1,
        delay: 1.2
      });

      clickCount++; 

      icon2.removeEventListener('click', imageSlider);
    }
  })
}
imageSlider();