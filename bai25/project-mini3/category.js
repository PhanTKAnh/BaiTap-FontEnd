import { fetchApi } from "./helpers/fetchApi.js";
import { API_CATEGORY } from "./constants.js";
import { divCategory, params } from "./variable.js";
import { drawProduct } from "./drawProduct.js";


fetchApi(API_CATEGORY)
.then(data => {
    let htmls = data.map((item)=>{
        return`
        <div class="col-xl-2 col-lg-3 col-sm-6 col-6">
        <div class="inner-box" data-category = "${item}">
        ${item} </div>
        </div>
       `;    
    }); 
    // console.log(htmls.join(""));
    divCategory.innerHTML = htmls.join("");

    const listCategory = document.querySelectorAll(".row .inner-box ");


    listCategory.forEach(item =>{
       item.addEventListener("click", function(){
        // params.category = item.innerText;
        // params.category = item.dataset.category;
        params.category = item.getAttribute("data-category");
        drawProduct();
       });
    })
});


