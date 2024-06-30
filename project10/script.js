const passwordBox=document.getElementById('password');
const generate=document.getElementById('Generate');
const copybutton=document.getElementById('copy');

const upperCase="QWERTYUIOPLKJHGFDSAZXCVBNM";
const lowerCase="mnbvcxzlkjhgfdsapoiuytrewq";
const num="12345678901234567890123456";
const speacialChar="!@#$%^&*()_+-[{}]/\|.<>,~'";

function createPassword() {
    let password="";
    let length=3;
    while (length--) {
        let indx=Math.floor(Math.random()*25);
        password+=upperCase[indx];
        password+=num[indx];
        password+=speacialChar[indx];
        password+=lowerCase[indx];
    }
    return password;
}

generate.addEventListener('click',(e)=>{
  passwordBox.value=createPassword();
})

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}
copybutton.addEventListener('click',(e)=>{
    copyPassword();
})