$(function () {
	scrollsmoth(1000);
	workslide();
	workload();
	clientStuff();

});

// smoth scroll function 
function scrollsmoth(duration){
$('a[href^="#"]').on('click', function(event){
var target = $($(this).attr('href'));

if( target.length) {
	event.preventDefault();
	$('html,body').animate({
		scrollTop : target.offset().top


	},duration);
}

});

}

function workslide()
{

     $('.theme-work').click(function(){
$('.work-slider').css('left','-100%');
$('.photo-container').show();
     });

$('.work-return').click(function(){
$('.work-slider').css('left','0%');

$('.photo-container').hide(800);

});


}

function workload()
{
	  $.ajaxSetup({ cache: true });
	 $('.theme-work').on('click',function() {

	 	// body...
	 	var $this = $(this),
	 	    newTitle= $this.find('strong').text(),
	 	    newfolder=$this.data('folder');
	 	    spinner = '<div class="loader">Loading...</div>',
	 	    newHtml = 'slides/'+newfolder+'.html';
	 	    $('.project-load').html(spinner).load(newHtml);
	 	    $('.project-title').text(newTitle);

	 })
}


function clientStuff(){
     $('.clients-box  .client-slide').first().addClass('active-client');
     $('.clients-logos  .client-logo').first().addClass('active-client-logo');
     $('.clients-mobile-nav span').first().addClass('clients-mobile-active');

     $('.clients-logos  .client-logo , .client-button').click(function () {
     	var $this = $(this),
     	     $siblings= $this.parent().children(),
     	     position = $siblings.index($this);
     $('.client-slide').removeClass('active-client').eq(position).addClass('active-client');
      $('.client-logo').removeClass('active-client-logo').eq(position).addClass('active-client-logo');

      $('.client-button').removeClass('clients-mobile-active').eq(position).addClass('clients-mobile-active');
     
     });

     $('.client-control-next , .client-control-prev  ').click(function () {
     	var $this = $(this),
     	currentActiveClient = $('.clients-box').find('.active-client'),
     	position = $('.clients-box').children().index(currentActiveClient),
     	clientNum = $('.client-slide').length;
     	if ($this.hasClass('client-control-next'))
     	 {
     	if (position < clientNum-1) 
     	{
     	$('.active-client').removeClass('active-client').next().addClass('active-client');
     	$('.active-client-logo').removeClass('active-client-logo').next().addClass('active-client-logo');

      }else {
      	$('.client-slide').removeClass('active-client').first().addClass ('active-client');
        $('.client-logo').removeClass('active-client-logo').first().addClass('active-client-logo');
      }
  }
  else {
  	if (position === 0) {
  		$('.client-slide').removeClass('active-client').last().addClass ('active-client');
        $('.client-logo').removeClass('active-client-logo').last().addClass('active-client-logo');
      }
      else
      {
      	  	$('.active-client').removeClass('active-client').prev().addClass('active-client');
      	   	$('.active-client-logo').removeClass('active-client-logo').prev().addClass('active-client-logo');


      }
  }

     });

}