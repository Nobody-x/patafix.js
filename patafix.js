(function ($) {
    'use strict';

    var Patafix = window.Patafix || {};

    Patafix = (function() {

        function Patafix(element, settings) {
            console.log(element);

            var _ = this;
            _.$element = $(element);

            _.initMenu();

        }

        return Patafix;
    })();

    Patafix.prototype.initMenu = function () {
        var _ = this;

        var $el = _.$element;

        var elOffsets = $el.offset();

        $('.patafix-menu').css({
           top: elOffsets.top + 'px',
           left: (elOffsets.left + ($el.outerWidth() / 2) - ($('.patafix-menu').outerWidth() / 2)) + 'px'
        });

        $('.patafix-menu button').click(function() {
            $('.patafix-menu .select-menu').toggle();
        });
    };

    $.fn.patafix = function() {
        var that = this;
        var options = arguments[0];

        for (var i = 0; i < that.length; i++) {
            that[i].patafix = new Patafix(that[i], options);
        }

        return that;
    };

})( jQuery );