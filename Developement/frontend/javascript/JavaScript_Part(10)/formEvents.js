let form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();  // to prevent default action after the form is submitted.
    console.log("form submitted");
})