const inputPass = document.querySelector('#input-pass'),
inputPassIcon = document.querySelector('#visibility');
inputPassIcon.visibility = false;

inputPassIcon.addEventListener('click', () =>{
    if(!inputPassIcon.visibility){
        inputPassIcon.innerText = "visibility";
        inputPass.type = "text";
        inputPassIcon.visibility = !inputPassIcon.visibility;
    } else{
        inputPassIcon.innerText = "visibility_off";
        inputPass.type = "password";
        inputPassIcon.visibility = !inputPassIcon.visibility
    }
})