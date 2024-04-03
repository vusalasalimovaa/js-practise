// newPassword = prompt("Parolunuzu daxil edin : ")
// confirmPassword = prompt("Parolunuzu tekrar daxil edin :")

// if(newPassword==""){
//     alert("Leave a password.")
// }else{
// if(newPassword == confirmPassword){
//     alert("Succesfully")
// }else if(newPassword != confirmPassword){
//     alert("Try again the passwords not the same!")
// }else if(newPassword == ''){
//     alert("Please leave a passowrd.")
// }
// }

//---------------------------------------------------------------

// let myMoney = Number(prompt("How much money do u have?"))
// let kilo = Number(prompt("How much kilo"))
// let result = myMoney/kilo

// if(myMoney==""){
//    alert("AY KASIBBBBB")
// }else{
//     if(result<2){
//         alert("This is an apple: " + result)
//     }else if (2<result<4){
//         alert("This is orange:" + result)
//     }else if(4<result<6){
//         alert("This is watermelon" + result)
//     }else if (result>10){
//         alert("This is strawberry: " + result)
//     }
// }

//--------------------------------------------------------------

// let season = prompt("Insert a season")

// if (season == "winter"){
//     alert("December, January, February")
// }else if (season == "spring"){
//     alert("March, April, May")
// }else if(season == "summet"){
//     alert("June, July, August")
// }else if (season == "autumn"){
//     alert("September", "October", "November")
// }

//--------------------------------------------------------------
// let count = 0

// let name = "gurban";
// for ( let i = 0; i<name.length; i++){
//     console.log(name[i])
//     console.log(count(name[i]))
// }

// console.log(count)

//----------------------------------------------------

// let apple = 3;
// let grape = 4;
// let orange = 8;
// let fruitName = prompt("Enter fruit's name : ");
// let mass = Number(prompt("Enter mass : "));

// switch (fruitName) {
//   case "apple":
//     console.log(apple * mass);
//     break;

//   case "grape":
//     console.log(grape * mass);
//     break;

//   case "orange":
//     console.log(orange * mass);
//     break;

//   default:
//     console.log("Enter valid fruit name.");
// }

// -----------------------------------------------------------


// for(i = 1; i < 100 ; i++){
//     if(i*i >= 10 && i*i <= 100){
        
//     }
// }

// let res = [12, 5, 3, -4, -5, 6, -7, "99", NaN, undefined, true, false, null];
// array = [""]

// for (i = 0; i < res.length; i++){

//     // if(res[i]>0){
//     //     console.log(res[i])
//     // }

//     // if(res[i]<0){
//     //     console.log(array.push(res[i]))
//     // }

//     if(res[i]*1==Number){
//         console.log(res[i])
//     }

// }

// let res = [12,5,3,-4,-5,6,-7,99];

// for (i = 0; i<res.length; i++){

// }
//     for(j = 0; j<res.length; j++){


//         if(res[i]>res[j])

//     }












// let arr = [23,17,6,45,67,34]

// let minElement = arr[0]
// let minelementIndex = 0


// for(let i = 0; i<arr.length; i++){
//     if(arr[i]<minElement && i > minelementIndex){
//         minElement = arr[i]
//         minelementIndex = i
        
//     }
// }
// console.log(`en kicik eded ${minElement} ve indeksi ${minelementIndex}`)

// let arr = [23,17,6,45,67,34];
// let murekkebEded = arr[0];


// let sum = 0;

// for(let i = 0; i < arr.length; i++){
//     for(let j = 2; j < arr[i]; j++){
//         if(arr[i] % j == 0){
//             sum += arr[i];
//             break
//         }
//     }
// }
// console.log(sum)

//----------------------------------

// let num = prompt("Eded daxil edin : ");
// let factorial = 1;

// for(let i = 1; i<=num; i++){
//     factorial *= i 

// } 
// console.log(factorial)

let ad = "Vusala";
let ters = ""

for(let i=ad.length-1; i>=0; i--){
    ters += ad[i]
   
}
console.log(ters)










