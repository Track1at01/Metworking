 const contenedor = document.querySelector(".contenedor");
const btnsignin = document.getElementById ("btn-sign-in");
const btnsignup = document.getElementById ("btn-sign-up");

btnsignin.addEventListener("click", ()=>{
contenedor.classList.remove("toggle")


})

btnsignup.addEventListener("click", ()=>{
contenedor.classList.add("toggle")

    
})




const apiUrl = 'http://localhost:3000/users';

function registerUsers(){
    const newUser ={
        name: document.getElementById('reg-name').value,
         email: document.getElementById('reg.email').value,
password: document.getElementById('reg-pass').value
        };

        fetch(apiUrl, {
            methodm : 'POST',
            headers: {
                'ContentType': 'application/json'
            },
            body: JSON.stringify(newUser)
        });
        alert('Usuario agregado')
}