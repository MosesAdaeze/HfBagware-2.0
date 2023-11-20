// const hamburger = document.querySelector('.header .header_content .nav-menu .hamburger');
// const mobile_menu = document.querySelector('.header .header_content .nav-menu ul');
// const menu_item = document.querySelectorAll('.header .header_content .nav-menu ul li a');
// const header = document.querySelector('.header .box'); 

// hamburger.addEventListener('click', () => {
//     hamburger.classList.toggle('active');
//     mobile_menu.classList.toggle('active');
// });

// menu_item.forEach(item=>{
//     item.addEventListener('click', () => {
//         hamburger.classList.toggle('active');
//         mobile_menu.classList.toggle('active');
//     });
// });
// Nav bar menu .

// let header = document.querySelector('.header');
// let bar = document.querySelector('#bar');
// let navbar = document.querySelector('.nav-bar');

// bar.onclick = () => {
//   bar.classList.toggle('uil-x');
//   navbar.classList.toggle('active');
// }

// window.onscroll = () => {
//   bar.classList.remove('uil-x');
//   navbar.classList.remove('active');
// }
























// Get the reference to the <h3> element
var heading = document.getElementById("changing-text");

// Define the target text
var targetText = "50% discount on best seller bags.";

// Calculate the duration in milliseconds (3 seconds = 3000 milliseconds)
var duration = 3000;

// Calculate the interval time to update the text gradually
var intervalTime = duration / targetText.length;

// Start the interval to change the text
var currentIndex = 0;
var interval = setInterval(function() {
  if (currentIndex >= targetText.length) {
    clearInterval(interval); // Stop the interval when the text has been fully changed
    return;
  }
  
  // Update the text with each character
  heading.textContent += targetText[currentIndex];
  currentIndex++;
}, intervalTime);


///// swiper 
var swiper = new Swiper(".card_slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


  // FAQS 
  function toggleAnswer(index) {
    var answer = document.getElementById('answer-' + index);
    if (answer.style.display === 'none') {
        answer.style.display = 'block';

    } else {
        answer.style.display = 'none';
    }
}
