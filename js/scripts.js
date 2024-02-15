var plugins = { stickyHeader: $(".header-nav"), }
var $input = $("#example_1_input"); var instance; $(".js-range-slider").ionRangeSlider({ skin: "round", min: 300, max: 100000, from: 20000, prefix: "€", onStart: function (data) { $("#calcResult").text(Math.round((data.from * 0.6) + data.from)); }, onChange: function (data) { $("#calcResult").text(Math.round((data.from * 0.6) + data.from)); }, }); instance = $(".js-range-slider").data("ionRangeSlider"); $input.on("input", function () {
    var val = $(this).prop("value"); if (val < 0) { val = 0; } else if (val > 500000) { val = 500000; }
    instance.update({ from: val, }); $("#calcResult").text(Math.round((val * 3)) + ' $'); console.log(val)
}); $(".mobile-hamburger").on('click', function () {
    if ($(window).width() < 992) { $('html').css({ 'overflow': 'hidden' }); }
    $(".off-canvas-menu").addClass("active");
}); $(".menu-close, .menu-item-inner li a").on('click', function () { $('html').css({ 'overflow': 'auto' }); $(".off-canvas-menu").removeClass("active"); }); $(window).on('scroll', function () {
    var currentTop = $(window).scrollTop(), elems = $('.content'), documentBottom = $(document).height() - $(window).height() - 0.5; elems.each(function () {
        var elemTop = $(this).offset().top, elemBottom = elemTop + $(this).height(); if (currentTop >= (elemTop - 1) && currentTop <= elemBottom) {
            var id = $(this).attr('id'), navElem = $('a[href="#' + id + '"]'); $('.smooth-scroll').removeClass('active')
            navElem.addClass('active');
        }
    })
}); $(function () { $('.minimized').click(function (event) { var i_path = $(this).attr('src'); $('body').append('<div id="overlay"></div><div id="magnify"><img src="' + i_path + '"><div id="close-popup"><i></i></div></div>'); $('#magnify').css({ left: ($(document).width() - $('#magnify').outerWidth()) / 2, top: ($(window).height() - $('#magnify').outerHeight()) / 2 }); $('#overlay, #magnify').fadeIn('fast'); }); $('body').on('click', '#close-popup, #overlay', function (event) { event.preventDefault(); $('#overlay, #magnify').fadeOut('fast', function () { $('#close-popup, #magnify, #overlay').remove(); }); }); }); $.fn.stickyHeader = function () {
    var $header = this, $body = $('body'), headerOffset, stickyH; function setHeigth() { $(".fix-space").remove(); $header.removeClass('animated is-sticky slideInDown'); $body.removeClass('hdr-sticky'); headerOffset = $($header).height(); stickyH = $header.height() + headerOffset; }
    setHeigth(); var prevWindow = window.innerWidth || $(window).width()
    $(window).bind('resize', function () {
        var currentWindow = window.innerWidth || $(window).width(); if (currentWindow != prevWindow) {
            setHeigth()
            prevWindow = currentWindow;
        }
    }); $(window).scroll(function () {
        var st = $(window).scrollTop(); if (st > headerOffset) {
            if (!$(".fix-space").length) { $header.after('<div class="fix-space"></div>'); $(".fix-space").css({ 'height': $header.height() + 16 + 16 + 'px' }); }
            $header.addClass('is-sticky animated slideInDown'); $body.addClass('hdr-sticky');
        } else { $(".fix-space").remove(); $header.removeClass('animated is-sticky slideInDown'); $body.removeClass('hdr-sticky'); }
    });
}
if (plugins.stickyHeader.length) { $(plugins.stickyHeader).stickyHeader(); }
$('.video-link').on('click', function () {
    $('.modal-video').fadeIn()
    $('body').css('overflow', 'hidden');
})
$('.default-btn, .cstm-btn').on('click', function () {
    $('.modal-form, .modal').fadeIn()
    $('body').css('overflow', 'hidden');
})
$(".close, .modal").click(function () { $("#modal").css("display", "none"); }); $(".modal-content").click(function (event) { event.stopPropagation(); }); $('.cstm-btn').on('click', function () { $('.popup').addClass('active') })
$('.popup-bg').on('click', function () { $('.popup').removeClass('active') })
$(".menu-close, .popup-bg").on('click', function () { $('html').css({ 'overflow': 'auto' }); $(".modal-video, .modal").fadeOut(); $('#Video').get(0).pause(); }); $('#slider-for').slick({ slidesToShow: 1, slidesToScroll: 1, fade: true, asNavFor: '#slider-nav', arrows: false }); $('#slider-nav').slick({ slidesToShow: 1, slidesToScroll: 1, asNavFor: '#slider-for', fade: true, nextArrow: '.next-arrow', prevArrow: '.prev-arrow' }); $('.review-slider').slick({ slidesToShow: 1, slidesToScroll: 1, fade: true, nextArrow: '.next-review', prevArrow: '.prev-review' }); if ($(document).find('#quiz').hasClass('ru')) { var questions = [{ question: "Какой у вас пол?", choices: ["Мужчина", 'Женщина'], correctAnswer: 1 }, { question: "Ваш возраст?", choices: ["18-25", "25-35", "35-50", "Более 50"], correctAnswer: 1 }, { question: "Как часто вы испытываете стресс из-за финансового положения?", choices: ["Редко", "Часто", "Очень часто", "Не испытываю"], correctAnswer: 1 }, { question: "Каких целей вы хотите достичь с помощью инвестиций?", choices: ["Обеспечить семью", "Отдать долги", "Погасить кредит", "Приумножить финансы"], correctAnswer: 1 }, { question: "На что потратите свой первый заработок?", choices: ["Куплю машину", "Поеду в путешествие", "Куплю дом", "Инвестирую больше"], correctAnswer: 1 }]; } else { var questions = [{ question: "Jaka jest twoja płeć?", choices: ["Mężczyzna", 'Kobieta'], correctAnswer: 1 }, { question: "Ile masz lat?", choices: ["18-25", "25-35", "35-50", "Więcej niż 50"], correctAnswer: 1 }, { question: "Jak często doświadczasz stresu finansowego?", choices: ["Rzadko", "Często", "Bardzo często", "Ja nie"], correctAnswer: 1 }, { question: "Jakie cele chcesz osiągnąć dzięki swojej inwestycji?", choices: ["Zapewnić rodzinę", "Spłacić długi", "Spłacić pożyczkę", "Zwiększyć finanse"], correctAnswer: 1 }, { question: "Na co wydasz swoje pierwsze zarobki?", choices: ["Kupię samochód", "Wyjdę na wycieczkę", "Ikupi dom", "Zainwestuję więcej"], correctAnswer: 1 }]; }
var questionCounter = 0; var selections = []; var quiz = $('#quiz'); displayNext(); quiz.on('change', 'input', function () {
    if ($(this).is(':checked')) {
        if (quiz.is(':animated')) { return false; }
        choose(); if (isNaN(selections[questionCounter]) && $(document).find('#quiz').hasClass('ru')) { alert('Пожалуйста, сделайте выбор'); } else if (isNaN(selections[questionCounter]) && !($(document).find('#quiz').hasClass('ru'))) { alert('Dokonaj swojego wyboru'); } else { questionCounter++; displayNext(); }
    }
}); $('#next').on('click', function (e) {
    e.preventDefault(); if (quiz.is(':animated')) { return false; }
    choose(); if (isNaN(selections[questionCounter]) && $(document).find('#quiz').hasClass('ru')) { alert('Пожалуйста, сделайте выбор'); } else if (isNaN(selections[questionCounter]) && !($(document).find('#quiz').hasClass('ru'))) { alert('Dokonaj swojego wyboru'); } else { questionCounter++; displayNext(); }
}); $('#prev').on('click', function (e) {
    e.preventDefault(); if (quiz.is(':animated')) { return false; }
    choose(); questionCounter--; displayNext();
}); $('#start').on('click', function (e) {
    e.preventDefault(); if (quiz.is(':animated')) { return false; }
    questionCounter = 0; selections = []; displayNext(); $('#start').hide();
}); $('.button').on('mouseenter', function () { $(this).addClass('active'); }); $('.button').on('mouseleave', function () { $(this).removeClass('active'); }); function createQuestionElement(index) {
    var qElement = $('<div>', { id: 'question' }); if ($(document).find('#quiz').hasClass('ru')) { var header = $('<h2>Вопрос ' + (index + 1) + ':</h2>'); } else { var header = $('<h2>Question ' + (index + 1) + ':</h2>'); }
    qElement.append(header); var question = $('<p>').append(questions[index].question); qElement.append(question); var radioButtons = createRadios(index); qElement.append(radioButtons); return qElement;
}
function createRadios(index) {
    var radioList = $('<ul id="ul">'); var item; var input = ''; for (var i = 0; i < questions[index].choices.length; i++) { item = $('<li>'); input = '<input type="radio" name="answer" value=' + i + ' />'; input += questions[index].choices[i]; item.append(input); radioList.append(item); }
    return radioList;
}
function choose() { selections[questionCounter] = +$('input[name="answer"]:checked').val(); }
function displayNext() {
    quiz.fadeOut(function () {
        $('#question').remove(); if (questionCounter < questions.length) {
            var nextQuestion = createQuestionElement(questionCounter); quiz.append(nextQuestion).fadeIn(); if (!(isNaN(selections[questionCounter]))) { $('input[value=' + selections[questionCounter] + ']').prop('checked', true); }
            if (questionCounter === 1) { $('#prev').css({ 'display': 'flex' }); } else if (questionCounter === 0) { $('#prev').hide(); $('#next').css({ 'display': 'flex' }); }
        } else { var scoreElem = displayScore(); quiz.append(scoreElem).fadeIn(); $('#next').hide(); $('#prev').hide(); $('#start').css({ 'display': 'flex' }); }
    });
}
$(document).ready(function () { $('.license-btn').on('click', function () { $('.accordion-panel').slideToggle(); }); }); $('[data-gallery=licenses]').click(function (e) { e.preventDefault(); var items = [], options = { draggable: false, resizable: false, movable: true, keyboard: true, title: false, modalWidth: 500, modalHeight: 500, fixedModalSize: true, initMaximized: false, gapThreshold: 0.02, ratioThreshold: 0.1, minRatio: 0.05, maxRatio: 16, headerToolbar: ['close'], footerToolbar: ['zoomIn', 'zoomOut', 'prev', 'fullscreen', 'next', 'actualSize', 'rotateRight'], icons: { minimize: "<svg viewBox=\"0 0 24 24\" class=\"svg-inline-icon\">\n               <path fill=\"currentColor\" d=\"M20,14H4V10H20\"></path>\n               </svg>", maximize: "<svg viewBox=\"0 0 24 24\" class=\"svg-inline-icon\">\n               <path fill=\"currentColor\" d=\"M4,4H20V20H4V4M6,8V18H18V8H6Z\"></path>\n               </svg>", close: "<svg viewBox=\"0 0 24 24\" class=\"svg-inline-icon\">\n            <path fill=\"currentColor\" d=\"M13.46,12L19,17.54V19H17.54L12,13.46\n            L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46\n            L13.46,12Z\"></path>\n            </svg>", zoomIn: "<svg viewBox=\"0 0 24 24\" class=\"svg-inline-icon\">\n             <path fill=\"currentColor\" d=\"M15.5,14L20.5,19L19,20.5L14,15.5V14.71\n             L13.73,14.43C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,\n             6.5 0 0,1 9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.43,\n             13.73L14.71,14H15.5M9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5C7,5 5,\n             7 5,9.5C5,12 7,14 9.5,14M12,10H10V12H9V10H7V9H9V7H10V9H12V10Z\"></path>\n            </svg>", zoomOut: "<svg viewBox=\"0 0 24 24\" class=\"svg-inline-icon\">\n              <path fill=\"currentColor\" d=\"M15.5,14H14.71L14.43,13.73C15.41,\n              12.59 16,11.11 16,9.5A6.5,6.5 0 0,0 9.5,3A6.5,6.5 0 0,0 3,9.5A6.5,\n              6.5 0 0,0 9.5,16C11.11,16 12.59,15.41 13.73,14.43L14,14.71V15.5\n              L19,20.5L20.5,19L15.5,14M9.5,14C7,14 5,12 5,9.5C5,7 7,5 9.5,5C12,\n              5 14,7 14,9.5C14,12 12,14 9.5,14M7,9H12V10H7V9Z\"></path>\n              </svg>", prev: "<svg viewBox=\"0 0 24 24\" class=\"svg-inline-icon\">\n           <path fill=\"currentColor\" d=\"M6,18V6H8V18H6M9.5,12L18,6V18L9.5,12Z\"></path>\n           </svg>", next: "<svg viewBox=\"0 0 24 24\" class=\"svg-inline-icon\">\n           <path fill=\"currentColor\" d=\"M16,18H18V6H16M6,18L14.5,12L6,6V18Z\"></path>\n           </svg>", fullscreen: "<svg viewBox=\"0 0 24 24\" class=\"svg-inline-icon\">\n                 <path fill=\"currentColor\" d=\"M8.5,12.5L11,15.5L14.5,11L19,17H5\n                 M23,18V6A2,2 0 0,0 21,4H3A2,2 0 0,0 1,6V18A2,2 0 0,0 3,20H21A2,\n                 2 0 0,0 23,18Z\"></path>\n                 </svg>", actualSize: "<svg viewBox=\"0 0 24 24\" class=\"svg-inline-icon\">\n                 <path fill=\"currentColor\" d=\"M9.5,13.09L10.91,14.5L6.41,19H10V21\n                 H3V14H5V17.59L9.5,13.09M10.91,9.5L9.5,10.91L5,6.41V10H3V3H10V5\n                 H6.41L10.91,9.5M14.5,13.09L19,17.59V14H21V21H14V19H17.59L13.09,\n                 14.5L14.5,13.09M13.09,9.5L17.59,5H14V3H21V10H19V6.41L14.5,10.91\n                 L13.09,9.5Z\"></path>\n                </svg>", rotateLeft: "<svg viewBox=\"0 0 24 24\" class=\"svg-inline-icon\">\n                 <path fill=\"currentColor\" d=\"M13,4.07V1L8.45,5.55L13,10V6.09\n                 C15.84,6.57 18,9.03 18,12C18,14.97 15.84,17.43 13,17.91V19.93\n                 C16.95,19.44 20,16.08 20,12C20,7.92 16.95,4.56 13,4.07M7.1,18.32\n                 C8.26,19.22 9.61,19.76 11,19.93V17.9C10.13,17.75 9.29,17.41 8.54,\n                 16.87L7.1,18.32M6.09,13H4.07C4.24,14.39 4.79,15.73 5.69,16.89\n                 L7.1,15.47C6.58,14.72 6.23,13.88 6.09,13M7.11,8.53L5.7,7.11C4.8,\n                 8.27 4.24,9.61 4.07,11H6.09C6.23,10.13 6.58,9.28 7.11,8.53Z\"></path>\n                 </svg>", rotateRight: "<svg viewBox=\"0 0 24 24\" class=\"svg-inline-icon\">\n                  <path fill=\"currentColor\" d=\"M16.89,15.5L18.31,16.89C19.21,\n                  15.73 19.76,14.39 19.93,13H17.91C17.77,13.87 17.43,14.72 16.89,\n                  15.5M13,17.9V19.92C14.39,19.75 15.74,19.21 16.9,18.31L15.46,\n                  16.87C14.71,17.41 13.87,17.76 13,17.9M19.93,11C19.76,9.61 19.21,\n                  8.27 18.31,7.11L16.89,8.53C17.43,9.28 17.77,10.13 17.91,11M15.55,\n                  5.55L11,1V4.07C7.06,4.56 4,7.92 4,12C4,16.08 7.05,19.44 11,19.93\n                  V17.91C8.16,17.43 6,14.97 6,12C6,9.03 8.16,6.57 11,6.09V10L15.55,\n                  5.55Z\"></path>\n                  </svg>" }, i18n: { minimize: 'minimize', maximize: 'maximize', close: 'close', zoomIn: 'zoom-in(+)', zoomOut: 'zoom-out(-)', prev: 'prev(←)', next: 'next(→)', fullscreen: 'fullscreen', actualSize: 'actual-size(Ctrl+Alt+0)', rotateLeft: 'rotate-left(Ctrl+,)', rotateRight: 'rotate-right(Ctrl+.)' }, multiInstances: true, initAnimation: true, animationDuration: 400, fixedModalPos: true, zIndex: 10000, dragHandle: false, index: $(this).index(), progressiveLoading: true, appendTo: 'body', customButtons: {}, positionFixed: true, initModalPos: null, }; $('[data-gallery=licenses]').each(function () { let src = $(this).attr('href'); items.push({ src: src, }); }); new PhotoViewer(items, options); }); function displayScore() {
    var score = $('<p>', { id: 'question' }); var numCorrect = 0; for (var i = 0; i < selections.length; i++) { if (selections[i] === questions[i].correctAnswer) { numCorrect++; } }
    if ($(document).find('#quiz').hasClass('ru')) { score.append('Спасибо, что ответили на наши вопросы!'); } else { score.append('Thanks for answering our questions'); }
    $('.modal-form, .modal').fadeIn()
    $('body').css('overflow', 'hidden'); return score;
}