$(function () {
    $(".css-widget-item-wrap,[id^='rc-widget-'],.fpix_header,.j,#mn,.bottombar,.uppermenu,#asltable,#show_chat_btn,#buyers_ad,#chatbutton_div,.profile_text").hide();
    $('html,body').css({ 'background-color': '#683030' });
    $('#profilephoto').css({
        overflow: 'visible',
        position: 'absolute',
        left: '50%',
        'max-width': '60vw',
        'max-height': '60vw',
        top: '50%',
        transform: 'translate3d(-50%, -50%, 0)',
        border: '6px solid black',
        background: 'black',
        display: 'flex'
    }).wrap("<div style='border:6px dotted black' ></div>");
    $('#profilephoto').find('img').css(
        {
            'max-width': 'fit-content',
            'max-height': 'fit-content'
        }
    );
$('#profilephoto').append(
    `<div style='background:black;color: lightgrey;padding: 1VW;font-weight: bold;display: flex;font-size: 2VW;font-family: &quot;Gill Sans&quot;, sans-serif;flex-direction: column;justify-content: space-around;'>
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