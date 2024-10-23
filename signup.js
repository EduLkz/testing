const formUser = document.forms["signup"]

var user = {};

document.getElementById('signup').addEventListener("submit", (e) => submitUser(e))

async function submitUser(e){
    e.preventDefault();
    const newuser = {
        "username": formUser["nameuser"].value,
        "userlastname": formUser["lastnameuser"].value,
        "useremail": formUser["emailuser"].value,
        "usertel": formUser["teluser"].value,
        "userbirthdate": formUser["birthuser"].value
    }

    const request = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newuser)
    };

    apiInfo(request)
    console.log(user);
}
var res;
async function apiInfo(request) {
    await fetch('http://localhost:9000/user/signup', request).then(async r => {
        if(r.ok){
            alert("Ok")
        }
    })

    console.log(res)
}