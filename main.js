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
        // let localStoragename = localStorage.getItem('names');
        // let localStoragemail = localStorage.getItem('emails');

        // if(localStoragename === null || localStoragemail === null)
        // {
        //     localStorage.setItem('names' , '[]');
        //     localStorage.setItem('emails' , '[]');
        // }
        // let names = JSON.parse(localStorage.getItem('names'));
        // let emails = JSON.parse(localStorage.getItem('emails'));;
        // names.push(nameInput);
        // emails.push(emailInput);

        // localStorage.setItem('names',JSON.stringify(names));
        // localStorage.setItem('emails',JSON.stringify(emails));
        // let localStorage = localStorage.getItem('myObj');
        //  if(myObj === null)
        //  {
        //     localStorage.setItem('myObj','[]');
        //  }
        // let myObj = JSON.parse(localStorage.getItem('myObj'));
        // myObj.push({
        //      names:nameInput,
        //      emails:emailInput
        // });
        const myObj={
            nameInput,
            emailInput
        }
    
        localStorage.setItem(myObj.emailInput,JSON.stringify(myObj))
       display(myObj);
        
    }
    
}
function display(user)
{
   
    
        let output = document.querySelector('ul');


                inputed =`
                <li>${user.nameInput} ${user.emailInput}</li>`
                
                output.innerHTML = output.innerHTML + inputed;
            
       
            
               

                
            } 
    


// 