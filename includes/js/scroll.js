/********************************
** adamrob.co.uk - 8MAR2016
** Parallax Scroll Wordpress Plugin
**
** For Help and Support please visit www.adamrob.co.uk
**
** scroll.js
** Allows the background image to scroll at
** a different speed
********************************/

//jQuery(document).scroll(function($){
jQuery(document).on("load ready scroll",function($){

	//retrieve variables
	var parallaxoptions = parallax_script_scroll_options;



	//Iterate over all full width parallax containers
	jQuery('.'+parallaxoptions.parallaxcontainerid).each(function(i, obj) {

		
		//Finde the position of the section
		p=jQuery(this).offset().top;
		screenpos = jQuery(window).scrollTop();
		screenheight = jQuery(window).height();


		//check if parallax is on screen
		//if (p>screenpos && p<(screenpos+jQuery(this).height())){

			//Check starting position
			if((p-screenheight)>0){
				//Parralax is off the screen to start with
				//Claculate the ypos as an offset
				yPos = -( (screenpos-screenheight) / 20 )+90;			//divide between 20 and 90, 20 being quickest.
			}else{
				//Parallax is on the screen to start
				yPos = -( (screenpos) / 20 )+90;
			}

			//Cap the position
			if ( yPos < 0 ) yPos = 0;
			if ( yPos > 100 ) yPos = 100;

			//Move the parallax image
			jQuery(this).css('background-position', '50% '+ yPos + '%');

		//}

	});

});


