
// var inputWidth = document.getElementById("input_width").value;;
// alert("fdf")
// let i = 1
// while(i>0){
//     i+=10000
//     console.log(i)
// }
// let a = 1
// while(i>0){
//     a+=10000
//     console.log(i)
// }
// let b = 1
// while(i>0){
//     b+=10000
//     console.log(i)
// }
// let c = 1
// while(i>0){
//     c+=10000
//     console.log(i)
// }

// for (let a=1; a<=10; a++) {
//     console.log(a)
// }
// let a = 6
// function start(){
//     a = a+6
// }
// start()
// alert(a)

// for (let a=1; a<=10; a++) {
//     console.log(`${a} "=^-^="`)
// }

// Arrays - массив

// let fruits = ["apple","orange","peach"];

// console.log(fruits);

// comsole.log(fruits[1]);

// for (let i = 0; i < fruits.length; index++) {
//     console.log(fruits[1]);
    
// }

// let fruits = ["apple", "orange", "peach"]
// fruits.pop()
// console.log(fruits)
// // friuts.push("banana")
// // console.log(fruits)
// // fruits[0] = "granat"
// // console.log(fruits)

// // fruits.unshift("Мандарин")
// // console.log(fruits)

// var inputWidth = document.getElementById('input_width').value;

// btnCreate.addEventListener("click", createDiv)

// let inputHeight = document.querySelector(".input_height")
// let inputColor = document.querySelector(".input_color")
// let btnCreate = document.querySelector(".btn_create")
// alert("dlf")
// var button = getElementById("btn")
//     button2.onclick = createDiv();
// function createDiv(){
//     let div = document.createElement('div');
//     let inputWidth = document.querySelector('.input_width').value;
//     document.querySelector('.field').innerHTML += inputWidth ;
//     alert("hgffd")
    
// }
// var button2 = document.getElementById("btn")
//     button2.onclick = handleButtonClick2;

btn.onclick = 
document.querySelector('.btn_create').addEventListener('click', () => {
    
    let div = document.createElement('div');
    div.className = "box";
    div.id = "box"
    let inputWidth = document.querySelector('.input_width').value;
    let inputHeight = document.querySelector('.input_height').value;
    let inputColor = document.querySelector('.input_color').value;
    square.style.backgroundColor = inputColor
    square.style.width = `${inputWidth}px`
    square.style.height = `${inputHeight}px`
    square.style.position = "relative";
    // square.style.cssText=`
    // background-color: ${inputColor};
    // width: ${inputWidth}px;
    // height: ${inputHeight}px;
    // `;
    // alert("fdf")
})
let left = 0
document.querySelector('.arrow_left').addEventListener('click', () => {
    left--
    square.style.left = `${left}px`
    if (left < 0){
        square.style.left = "0px"
        left = 0
    }
})
document.querySelector('.arrow_right').addEventListener('click', () => {
    left++
    square.style.left = `${left}px`
    if (left > 500){
        square.style.left  = "500px"
        left = 500
    }

})
let down = 0
document.querySelector('.arrow_down').addEventListener('click', () => {
    down++
    square.style.top = `${down}px`
})
document.querySelector('.arrow_up').addEventListener('click', () => {
    down--
    square.style.top = `${down}px`
})