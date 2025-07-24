$(function () {
    $(".css-widget-item-wrap,[id^='rc-widget-'],.fpix_header,.j,#mn,.bottombar,.uppermenu,#asltable,#show_chat_btn,#buyers_ad,#chatbutton_div,.profile_text").hide();
    $('html,body').css({ 'background-color': '#683030' });
    $('#profilephoto').css({
        overflow: 'visible',
        border: '1VW solid black',
        background: 'black',
        display: 'flex',
        margin: 0,
        padding: 0,
    }).wrap("<div style='border:1VW dotted black; padding:1VW; left:50%; top: 50%; transform:translate3d(-50%, -50%, 0); position:absolute;' ></div>");
    $('#profilephoto').find('img').css(
        {
            'max-width': '60vw',
            'max-height': '80vh',
            'width': 'auto',
            'height': 'auto'
        }
    );
$('#profilephoto').append(
    `<div style='background:black;color: lightgrey;padding: 1VW;font-weight: bold;display: flex;text-align:center;font-size: 2VW;font-family: "Oldenburg";, sans-serif;flex-direction: column;justify-content: space-around;'>
    <div>🐾</div>
    <div>Stallionthrust</div>
    <div>🐎</div>
    <div>NSFW 18+</div>
    <div>♥</div>
    <div>Curious</div>
    <div>🐕</div>
    <div>Naughty</div>
    <div>🐾</div>
    </div >`);
});