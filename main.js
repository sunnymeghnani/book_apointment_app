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
        // let localStorageContent = localStorage.getItem(myObj.emailInput);
        //  if(myObj === null)
        //  {
        //     localStorage.setItem(myObj.emailInput,'[]');
        //  }
        // let myObj = JSON.parse(localStorage.getItem('myObj'));


        const myObj={
            nameInput,
            emailInput
        }
    
        localStorage.setItem(myObj.emailInput,JSON.stringify(myObj))
        console.log(myObj);
        display(myObj);
               // if(myObj.some((v)=>{return v.emailInput==emailInput}))
        // {
            
        //     deletion(myObj.emailInput)
        // }
        // else
        // {
        //     myObj.push({
        //         nameInput:nameInput,
        //         emailInput:emailInput
        //    });

        //    localStorage.setItem(myObj.emailInput,JSON.stringify(myObj))
        //     display(myObj);
        // }
       
        
    }
    
}
function display(user)
{
    // console.log(localStorage.getItem(user.emailInput));
   

    // if(localStorage.getItem(user.emailInput) !== null)
    // {
    //     deletion(user.emailInput);
    // }

        let output = document.getElementById('users');


                inputed =`
                <li>${user.nameInput} ${user.emailInput}
                <button type="button" onClick=deleteUser('${user.emailInput}')>delete</button> 
                </li>`
                
                output.innerHTML = output.innerHTML + inputed;
            
       
           

                
 } 
 function deleteUser(del)
{
    localStorage.removeItem(del);
    deletion(del)
}            
    
 function deletion(emailed)
 {
    
    let parentNode=document.getElementById('users');
    let childNodeToBeDeleted=document.getElementById(emailed);
    console.log(document.getElementById(emailed));

    if(childNodeToBeDeleted )
    {
        parentNode.removeChild(childNodeToBeDeleted);
    }
}
            
 
  


// 