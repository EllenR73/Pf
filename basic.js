$(function () {
    $(".css-widget-item-wrap,[id^='rc-widget-'],.fpix_header,.j,#mn,.bottombar,.uppermenu,#asltable,#show_chat_btn,#buyers_ad,#chatbutton_div,.profile_text").hide();
    $('html,body').css({ 'background-color': 'salmon' });
    $('#profilephoto').css({
        overflow: 'visible',
        border: '1VW solid white',
        background: 'white',
        display: 'flex',
        margin: 0,
        padding: 0,
    }).wrap("<div style='border:1VW dotted white; padding:1VW; left:50%; top: 50%; transform:translate3d(-50%, -50%, 0); position:absolute;' ></div>");
    $('#profilephoto').find('img').css(
        {
            'max-width': '60vw',
            'max-height': '80vh',
            'width': 'auto',
            'height': 'auto'
        }
    );
});