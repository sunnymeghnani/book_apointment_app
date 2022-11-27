// const btn = document.querySelector('.btn');

// btn.addEventListener('click',(e) => {
//     document.querySelector('#my-form').style.background = 'red';
// })
// btn.addEventListener('mouseover',(e) => {
//     document.querySelector('#my-form').style.background = 'blue';
// })
// btn.addEventListener('mouseout',(e) => {
//     document.querySelector('#my-form').style.background = 'green';
// })
let myForm = document.getElementById('my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e)
{
    var nameInput=document.getElementById('name').value;
    var emailInput=document.getElementById('email').value;
    e.preventDefault();

    if(nameInput === '' || emailInput === '')
    {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all the details';
        setTimeout(() => msg.remove(),3000);

    }
    else
    {
        let myObj = {
             names:nameInput,
             emails:emailInput
        };
        let myObj_searialized = JSON.stringify(myObj);
        console.log(myObj_searialized);
        localStorage.setItem('obj',myObj_searialized)
        
        
    }
}