// let form=document.querySelector("form");

// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     console.log(form.elements[0].value);
//     console.log(form.elements[1].value);
// });

// we can select each element in the form and extract their values too:-

let form=document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();
    let user=document.querySelector(".user");
    let pass=document.querySelector(".pass");

    console.log(user.value);
    console.log(pass.value);
});

