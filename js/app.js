var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    parallax: true,
    speed: 600,

});

$('#white_people').slideUp();
$('#white_people_words').slideUp();
$('#black_people').slideUp();
$('#black_people_words').slideUp();

swiper.on('slideChange', function() {
    if (swiper.activeIndex == 1) {
        $('#white_people').show({"duration": 2000});
        setTimeout(function(){
            $('#white_people_words').show({"duration": 2000});
        }, 2000);

        setTimeout(function(){
            $('#black_people').show({"duration": 2000});
        }, 4000);
        setTimeout(function(){
            $('#black_people_words').show({"duration": 2000});
        }, 6000);       
    } else {
		
		 if (swiper.activeIndex == 2) {
          // page 3
		// Wrap every letter in a span
		$('.ml9 .letters').each(function(){
			$(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
		  });
		  
		  anime.timeline({loop: 0})
			.add({
			  targets: '.ml9 .letter',
			  scale: [0,1],
			  duration: 1500,
			  elasticity: 600,
			  delay: function(el, i) {
				return 45 * (i+1)
			  }
			}).add({
			  targets: '.ml9',
			  opacity: 1,
			  duration: 1000,
			  easing: "easeOutExpo",
			  delay: 1000
			});
         } 
		
		 if (swiper.activeIndex == 3) {
			  // page 4
              // Wrap every letter in a span
			  $('.ml14 .letters').each(function(){
				  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
				});
				
				anime.timeline({loop: false})
				  .add({
					targets: '.ml14 .line',
					scaleX: [0,1],
					opacity: [0.5,1],
					easing: "easeInOutExpo",
					duration: 900
				  }).add({
					targets: '.ml14 .letter',
					opacity: [0,1],
					translateX: [40,0],
					translateZ: 0,
					scaleX: [0.3, 1],
					easing: "easeOutExpo",
					duration: 800,
					offset: '-=600',
					delay: function(el, i) {
					  return 150 + 25 * i;
					}
				  }).add({
					targets: '.ml14',
					opacity: 1,
					duration: 1000,
					easing: "easeOutExpo",
					delay: 1000
				  });
 
			 }
		
        $('#white_people').slideUp("slow", null);
        $('#white_people_words').slideUp("slow", null);
        $('#black_people').slideUp("slow", null);
        $('#black_people_words').slideUp("slow", null);
    }

})

swiper.on('click', function() {
    if (swiper.activeIndex == 0) {
        swiper.slideTo(1);
    }
})

anime.timeline({loop: true})
  .add({
    targets: '.ml8 .circle-white',
    scale: [0, 3],
    opacity: [1, 0],
    easing: "easeInOutExpo",
    rotateZ: 360,
    duration: 1100
  }).add({
    targets: '.ml8 .circle-container',
    scale: [0, 1],
    duration: 1100,
    easing: "easeInOutExpo",
    offset: '-=1000'
  }).add({
    targets: '.ml8 .circle-dark',
    scale: [0, 1],
    duration: 1100,
    easing: "easeOutExpo",
    offset: '-=600'
  }).add({
    targets: '.ml8 .letters-left',
    scale: [0, 1],
    duration: 1200,
    offset: '-=550'
  }).add({
    targets: '.ml8 .bang',
    scale: [0, 1],
    rotateZ: [45, 15],
    duration: 1200,
    offset: '-=1000'
  }).add({
    targets: '.ml8',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1400
  });

anime({
  targets: '.ml8 .circle-dark-dashed',
  rotateZ: 360,
  duration: 8000,
  easing: "linear",
  loop: true
});


var icon = cnbrandicon(document.getElementById('cn_logo'), {
    color: '#FFFFFF',
    width: 240,
    height: 200,
});






    