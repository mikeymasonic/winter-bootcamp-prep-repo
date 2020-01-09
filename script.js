// console.log('Hello World World World');

// const nameBox = document.getElementById('the-name');


// const uncoolSquare = document.getElementById('uncool-square')

// uncoolSquare.style.background = 'purple';

// // uncoolSquare.textContet = 'This is a thing';

// const myName = prompt('What is your name?');

// console.log(myName);


// go get the 
const nameBox = document.getElementById('the-name');

// go get the input element that has the user input
const myInput = document.getElementById('bobby');


//go get the badly named button for the submit
const button = document.getElementById('bobby-button');

//add and event listener to the button



const changeValue = () => {
    // when the user clicks, set the name box's text content to whatever the current value of the input is
    nameBox.textContent = myInput.value
}

button.addEventListener('click', changeValue);
