import Slider from './slider';

export default class MiniSlider extends Slider {
    constructor (container, next, prev, activeClass, animate) {
        super(container, next, prev, activeClass, animate); 
    }

    decorizeSlides() {
        try {
            this.slides.forEach(slide => {
                slide.classList.remove(this.activeClass);
                if (this.animate) {
                    slide.querySelector('.card__title').style.opacity = 0.4;
                    slide.querySelector('.card__controls-arrow').style.opacity = 0;
                }
            });
    
            this.slides[0].classList.add(this.activeClass);
            if (this.animate) {
                this.slides[0].querySelector('.card__title').style.opacity = 1;
                this.slides[0].querySelector('.card__controls-arrow').style.opacity = 1;
            }
        } catch (e) {}

    }

    bindTriggers() {
        try {
            this.next.forEach(btn => {
                btn.addEventListener('click', () => {
                    this.container.appendChild(this.slides[0]);
                    this.updateSlides();
                    this.decorizeSlides();
                });
            });
    
            this.prev.forEach(btn => {
                btn.addEventListener('click', () => {
                    let active = this.slides[0];
                    this.container.insertBefore(this.slides[this.slides.length - 1], active);
                    this.updateSlides();
                    this.decorizeSlides();
                });
            });
        } catch (e) {}
    }

    init() {

        try {
            this.container.style.cssText = `
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;
        align-items: flex-start;
        `;
        } catch (e) {}

        this.bindTriggers();
        this.decorizeSlides();
    }
}