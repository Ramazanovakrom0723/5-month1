// 21-masala 

// function fn (params){
//     let count = 0
//     for(let i = 0; i <= params; i++){
//         if(params % i  === 0){
//             count += 1
//         }
//     }
//     if(count == 2){
//         console.log("Tub");
//     }else{
//         console.log("Tub emas");
//     }
// }
// fn(19)














// 22-masala 

// let input = 8;
// let num = input / 2;
// let count = 0;
// for (let i = 0; i <= num; i++) {
//     if (input > 0) {
//         count++;
//     }
//     input = input / 2;
// }
// console.log(count); 














// 23-masala 

// function fn(params) {
//     let count = 0
//     for(let i = 0; i < params; i++){
//         if(params % i === 0){
//             count += i
//         }
//     }
//     if (params == count ) {
//         console.log("Mukammal");
//     }
//     else{
//         console.log("Mukammal emas");
//     }
// }
// fn(13)












// 24-masala 
// function fn(params) {
//     return Math.abs(params).toString().length;
// }
// console.log(fn(2876));   
// console.log(fn(7656));  
// console.log(fn(-324));  














// 25-masala 


// function fn(str) {
//     let wordss = str.trim().split(/\s+/);
//     let count = 0;
//     for (let word of wordss) {
//         if (word.includes('a')) {
//             count++;
//         }
//     }
//     return count;
// }
// let inputString = "salom dunyo, alla"; 
// console.log(fn(inputString));  















// 26-masala 

// function fn(sentence) {
//     let words = sentence.trim().split(/\s+/);
//     let length = words[0];
//     for (let word of words) {
//         if (word.length < length.length) {
//             length = word;
//         }
//     }
//     return length;
// }
// let inputSentence = "salom dunyo, alla"; 
// console.log(fn(inputSentence)); 















// 27-masala 

// function getType(input) {
//     if (typeof input === 'number') {
//         return "son";
//     } else if (typeof input === 'string') {
//         return "string";
//     } else {
//         return 0;
//     }
// }
// console.log(getType(876)); 
// console.log(getType("salom")); 
// console.log(getType(true)); 














// 28-masala 

// function fn(str) {
//     let revers = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         revers += str[i];
//     }
//     return revers;
// }

// let inputString = "hello";
// console.log(fn(inputString));















// 29-masala 

// function fn(str) {
//     let count = 0;
//     for (let char of str) {
//         if (!isNaN(parseInt(char))) {
//             count++;
//         }
//     }
//     return count;
// }

// let inputString = "qwer123tyu456";
// console.log(fn(inputString)); 
