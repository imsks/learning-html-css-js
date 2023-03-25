// // // // // Variable
// // // // // Ways => var(Earlier) & let and Const(ES6)

// // // // // 1. Var
// // // // var x // Declaration

// // // // x = 5 // Initialization => Initialized a value
// // // // console.log(x)

// // // // var y = 10 // Declaration & Initialization
// // // // console.log(y)

// // // // // Const and Let
// // // // // Let => Change value
// // // // // Const => means Constant

// // // // let a = 20
// // // // console.log(a)

// // // // a = 25
// // // // console.log(a)

// // // // const b = 30
// // // // console.log(b)

// // // // b = 40 // TypeError
// // // // console.log(b)


// // // // Hoisting => To Raise
// // // // What can be hoisted => Variable, Function & even Class

// // // /**
// // //  * How JS Compiler see it =
// // //  * var x
// // //  *
// // //  * x = 5
// // //  *
// // //  */

// // // console.log(x)
// // // var x = 5

// // // // // var x

// // // // // console.log(x)

// // // // // x = 5

// // // // console.log(x)

// // // // const x = 5



// // // Functions
// // // 1. Normal function
// // function sum(firstNumber, secondNumber) {
// //     return firstNumber + secondNumber
// // }

// // console.log(sum(5, 100000))

// // // 2. Arrow functions
// // const divide = (firstNumber, secondNumber) => {
// //     return firstNumber / secondNumber
// // }

// // const divide = _ => 4 / 2

// // console.log(divide(4, 2))

// // Differences between Arrow and Normal functions
// // 1. this Keyword

// // Object, Function

// const user = {
//     name: "James bond",
//     age: 45,
//     // Normal function
//     getName() {
//         return this
//     },
//     // Arrow function
//     getNameByArrow: () => {
//         return this
//     }
// }

// // const movie = {
// //     name: "Avenger",
// //     getName() {
// //         return this.name
// //     }
// // }

// // console.log(user.getName())
// // console.log(movie.getName())
// // console.log(this)

// console.log(user.getName())
// console.log(user.getNameByArrow())

// // High Order Function
// function foo(func) {
//     console.log("Before Function Called")
//     func()
//     console.log("After Function Called")
// }

// function bar() {
//     console.log("Bar Called")
// }

// foo(bar)

// // Pure Functions
// let x = 20

// function pureSumFunction(a, b) {
//     return a + b
// }

// function notPureSumFunction(a, b) {
//     x = 30
//     return a + b
// }

// console.log(pureSumFunction(6, 5))
// console.log(notPureSumFunction(6, 5))

// Immediately Invoked(Called) Functions

// (function () {
//     console.log("HEY")
// })()

(function () {
    var x = 5
    // Connect DB when server start
    console.log("Connect with DB", x)
})()

console.log(x)