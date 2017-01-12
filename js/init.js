
$(document).ready(function(){
	$('.loader').show();
	//displaymsg();

    $('.slider').slider({interval: 3000});
    $('.scrollspy').scrollSpy(0,2400);
    $('#sidenav-overlay').trigger( "click" );
    $('.button-collapse').sideNav({
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );

		$("#slider_div").animate({height: $(window).height() - $('#navbar').height()});
		$(window).on('resize', function(e) {
			$("#slider_div").animate({height: $(window).height() - $('#navbar').height()});
		});
	});

$(window).load(function() {
	$('.loader').hide();
});


//var i = 0;
	/*function displaymsg() 
	{
		var we_are="Onemove Software Solutions|StartUp|entrepreneurs|Human Beings|Geeks|Designers";
		var we_love="Web Design and Developement|Our Vision and Mission|Innovation and Creativity|Helping Others|Learning New Things|Designing Others Dream";

		var sjk=document.getElementById('change_text');
		var we_are_array=we_are.split('|');
		var we_love_array=we_love.split('|');
		$('#we_are').html(we_are_array[i]);
		$('#we_love').html(we_love_array[i]);

		if(i==5)
		{i=-1;}	i++;
		window.setTimeout("displaymsg()", 3000);
	}*/