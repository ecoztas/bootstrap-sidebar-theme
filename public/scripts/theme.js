$(document).ready(function() {
    $('#launcher').on('click', function() {
        sidebarLauncher();
    });
});

// Sidebar launcher
// -----------------------------------------------------------------------------
var sidebarLauncher = function() {
    $('#l_page__sidebar').toggleClass('launch');
};
