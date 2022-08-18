export default class Slider {
    constructor ({container = null, 
        btns = null, 
        next = null, 
        prev = null, 
        activeClass = '',
        animate
        } = {}) {
        this.container = document.querySelector(container);
        this.slides = [];
        // btns and slideIndex for MainSlider
        this.btns = document.querySelectorAll(btns);
        this.slideIndex = 1;
        // prev and next for MiniSlider
        this.prev = document.querySelectorAll(prev);
        this.next = document.querySelectorAll(next);
        this.activeClass = activeClass;
        this.animate = animate;
        try {
            this.container.children.forEach(child => {
                if (child.tagName != 'BUTTON') this.slides.push(child);
            });
        } catch (e) {}
        // console.log(this.slides);
        

    }
    // we have to rewrite the array of slides so that it doesn't include tag button - 
    // for the sake of 5th slide, where it can create a bug 
    updateSlides() {
        this.slides = [];
        try {
            this.container.children.forEach(child => {
                if (child.tagName != 'BUTTON') this.slides.push(child);
            });
            console.log(this.slides);
        } catch (e) {}
    }
}