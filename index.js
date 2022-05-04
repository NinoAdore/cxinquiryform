const showOption1 = document.getElementById("productInquiry").addEventListener('click', showMe1)
const showOption2 = document.getElementById("afterSales").addEventListener('click', showMe2)
const showOption3 = document.getElementById("paymentMethod").addEventListener('click', showMe3)
const categoryBox1 = document.querySelector(".category-box1");
const categoryBox2 = document.querySelector(".category-box2");
const categoryBox3 = document.querySelector(".category-box3");



function showMe1 () {
    if (categoryBox1.style.display == 'none') {
        categoryBox1.style.display = 'block'
    } else {
        categoryBox1.style.display = 'none'
    }
}

function showMe2 () {
    if (categoryBox2.style.display == 'none') {
        categoryBox2.style.display = 'block'
    } else {
        categoryBox2.style.display = 'none'
    }
}

function showMe3 () {
    if (categoryBox3.style.display == 'none') {
        categoryBox3.style.display = 'block'
    } else {
        categoryBox3.style.display = 'none'
    }
}






