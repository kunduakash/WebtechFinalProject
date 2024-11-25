const loginform=document.querySelector("#login")
const email=document.querySelector("#email")
const password=document.querySelector("#password")
const otp=document.querySelector("#otp")
const otpbtn=document.querySelector("#otpbtn")
const registerDetails=JSON.parse(localStorage.getItem("userdetails"))


let OTP=""

function generateotp(){
   OTP=Math.round( Math.random()*100000).toString()
   console.log(OTP);
   alert(`your otp is ${OTP}`)
}

otpbtn.addEventListener("click",generateotp)




loginform.addEventListener("submit",(e)=>{
    e.preventDefault()
    if(registerDetails){
        if(registerDetails.email===email.value){
            if(registerDetails.password===password.value){
                if(OTP===otp.value){
                    email.value=""
                    password.value=""
                    otp.value=""
                    window.location.href="./Dashboard.html"
                }
                else{
                    otp.value=""
                    alert("please enter valid otp")
                }
            }
            else{
                alert("Invalid password")
            }
        }else{
            alert(`Your ${email.value} is not register. Kindly register it`)
        }
    }
    else{
        alert("please register")
    }
    
})