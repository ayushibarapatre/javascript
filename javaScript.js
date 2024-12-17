// console.log("hello world script")
// ------------------------------------------------------------------------------------
// // variables

// let age = 25;
// console.log(age)

// const salary = 0;
// // we can't reassigned a value to const variable it will be throw a error.(assignment a const variable)
// salary = 8000;  
// console.log(salary)

// let sum = 0;
// sum = 5;
// console.log(sum)


// --------------------------------------------------------------------------------


// // Data type
// //  there are two type 1) primitive 2) non-primitive
// // 1) primitive -1.string type
//             //   2.number type
//             //   3.boolean type
//             //   4.undefined type
//             //   5.null type
//             //   6.bigint type
//             //   7.symbol type
// // 2) non-primitive -1. objects

// // primitive datatype
// const name = "vishvas"
// const language = "javascript"
// const channel = "codevolution"

// const total = 0
// const PI = 3.14

// const isPrimaryNumber = true
// const isNewUser = false

// let result
// console.log(result)

// const res = undefined

// const data = null

// // non-primitive type
// const person = {
//     firstName : 'Ayushi',
//     lastName : 'Barapatre',
//     age : 20,
// }
// console.log(person.firstName)

// // array
// const oddNumbers = [1,3,5,7,9]
// console.log(oddNumbers[0])

// // javascript is a dynamically type a language. which means  the data types are automatically converted as needed during execution
// let a = 10
// a = 'vishvas'
// a = true
// console.log(a)


// ---------------------------------------------------------------------------------------------


// // operators
// // 1. assignment Operators
// // 2. Aritmetic Operators
// // 3. comparision Operators
// // 4. logical Operators
// // 5. string Operators
// // 6. Other Operators

//  let x = 20
//  let y = 20
//  console.log(x+y)
//  console.log(++x)
//  console.log(--y)
//  console.log(x!=y)
//  console.log(x===y)


// const isValidNumber = x > 10 && y < 30
// console.log(isValidNumber)

// console.log('Ayushi' +' '+ 'Barapatre')

// const isEven = 10 % 2 === 0? true:false
// console.log(isEven)

// const isodd = 10 % 2 === 0? 'number is odd':'number is not odd'
// console.log(isodd)
// -----------------------------------------------------------------------------------

// // Type Conversion
// // implicit
// console.log(2+'3')
// console.log(true+'3')
// console.log('5'-null)
// console.log('5'-true)
// console.log('5'-false)
// console.log(2+undefined)
// console.log(true+undefined)
// console.log(null+undefined)
// console.log('ayu'-'bara')


// // explicit
// console.log(Number('5'))
// console.log(Number(false))
// console.log(Number(''))
// console.log(parseInt('5'))
// console.log(parseFloat('5.01'))
// console.log(String(null))
// console.log(String(true))
// console.log(String(500))
// console.log((500).toString())
// // null, undefined0, 0 '', nan return false when converted to boolean
// console.log(Boolean(10)) 


// ----------------------------------------------------------------------------------------------

// // Equality
// // 1) ==(allows coercion)
// // 2) ===(does not allow coercion)
// const var1 = 10
// const var2 = '10'
// console.log(var1 == var2)
// console.log(var1 === var2)

// -----------------------------------------------------------------------------------


// // conditional statement
// // if ,else ,else if ,switch

// const num = 0
// if(num<5){
//     console.log('num is samaller')
// }
// else if(num>5){
//     console.log('num is greater')
// }
// else{
//     console.log('num is equal to 5')
// }


// const color = 'green'

// switch(color){
//     case 'black':
//     console.log('color is black')
//     break;

//     case 'pink':
//     console.log('color is pink')
//     break;

//     case 'red':
//     console.log('color is red')
//     break;

//     default:
//     console.log('not a valid color')
// }


// ---------------------------------------------------------------------------------

// // looping code
// // 1) for loop
// // 2) while loop 
// // 3) do while loop
// // 4) for...of loop

// // 1)for loop
// for(let i =1; i<=5; i++){
//     console.log(i)
// }

// // 2) while loop
// let i = 5;
// while(i<=10){
//     console.log(i)
//     i++
// }

// // 3) do while loop
// let r = 11
// do{
//     console.log(r)
//     r++
// }while(r<=15)


// //  for..of loop
//  const numArray = [1,2,3,4,5]
//  for(const num of numArray){
//     console.log(num)
//  }

 //  -----------------------------------------------------------------------------------


// //  functions
// // username is a parameter
// function greet(username){
//    console.log('good morning'+ ' '+username)
// }
// // deep and shree are function argument
//  greet('deep')
//  greet('shree')


//  function add(a,b){
//     return a+b
//  }
//  const sum = add(15,15)
//  console.log(sum)

// ------------------------------------------------------------------------------


// // Arrow Function
// const arrowSum = (a,b) => {
//         return a + b
//      }
// const addFive = num => num+5
//     //  you can write like this also
//     // const arrowSum = (a,b) => a+b
  
//      const sum = arrowSum(15,15) 
//      const output =addFive(5)
//      console.log(sum)
//      console .log(output)

// -----------------------------------------------------------------------

// scope
// 1)block scope
// 2) function scope
// 3) global scope
     