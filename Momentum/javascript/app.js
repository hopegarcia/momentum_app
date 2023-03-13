// Change Background Property
function changeBg(){

  const images = [
    'url("../img/1.jpg")', 
    'url("../img/2.jpg")', 
    'url("../img/3.jpg")', 
    'url("../img/4.jpg")', 
    'url("../img/5.jpg")', 
    'url("../img/6.jpg")', 
    'url("../img/7.jpg")', 
    'url("../img/8.jpg")', 
    'url("../img/9.jpg")', 
    'url("../img/10.jpg")', 
  ]

  const section = document.querySelector('section')
  const bg = images[Math.floor(Math.random() * images.length )];
  section.style.backgroundImage = bg;
  console.log(bg);
}
  
  setInterval(changeBg, 60000); //change bg every 60 seconds