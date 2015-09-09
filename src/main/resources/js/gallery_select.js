/**
 * Created by Chase the Skunk on 8/23/2015.
 */

$(document).ready(function() {
    var characterSidebar = new Sidebar([
        {
            type: "link",
            href: "chase.html",
            text: "Normal"
        },
        {
            type: "link",
            href: "transformation.html",
            text: "Transformation"
        },
        {
            type: "link",
            href: "toony.html",
            text: "Toony Antics"
        }
    ]);

    characterSidebar.matchContainerSize();
    characterSidebar.arrangeLinks();
});