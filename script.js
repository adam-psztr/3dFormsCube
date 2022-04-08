const signUpBtn = document.querySelector('.signup-btn');
const signIpBtn = document.querySelector('.signin-btn');
const formsWrapper = document.querySelector('.forms-wrapper');

signUpBtn.addEventListener('click', (e)=>{
	e.preventDefault();
	formsWrapper.classList.add("change");
});
signIpBtn.addEventListener('click', (e)=>{
	e.preventDefault();
	formsWrapper.classList.remove("change");
});

