document.addEventListener('keydown', function (event) {
    detectSearchKeyPress(event);
    detectEscapeKeyPress(event);
});
$(function () {
    includeExternalHtml();
    loadPage();
});
function loadPage() {
    showHideMenuOnHover($('.menu__projects'));
    showHideMenuOnHover($('.menu__writing'));
    showHideMenuOnHover($('.menu__videos'));
    $('.nav-item').on('mouseenter', hideAllMenus);
    $('.header__nav').on('mouseleave', hideAllMenus);
    document.getElementById('header__search').addEventListener('click', function () { return showHideMenu($('.menu__search')); });
    document.getElementById('menu__button').addEventListener('click', function () { return showHideMenu($('.menu__nav')); });
}
function includeExternalHtml() {
    var includes = $('[data-include]');
    $.each(includes, function (i) {
        var file = 'components/' + $(this).data('include') + '.html';
        $(this).load(file, function () { return i == (includes.length - 1) ? loadPage() : null; });
    });
}
function showHideMenuOnHover(menu) {
    menu.siblings('.nav-hover-item').on('mouseenter', function () { return showHideMenu(menu); });
}
function showHideMenu(menu) {
    if (menu.hasClass('hide')) {
        hideAllMenus();
        $('.header').addClass('has-background');
        menu.removeClass('hide');
    }
    else {
        hideAllMenus();
    }
}
function hideAllMenus() {
    $('.header').removeClass('has-background');
    $('.menu').addClass('hide');
}
function detectSearchKeyPress(event) {
    event.metaKey && event.key === 'k' ? showHideMenu($('.menu__search')) : null;
}
function detectEscapeKeyPress(event) {
    event.key === 'Escape' ? hideAllMenus() : null;
}
