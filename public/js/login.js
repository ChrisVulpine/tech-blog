

function loginHandler (event){
    event.preventDefault()
    const nameEl = document.querySelector("#name-login")
    const passwordEl = document.querySelector("#password-login")
    fetch("/api/users/login", {
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name: nameEl.value,
            password: passwordEl.value
        })
    })
    .then((res) => {
        if (res.status=='200'){
            window.location.href = "/createoutfit"
        }else if (res.status=='400'){
            alert("invalid login")
        }
    })
}

document.querySelector("#loginForm").addEventListener("submit", loginHandler)