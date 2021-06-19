const correctAnswers = ['A','B', 'A','B'];

const form = document.querySelector('.quiz-form ');
const result = document.querySelector('.result ');


form.addEventListener('submit', e =>{

    e.preventDefault();

    let score= 0;

    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //CHECK ANSWERS
    userAnswers.forEach((answer,index) =>{
        if (answer === correctAnswers[index])
        score +=25;
    });

    // RESULT DISPLAY & ANIMATION
    scrollTo(0,0);
    result.querySelector('span').textContent = `${score }%`;
    result.classList.remove('d-none');

    let output=0;
    const timer=  setInterval(() =>{
    result.querySelector('span').textContent = `${output }%`;
    if(output===score ) {
        clearInterval(timer);
    }else{
        output++;
    }
    }, 10);

});

/*RESULT ANIMATION 
let i=0;
const timer= setInterval(() =>{
    console.log('hello');
    i++;
    if(i===5){
    clearInterval(timer)
    }
}, 1000);*/