

//table
// const num = +prompt('enter a number for table.');
// console.log(num + "* 1 = " + num*1);
// console.log(num + "* 2 = " + num*2);
// console.log(num + "* 3 = " + num*3);
// console.log(num + "* 4 = " + num*4);
// console.log(num + "* 5 = " + num*5);
// console.log(num + "* 6 = " + num*6);
// console.log(num + "* 7 = " + num*7);
// console.log(num + "* 8 = " + num*8);
// console.log(num + "* 9 = " + num*9);
// console.log(num + "* 10 = " + num*10);


// for loop
// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }








const div = document.querySelector('div');
const num = +prompt('enter a number for table.');
for (let i = 1; i <= 10; i++) {
    div.innerHTML += `${num} * ${i} = ${num * i} <br/>`;
    // console.log(num + " * " + i + " = " + num * i);
}





//bactick
// let num = 5;
// let num2 = 10;
// // console.log(num + " + " + num2 + " " + "is equal to " + num + num2)
// console.log(num + num2)
// console.log(`${num} plus ${num2} is equal to ${num + num2}`);





