/*
Aperture v0.5
by Joscha Schmidt - http://www.itsjoe.de

For more information, visit:
http://itsjoe.de/aperture/

Licensed under the Creative Commons Attribution 2.5 License - http://creativecommons.org/licenses/by/2.5/
- free for use in both personal and commercial projects
- attribution requires leaving author name, author link, and the license info intact
	
*/
(function( $ ){
	var methods = {
		defaults: {
			columns : '4',
			imgWidth : '200px',
			imgHeight : '140px',
			easing : 'easeOutQuint',
			duration : 1000, 
		},
		settings: {},
		
		// Define the initial operations
		init : function( options ) { 
			methods.settings = $.extend({}, methods.defaults, options);
			
			columns = parseFloat(methods.settings.columns);

			var $this = this;
			
			$this
			.find('>')
				.wrapAll('<div class="ap-move-boxes-box clear" />')
			.end()
			.addClass('js-aperture clear');

			var	$toRotate = $this.find('div.ap-move-boxes-box').find('>'),
				$imgBox = 
					$toRotate
					.wrap('<div class="aperture-move-box" />')
					.parent('div.aperture-move-box')
					.css({
						width: methods.settings.imgWidth,
						height: methods.settings.imgHeight
					}),
					imgBoxLength = $imgBox.length;
			
			for(var i = 0; i < imgBoxLength; i+=columns) {
				$('div.aperture-move-box:lt(' + (columns) + ')').slice(i, i+columns).wrapAll("<div class='row first clear'></div>");
			}
			
			for(var i = 0; i < imgBoxLength; i+=2) {
				$('div.aperture-move-box:gt(' + (columns - 1) + ')').slice(i, i+2).wrapAll("<div class='row clear'></div>");
			}
			
			var $rsRow = $('div.row');
			
			$rsRow
			.each(function() {
				$(this)
				.find('div.aperture-move-box')
				.first()
					.addClass('left')
				.end()
				.last()
					.not(':first-child')
						.addClass('right');
			});
			
			methods.initialPositioning($this, $imgBox, $rsRow);
			methods.triggerRotation($imgBox, $rsRow);
		},
		initialPositioning : function($mainBox, $imgBox, $rsRow) {
			var imgBoxWidth = $imgBox.outerWidth(true),
				imgBoxHeight = $imgBox.outerHeight(true);
			
			$mainBox
			.css({
				width: imgBoxWidth * methods.settings.columns, // set the width dynamically depending on the number of columns
//				height:  imgBoxHeight * 2,
			})
			.find('.ap-move-boxes-box')
				.css({
					height:  imgBoxHeight * 2,
				})
			.end()
			.prepend('<div id="ap-rotate-triggers"><a id="aperture-rotate-ccw"></a><a id="aperture-rotate-cw"></a></div>');

			$imgBox
			.each(function(i) {
				var $thisIb = $(this),
					boxPosition = $thisIb.position();
				
				$thisIb
				.css({
					left : boxPosition.left,
					top : boxPosition.top,
				});
			})
			.promise()
			.done(function() {
				$('div.aperture-move-box').css('position', 'absolute');
				methods.setTargetPosition($rsRow);
				
//				$mainBox
//				.prepend('<div id="ap-rotate-triggers"><a id="aperture-rotate-ccw"></a><a id="aperture-rotate-cw"></a></div>');
			});
		},
		setTarget : function($thisIb, ccwTarget, cwTarget) {
			if (ccwTarget)
			{
				var ccwPosition = ccwTarget.position(),
					ccwLeftTo = ccwPosition.left,
					ccwTopTo = ccwPosition.top;
				
					$thisIb
					.attr({
						'data-ccw-left-to' : ccwLeftTo,
						'data-ccw-top-to' : ccwTopTo,
					});
			}
			
			if (cwTarget)
			{
				var cwPosition = cwTarget.position(),
					cwLeftTo = cwPosition.left,
					cwTopTo = cwPosition.top;
				
				$thisIb
				.attr({
					'data-cw-left-to' : cwLeftTo,
					'data-cw-top-to' : cwTopTo,
				});
			}
		},
		setTargetPosition : function($rsRow) {
			$rsRow.each(function() {
				var $thisRow = $(this),
					$thisIb = $thisRow.find('div.aperture-move-box');
				
				if ($thisRow.is(':first-child'))
				{
					$thisIb.each(function(i) {
						var $thisIb = $(this);
		
						if ($thisIb.is(':first-child'))
						{
							var ccwTarget = $thisRow.next().find('div.aperture-move-box').filter(':first-child'),
								cwTarget = $thisIb.next('div.aperture-move-box');
						}
						else if ($thisIb.is(':last-child'))
						{
							var ccwTarget = $thisIb.prev('div.aperture-move-box'),
								cwTarget = $thisRow.next().find('div.aperture-move-box').filter(':last-child');
						}
						else
						{
							var ccwTarget = $thisIb.prev('div.aperture-move-box'),
								cwTarget = $thisIb.next('div.aperture-move-box');
						}
						methods.setTarget($thisIb, ccwTarget, cwTarget);
					});	
				}
				else if ($thisRow.is(':last-child'))
				{
					$thisIb.each(function(i) {
						var $thisIb = $(this);
		
						if ($thisIb.is(':first-child'))
						{
							if ($thisIb.next('div.aperture-move-box').length)
							{
								var ccwTarget = $thisIb.next('div.aperture-move-box'),
									cwTarget = $thisRow.prev('div.row').find('div.aperture-move-box').filter(':first-child');
							}
							else
							{
								var ccwTarget = $thisRow.prev('div.row').find('div.aperture-move-box').filter(':last-child'),
									cwTarget = $thisRow.prev('div.row').find('div.aperture-move-box').filter(':first-child');
							}
						}
						else if ($thisIb.is(':last-child'))
						{
							if ($thisIb.next('div.aperture-move-box').length)
							{
								var ccwTarget = $thisIb.next('div.aperture-move-box'),
									cwTarget = $thisRow.prev('div.row').find('div.aperture-move-box').filter(':first-child');
							}
							else
							{
								var ccwTarget = $thisRow.prev('div.row').find('div.aperture-move-box').filter(':last-child'),
									cwTarget = $thisIb.prev('div.aperture-move-box');
							}
						}
						else
						{
							var ccwTarget = $thisRow.prev('div.row').find('div.aperture-move-box').filter(':last-child'),
								cwTarget = $thisRow.prev('div.row').find('div.aperture-move-box').filter(':first-child');
						}
						methods.setTarget($thisIb, ccwTarget, cwTarget);
					});	
				}
				else
				{
					$thisIb.each(function(i) {
						var $thisIb = $(this);
						var cwTarget;
						
						if ($thisIb.is(':first-child'))
						{
							var ccwTarget = $thisRow.next().find('div.aperture-move-box').filter(':first-child'),
								cwTarget = $thisRow.prev().find('div.aperture-move-box').filter(':first-child');
						}
						else if ($thisIb.is(':last-child'))
						{
							var ccwTarget = $thisRow.prev('div.row').find('div.aperture-move-box').filter(':last-child'),
								cwTarget = $thisRow.next('div.row').find('div.aperture-move-box').filter(':last-child');
						}
						else
						{
							alert('There cannot be other childs than :first or :last in this row!');
						}
						methods.setTarget($thisIb, ccwTarget, cwTarget);
					});	
				}
			});
		},
		triggerRotation : function($imgBox, $rsRow) {
			$('body')
			.on('click', '#aperture-rotate-ccw:not(.anim-running)', function() {
				var $trigger = $(this);
				$trigger.addClass('anim-running');

				$imgBox
				.stop(false, false)
				.each(function(i) {
					var $thisIb = $(this),
						leftTo = $thisIb.attr('data-ccw-left-to'),
						topTo = $thisIb.attr('data-ccw-top-to');
					
					$thisIb
					.stop(true, true)
					.animate({
						left : leftTo,
						top : topTo,
					}, methods.settings.duration, methods.settings.easing, function() {
					});
				})
				.promise()
				.done(function() {
					methods.setTargetPosition($rsRow);
					$trigger.removeClass('anim-running');
				});
			})
			.on('click', '#aperture-rotate-cw:not(.anim-running)', function() {
				var $trigger = $(this);
				$trigger.addClass('anim-running');
				
				$imgBox
				.stop(true, true)
				.each(function(i) {
					var $thisIb = $(this),
						leftTo = $thisIb.attr('data-cw-left-to'),
						topTo = $thisIb.attr('data-cw-top-to');
					
					$thisIb
					.animate({
						left : leftTo,
						top : topTo,
					}, methods.settings.duration, methods.settings.easing, function() {
					});
				})
				.promise()
				.done(function() {
					methods.setTargetPosition($rsRow);
					$trigger.removeClass('anim-running');
				});
			});
		}
	};
	
	$.fn.aperture = function(method) {
		if ( methods[method] )
		{
			return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} 
		else if ( typeof method === 'object' || ! method )
		{
			return methods.init.apply( this, arguments );
		}
		else
		{
			$.error( 'Method ' +  method + ' does not exist on jQuery.rotationSlider' );
		}
	};
})( jQuery );