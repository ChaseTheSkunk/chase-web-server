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
        },
        {
            type: "link",
            href: "katrina.html",
            text: "Katrina"
        }
    ]);

    characterSidebar.matchContainerSize();
    characterSidebar.arrangeLinks();
});