// const string = "Hello world"
// console.log(string)

// let result = ""

// result = string.charAt(3);
// result = string.charAt(string.length-1);
// result = string.charCodeAt(2)
// result = string.codePointAt(3)
// result = string.concat("vusala")
// result = string.endsWith("world")
// result = string.fromCharCode()
// result = string.includes("H")
// result = string.indexOf("d")
// result = string.lastIndexOf("o")
// result = string.length
// result = string.localeCompare("")
// result = string.match("e")
// result = string.padEnd(20,"****")
// result = string.repeat(4)
// result = string.replace("world","vusala")
// result = string.replaceAll("o","e")
// result = string.slice(-6,-3)
// result = string.split("")
// result = string.substring(1,6)
// result = string.toLocaleLowerCase()
// result = string.toLocaleUpperCase()
// result = string.trim()



// console.log(result)
// console.log("a".localeCompare("b"))





// array = ["banana", "orange", "apple", "mango"]
// array2 = [
//     ["vusala", "shahnaz"],
//     ["gulcin", "elvira"]
// ]

// result = array.length;
// result = array.toString()
// result = array.at(3)
// result = array.join(",")
// result = array.pop()
// result = array.push()
// result = array.shift()
// result = array.unshift("strawberry")
// result = array.concat(array2)
// result = array.copyWithin(2,1)
// result = array.flat(array2)
// result = array.splice(2,3,"armud")
// result = array.toSpliced()

// console.log(result)


let students=[
    {
      id: 1,
      name: "Nurane",
      surname: "Ismayilzade",
      age: 21,
      hobbies: ["music", "walking", "watchingfilm"],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
        { id: 3, name: "cavid" },
        { id: 4, name: "alisa" },
      ],
      loginDetail: { username: "nurana21", password: "nunu123" },
      gender: "girl",
      boyfriendGirlfriend: false,
      fail: false,
      avgPoint: 88,
      salaryAZN: 144,
    },
    {
      id: 2,
      name: "Gizilgul",
      surname: "Allahverdiyeva",
      age: 20,
      hobbies: ["book", "writing code"],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
        { id: 3, name: "babaxan" },
        { id: 4, name: "gulshen" },
      ],
      loginDetail: { username: "allahverdieva1", password: "salam123" },
      gender: "girl",
      boyfriendGirlfriend: true,
      fail: false,
      avgPoint: 70,
      salaryAZN: 100,
    },
    {
      id: 3,
      name: "Xanim",
      surname: "Nuriyeva",
      age: 21,
      hobbies: ["book", "music"],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
        { id: 3, name: "hikmet" },
        { id: 4, name: "gulsen" },
      ],
      loginDetail: { username: "xanim123", password: "salamBaku" },
      gender: "girl",
      boyfriendGirlfriend: false,
      fail: false,
      avgPoint: 80,
      salaryAZN: 145,
    },
    {
      id: 4,
      name: "Minaya",
      surname: "Binnetova",
      age: 21,
      hobbies: ["book", "gaming", "movie", "music"],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
        { id: 3, name: "anar" },
      ],
      loginDetail: { username: "binnetova", password: "hello123" },
      gender: "girl",
      boyfriendGirlfriend: false,
      fail: false,
      avgPoint: 90,
      salaryAZN: 142,
    },
    {
      id: 5,
      name: "Sabina",
      surname: "Hatamli",
      age: 21,
      hobbies: ["shopping", "listen to music"],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
        { id: 3, name: "Mirvari" },
      ],
      loginDetail: { username: "sebine123", password: "salam123" },
      gender: "girl",
      boyfriendGirlfriend: true,
      fail: false,
      avgPoint: 81,
      salaryAZN: 146,
    },
  
    {
      id: 6,
      name: "Ləman",
      surname: "Şamilova",
      age: 20,
      hobbies: [
        "watching movies",
        "reading books",
        "painting",
        " walking",
        " listen to music",
      ],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
      ],
      loginDetail: { username: "lemanshamilova", password: "salamBaku" },
      gender: "girl",
      boyfriendGirlfriend: false,
      fail: false,
      avgPoint: 85.8,
      salaryAZN: 145,
    },
    {
      id: 7,
      name: "Narmin",
      surname: "Musayeva",
      age: 21,
      hobbies: ["book", "gaming", "painting", "walking"],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
        { id: 3, name: "fidan" },
        { id: 4, name: "Irada" },
      ],
      loginDetail: {
        username: "narmin0",
        password: "narmin01",
      },
      gender: "girl",
      boyfriendGirlfriend: false,
      fail: false,
      avgPoint: 80,
      salaryAZN: 196,
    },
  
    {
      id: 8,
      name: "Fatima",
      surname: "Akhundzada",
      age: 20,
      hobbies: ["drawing", "sleeping"],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
        { id: 3, name: "Valida" },
      ],
      loginDetail: { username: "aynur123", password: "salamBaku" },
      gender: "girl",
      boyfriendGirlfriend: true,
      fail: false,
      avgPoint: 76,
      salaryAZN: 100,
    },
    {
      id: 9,
      name: "Elmir",
      surname: "Huseynov",
      age: 21,
      hobbies: ["book", "ice skating", "Tennis", "Karting"],
      student: true,
      teacher: [
        { id: 1, name: "Gurban" },
        { id: 2, name: "Hajar" },
        { id: 3, name: "Morad" },
        { id: 4, name: "Fikrat" },
      ],
      loginDetail: { username: "huseynovelmirr", password: "maxverstappen" },
      gender: "man",
      boyfriendGirlfriend: false,
      fail: true,
      avgPoint: 76,
      salaryAZN: 120,
    },
    {
      id: 10,
      name: "Fidan",
      surname: "Rehimli",
      age: 21,
      hobbies: ["book", "gaming"],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
        { id: 3, name: "Turan" },
      ],
      loginDetail: { username: "fidan123", password: "fidanrahimli" },
      gender: "girl",
      boyfriendGirlfriend: true,
      fail: true,
      avgPoint: 75,
      salaryAZN: 98,
    },
    {
      id: 11,
      name: "Aynur",
      surname: "Aynurova",
      age: 20,
      hobbies: ["book", "gaming"],
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
      ],
      loginDetail: { username: "aynur123", password: "salamBaku" },
      gender: "girl",
      boyfriendGirlfriend: true,
      fail: true,
      avgPoint: 81,
      salaryAZN: 120,
    },
  
    {
      id: 12,
      name: "Elman",
      surname: "Muradov",
      age: 20,
      hobbies: [
        "book",
        "gaming",
        "sking",
        "wrestling",
        "swiming",
        "arguing about philosophy",
        "solving sudoku",
        "hiking",
        "walking",
      ],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
        { id: 3, name: "jale" },
        { id: 4, name: "akhmed" },
      ],
      loginDetail: { username: "elman17", password: "elman12345" },
      gender: "girl",
      boyfriendGirlfriend: false,
      fail: true,
      avgPoint: 76,
      salaryAZN: 100,
    },
  ];


function checkout(){

    for(let i = 0; i<students.length; i++){
       console.log(students[i])
    }
   
}
console.log(checkout())

//-----------------------------------------


function checkName(){

    for(let i = 0; i<students.length; i++){
        console.log("ad: " + students[i].name)
    }
}
console.log(checkName())

//------------------------------------------

function checkNameandSurname(){

    for(let i = 0; i<students.length; i++){
        console.log("ad: " + students[i].name + ",soyad: " + students[i].surname)
    }
}
console.log(checkNameandSurname())

//----------------------------------------

function Fail(){

    for(let i = 0; i<students.length; i++){
        if(students[i].fail == true){
            console.log("ad: " + students[i].name + ",soyad: " + students[i].surname)
        }
    }
}
console.log(Fail())

//-------------------------------------------

let hobbies = students[0].hobbies
let x;

function Hobby(){

    for(let i = 0; i<students.length; i++){
        let element = students[i]
        x=element
        if(x.hobbies.length > hobbies.length){
            hobbies = x.hobbies
           
        }
    }

    console.log("ad: " + x.name + ",hobbisi: " + x.hobbies)
}
Hobby()

//-----------------------------------------------
let average = students[0].avgPoint

function avgPoint(){

    for(let i = 0; i<students.length; i++){

        if(students[i].avgPoint > average){
            average = students[i]
            console.log("ad: " + students[i].name + ",soyad: " + students[i].surname)
        }
    }
}
avgPoint()

//-----------------------------------------------

let password = students[0].loginDetail.password
let y;

function longPassword(){

    for(let i = 0; i<students.length; i++){
        let element = students[i]
        y = element
        if(element.loginDetail.password > password){
            password = element
            
        }
    }
    console.log("ad: " + y.name + ",soyad: " + y.surname)
}
longPassword()

//------------------------------------------------------

function Boyfriend(){

    for(let i = 0; i<students.length; i++){
        if(students[i].boyfriendGirlfriend == true){
            console.log("ad: " + students[i].name + ",soyad: " + students[i].surname)
        }
    }
}
Boyfriend()

//---------------------------------------------------------
let z;

function Age(){

    for(let i = 0; i<students.length; i++){
        let element = students[i]
        z = element
        let teachelement = students[i].teacher
        v = teachelement

        if(students[i].age == 20){
            
        }
    }

    console.log("ad: " + z.name + ",muellim adlari: " + z.v.name)
}
Age()