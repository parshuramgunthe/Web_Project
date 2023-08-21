const signUpBtn=document.querySelector(".signup-btn");

const signInBtn=document.querySelector(".signin-btn");

const formwrapper=document.querySelector(".form-wrapper")

signUpBtn.addEventListener('click',(e)=> {
    e.preventDefault();
    formwrapper.classList.add("change");
});
signInBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    formwrapper.classList.remove("change");
});

