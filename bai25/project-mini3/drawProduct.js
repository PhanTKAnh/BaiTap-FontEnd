import { fetchApi } from "./helpers/fetchApi.js";
import { API_PRODUCT } from "./constants.js";
import { divProduct, params } from "./variable.js";



export const drawProduct = () => {
    let category = "";

    if(params.category != ""){
        category = `&category=${params.category}`;
    }

    const api =`${API_PRODUCT}?q=${params.q}&_sort=${params.sort}&_order=${params.order}
    &_page=${params.page}&_limit=${params.limit}${category}`;

    fetchApi(api)
        .then(data => {
            let htmls = data.map((item) => {
                return `
         <div class="col-xl-2 col-lg-3 col-sm-6 col-6">
            <div class="inner-box">
                <div class="inner-image">
                    <img src="${item.thumbnail}" alt="${item.title}">
                    <div class="inner-desc">${item.discountPercentage}%</div> 
                </div>
                <div class="inner-content">
                    <h4 class="inner-title">${item.title}</h4>
                    <p class="inner-price">${item.price}$</p>
                    <p class="inner-stock">Sp còn lại: ${item.stock}</p>
                </div>

            </div>
        </div>
        `;
            });
            divProduct.innerHTML = htmls.join("");
        });

}