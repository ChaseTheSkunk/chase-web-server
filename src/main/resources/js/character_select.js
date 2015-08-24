/**
 * Created by Chase the Skunk on 8/23/2015.
 */

$(document).ready(function() {
    var characterSidebar = new Sidebar([
        {
            type: "link",
            href: "chase.html",
            text: "Chase"
        },
        {
            type: "link",
            href: "ruby.html",
            text: "Ruby"
        }
    ]);

    characterSidebar.matchSize("content");
    characterSidebar.arrangeLinks();
});