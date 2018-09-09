const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myinput = document.getElementById('myinput');

myButton.addEventListener('click', () => {
  myHeading.style.color = myinput.value;
});
