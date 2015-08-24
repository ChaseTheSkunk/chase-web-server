/**
 * Created by Chase the Skunk on 8/23/2015.
 */

var Sidebar = function(values, id) {

    var IMAGE = "image";
    var LINK = "link";
    var IMAGE_HTML = '<li><img src="$0" alt="$1"></li>\n';
    var LINK_HTML = '<li><a href="$0">$1</a></li>\n';

    var element = (id == null) ? $('#sidebar') : $('#' + id);

    var matchSize = function(x) {
        var height = 0;
        if ($.isNumeric(x)) {
            height = 0 + x;
        } else if (typeof x === "string") {
            height = $('#' + x).innerHeight();
        } else {
            try {
                height = x.innerHeight();
            } catch (ignored) {
                height = "100%";
            }
        }

        element.height(height);
    };

    var arrangeLinks = function() {
        var html = "";
        for (var i = 0; i < values.length; i++) {
            var value = values[i];
            if (value.type === IMAGE) {
                var imageElement = "" + IMAGE_HTML;
                imageElement = imageElement.replace("$0", value.src);
                imageElement = imageElement.replace("$1", value.alt);
                html += imageElement;
            } else if (value.type === LINK) {
                var linkElement = "" + LINK_HTML;
                linkElement = linkElement.replace("$0", value.href);
                linkElement = linkElement.replace("$1", value.text);
                html += linkElement;
            }
        }

        element.find('#sub-navigation-list').html(html);
    };

    return {
        matchSize: matchSize,
        arrangeLinks: arrangeLinks
    }
};