let numberContainer = document.querySelector('.rating-state__number-container');
let ratenumber = document.querySelector('.thankyou-state__result--number');
let submitButton = document.querySelector('.rating-state__button');
let ratingState = document.querySelector('.rating-state');
let thankyouState = document.querySelector('.thankyou-state')

console.log(numberContainer);

numberContainer.addEventListener('click', event=>{
    let numberSelect = event.target.innerText;
    ratenumber.innerText = numberSelect;
    if(numberSelect>0 || numberSelect>=5){
        submitButton.addEventListener('click', event=>{
            ratingState.style.display='none';
            thankyouState.style.display='flex';
        });
    }    
});

