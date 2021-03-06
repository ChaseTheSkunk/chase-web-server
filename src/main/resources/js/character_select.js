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
        },
        {
            type: "link",
            href: "lily.html",
            text: "Lily"
        },
        {
            type: "link",
            href: "cameron.html",
            text: "Cameron"
        },
        {
            type: "link",
            href: "jay.html",
            text: "Jay"
        },
        {
            type: "link",
            href: "wally.html",
            text: "Wally"
        },
        {
            type: "link",
            href: "tiny.html",
            text: "Tiny"
        },
        {
            type: "link",
            href: "champ.html",
            text: "Champ"
        },
        {
            type: "link",
            href: "pyrrhe.html",
            text: "Pyrrhe"
        },
        {
            type: "link",
            href: "foxblade.html",
            text: "Foxblade"
        },
        {
            type: "link",
            href: "azalea.html",
            text: "Azalea"
        },
        {
            type: "link",
            href: "blackfox.html",
            text: "Blackfox"
        }
    ]);

    characterSidebar.matchContainerSize();
    characterSidebar.arrangeLinks();
});