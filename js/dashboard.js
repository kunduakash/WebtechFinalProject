//! check login condition
if(window.location.pathname==="/pages/Dashboard.html"){

    const val=localStorage.getItem("userdetails")
    if(val==null){
       window.location.href="./login.html"  
    }
    
}
//! getting current user and updating on ui
const currentuser=JSON.parse(localStorage.getItem("userdetails"))

const img=document.querySelector(".img")
const user=document.querySelector(".user")
img.style.backgroundImage=`url(${currentuser?.imgurl})`
user.innerText=currentuser?.username
const layer=document.querySelector(".layer")
//! logout function
function logout(){
    localStorage.clear()
    window.location.href="../pages/Login.html"
}

//!  displaying date and time logic
const datebox=document.querySelector("#date")
const timebox=document.querySelector("#time")
const date= new Date()
    datebox.innerText=date.toLocaleDateString()
    timebox.innerText=date.toLocaleTimeString()

setInterval(()=>{
    const date= new Date()
    datebox.innerText=date.toLocaleDateString()
    timebox.innerText=date.toLocaleTimeString()
},1000)

//! i need to design home page , by fetching data from backend server and i need to display on UI
const main_container=document.querySelector("#main_container")
const fdata= async()=>{
    const response=await fetch("https://fakestoreapi.com/products")
    const result= await response.json()
    
   result.map((ele)=>{
   const carddiv=document.createElement("div")
   carddiv.setAttribute("class","card")
    carddiv.addEventListener("click",()=>{
     popupbox.style.display="block"
     showonecard(ele)
    layer.style.display="block"
    })
    carddiv.innerHTML=`<img src="${ele.image}" alt="${ele.title}">
            <h3>${ele.title}</h3>
            <p>&#8377; :- <span>${Math.ceil(ele.price*83)}</span> /-</p>
            <p>${ele.rating.rate} ⭐</p>`
   main_container.append(carddiv)
   
        
   })
}

fdata()

const popupbox=document.querySelector("#popupbox")
const popupclosebtn=document.querySelector("#popupclosebtn")
popupclosebtn.addEventListener("click",()=>{
    popupbox.style.display="none"
     layer.style.display="none"
})


function showonecard(card){
    const productimg=document.querySelector("#productimg")
    const title=document.querySelector("#title")
    const category=document.querySelector(".category")
    const price=document.querySelector(".price")
    const stars=document.querySelector(".stars")
    const review=document.querySelector(".review")
    const description=document.querySelector(".description")
    productimg.setAttribute("src",card.image)
    title.innerText=card.title
    category.innerText=`Category : ${card.category}`
    price.innerText=`Price :- ${Math.ceil(card.price*83)} /-`
    stars.innerText=`${card.rating.rate} ⭐`
    review.innerText=`${card.rating.count} reviews`
    description.innerText=card.description
}

layer.addEventListener("click",()=>{
    popupbox.style.display="none"
     layer.style.display="none"
})




// const arr=[{username:"pinky"},{username:"tinku"},{username:"sundari"}]
// arr.map((ele,index)=>{
//     console.log(index);
    
// })































// function r() {
//     return Math.floor(Math.random() * 256);
//   }
  
//   const color = "rgb(" + r() + "," + r() + "," + r() + ")";
//   console.log(color);
  