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


const regformInput = document.querySelectorAll("#registration input");
regformInput.forEach((input) => {
    
    input.addEventListener("change" , function(){
        // console.log(this.name , this.value);
      const errorMassage= document.querySelector(`#error-${this.name}`);
      errorMassage.innerHTML = "";

      console.log(this.name, this.value);
      const regEmail = /^[^\s@]+@[^\s@]+\.+[^\s@]+$/;

      if (this.name ==="userEmail" && !regEmail.test(this.value))
      {
        console.log("Email not valid");
        errorMassage.innerHTML ="Email not valid";
      }

     if (this.name ==="userPassword" && this.value.length < 8)
        { 
            console.log("password not valid");
        errorMassage.innerHTML ="password not valid";
        }   
    });
});
