/**
 * Generic functionality detected and applied by using data attributes on DOM
 * elements. The advantage of using data attributes instead of using classes 
 * and/or ids to extend elements with some functionality is that we can provide 
 * values with the property.
 *
 * F.i., if you'd like to toggle a box's visibility you would have to give the 
 * trigger a class of .toggler and set its target manually in the code. This
 * way we get a selector together with a target, a value or whatever.
 *
 * @author Alexander Wallin
 * @version 0.1
 */
(function($) {

	/**
	 * Triggers all setup functions in here.
	 */
	function init() {
		setupToggleOnClick();
		setupScrollTo();
	}

	/**
	 * This snippet makes any element with a data-toggle-on-click attribute
	 * to trigger a $.fn.toggleClass() call on the selector provided.
	 *
	 * @param	data-toggle-on-click	The target selector
	 * @param	data-toggle-classes		A set of classes passed to $.fn.toggleClass
	 *									Default is 'visible'.
	 */
	function setupToggleOnClick() {
		$(document).on('click', '*[data-toggle-on-click]', function(e) {
			try {
				e.preventDefault();

				var targetModal = $(this).attr('data-toggle-on-click'),
					toggleClasses = $(this).attr('data-toggle-classes') || 'visible';
				
				$(targetModal).toggleClass( toggleClasses );
			} catch (err) {}
		});
	}

	/**
	 * This snippet makes any element with a data-scroll-to attribute
	 * to trigger a scroll on elements matching a provided selector.
	 *
	 * Vertical scroll only a.t.m.
	 *
	 * @param	data-scroll-to		A number or a selector
	 * @param	data-scroll-target	The target selector. If empty, the window
	 *								object is scrolled.
	 */
	function setupScrollTo() {
		$(document).on('click', '*[data-scroll-to]', function(e) {
			try {
				e.preventDefault();

				var scrollAim = $(this).attr('data-scroll-to'),
					scrollPosition = /^\d+$/.test(scrollAim) ? parseInt(scrollAim) : $(scrollAim),
					target = $(this).attr('data-scroll-target') || window,
					$target = $(target);
				
				$target.scrollTop(scrollPosition);

				// TODO: Custom scroll method/plugin
			} catch (err) {}
		});
	}

	/*
	                 .   ,
	               .';_.';
	              .       `.
	                    _   \
	             .     (.) (.)--._
	            .       "   "     `.
	           .                   :
	                   ._         .'
	          .          `"-.___."
	                      `.
	         .              .
	         .   .  `.       .
	         .    `.  `.      .
	,,.      .      ` . `.    .
	\W;      .         "`     .
	 `.    .' .               '
	   `--'    ,    __,..-   '  .
	          .   .'     `.   `' ;
	          `.   `,      `.  .'
	            "._.'        `'
	*/
	$(document).ready(init);

})(jQuery);