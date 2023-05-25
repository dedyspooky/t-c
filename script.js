const leftButton = document.getElementById('leftbtn');
const rightButton = document.getElementById('rightbtn');
const termsConditions = document.getElementById('tandc');
const privacyPolicy = document.getElementById('privacy-policy');

window.addEventListener('load', ()=>{
    privacyPolicy.style.transform = 'translateX(1000em)';
    leftButton.style.opacity = '0';
        leftButton.style.scale = '0';
})

rightButton.addEventListener('click',()=>{
    termsConditions.style.transform = 'translateX(-1000em)';
    privacyPolicy.style.transform = 'translateX(0em)';
    leftButton.style.opacity = '1';
    leftButton.style.scale = '1';
    rightButton.style.opacity = '0';
    rightButton.style.scale = '0';
    
    leftButton.addEventListener('click',()=>{
        privacyPolicy.style.transform = 'translateX(1000em)';
        termsConditions.style.transform = 'translateX(0em)';
        leftButton.style.opacity = '0';
        leftButton.style.scale = '0';
        rightButton.style.opacity = '1';
        rightButton.style.scale = '1';
    })
})