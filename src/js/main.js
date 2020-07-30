import MainSlider from './modules/slider/slider-main';
import MiniSlider from './modules/slider/slider-mini';
import PlayVideo from './modules/playVideo';
import Difference from './modules/difference';
import Forms from './modules/forms';
import ShowInfo from './modules/showInfo';
import Download from './modules/download';

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({container: '.page', btns: '.next'});
    slider.render();

    const modulePageSlider = new MainSlider({container: '.moduleapp', btns: '.next'});
    modulePageSlider.render();

    const showUpSlider = new MiniSlider({
        container: '.showup__content-slider',
        next: '.showup__next',
        prev: '.showup__prev',
        activeClass : "card-active",
        animate : true
    });
    showUpSlider.init();

    const modulesSlider = new MiniSlider({
        container: '.modules__content-slider',
        next: '.modules__info-btns .slick-prev',
        prev: '.modules__info-btns .slick-next',
        activeClass : "card-active",
        animate : true,
        autoplay: true
    });
    modulesSlider.init();

    const feedSlider = new MiniSlider({
        container: '.feed__slider',
        next: '.feed__slider .slick-next',
        prev: '.feed__slider .slick-prev',
        activeClass : "feed__item-active"
    });
    feedSlider.init();

    new PlayVideo('.showup .play', '.overlay').init();
    new PlayVideo('.module__video-item .play', '.overlay').init();

    const difference = new Difference('.officerold', '.officernew', '.officer__card-item');
    difference.init();

    const forms = new Forms('.form');
    forms.init();

    new ShowInfo('.plus__content').init();
    new Download('.download').init();
});