var myBody = document.querySelector('body');
var slider = document.querySelector('.slider');
slider.addEventListener('click', (event) = {
   switch (event.target.value) = {
       case '1': 
            myBody.style.backgroundColor = 'red';
       break;
       case '2': 
            myBody.style.backgroundColor = 'green';
       break;
       case '3': 
            myBody.style.backgroundColor = 'blue';
       break;
   };
};