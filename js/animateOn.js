
function animateOn(index, nextIndex, direction) {
				//ГЛАВНАЯ						
					if (nextIndex == 1){
						$('.mouse-control').css({backgroundPosition:'50% 0'});	
						$('.main-info .rock-hits-logo').removeClass('animated fadeOutDown option-0').addClass('animated fadeInDown option-1');
						$('.main-info .rock-hits-logo-text').removeClass('animated fadeOutDown option-0').addClass('animated fadeInDown option-2');
						$('.main-info .rock-hits-slogan').removeClass('animated fadeOutDown option-0').addClass('animated fadeInDown option-3');
						$('.main-info .rock-hits-btn-app').removeClass('animated fadeOutDown option-0').addClass('animated fadeInDown option-4');											
					}
					
					else if((index == 1 && direction == 'down')||(index == 1 && direction == 'up')){
						$('.main-info .rock-hits-logo').removeClass('animated fadeInDown option-1').addClass('animated fadeOutDown option-0');
						$('.main-info .rock-hits-logo-text').removeClass('animated fadeInDown option-2').addClass('animated fadeOutDown option-0');
						$('.main-info .rock-hits-slogan').removeClass('animated fadeInDown option-3').addClass('animated fadeOutDown option-0');
						$('.main-info .rock-hits-btn-app').removeClass('animated fadeInDown option-4').addClass('animated fadeOutDown option-0');							
					}
					
				//BLOCK 2 Discover
					if (nextIndex == 2){
						$('#rh-info-p2 .h2-name').removeClass('animated fadeOutLeft option-0').addClass('animated fadeInLeft option-6');	
						$('#rh-info-p2 .text_l1').removeClass('animated fadeOutLeft option-0').addClass('animated fadeInLeft option-3');	
						$('#rh-info-p2 .images-phone-r div').removeClass('animated fadeOutRight option-0').addClass('animated fadeInUp option-2');
						
						$('#rh-info-p2 .icons-pack .b1-icns-icn1').removeClass('animated bounceOut option-0').addClass('animated bounceIn option-6');
						$('#rh-info-p2 .icons-pack .b1-icns-icn2').removeClass('animated bounceOut option-0').addClass('animated bounceIn option-7');	
						$('#rh-info-p2 .icons-pack .b1-icns-icn3').removeClass('animated bounceOut option-0').addClass('animated bounceIn option-8');	
						$('#rh-info-p2 .icons-pack .b1-icns-icn4').removeClass('animated bounceOut option-0').addClass('animated bounceIn option-9');	
						$('#rh-info-p2 .icons-pack .b1-icns-icn5').removeClass('animated bounceOut option-0').addClass('animated bounceIn option-10');
						
						$('#rh-info-p2 .rock-hits-btn-app').removeClass('animated fadeOutLeft option-0').addClass('animated fadeInLeft option-10'); // Кнопка появляется слева		
									
					}
					else if((index == 2 && direction == 'down')||(index == 2 && direction == 'up')){
						$('#rh-info-p2 .h2-name').removeClass('animated fadeInLeft option-6').addClass('animated fadeOutLeft option-0');	
						$('#rh-info-p2 .text_l1').removeClass('animated fadeInLeft option-3').addClass('animated fadeOutLeft option-0');	
						$('#rh-info-p2 .images-phone-r div').removeClass('animated fadeInUp option-2').addClass('animated fadeOutRight option-0');
						
						$('#rh-info-p2 .icons-pack .b1-icns-icn1').removeClass('animated bounceIn option-6 ').addClass('animated bounceOut option-0');
						$('#rh-info-p2 .icons-pack .b1-icns-icn2').removeClass('animated bounceIn option-7 ').addClass('animated bounceOut option-0');	
						$('#rh-info-p2 .icons-pack .b1-icns-icn3').removeClass('animated bounceIn option-8 ').addClass('animated bounceOut option-0');	
						$('#rh-info-p2 .icons-pack .b1-icns-icn4').removeClass('animated bounceIn option-9 ').addClass('animated bounceOut option-0');	
						$('#rh-info-p2 .icons-pack .b1-icns-icn5').removeClass('animated bounceIn option-10 ').addClass('animated bounceOut option-0');		
						
						$('#rh-info-p2 .rock-hits-btn-app').removeClass('animated fadeInLeft option-10').addClass('animated fadeOutLeft option-0');	// Кнопка уезжает влево		
					}
					
				//BLOCK 3 Genres					
					if (nextIndex == 3){
						$('#rh-info-p3 .h2-name').removeClass('animated fadeOutRight option-0').addClass('animated fadeInRight option-6');	
						$('#rh-info-p3 .text_l1').removeClass('animated fadeOutRight option-0').addClass('animated fadeInRight option-3');	
						$('#rh-info-p3 .images-phone-l div').removeClass('animated fadeOutLeft option-0').addClass('animated fadeInUp option-5');	
						
						$('#rh-info-p3 .icons-pack .b2-icns-icn1').removeClass('animated bounceOut option-0').addClass('animated bounceIn option-6');
						$('#rh-info-p3 .icons-pack .b2-icns-icn2').removeClass('animated bounceOut option-0').addClass('animated bounceIn option-7');	
						$('#rh-info-p3 .icons-pack .b2-icns-icn3').removeClass('animated bounceOut option-0').addClass('animated bounceIn option-8');	
						$('#rh-info-p3 .icons-pack .b2-icns-icn4').removeClass('animated bounceOut option-0').addClass('animated bounceIn option-9');	
						$('#rh-info-p3 .icons-pack .b2-icns-icn5').removeClass('animated bounceOut option-0').addClass('animated bounceIn option-10');
						
						$('#rh-info-p3 .rock-hits-btn-app').removeClass('animated fadeOutRight option-0').addClass('animated fadeInRight option-10');	 // Кнопка появляется справа	
						
					}
					else if ((index == 3 && direction == 'down')||(index == 3 && direction == 'up')){
						$('#rh-info-p3 .h2-name').removeClass('animated fadeInRight option-6').addClass('animated fadeOutRight option-0');	
						$('#rh-info-p3 .text_l1').removeClass('animated fadeInRight option-3').addClass('animated fadeOutRight option-0');	
						$('#rh-info-p3 .images-phone-l div').removeClass('animated fadeInUp option-5').addClass('animated fadeOutLeft option-0');	
						
						$('#rh-info-p3 .icons-pack .b2-icns-icn1').removeClass('animated bounceIn option-6 ').addClass('animated bounceOut option-0');
						$('#rh-info-p3 .icons-pack .b2-icns-icn2').removeClass('animated bounceIn option-7 ').addClass('animated bounceOut option-0');	
						$('#rh-info-p3 .icons-pack .b2-icns-icn3').removeClass('animated bounceIn option-8 ').addClass('animated bounceOut option-0');	
						$('#rh-info-p3 .icons-pack .b2-icns-icn4').removeClass('animated bounceIn option-9 ').addClass('animated bounceOut option-0');	
						$('#rh-info-p3 .icons-pack .b2-icns-icn5').removeClass('animated bounceIn option-10 ').addClass('animated bounceOut option-0');
						
						$('#rh-info-p3 .rock-hits-btn-app').removeClass('animated fadeInRight option-10').addClass('animated fadeOutRight option-0');	// Кнопка уезжает вправо			
					}
				
				//BLOCK 4 Listen			
					if (nextIndex == 4){
						$('#rh-info-p4 .h2-name').removeClass('animated fadeOutLeft option-0').addClass('animated fadeInLeft option-6');	
						$('#rh-info-p4 .text_l1').removeClass('animated fadeOutLeft option-0').addClass('animated fadeInLeft option-3');	
						$('#rh-info-p4 .images-phone-r div').removeClass('animated fadeOutRight option-0').addClass('animated fadeInUp option-5');	
						
						$('#rh-info-p4 .icons-pack .b3-icns-icn1').removeClass('animated bounceOut option-0').addClass('animated bounceIn option-6');
						$('#rh-info-p4 .icons-pack .b3-icns-icn2').removeClass('animated bounceOut option-0').addClass('animated bounceIn option-7');	
						$('#rh-info-p4 .icons-pack .b3-icns-icn3').removeClass('animated bounceOut option-0').addClass('animated bounceIn option-8');	
						$('#rh-info-p4 .icons-pack .b3-icns-icn4').removeClass('animated bounceOut option-0').addClass('animated bounceIn option-9');	
						$('#rh-info-p4 .icons-pack .b3-icns-icn5').removeClass('animated bounceOut option-0').addClass('animated bounceIn option-10');	
						
						
						$('#rh-info-p4 .rock-hits-btn-app').removeClass('animated fadeOutLeft option-0').addClass('animated fadeInLeft option-10'); // Кнопка появляется слева
					}
					else if ((index == 4 && direction == 'down')||(index == 4 && direction == 'up')){
						$('#rh-info-p4 .h2-name').removeClass('animated fadeInLeft option-6').addClass('animated fadeOutLeft option-0');	
						$('#rh-info-p4 .text_l1').removeClass('animated fadeInLeft option-3').addClass('animated fadeOutLeft option-0');	
						$('#rh-info-p4 .images-phone-r div').removeClass('animated fadeInUp option-5').addClass('animated fadeOutRight option-0');	
						
						$('#rh-info-p4 .icons-pack .b3-icns-icn1').removeClass('animated bounceIn option-6 ').addClass('animated bounceOut option-0');
						$('#rh-info-p4 .icons-pack .b3-icns-icn2').removeClass('animated bounceIn option-7 ').addClass('animated bounceOut option-0');	
						$('#rh-info-p4 .icons-pack .b3-icns-icn3').removeClass('animated bounceIn option-8 ').addClass('animated bounceOut option-0');	
						$('#rh-info-p4 .icons-pack .b3-icns-icn4').removeClass('animated bounceIn option-9 ').addClass('animated bounceOut option-0');	
						$('#rh-info-p4 .icons-pack .b3-icns-icn5').removeClass('animated bounceIn option-10 ').addClass('animated bounceOut option-0');	
						
						$('#rh-info-p4 .rock-hits-btn-app').removeClass('animated fadeInLeft option-10').addClass('animated fadeOutLeft option-0');	// Кнопка уезжает влево		
					}
					
				//BLOCK 5 Watch
					if (nextIndex == 5){
						$('#rh-info-p5 .h2-name').removeClass('animated fadeOutRight option-0').addClass('animated fadeInRight option-6');	
						$('#rh-info-p5 .text_l1').removeClass('animated fadeOutRight option-0').addClass('animated fadeInRight option-3');	
						$('#rh-info-p5 .images-phone-l div').removeClass('animated fadeOutLeft option-0').addClass('animated fadeInUp option-5');	
						
						$('#rh-info-p5 .icons-pack .b4-icns-icn1').removeClass('animated bounceOut option-0').addClass('animated bounceIn option-6');
						$('#rh-info-p5 .icons-pack .b4-icns-icn2').removeClass('animated bounceOut option-0').addClass('animated bounceIn option-7');	
						$('#rh-info-p5 .icons-pack .b4-icns-icn3').removeClass('animated bounceOut option-0').addClass('animated bounceIn option-8');	
						$('#rh-info-p5 .icons-pack .b4-icns-icn4').removeClass('animated bounceOut option-0').addClass('animated bounceIn option-9');	
						$('#rh-info-p5 .icons-pack .b4-icns-icn5').removeClass('animated bounceOut option-0').addClass('animated bounceIn option-10');	
						
						$('#rh-info-p5 .rock-hits-btn-app').removeClass('animated fadeOutRight option-0').addClass('animated fadeInRight option-10');	 // Кнопка появляется справа	
						
					}
					else if ((index == 5 && direction == 'down')||(index == 5 && direction == 'up')){
						$('#rh-info-p5 .h2-name').removeClass('animated fadeInRight option-6').addClass('animated fadeOutRight option-0');	
						$('#rh-info-p5 .text_l1').removeClass('animated fadeInRight option-3').addClass('animated fadeOutRight option-0');	
						$('#rh-info-p5 .images-phone-l div').removeClass('animated fadeInUp option-5').addClass('animated fadeOutLeft option-0');	
						
						$('#rh-info-p5 .icons-pack .b4-icns-icn1').removeClass('animated bounceIn option-6 ').addClass('animated bounceOut option-0');
						$('#rh-info-p5 .icons-pack .b4-icns-icn2').removeClass('animated bounceIn option-7 ').addClass('animated bounceOut option-0');	
						$('#rh-info-p5 .icons-pack .b4-icns-icn3').removeClass('animated bounceIn option-8 ').addClass('animated bounceOut option-0');	
						$('#rh-info-p5 .icons-pack .b4-icns-icn4').removeClass('animated bounceIn option-9 ').addClass('animated bounceOut option-0');	
						$('#rh-info-p5 .icons-pack .b4-icns-icn5').removeClass('animated bounceIn option-10 ').addClass('animated bounceOut option-0');	
						
						$('#rh-info-p5 .rock-hits-btn-app').removeClass('animated fadeInRight option-10').addClass('animated fadeOutRight option-0');	// Кнопка уезжает вправо		
					}
				//BLOCK 6 Share			
					if (nextIndex == 6){
						$('#rh-info-p6 .h2-name').removeClass('animated fadeOutLeft option-0').addClass('animated fadeInLeft option-6');	
						$('#rh-info-p6 .text_l1').removeClass('animated fadeOutLeft option-0').addClass('animated fadeInLeft option-3');	
						$('#rh-info-p6 .images-phone-r div').removeClass('animated fadeOutRight option-0').addClass('animated fadeInUp option-5');	
						
						$('#rh-info-p6 .icons-pack .b5-icns-icn1').removeClass('animated bounceOut option-0').addClass('animated bounceIn option-6');
						$('#rh-info-p6 .icons-pack .b5-icns-icn2').removeClass('animated bounceOut option-0').addClass('animated bounceIn option-7');	
						$('#rh-info-p6 .icons-pack .b5-icns-icn3').removeClass('animated bounceOut option-0').addClass('animated bounceIn option-8');	
						$('#rh-info-p6 .icons-pack .b5-icns-icn4').removeClass('animated bounceOut option-0').addClass('animated bounceIn option-9');	
						$('#rh-info-p6 .icons-pack .b5-icns-icn5').removeClass('animated bounceOut option-0').addClass('animated bounceIn option-10');	
						
						$('#rh-info-p6 .rock-hits-btn-app').removeClass('animated fadeOutLeft option-0').addClass('animated fadeInLeft option-10'); // Кнопка появляется слева
						
					}
					else if ((index == 6 && direction == 'down')||(index == 6 && direction == 'up')){
						$('#rh-info-p6 .h2-name').removeClass('animated fadeInLeft option-6').addClass('animated fadeOutLeft option-0');	
						$('#rh-info-p6 .text_l1').removeClass('animated fadeInLeft option-3').addClass('animated fadeOutLeft option-0');	
						$('#rh-info-p6 .images-phone-r div').removeClass('animated fadeInUp option-5').addClass('animated fadeOutRight option-0');	
						
						$('#rh-info-p6 .icons-pack .b5-icns-icn1').removeClass('animated bounceIn option-6 ').addClass('animated bounceOut option-0');
						$('#rh-info-p6 .icons-pack .b5-icns-icn2').removeClass('animated bounceIn option-7 ').addClass('animated bounceOut option-0');	
						$('#rh-info-p6 .icons-pack .b5-icns-icn3').removeClass('animated bounceIn option-8 ').addClass('animated bounceOut option-0');	
						$('#rh-info-p6 .icons-pack .b5-icns-icn4').removeClass('animated bounceIn option-9 ').addClass('animated bounceOut option-0');	
						$('#rh-info-p6 .icons-pack .b5-icns-icn5').removeClass('animated bounceIn option-10 ').addClass('animated bounceOut option-0');	
						
						
						$('#rh-info-p6 .rock-hits-btn-app').removeClass('animated fadeInLeft option-10').addClass('animated fadeOutLeft option-0');	// Кнопка уезжает влево		
					}	
					
				//ФУТЕР
					if (nextIndex == 7){
						$('.footer-block .h2-name').removeClass('animated fadeOutDown option-0').addClass('animated fadeInDown option-1');
						$('.footer-block .text_l1').removeClass('animated fadeOutDown option-0').addClass('animated fadeInDown option-2');				
						$('.footer-block .rock-hits-btn-app').removeClass('animated fadeOutDown option-0').addClass('animated fadeInDown option-4');											
					}
					
					else if((index == 7 && direction == 'down')||(index == 7 && direction == 'up')){
						$('.footer-block .h2-name').removeClass('animated fadeInDown option-1').addClass('animated fadeOutDown option-0');
						$('.footer-block .text_l1').removeClass('animated fadeInDown option-2').addClass('animated fadeOutDown option-0');
						$('.footer-block .rock-hits-btn-app').removeClass('animated fadeInDown option-4').addClass('animated fadeOutDown option-0');							
					}
}

function animateMobile(index, nextIndex, direction) {
						$('.animated').each(function(){
							$(this).removeClass('animated');	
						});	
			
						
	
}


