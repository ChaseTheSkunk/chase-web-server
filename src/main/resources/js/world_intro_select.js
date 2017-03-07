/**
 * Created by Chase the Fox on 9/9/2015.
 */

$(document).ready(function() {
    var characterSidebar = new Sidebar([
        {
            type: "link",
            href: "index.html",
            text: "World Home"
        },
        {
            type: "link",
            href: "geography.html",
            text: "Geography"
        },
        {
            type: "link",
            href: "history.html",
            text: "History"
        },
        {
            type: "link",
            href: "magic.html",
            text: "Magic"
        },
        {
            type: "link",
            href: "pantheon.html",
            text: "Pantheon"
        },
        {
            type: "link",
            href: "races.html",
            text: "Races"
        }
    ]);

    characterSidebar.matchContainerSize();
    characterSidebar.arrangeLinks();
});