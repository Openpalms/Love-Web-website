
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dots = document.querySelector('.dots');

let currentSlide = 0;
const slidesNumber = slides.length;

const createDots = function(){
    slides.forEach(function(_, index){
        dots.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${index}"></button>`);
    });
};

createDots();

const activateDot = function(slide){
    document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};
activateDot(0);

const moveToActiveSlide = function(slide){
slides.forEach(
    (s,index) => (s.style.transform = `translateX(${(index-slide)*100}%)`)
);
};
moveToActiveSlide(0);


const nextSlide = function(){
    if(currentSlide === slidesNumber - 1){
        currentSlide =0;
    } else {
        currentSlide++;
    }
    moveToActiveSlide(currentSlide);
    activateDot(currentSlide);
}

const previousSlide = function(){
    if(currentSlide === 0){
        currentSlide = slidesNumber - 1;
    } else {
        currentSlide--;
    }
    moveToActiveSlide(currentSlide);
    activateDot(currentSlide);
}

btnRight.addEventListener('click', nextSlide);

btnLeft.addEventListener('click', previousSlide);
document.addEventListener('keydown', function(e){
    if(e.key === 'ArrowRight') nextSlide();
    if(e.key === 'ArrowLeft') previousSlide();
});

dots.addEventListener('click', function(e){
    if(e.target.classList.contains('dots__dot')){
        const slide = e.target.dataset.slide;
        moveToActiveSlide(slide);
        activateDot(slide);
    }
})