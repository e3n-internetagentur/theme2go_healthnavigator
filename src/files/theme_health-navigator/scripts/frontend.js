/*
    Author      : CTS Media GmbH
    Copyright   : CTS Media GmbH
*/

$(document).ready(function()
{
    setupAjaxPagination();
    fadeImages('.headerimage li', 1000, 5000);
    
    var menuButton = $( '.button-nav-mobile' ),
    menuChecker = $( 'input#menu' ),
    navLink = $( '.nav-wrapper' ).find( 'a' );
        
    navLink.click(function (evt) {
        evt.stopImmediatePropagation();
        menuChecker.prop('checked', false);            
    });
    
    
    
    $('.nav-wrapper .nav_main li.submenu > .submenu').append('<i class="submenu-toggle"></i>');

    $('.nav_main li.submenu .submenu-toggle').click(function(e){
        e.preventDefault();
        e.stopPropagation();

        var menu = $(this).closest('li');
        if (menu.hasClass('open')) {
            menu.removeClass('open');
            menu.find('li').removeClass('open');
            menu.find('ul').slideUp(300);
        }
        else {
            menu.addClass('open');
            menu.children('ul').slideDown(300);
            menu.siblings('li').children('ul').slideUp(300);
            menu.siblings('li').removeClass('open');
            menu.siblings('li').find('li').removeClass('open');
            //element.siblings('li').find('ul').slideUp(300);
        }
    });
    
});

$(window).load(function()
{
});

$(window).resize(function() {
    resetMobileNav();
});

$(window).scroll(function()
{
});

var setupAjaxPagination = function()
{
    //pagination selector
    var paginationSelector = '.pagination';
    var pageHasColorbox = (typeof $(this).colorbox === 'function')? true : false;
    //needed for older IEs
    var baseHref = $('base').attr('href');

    var runAjax = function()
    {
        $(paginationSelector).each(function()
        {
            var pagination = $(this);
            var parent = pagination.parent();
            
            pagination.find('a').unbind('click').click(function(e)
            {
                e.preventDefault();
                var aTag = $(this);
                var href = aTag.attr('href');
                href = href.replace(baseHref, "");

                $.get(baseHref + href, null, function(data, textStatus)
                {
                    if (textStatus === 'success')
                    {
                        data = $(data).find(paginationSelector).parent().find('> *');
                        
                        parent.find('> *').remove();
                        parent.append(data);
                        parent.find('a[data-lightbox]').map(function()
                        {
                            if(pageHasColorbox)
                            {
                                $(this).colorbox({
                                    // Put custom options here
                                    current: "Bild {current} von {total}",
                                    loop: false,
                                    rel: $(this).attr('data-lightbox'),
                                    maxWidth: '95%',
                                    maxHeight: '95%'
                                });
                            }
                        });

                        runAjax();
                    }
                }, 'html');
            });
        });
    };

    runAjax();
};

/**
 * Fades elements into each other (all img elements you specified)<br />
 * Does not fade if only one image is given<br />
 * Adds a class "z_index" to the more important element<br /><br />
 * <strong>elements ($ Obj|string)</strong> - the elements to be used in the fading animation<br />
 * <strong>[fadeTime (int)]</strong> - the time it takes to fade over to the next element. Defaults to 1000ms<br />
 * <strong>[waitTime (int)]</strong> - the time the current element is shown before fading restarts. Defaults to 2000ms<br />
 */
var fadeImages = function(elements, fadeTime, waitTime)
{
    var jQEls = $(elements);
    if (jQEls.length > 1)
    {

        fadeTime = (typeof fadeTime == "undefined") ? 1000 : fadeTime;
        waitTime = (typeof waitTime == "undefined") ? 2000 : waitTime;
		
        var run = function(index)
        {
            var nextElement = $(jQEls[index]);

            nextElement.addClass("z_index");

            nextElement.fadeIn(fadeTime, function()
            {
                nextElement.removeClass("z_index");

                jQEls.not(nextElement).hide();

                setTimeout(function()
                {
                    if (jQEls.length > index + 1)
                    {
                        run(index + 1);
                    }
                    else
                    {
                        //add another few seconds before restarting the animation
                        setTimeout(function()
                        {
                            run(0);
                        }, waitTime);
                    }
                }, waitTime);
            });
        };

        //start automation once
        setTimeout(function()
        {
            run(1);
        }, waitTime);
    }
};

// check screen width - elements like navigation change in mobile layout
function mobileLayout() {
    var sw = document.body.clientWidth,
        breakpoint = 1023,
        mobile = (sw > breakpoint) ? false : true;
    return mobile;
}

var resetMobileNav = function() {
    var activeMenu = $('.nav_main').find('li.open');
    activeMenu.removeClass('open');
    activeMenu.find('ul').slideUp(300);
    activeMenu.find('ul').attr( "style", "" );
};