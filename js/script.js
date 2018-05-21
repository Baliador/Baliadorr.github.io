jQuery(document).ready(function(){

$('.str0').css('stroke','red');
// ALIGN
//===============================================================	
var height_va, width_ha; var workheight; 
Align();
$(window).on('resize load ready', Align);
function Align(){
// vertical align
//===============================================================
$(".main-menu, .resolution, .align-v, .align-all").each(function(){
	height_va = '-'+$(this).outerHeight()/2+'px';
	$(this).css({ top:'50%', marginTop:height_va});
	});
// horisontal align
//===============================================================	
$(".resolution, .align-h, .align-all").each(function(){
	width_ha = $(this).innerWidth()/2;
	$(this).css({ left:'50%', marginLeft:'-'+width_ha+'px'});
	});
	
$(".menu-vis").removeClass('menu-vis-mobile');
}


// BUTTONS
// ===============================================================
var winwidth;
WinResize();
$(window).on('resize load ready', WinResize);
function WinResize(){
	winwidth = $(window).width();
	if(winwidth >=800){
		$('#os-info-p1 .resolution').removeClass('jq-valign');
		}
	else{		
		$('#os-info-p1 .resolution').addClass('jq-valign');
		}
	
}



	
	



$(".btn-menu-vis").click(function(){
	$(".menu-vis").toggleClass('menu-vis-mobile');
	$(".calc-header .languages").toggleClass('languages-vis-l');
	$(".btn-calc-body").toggleClass('btn-calc-body-mob');
	return false;

});









}); // end 


// IMAGE FIT
//===============================================================
$(window).load(function() {
	$('.bg-anim').imagefit({
		valign : 'middle'
	});
	//$('.image-100').imagefit();
	});
	
$( window ).resize(function() {
  	$('.bg-anim').imagefit({
 	valign : 'middle'
 	});
});