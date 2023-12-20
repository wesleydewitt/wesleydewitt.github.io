document.addEventListener('keydown', (event) => {
    detectSearchKeyPress(event);
    detectEscapeKeyPress(event);
});

$(() => {
    includeExternalHtml();
    loadPage();
});

function loadPage() {
    showHideMenuOnHover($('.menu__projects'));
    showHideMenuOnHover($('.menu__writing'));
    showHideMenuOnHover($('.menu__videos'));

    $('.nav-item').on('mouseenter', hideAllMenus);
    $('.header__nav').on('mouseleave', hideAllMenus);

    document.getElementById('header__search').addEventListener('click', () => showHideMenu($('.menu__search')));
    document.getElementById('menu__button').addEventListener('click', () => showHideMenu($('.menu__nav')));
}

function includeExternalHtml() {
    const includes = $('[data-include]');
    
    $.each(includes, function(i) {
        const file = 'components/' + $(this).data('include') + '.html';
        $(this).load(file, () => i == (includes.length - 1) ? loadPage() : null);
    });
}

function showHideMenuOnHover(menu: JQuery) {
    menu.siblings('.nav-hover-item').on('mouseenter', () => showHideMenu(menu));
}

function showHideMenu(menu: JQuery) {
    if (menu.hasClass('hide')) {
        hideAllMenus();
        $('.header').addClass('has-background');
        menu.removeClass('hide');
    } else {
        hideAllMenus();
    }
}

function hideAllMenus() {
    $('.header').removeClass('has-background');
    $('.menu').addClass('hide');
}

function detectSearchKeyPress(event: KeyboardEvent) {
    event.metaKey && event.key === 'k' ? showHideMenu($('.menu__search')) : null;
}

function detectEscapeKeyPress(event: KeyboardEvent) {
    event.key === 'Escape' ? hideAllMenus() : null;
}
