import { fetchApi } from "./helpers/fetchApi.js";

// const fetchApi = (url) => {
//     const result = fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             return data;
//         });
//     return result;
// }



// get category

fetchApi("http://localhost:3000/category")
    .then(data => {
        let htmls ="";
        data.forEach(item => {
            htmls += `
             <div class="category-item">${item}</div>
            `;
            
        });
        const divCategory = document.querySelector("#category");
        divCategory.innerHTML = htmls;

    })
//end get category

// get product

// fetchApi("https://dummyjson.com/products")
//     .then(data => {
//         let htmls = "";
//         data.products.forEach(item =>{
//             htmls +=`
//         <div class="product-item">
//             <img src="${item.thumbnail}" alt="${item.title}">
//             <h3>${item.title}</h3>
//             <p>${item.price}</p>
//         </div>
//             `;
//         });

//         const divProducts = document.querySelector("#products");
//         divProducts.innerHTML = htmls;
        
//     })
    
//end  get product 
 


fetchApi ("http://localhost:3000/products")
    .then(data => {
        let htmls = "";
        data.forEach(item =>{
            htmls +=`
        <div class="product-item">
            <img src="${item.thumbnail}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${item.price}</p>
        </div>
            `;
        });

        const divProducts = document.querySelector("#products");
        divProducts.innerHTML = htmls;
        
    })