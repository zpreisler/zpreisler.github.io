var firstWord = (function($) {

    var selector = '.first-word';

    $(selector).each(addWrap);

    function addWrap() {
        var word = $(this).html();
        var index = word.indexOf(' ');

        if (index == -1) 
            index = word.length;
        

        $(this).html('<span class="first">' + word.substring(0, index) + '</span>' + word.substring(index, word.length));
    }

})(jQuery)
