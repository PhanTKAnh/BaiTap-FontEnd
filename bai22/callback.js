import {tong} from "./tong.js";
import { kiemTraSoChanLe } from "./kiemTraSoChanLe.js";
import { kiemTraSoDuong } from "./kiemTraSoDuong.js";


// function ham1(){
//     console.log("ham 1");
// }
// function ham2(){
//     console.log("ham 1");
// }

// // vi du 1: dang thuong 
// ham1();
// ham2(); 


// vi du 2: ham callback 
// function ham1(callback){
//     console.log("ham 1");
//     callback();
// }
// function ham2(){
//     console.log("ham 2");
// }
// ham1(ham2);

// vi du 3:




tong(10, 20,kiemTraSoDuong);
tong(10, 15,kiemTraSoChanLe);
tong(10, 45,kiemTraSoDuong,kiemTraSoChanLe);