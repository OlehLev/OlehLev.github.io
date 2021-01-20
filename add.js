
// add to cart

let productsCountEl = document.getElementById("products-count");
let addToCartButtons = document.querySelectorAll(".add-to");

for(let i=0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", function () {
        productsCountEl.textContent = +productsCountEl.textContent + 1;
    })
    }

let modal = document.querySelector(".modal")
let moreDetailsBtns = document.querySelectorAll(".mode-details")
let closeBtn = document.querySelector(".btn-close")

function openModal(){
    modal.classList.add("show")
    modal.classList.remove("hide")
}

moreDetailsBtns.forEach((btn) => {
    btn.addEventListener("click", openModal)
}); 
function closeModal() {
    modal.classList.add("hide")
    modal.classList.remove("show")
}

closeBtn.addEventListener ("click", closeModal)

modal.addEventListener("click", function(e){
    if(e.target == modal) {
        closeModal()
    }
})

// check batton

let likeButtons = document.querySelectorAll(".like")

likeButtons.forEach((btn) => {
    btn.addEventListener("click", function() {
        if(this.classList.contains("liked")){
            this.classList.remove("liked")
        } else {
            this.classList.add("liked")
        }
    })
})

//
function showModalByScroll() {
    if(window.pageYOffset > document.body.scrollHeight/2) {
        openModal()
        window.removeEventListener("scroll", showModalByScroll)
    }
}

window.addEventListener("scroll", showModalByScroll);

//

let decrementBtns = document.querySelectorAll(".decrement-button");
let incrementBtns = document.querySelectorAll(".increment-button");
let quantityValue = document.querySelectorAll(".product-counts input");

function testCoolum() {
    for(let i=0; i < quantityValue.length; i++) {
        if( quantityValue[i].value <= 1) {
            decrementBtns[i].disabled = true;
        } else {
            decrementBtns[i].disabled = false;
                        
        }
    }
}
testCoolum()

for(let i = 0; i < decrementBtns.length; i++) {
    let btn = decrementBtns[i];
    btn.addEventListener("click", function(e) {
        let btnClicked = e.target;
        let input = btnClicked.parentElement.children[1];
        let imputValue = input.value;
        let nextValues = +imputValue - 1;
        input.value = nextValues;
        if(nextValues > 1) {
            decrementBtns[i].disabled = false;
        } else {
            decrementBtns[i].disabled = true;
        }
        if(nextValues <= 5) {
            incrementBtns[i].disabled = false;
        } else {
            incrementBtns[i].disabled = true;
        }
    })
}

for(let i = 0; i < incrementBtns.length; i++) {
    let btn = incrementBtns[i];
    btn.addEventListener("click", function(e) {
        let btnClicked = e.target;
        let input = btnClicked.parentElement.children[1];
        let imputValue = input.value;
        let nextValues = +imputValue + 1;
        input.value = nextValues;
        if(nextValues < 5) {
            incrementBtns[i].disabled = false;
        } else {
            incrementBtns[i].disabled = true;
        }
        if(nextValues > 1) {
            decrementBtns[i].disabled = false;
        } else {
            decrementBtns[i].disabled = true;
        }
    })
}

// incrementBtns.addEventListener("click",function(){
//     let currentCount = +quantityValue.value;
//     let nextCount = currentCount + 1;
//     quantityValue.value = nextCount;

//     if(nextCount >= 5) {
//         incrementBtns.disabled = true;
//     } else {
//         incrementBtns.disabled = false;
//     }9o
//     if(nextCount <= 1) {
//         decrementBtns.disabled = true;
//     } else {
//         decrementBtns.disabled = false;
//     }
// })

// decrementBtns.addEventListener("click",function(){
//     let currentCount = +quantityValue.value;
//     let nextCount = currentCount - 1;
//     quantityValue.value = nextCount;

//     if(nextCount <= 1) {
//         decrementBtns.disabled = true;
//     } else {
//         decrementBtns.disabled = false;
//     }
//     if(nextCount >= 5) {
//         incrementBtns.disabled = true;
//     } else {
//         incrementBtns.disabled = false;
//     }
// })


