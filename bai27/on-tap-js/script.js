// const sum = (a =0 , b =0) =>{
//     return a + b;
// }

// const sum = (a, b) =>{
//     a = a || 0;
//     b = b || 0;
//     return a + b;
// }


// console.log(sum(10));



// Spread syntax
// const array1 = [1,2,3];
// const array2 = [4,5,6];
// const array3 = [
//     {
//         id:1,
//         name:"Le Van A"
//     },
//     {
//         id:2,
//         name : "Le Van B"
//     }
// ];
// const array4 = [...array1,...array2,...array3];

// console.log(...array1);
// console.log(...array2);
// console.log(...array3);
// console.log(array4);

// let infoUser = {
//     fullName: "phan thi kieu anh",
//     email:"phananh@gmail.com"
// };

// let infoUpdate ={
//     phone:"0123456789",
//     age:18
// }

// let infoFinal = {
//     ...infoUser,...infoUpdate

// }

// console.log(infoFinal);

// rest paremeters
// const sum = (...numbers)=>{
//     console.log(numbers);
//     const result = numbers.reduce((total,item) => {
//         return total +=item;
//     },0)
//     return result; 
// };

// console.log(sum(10,20,30,20,90,20));

// Destrusturing
// let infoUser = {
//     fullName: "phan thi kieu anh",
//     email:"phananh@gmail.com"
// };


// console.log(infoUser.fullName);
// console.log(infoUser.fullName);
// console.log(infoUser.fullName);
// console.log(infoUser.fullName);
// console.log(infoUser.fullName);

// const { fullName, email } = infoUser;
// console.log(fullName);
// console.log(fullName);
// console.log(fullName);
// console.log(fullName);
// console.log(fullName);
// console.log(email);