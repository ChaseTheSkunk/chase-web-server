/**
 * Created by Chase the Fox on 8/23/2015.
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
            href: "malichi.html",
            text: "Malichi"
        },
        {
            type: "link",
            href: "katrina.html",
            text: "Katrina"
        },
        {
            type: "link",
            href: "snow.html",
            text: "Snow"
        },
        {
            type: "link",
            href: "preston.html",
            text: "Preston"
        },
        {
            type: "link",
            href: "vick.html",
            text: "Vick"
        }
    ]);

    characterSidebar.matchContainerSize();
    characterSidebar.arrangeLinks();
});