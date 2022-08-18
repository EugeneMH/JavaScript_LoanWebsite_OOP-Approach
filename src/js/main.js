import MainSlider from './modules/slider/main-slider';
import MiniSlider from './modules/slider/mini-slider';
import VideoPlayer from './modules/videoPlayer';
import Difference from './modules/difference';
import Form from './modules/form';

window.addEventListener('DOMContentLoaded', ()=> {
    const slider = new MainSlider ({container: '.page', next: '.next', prev: '.prev'});
    slider.render(); 

    const moduleSlider = new MainSlider ({container: '.moduleapp', next: '.next', prev: '.prev'});
    moduleSlider.render();

    const firstPageSlider = new MiniSlider ({
        container: '.showup__content-slider',
        next: '.showup__next',
        prev: '.showup__prev',
        activeClass: 'card-active',
        animate: true});
    firstPageSlider.init(); 
    
    const thirdPageSlider = new MiniSlider ({
        container: '.modules__content-slider',
        next: '.modules__info-btns .slick-next',
        prev: '.modules__info-btns .slick-prev',
        activeClass: 'card-active',
        animate: true});
    thirdPageSlider.init();

    const fifthPageSlider = new MiniSlider ({
        container: '.feed__slider',
        next: '.feed__slider .slick-next',
        prev: '.feed__slider .slick-prev',
        activeClass: 'feed__item-active'
        });
    fifthPageSlider.init();

    const player = new VideoPlayer ('.showup .play', '.overlay');
    player.init();

    new Difference('.officerold', '.officernew', '.officer__card-item').init();

    new Form().init();
});