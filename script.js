const adressbtn = document.querySelector('#adress-form')
const adressclose = document.querySelector('#adress-close')
// console.log(adressclose)
adressbtn.addEventListener("click", function(){
    document.querySelector('.adress-form').style.display="flex"
})
adressclose.addEventListener("click", function(){
    document.querySelector('.adress-form').style.display="none"
})
//slide----------------
// 6
const imgNuber  = document.querySelectorAll('.slider-content-left-top img')
// console.log(imgNuber.length)
let index = 0
const rightbtn = document.querySelector('.fa-chevron-circle-right')
// console.log(rightbtn)
rightbtn.addEventListener("click",function(){
    // console.log("OK")
    index=index+1
    if(index>imgNuber.length-1){
        index=0
    }
    document.querySelector(".slider-content-left-top").style.right = index * 100+"%"
})

const leftbtn = document.querySelector('.fa-chevron-circle-left')
// console.log(leftbtn)
leftbtn.addEventListener("click",function(){
    index=index-1
    if(index<=0){
        index=imgNuber.length-1
    }
    document.querySelector(".slider-content-left-top").style.right = index * 100+"%"
})


// Phần 7 slide 1--------------------
const imgNuberLi  = document.querySelectorAll('.slider-content-left-bottom li')
// console.log(imgNuberLi)
imgNuberLi.forEach(function(image,index){
    // console.log(image,index)
    image.addEventListener("click",function(){
        removeactive()
        document.querySelector(".slider-content-left-top").style.right = index * 100+"%"
        // imgactive.classList.remove("active") - cái tuy nhiên này
        image.classList.add("active")
    })
})
// tuy nhiên thì n chỉ được 1 sang 2, còn 2 sang 3 thì n lại chưa ổn
function removeactive(){//tạo cái này ra ngoài
    let imgactive = document.querySelector('.active')
    imgactive.classList.remove("active")
}
// slider2------------- phần 8
function imgAuto(){
    index = index + 1
    if(index>imgNuber.length-1){
        index=0
    }
    removeactive()
    document.querySelector(".slider-content-left-top").style.right = index * 100+"%"
    imgNuberLi[index].classList.add("active")
    // console.log(index)
}
setInterval(imgAuto,5000)
// p10 slider product
const rightbtntwo = document.querySelector('.fa-chevron-circle-right-two')
rightbtntwo.addEventListener("click",function(){
    // console.log("OK")
    index=index+1
    if(index>imgNubertwo.length-1){
        index=0
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index * 100+"%"
})
const leftbtntwo = document.querySelector('.fa-chevron-circle-left-two')
leftbtntwo.addEventListener("click",function(){
    index=index-1
    if(index<=0){
        index=imgNubertwo.length-1
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index * 100+"%"
})
const imgNubertwo  = document.querySelectorAll('.slider-product-one-content-items img')