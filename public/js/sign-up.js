
document.querySelector("#signUpForm").addEventListener("submit", signUpHandler)

function signUpHandler (event){
    event.preventDefault()
    const nameEl = document.querySelector("#name")
    const emailEl = document.querySelector("#email")
    const passwordEl = document.querySelector("#password")
    fetch("/api/users/sign-up", {
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name: nameEl.value,
            email: emailEl.value,
            password: passwordEl.value
        })
    })
    .then(() => {
        window.location.href = "/createoutfit"
    })
}