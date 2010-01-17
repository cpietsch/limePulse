/*
 * jQuery limePulse build 2 - http://www.chrispie.com/jquery-plugins/jquery-limepulse-plugin/
 *
 * makes an object go pulsate
 *
 * OPTIONS
 * $("#button").limePulse({
 *		effectDuration: //duration for zooming in ms
 *		smallDuration: //duration of the small object in ms
 *		bigDuration: //duration of the big object in ms
 *		easing: //use your favourite jQuery Easing
 * 		scale: //scale size in px
 * });
 *
 * TERMS OF USE - jQuery Easing
 * Open source under the BSD License. 
 * 
 * Copyright © 2009 Christopher Pietsch
 * All rights reserved.
 *
*/


;(function($){
	
	$.fn.limePulse = function(options) {
        return this.each(function() {   
            $.limePulse(this, options);
        });
    };

	$.limePulse = function(container, options) {
		var defaults = {
	 		effectDuration: 500,
			smallDuration: 0,
			bigDuration: 1500,
			easing:'easeInOutExpo',
			scale:30
		};
		var options = $.extend(defaults, options);
		var width=$(container).width();
		var height=$(container).height();
		
		$(container)
		.css('position', 'relative')

		function loop(){
			$(container)
			.animate({
				left:options.scale/2,
				top:options.scale/2,
				width: width-options.scale,
				height: height-options.scale
			},options.effectDuration,options.easing)
			.animate({
				left:options.scale/2
			},options.smallDuration)
			.animate({
				left:0,
				top:0,
				width: width,
				height: height
			},options.effectDuration,options.easing)
			.animate({
				left:0
			},options.bigDuration, function(){ loop(); });
		}
		loop();

	};
	
})(jQuery);

