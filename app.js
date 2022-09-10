//Declare variables
let ratingSelection = '';
const ratingsContainer = document.querySelector('.ratings');
const questionModal = document.querySelector('main > .rating');
const thankModal = document.querySelector('main > .thankyou');
const submit = document.querySelector('button');
const selectionMessage = document.querySelector('.selection');

//Add eventlisteners
ratingsContainer.addEventListener('click', function(e){
    //make sure it's a rating being clicked
    if(e.target !== ratingsContainer){
        //remove selection class from all ratings
        for(let i = 0; i < ratingsContainer.children.length; i++){
            ratingsContainer.children[i].classList.remove('selected');
        }
        //add selection class to clicked rating
        e.target.classList.add('selected');
        ratingSelection = e.target.innerText;
        console.log(ratingSelection);
    }
});

submit.addEventListener('click', function(e){
    e.preventDefault();  //stop normal submit behavior

    //check that a rating has been selected
    if(ratingSelection !== ''){
        //hide rating container
        questionModal.classList.add('hidden');

        //change selection message to selected rating
        selectionMessage.innerHTML = 
          `You selected ${ratingSelection} out of 5`

        //wait for question container to be hidden
        setInterval(() => {
            //remove question container from document flow
            questionModal.classList.add('removed');
            //reveal thank you container
            thankModal.classList.remove('removed');
            thankModal.classList.remove('hidden');
        }, 300);
    }
    
});