// var a = 10 ;

// var promise = new Promise((resolve,reject)=>{
//     if(a !==undefined && a !==null && a !==""){
//         resolve(a);
//     }else{
//         reject(a);
//     }
// });
// promise 
//     .then((success)=> {
//         console.log(success);
//         return success;
//     })
//     .then((success2)=> {
      
//         const b = 20;
//         console.log(success2 + b );
//         return success2 + b;
//     })
//     .then((success3)=> {
//         const c =30;
//         console.log(success3 + c);
//     })
//     .catch((error)=>{
//         console.log("Loi: ",error);
//     })
//     .finally(()=>{
//         console.log("Luon vao day");
//     })



// vi du 2 
// const promise = new Promise((resolve,reject) => {
//     setTimeout(()=>{
//         // resolve();
//         reject();
//     },3000);
// });

// console.log(promise);
// setTimeout(()=>{
//     console.log("sau 1 giay: ",promise);
// },1000);
// setTimeout(()=>{
//     console.log("sau 2 giay: ",promise);
// },2000);
// setTimeout(()=>{
//     console.log("sau 3 giay: ",promise);
// },3000);


// vi du 3: promise all

let a = 10;
let b = 20;
let c = 30;
let d = 40;
let e = 50;
let f  = 60;

let sum1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(a + b)
    },2000)
});

let sum2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(c + d)
    },4000)
});

let sum3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(e + f)
    },6000)
}); 

Promise.all([sum1,sum2,sum3])
    .then(([sum1,sum2,sum3]) => {
        let sum = sum1 + sum2 + sum3; 
        console.log(sum);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Luon vao day ")
    })
