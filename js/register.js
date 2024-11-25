const form=document.querySelector("#register")

const username=document.querySelector("#username")
const email=document.querySelector("#email")
const password=document.querySelector("#password")
const url=document.querySelector("#url")




form.addEventListener("submit",(e)=>{
    e.preventDefault()
    if(username.value !="" && email.value!="" && password.value!=""){
        if(password.value.length>=6){
            const userobj={
                username:username.value,
                email:email.value,
                password:password.value,
                imgurl:url.value?url.value :"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            }
            localStorage.setItem("userdetails",JSON.stringify(userobj))
            username.value="",
            email.value="",
            password.value=""
            window.location.href="./Login.html"
        }
        else{
            alert("please select 6 or more than characters for password ")
        }
    }
    else{
        alert("please fill the form")
    }




})





 