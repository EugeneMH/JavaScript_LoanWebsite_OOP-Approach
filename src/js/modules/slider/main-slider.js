import Slider from './slider';

export default class MainSlider extends Slider {
    constructor (container, next, prev) {
        super(container, next, prev);
    }

    firstPage() {
        this.next.forEach(btn => {
            if (btn.parentNode.previousElementSibling.tagName == 'A') {
                btn.parentNode.previousElementSibling.addEventListener('click', () => {
                    console.log('yes');
                    this.slideIndex = 1;
                    this.showSlides(this.slideIndex);
                });
            }
        });
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


        try {
            this.slides.forEach(slide => {
                slide.style.display = 'none';
                slide.classList.remove('animated', 'fadeIn');
            });
            
            this.slides[this.slideIndex - 1].style.display = 'block';
            this.slides[this.slideIndex - 1].classList.add('animated', 'fadeIn');
        } catch(e) {}

        this.firstPage();

    }

    changeSlides(direction) {
        this.showSlides(this.slideIndex += direction);
    }

    render() {
        
        try {
            this.card = document.querySelector('.hanson');
        } catch(e) {}

        this.next.forEach(btn => {
            btn.addEventListener('click', () => {
                this.changeSlides(1);
            });
        });

        this.prev.forEach(btn => {
            btn.addEventListener('click', () => {
                this.changeSlides(-1);
            });
        });
    this.showSlides(this.slideIndex);
    this.firstPage();
    }
}