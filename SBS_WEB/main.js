////who we are section

const wordElement = document.getElementById("changing-word");
const words = ["Innovators", "Leaders", "Developers", "Designers", "Creators"];
let wordIndex=0;
let charIndex =0;



function typeWord(){
    if (charIndex < words [wordIndex].length){
        wordElement.innerHTML += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout( typeWord ,150);
    } else {
        setTimeout(eraseWord,1000);
    }
}


function eraseWord (){
    if (charIndex >0) {
        wordElement.innerHTML=words[wordIndex].substring(0,charIndex - 1);
        charIndex--;
        setTimeout(eraseWord,100);
    }else{
        wordIndex = (wordIndex +1 )% words.length;
        setTimeout(typeWord,200);
    }
}



typeWord();




////sponsers section///



const cards = document.querySelectorAll('.sponsers-card');
const dots = document.querySelectorAll('.dot');
let current = 0;
let interval = setInterval(nextCard, 2000); 

function showCard(index) {
    cards.forEach(card => card.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    cards[index].classList.add('active');
    dots[index].classList.add('active');
    current = index;
}

function nextCard() {
    let next = (current + 1) % cards.length;
    showCard(next);
}

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        clearInterval(interval); 
        showCard(Number(dot.getAttribute('data-index')));
        interval = setInterval(nextCard, 4000); 
    });
});


document.querySelector('.spotlight-container').addEventListener('mouseover', () => clearInterval(interval));
document.querySelector('.spotlight-container').addEventListener('mouseout', () => {
    clearInterval(interval);
    interval = setInterval(nextCard, 4000);
});




////Rating us /////



const stars = document.querySelectorAll('.star');
const ratingMsg = document.getElementById('rating-msg');
let selectedRating = 0;

stars.forEach(star => {
    star.addEventListener('click', () => {
        selectedRating = star.getAttribute('data-value');
        updateStars(selectedRating);
        ratingMsg.innerText = `Thanks for rating us ${selectedRating} star${selectedRating > 1 ? 's' : ''}!`;
    });
});

function updateStars(rating) {
    stars.forEach(star => {
        star.classList.remove('selected');
        if (star.getAttribute('data-value') <= rating) {
            star.classList.add('selected');
        }
    });
}




///footer section///

 document.querySelectorAll('.social-icons .icon').forEach(icon => {
      icon.addEventListener('mouseenter', () => {
        icon.style.transition = 'all 0.3s ease';
      });
    });

    
document.querySelector('.subscribe-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    alert(`Thank you for subscribing! We'll send updates to ${email}.`);
    this.reset();
    });







