let firstCarousel = document.getElementById('firstCard')
let secondCarousel = document.getElementById('secondCard')
let thirdCarousel = document.getElementById('thirdCard')
let fourthCarousel = document.getElementById('fourthCard')
let nextBtn = document.getElementById('nextBtn');
let prevBtn = document.getElementById('prevBtn');
let count = 0

function displayBool() {
    if (count === 0) {
        firstCarousel.style.display = "grid";
        secondCarousel.style.display = "none";
        thirdCarousel.style.display = "none";
        fourthCarousel.style.display = "none";
        prevBtn.setAttribute('disabled', '')
    } else if (count === 1) {
        firstCarousel.style.display = "none";
        secondCarousel.style.display = "grid";
        thirdCarousel.style.display = "none";
        fourthCarousel.style.display = "none";
        prevBtn.removeAttribute('disabled', '')
    } else if (count === 2) {
        firstCarousel.style.display = "none";
        secondCarousel.style.display = "none";
        thirdCarousel.style.display = "grid";
        fourthCarousel.style.display = "none";
        nextBtn.removeAttribute('disabled', '')
    
    } else if(count === 3){
        firstCarousel.style.display = "none";
        secondCarousel.style.display = "none";
        thirdCarousel.style.display = "none";
        fourthCarousel.style.display = "grid";
        nextBtn.setAttribute('disabled', '')
    
    }
}

function nextCard() {
    count++;
    displayBool()
    console.log(count)
}
function prevCard() {
    count--;
    displayBool()
    console.log(count)
}