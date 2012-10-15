/*!
 * jQuery Collapsible Plugin v0.1
 * http://github.com/sergiocampama/
 *
 * Based on the Collapsible library by Stephen Morley
 * http://code.stephenmorley.org/javascript/collapsible-lists/
 *
 * Released under the Beerware license
 *
 * Date: Mon Oct 15 2012
 */

(function($) {
	$.fn.collapsibleList = function() {
		this.find("li").each(function(i, li) {
			var $this = $(li);
			if($this.find("ul").length > 0) {
				$this.addClass("collapsibleListClosed")
			}
			$this.find("ul")
				.addClass("collapsibleList");
			
			$this.on('mousedown', function(e){
				//Prevents selection of text on subsequent clicks
				e.preventDefault();
			})
			.click(function(e){
				//Prevents clicks from activating parent lis
				e.stopPropagation();
				if($(this).children("ul").length > 0) {
					$(this).toggleClass("collapsibleListClosed")
						.toggleClass("collapsibleListOpen");
				}
			});
		});
        
		return this;
	}
})(jQuery);