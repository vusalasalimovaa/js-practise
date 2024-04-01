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

let myMoney = Number(prompt("How much money do u have?"))
let kilo = Number(prompt("How much kilo"))
let result = myMoney/kilo

if(result<2){
    alert("This is an apple: " + result)
}else if (2<result<4){
    alert("This is orange:" + result) 
}else if(4<result<6){
    alert("This is watermelon" + result)
}else if (result>10){
    alert("This is strawberry: " + result)
}

//--------------------------------------------------------------