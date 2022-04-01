//Swiper js
var swiper = new Swiper('.mySwiper', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
  //Show login modal
const modal = document.getElementById("myModal");
    const btnOpen = document.getElementById("myBtn");
    const btnClose = document.getElementsByClassName("btn-close__login")[0];
    btnOpen.onclick = function(){
      modal.style.display = "flex";
    }
    btnClose.onclick = function(){
      modal.style.display = "none";

    }
    window.onclick = function(event) {
      if(event.target == modal) {
        modal.style.display="none";
      }
    }
    const btnOpenLoginMobile = document.getElementsByClassName("mobile-login_button")[0];
    btnOpenLoginMobile.onclick = function(){
      modal.style.display = "flex";
    }

// Show menu-mobile
const menuMobile = document.getElementById("nav");
const openMenuMobile = document.getElementsByClassName("btn-openMenuMobile")[0];
const closeMenuMobile = document.getElementsByClassName("btn-menu-mobile-close")[0];
openMenuMobile.onclick = function(){
  menuMobile.style.display = "block";
}
closeMenuMobile.onclick = function(){
  menuMobile.style.display = "none";
}

// Show/Hide back-to-top button
$(window).scroll(function() {
	if ($(this).scrollTop()>100) {
    $('.back-to-top').show();
		$('.back-to-top').css("display","flex");
	} else {
		$('.back-to-top').hide();
	}
});
$('.float__button-close').click(function (){
  $(".call").hide();
  $(".messenger").hide();
  $(".float__button-close").hide();
});

function scrollToTop() {
            window.scrollTo(0, 0);
}


