import Slider from './slider';

export default class MainSlider extends Slider {
    constructor (page, btns) {
        super(page, btns);
    }
    
    showSlides(newSlideIndex) {

        if (newSlideIndex > this.slides.length) {
            this.slideIndex = 1;
        }
        if (newSlideIndex < 1) {
            this.slideIndex = this.slides.length;
        }
        //appearing business card on slide 3
        try {
            this.card.style.display = 'none';
            if (newSlideIndex == 3) {
                setTimeout( () => {
                    this.card.style.display = 'block';
                    this.card.classList.add('animated', 'fadeInUp');
                }, 3000);
            } else {
                this.card.classList.remove('fadeInUp');
            }
        } catch (e) {}


        this.slides.forEach(slide => {
            slide.style.display = 'none';
            slide.classList.remove('animated', 'fadeIn');
        });
        this.slides[this.slideIndex - 1].style.display = 'block';
        this.slides[this.slideIndex - 1].classList.add('animated', 'fadeIn');
    }

    changeSlides(direction) {
        this.showSlides(this.slideIndex += direction);
    }

    render() {
        
        try {
            this.card = document.querySelector('.hanson');
        } catch(e) {}

        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.changeSlides(1);
            });

            btn.parentNode.previousElementSibling.addEventListener('click', () => {
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            });
        });
    this.showSlides(this.slideIndex);
    }
}