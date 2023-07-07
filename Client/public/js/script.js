$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Healthy", "Lifestyle"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Cherker", "Seabuckthorn"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
// Landing page design
function imgSlider(anything) {
  document.querySelector(".starbucks").src = anything;
}

function changeCircleColor(color) {
  const circle = document.querySelector(".circle");
  circle.style.background = color;
}

$("#contact-form").submit(function (event) {
  event.preventDefault(); // Prevent the form from submitting via the browser

  var formData = $(this).serialize(); // Get form data

  $.ajax({
    type: "POST",
    url: "http://localhost:5000/api/contact",
    data: formData,
    dataType: "json",
    encode: true,
  })
    .done(function (data) {
      console.log(data); // Log the data for now, you can do more like showing a success message
    })
    .fail(function (data) {
      console.error("Error:", data); // Log error if any
    });
});
