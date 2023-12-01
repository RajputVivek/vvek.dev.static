$(document).ready(function () {
    let ham = $("#ham");
    ham.on("click", function () {
      let hamburger = $(".hamburger");
      let times = $(".times");
      let menu = $(".menu");
      let hamburgerDisplay = hamburger.css("display");
      let timesDisplay = times.css("display");
  
      if (hamburgerDisplay === "block") {
        hamburger.css("display", "none");
        times.css("display", "block");
        menu.show(500, "swing");
      }
  
      if (timesDisplay === "block") {
        times.css("display", "none");
        hamburger.css("display", "block");
        menu.hide(500, "swing");
      }
    });
  
    // Loader
    $('body').on('click', '#projects', function() {
      $('#main-content .left, #main-content .right').hide(500, 'swing');
      setTimeout(() => {
        $('#loader').show(500, 'swing');
        ham.click();
        $('#loader').hide();
        $('#main-content').empty().append('#portfolio');
      }, 550);
    });
    
  });
  
  