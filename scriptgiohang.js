const btn = document.querySelectorAll("button")
// console.log(btn)
btn.forEach(function(button,index){
    button.addEventListener("click",function(even){{
        var btnItem = even.target
        var product = btnItem.parentElement
        var productImg = product.querySelector("img").src
        var productName = product.querySelector("H1").innerText
        var productPrice = product.querySelector("span").innerText
        // console.log(productImg, productPrice, productName)
        addcart(productImg, productPrice, productName)
    }}) 
})
function addcart(productImg, productPrice, productName) {
        var addtr = document.createElement("tr")
        var cartItem = document.querySelectorAll("tbody tr")
        // for (var i=0;i<cartItem.length;i++){
        //     var productT = document.querySelectorAll(".title")
        //     if(productT[i].innerHTML == productName){
        //         alertE = "San pham da them vao gio hang"
        //         alert("San pham da them vao gio hang")
        //         return
        //     }
        // }    
        var trcontent = ' <tr><td style="display: flex; align-items: center;"><img style="width:70px" src=" '+productImg+' " alt=""><span class="title"'+productName+'</span></td><td><span class="price">'+productPrice+'</span><sup>đ</sup></td><td><input style="width: 30px; outline: none;" type="number" value="1" min="1"></td><td style="cursor: pointer;"><span class="delete">Xóa</span></td></tr>'
        addtr.innerHTML = trcontent
        var cartTable = document.querySelector("tbody")
        // console.log(cartTable)
        cartTable.append(addtr)
        carttotal()
        deleteCart()
}
//----------tinh tien
function carttotal (){
    var cartItem = document.querySelectorAll("tbody tr")
    var totalC = 0 
    // console.log(cartItem.length)
    for (var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input").value
        // console.log(inputValue)
        var productPrice = cartItem[i].querySelector(".price").innerHTML
        // console.log(productPrice)
        totalA = inputValue*productPrice*1000
        // totalB = totalA.toLocaleString('de-DE')
        // console.log(totalA)
        totalC = totalC + totalA
        // totalD = totalC.toLocaleString('de-DE')
    }
    var cartTotalA = document.querySelector(".price-total span")
    var cartPrice = document.querySelector(".icon span")
    cartTotalA.innerHTML = totalC.toLocaleString('de-DE')
    cartPrice.innerHTML = totalC.toLocaleString('de-DE')
    inputChange()
}
//----------------- xoa san pham
function deleteCart(){
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll(".delete")
        productT[i].addEventListener("click",function(event){
            var cartDelete = event.target
            var cartItemR = cartDelete.parentElement.parentElement
            cartItemR.remove()
            carttotal ()
        })
        }
    }    
function inputChange(){
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change",function(){
        carttotal ()
        }) 
        }
}
const cartbtn = document.querySelector(".fa-x")
const cartshow = document.querySelector(".fa-cart-shopping")
cartshow.addEventListener("click",function(){
    console.log(cartshow)
    document.querySelector(".cart").style.right = "0"
})

cartbtn.addEventListener("click",function(){
    console.log(cartshow)
    document.querySelector(".cart").style.right = "-100%"
})