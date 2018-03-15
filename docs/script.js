var scroll_start = 0;
//Scroll Function
$(document).ready(function() {
  $("#home").on("click", function() {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      })
  })
  $("#skills").on("click", function() {
    window.scroll({
      top: 640,
      behavior: 'smooth'
    })
  })
  $("#projects").on("click", function() {
    window.scroll({
      top: 1300,
      behavior: 'smooth'
    })
  })
  $("#contact").on("click", function() {
    window.scroll({
      top: 3000,
      behavior: 'smooth'
    })
  })
  $(".plate").on("click", function() {
    location.href = "http://plateagain.herokuapp.com/";
  })

  $(".hangman").on("click", function() {
    location.href = "https://sathesbitmaker.github.io/Hangman/";
  })

  $(".neo").on("click", function() {
    location.href = "https://agitated-poincare-9c1ccc.netlify.com/";
  })

  $(".grid").on("click", function() {
    location.href = "https://sathesbitmaker.github.io/CSSgridChallenge/";
  })

  $("#gitPic").on("click", function() {
    location.href = "https://www.linkedin.com/in/sathesbalasingam/";
  })

  $("#linkPic").on("click", function() {
    location.href = "https://github.com/sathesbitmaker";
  })
})

  $(document).scroll(function() {
    scroll_start = $(this).scrollTop();
    if(scroll_start > 630) {
      $(".navProperties").css('color', 'black');
      $(".navbar").css('background-color', '#e6e8ed');

    } else {
      $('.navProperties').css('color', '#d3d2cb');
      $(".navbar").css('background-color', 'transparent');
    }
  });
