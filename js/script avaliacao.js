function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "../img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "../img/close_white_36dp.svg";
    }
}


var main = function () {
  
    $('.btn').click(function (e) {
      e.preventDefault();
      var post = $('#status').val();
      $('<li>').text(post).prependTo('.posts').addClass('post');
      $('<button class="close">X</button>').appendTo('.post').hide();
      $('#status').val('');  
      $('.characters').text('240');
      $('.btn').addClass('disabled'); 
      
      $('.post').click(function () {
        // adding class selected-post to the post you click on //
        $(this).addClass('selected-post').siblings().removeClass('selected-post');
        // showing the x button when clicking on the post and hiding it from other posts //
        $('.selected-post').children('.close').show().parent().siblings().children('.close').hide();
        
        // Removing the post when click on X button //
        $('.close').click(function () {
          $(this).parent('li.post').remove();
        });
        
      });
      
    });
    
    $('#status').keyup(function () {
      var postLength = $(this).val().length,
          charactersLeft = 240 - postLength;
      $('.characters').text(charactersLeft);
      
      if(charactersLeft <= 0 ) {
        $('.btn').addClass('disabled');
        $('.characters').text("Message too long")
      } else if (charactersLeft == 240) {
        $('.btn').addClass('disabled');
      } else {
        $('.btn').removeClass('disabled');
      }
    }); 
    
    $('.btn').addClass('disabled');
  }
  
  $(document).ready(main);