let bg = document.querySelector('.header_bg');
let parallaxBg = document.querySelector('.parallax_bg');
let header = document.querySelector('.header');

header.onmousemove = (e) => {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  
  bg.style.transform = "translate(-" + x * 10 + "px, -" + y * 10 + "px)";
  parallaxBg.style.transform = "translate(-" + x * 10 + "px, -" + y * 10 + "px)";
}