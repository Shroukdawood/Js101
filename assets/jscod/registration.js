const regform = document.querySelector("#registration");
const regformebtn = document.querySelector("#registration [type='submit']");
regformebtn.addEventListener("click" , function(e){
    e.preventDefault();
    let userData={};
    const formData = new FormData(regform) ;
    for (const input of formData) {
        userData = {[input[0]] : input[1], ...userData};
    }
    console.log(userData);
});