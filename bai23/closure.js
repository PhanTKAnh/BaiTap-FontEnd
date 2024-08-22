// // const c = 10; 

// const tinhToan = () => {
//     // const c =20;
//     const tong = (a,b) => {
//         // const c = 30;
//         return a + b ;
//     };
//     const hieu = (a,b) => {
//         return a - b;
//     };
//     const tich = (a,b) => {
//         return a * b;
//     };
//     const thuong = (a,b) => {
//         return a / b;
//     };


//     return {
//         tong : tong,
//         hieu : hieu,
//         tich : tich,
//         thuong : thuong
//     };
// };

// const tt = tinhToan();
// console.log(tt);
// console.log(tt.hieu(20,30));
// console.log(tt.tich(20,30))
// console.log(tt.thuong(20,30))
// // console.log(tt(10,20));



const info = () =>{
    let fullName = "Phan Thi Kieu Anh";

    const getFullName = () => {
        return fullName;
    }

    const setFullName = (string) => {
        fullName = string;
    }
    return {
        get : getFullName,
        set : setFullName
    };
}

const infoUser = info();

console.log(infoUser);
console.log(infoUser.get());
console.log(infoUser.set("Phan Anh"));
console.log(infoUser.get()); 