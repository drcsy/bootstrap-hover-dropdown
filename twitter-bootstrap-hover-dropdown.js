/*
 * Project: Twitter Bootstrap Hover Dropdown
 * Author: Cameron Spear
 *
 * Dependencies?: Twitter Bootstrap's Dropdown plugin
 *
 * A simple plugin to enable twitter bootstrap dropdowns to active on hover and provide a nice user experience.
 *
 * No license, do what you want. I'd love credit or a shoutout, though.
 *
 * http://cameronspear.com/blog/twitter-bootstrap-dropdown-on-hover-plugin/
 */
;(function($, window, undefined) {
    // outside the scipe of the jQuery plugin to keep track of all dropdowns
    var $allDropdowns = $();

    // if instantlyCloseOthers is true, then it will instantly shut other nav items when a new one is hovered over
    $.fn.dropdownHover = function(options) {

        // the element we really care about is the dropdown-toggle's parent
        $allDropdowns = $allDropdowns.add(this.parent());

        return this.each(function() {
            var $this = $(this).parent(),
                defaults = {
                    delay: 500,
                    instantlyCloseOthers: true
                },
                data = {
                    delay: $(this).data('delay'),
                    instantlyCloseOthers: $(this).data('close-others')
                },
                options = $.extend(true, {}, defaults, options, data),
                timeout;

            $this.hover(function() {
                window.clearTimeout(timeout);
                console.log(options.instantlyCloseOthers, typeof options.instantlyCloseOthers);
                if(options.instantlyCloseOthers === true) $allDropdowns.removeClass('open');
                $(this).addClass('open');
            }, function() {
                timeout = window.setTimeout(function() {
                    $this.removeClass('open');
                }, options.delay);
            });
        });
    };

    $('[data-hover="dropdown"]').dropdownHover();
})(jQuery, this);